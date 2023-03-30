import { useState } from "react";

import classnames from "classnames";
import { motion } from "framer-motion";
import { GoChevronDown } from "react-icons/go";
import { ImShrink } from "react-icons/im";

type Props = {
  header: string;
  children: (isExpanded: boolean) => React.ReactNode;
  initExpanded?: boolean;
};
export const LeagueRankingSection = ({
  header,
  children,
  initExpanded = false,
}: Props) => {
  const [isExpanded, setIsExpanded] = useState(initExpanded);
  const Container = isExpanded ? motion.div : motion.button;
  const Header = isExpanded ? motion.button : motion.div;

  return (
    <motion.div
      layoutId={header}
      className={classnames("col-span-full", isExpanded ? "" : "md:col-span-1")}
    >
      <Container
        className="w-full rounded-lg border-2 border-blue-900/20 bg-blue-50"
        onClick={isExpanded ? undefined : () => setIsExpanded(!isExpanded)}
        aria-label={isExpanded ? undefined : `Expand ${header}`}
      >
        <Header
          layoutId={`${header}-header`}
          className="flex w-full items-center justify-between gap-2 px-4 py-2 text-slate-500"
          onClick={isExpanded ? () => setIsExpanded(!isExpanded) : undefined}
          aria-label={isExpanded ? `Collapse ${header}` : undefined}
        >
          <span className="text-xs font-semibold uppercase">{header}</span>
          <span className="opacity-50">
            {isExpanded && <ImShrink className="h-3 w-3" />}
          </span>
        </Header>
        <div className="px-2">{children(isExpanded)}</div>
        <div className="mt-2 flex justify-center">
          {!isExpanded && <GoChevronDown className="text-slate-400" />}
        </div>
      </Container>
    </motion.div>
  );
};
