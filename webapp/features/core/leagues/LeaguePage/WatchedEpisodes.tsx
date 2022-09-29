import classnames from "classnames";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { VscEyeClosed } from "react-icons/vsc";

import { useUpdateWatched } from "@/features/core/leagues/crud/updateWatched";
import {
  Episode,
  LeagueProps,
  LeagueUser,
} from "@/features/core/leagues/LeaguePage/types";

type Props = {
  episodes: Array<Episode>;
  onChange: (episodeId: string, watched: boolean) => void;
  spoilerMessage?: string;
  continueText: string;
  onComplete: () => void;
};
export const WatchedEpisodes = ({
  episodes,
  onChange,
  spoilerMessage,
  continueText,
  onComplete,
}: Props) => (
  <div className="flex flex-col gap-6 md:p-4">
    {spoilerMessage && (
      <div
        className={classnames(
          "rounded-lg border-2 border-red-700 bg-red-100",
          "flex items-center gap-4 py-3 px-4 text-red-700"
        )}
      >
        <div>
          <BsFillExclamationCircleFill className="h-5 w-5" />
        </div>
        <div>
          <div className="font-semibold">Spoilers ahead!</div>
          <div className="text-xs">{spoilerMessage}</div>
        </div>
      </div>
    )}
    <div className="flex flex-col gap-2">
      {episodes.map((episode, index) => (
        <button
          key={episode.id}
          type="button"
          className={classnames(
            "flex w-full items-center gap-2 rounded-lg py-2 px-4",
            episode.watched && "bg-green-200 text-green-900",
            !episode.watched && "bg-slate-200 text-slate-500"
          )}
          onClick={() => onChange(episode.id, !episode.watched)}
        >
          {episode.watched ? (
            <FaCheckCircle />
          ) : (
            <VscEyeClosed className="text-slate-800" />
          )}
          <span>
            Episode {index + 1} ({new Date(episode.startTime).toLocaleString()})
          </span>
        </button>
      ))}
    </div>
    <button
      type="button"
      onClick={onComplete}
      className="rounded-lg bg-blue-600 px-4 py-2 text-blue-50"
    >
      {continueText}
    </button>
  </div>
);
