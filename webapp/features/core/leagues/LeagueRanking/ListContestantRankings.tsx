import classnames from "classnames";
import { motion } from "framer-motion";

import { Thumbnail } from "@/features/components/Image/Thumbnail";
import { LeagueProps } from "@/features/core/leagues/LeaguePage/types";
import { LeagueRankingSection } from "@/features/core/leagues/LeagueRanking/LeagueRankingSection";
import { RankingFilter } from "@/features/core/leagues/LeagueRanking/types";

type Props = {
  league: LeagueProps;
  filter: RankingFilter;
};
export const ListContestantRankings = ({ league, filter }: Props) => {
  if (!league.pointsByContestantId) {
    return <></>;
  }
  const pointsByContestantId: Record<string, number> = {};
  for (const contestantId of Object.keys(league.pointsByContestantId)) {
    pointsByContestantId[contestantId] = 0;
    for (let i = filter.episodeMinIndex; i <= filter.episodeMaxIndex; i++) {
      pointsByContestantId[contestantId] +=
        league.pointsByContestantId[contestantId][i];
    }
  }
  const sortedContestants = Object.keys(pointsByContestantId).sort((a, b) =>
    Number.isFinite(pointsByContestantId?.[a]) &&
    Number.isFinite(pointsByContestantId?.[b])
      ? pointsByContestantId[b] - pointsByContestantId[a]
      : 0
  );
  return (
    <LeagueRankingSection header="Total contestant points">
      {(isExpanded) => (
        <div
          className={classnames(
            "grid",
            isExpanded && "md:grid-cols-3 md:gap-x-4 md:gap-y-0.5"
          )}
        >
          {sortedContestants.map((contestantId, index) => {
            const contestant = league.contestants?.find(
              (c) => c.id === contestantId
            );
            if (!contestant) {
              return <></>;
            }
            return (
              <motion.div
                layoutId={contestantId}
                key={contestantId}
                className={classnames(
                  "rounded-lg",
                  isExpanded || index < 5
                    ? "my-0.5 border-2 py-1 px-2"
                    : "max-h-0 border-0 p-0",
                  contestant.team_color === "blue" &&
                    "border-blue-600/50 bg-blue-50",
                  contestant.team_color === "red" &&
                    "border-red-600/40 bg-red-50",
                  contestant.team_color === "yellow" &&
                    "border-yellow-600/40 bg-yellow-50/60"
                )}
              >
                {(isExpanded || index < 5) && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="overflow-hidden rounded-lg">
                        <Thumbnail src={contestant.portrait_src} size={28} />
                      </div>
                      <div className="text-sm font-semibold">
                        {contestant.nickname}
                      </div>
                    </div>
                    <div className="text-sm font-semibold">
                      {pointsByContestantId[contestantId]}
                      <span className="ml-1 text-xs">pts</span>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      )}
    </LeagueRankingSection>
  );
};
