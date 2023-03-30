import React from "react";

import classnames from "classnames";
import { BsCheckCircleFill } from "react-icons/bs";

import { Image } from "@/features/components/Image";
import { LeaguePills } from "@/features/core/leagues/LeaguePage/LeaguePills";
import {
  LeagueProps,
  LeagueUser,
} from "@/features/core/leagues/LeaguePage/types";

type Props = {
  league: LeagueProps;
  user: LeagueUser;
  onJoinLeague: () => void;
};
export const LeagueHeader = ({ league, user, onJoinLeague }: Props) => {
  const { title, season, show, orderedEpisodes } = league;
  return (
    <div className="px-4 md:px-0">
      <div className="flex items-center gap-4">
        <div className="w-1/4 max-w-[120px] rounded-lg border border-slate-800 bg-slate-800">
          <Image
            className="rounded-lg"
            src={season.logo_src}
            options={["ar_1:1", "c_fill", "g_auto"]}
            width={120}
            height={120}
            alt=""
            priority
          />
        </div>
        <div className="-mt-2">
          <h1 className="text-lg font-semibold">
            {title || `${show.title} League`}
          </h1>
          <div className="hidden md:block">
            <LeaguePills {...league} />
          </div>
          <div className="mt-2">
            {!user.isLoading &&
              (!user.participantId || orderedEpisodes.length === 0) && (
                <button
                  type="button"
                  className={classnames(
                    "flex items-center gap-2 rounded shadow-lg",
                    "px-2 py-1 text-xs font-semibold",
                    user.participantId
                      ? "bg-green-600 pr-3 text-green-100"
                      : "bg-gradient-to-br from-blue-600 to-blue-700 text-blue-100",
                    user.isLoading && "bg-emerald-600/50"
                  )}
                  onClick={() => onJoinLeague()}
                  disabled={!!user.participantId || user.isLoading}
                >
                  {user.participantId && (
                    <>
                      <BsCheckCircleFill className="h-3 w-3" />
                      Joined
                    </>
                  )}
                  {!user.participantId &&
                    orderedEpisodes.length > 2 &&
                    "Sign In"}
                  {!user.participantId && orderedEpisodes.length <= 2 && "Join"}
                </button>
              )}
          </div>
        </div>
      </div>
      <div className="mt-4 md:hidden">
        <LeaguePills {...league} />
      </div>
    </div>
  );
};
