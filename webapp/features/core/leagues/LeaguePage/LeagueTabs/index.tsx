import classnames from "classnames";

import { LeagueTabButton } from "@/features/core/leagues/LeaguePage/LeagueTabs/LeagueTabButton";
import {
  LeaguePageTab,
  leagueTabs,
} from "@/features/core/leagues/LeaguePage/LeagueTabs/leagueTabs";
import { useLeagueTabs } from "@/features/core/leagues/LeaguePage/LeagueTabs/useLeagueTabs";
import { LeagueUser } from "@/features/core/leagues/LeaguePage/types";

type Props = {
  user: LeagueUser;
};
export const LeagueTabs = ({ user }: Props) => {
  const { tabs, currentTab, setTab } = useLeagueTabs(user);
  return <Tabs tabs={tabs} currentTab={currentTab} setTab={setTab} />;
};

type TabProps = {
  tabs: LeaguePageTab[];
  currentTab: LeaguePageTab;
  setTab: (tab: LeaguePageTab) => void;
};
const Tabs = ({ tabs, currentTab, setTab }: TabProps) => (
  <div
    className={classnames(
      "fixed left-0 bottom-0 z-20 w-screen pt-2",
      "bg-gradient-to-t from-slate-600/60 to-slate-100/10",
      "md:static md:w-full md:bg-none md:px-4"
    )}
  >
    <div
      className={classnames(
        "flex items-center justify-center gap-4 border-t-2 border-slate-400 bg-white py-1",
        "text-xs font-semibold",
        "md:justify-start md:border-t-0 md:bg-inherit md:px-2 md:py-0 md:text-sm"
      )}
    >
      {tabs.map((key) => {
        const tab = leagueTabs[key];
        return (
          <LeagueTabButton
            key={key}
            isActive={currentTab === key}
            icon={tab.icon}
            title={tab.title}
            onClick={() => {
              setTab(key);
              document
                .querySelector("body")
                ?.scrollIntoView({ behavior: "auto", block: "start" });
            }}
          />
        );
      })}
    </div>
  </div>
);
