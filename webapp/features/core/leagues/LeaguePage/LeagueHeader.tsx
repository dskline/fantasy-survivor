import React from "react";

import classnames from "classnames";
import { BsCheckCircleFill } from "react-icons/bs";

import Image from "@/features/components/Image";
import { LeaguePills } from "@/features/core/leagues/LeaguePage/LeaguePills";
import { LeagueProps } from "@/features/core/leagues/LeaguePage/types";

type Props = {
  league: LeagueProps;
  user: {
    isLoading: boolean;
    isInLeague: boolean;
  };
  onJoinLeague: () => void;
};
export const LeagueHeader = ({ league, user, onJoinLeague }: Props) => {
  const { title, season, show } = league;
  return (
    <div className="px-4 md:px-0">
      <div className="flex items-center gap-4">
        <div className="w-1/4 max-w-[120px]">
          <Image
            className="rounded-lg"
            src={season.logo_src}
            options="ar_1:1,c_fill,g_auto"
            width={120}
            height={120}
            alt=""
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
            <button
              type="button"
              className={classnames(
                "flex items-center gap-2 rounded shadow-lg",
                "py-1 px-2 text-xs font-semibold",
                user.isInLeague
                  ? "bg-green-600 pr-3 text-green-100"
                  : "bg-gradient-to-br from-blue-600 to-blue-700 text-blue-100",
                user.isLoading && "bg-emerald-600/50"
              )}
              onClick={() => onJoinLeague()}
              disabled={user.isInLeague || user.isLoading}
            >
              {!user.isInLeague ? (
                "Join League"
              ) : (
                <>
                  <BsCheckCircleFill className="h-3 w-3" />
                  Joined
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 md:hidden">
        <LeaguePills {...league} />
      </div>
    </div>
  );
};
