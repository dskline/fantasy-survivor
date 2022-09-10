import classnames from "classnames";

import { FadeIn } from "@/features/components/FadeIn/FadeIn";
import { BioCard } from "@/features/core/leagues/LeaguePage/LeagueRoster/BioCard";
import { ContestantChip } from "@/features/core/leagues/LeaguePage/LeagueRoster/ContestantChip";
import { Contestant } from "@/features/core/leagues/LeaguePage/types";

type Props = {
  contestants: Contestant[];
  selectedContestant: Contestant;
  setSelectedContestant: (contestant: Contestant) => void;
};
export const ContestantPicker = ({
  contestants,
  selectedContestant,
  setSelectedContestant,
}: Props) => (
  <div className="flex flex-col-reverse justify-between gap-x-4 gap-y-6 md:flex-row">
    <div className="grid">
      {contestants.map((contestant, i) => (
        <FadeIn
          key={contestant.portrait_src}
          show={contestant.id === selectedContestant.id}
          className="col-span-full row-span-full row-start-1"
          preload
        >
          <BioCard contestant={contestant} preload={i === 0} />
        </FadeIn>
      ))}
    </div>
    <div
      className={classnames(
        "grid auto-rows-min justify-evenly gap-3 md:w-3/5",
        "grid-cols-[repeat(auto-fill,12vw)] md:grid-cols-[repeat(auto-fill,15%)]"
      )}
    >
      {contestants.map((contestant) => (
        <div key={contestant.id} className="mx-auto">
          <button
            className="cursor-grab"
            onClick={() => setSelectedContestant(contestant)}
          >
            <ContestantChip
              contestant={contestant}
              className={
                contestant.id !== selectedContestant.id
                  ? "opacity-50 grayscale"
                  : ""
              }
            />
          </button>
        </div>
      ))}
    </div>
  </div>
);
