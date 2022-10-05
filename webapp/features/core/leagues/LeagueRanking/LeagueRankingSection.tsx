import { useState } from "react";

import classnames from "classnames";
import { motion } from "framer-motion";
import { GoChevronDown } from "react-icons/go";

type Props = {
  header: string;
  children: (isExpanded: boolean) => React.ReactNode;
};
export const LeagueRankingSection = ({ header, children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Container = isExpanded ? motion.div : motion.button;
  const Header = isExpanded ? motion.button : motion.div;

  return (
    <motion.div
      layoutId={header}
      className={classnames(
        "w-full rounded-lg border-2 border-blue-900/20 bg-blue-50",
        isExpanded ? "" : "md:w-1/2"
      )}
    >
      <Container
        className="w-full"
        onClick={isExpanded ? undefined : () => setIsExpanded(!isExpanded)}
        aria-label={isExpanded ? undefined : `Expand ${header}`}
      >
        <Header
          layoutId={`${header}-header`}
          className="flex w-full items-center gap-2 py-2 px-4 text-slate-500"
          onClick={!isExpanded ? undefined : () => setIsExpanded(!isExpanded)}
          aria-label={!isExpanded ? undefined : `Collapse ${header}`}
        >
          <span className="text-xs font-semibold uppercase">{header}</span>
        </Header>
        <div className="px-2">{children(isExpanded)}</div>
        <div className="mt-2 flex justify-center">
          {!isExpanded && <GoChevronDown className="text-slate-400" />}
        </div>
      </Container>
    </motion.div>
  );
};
