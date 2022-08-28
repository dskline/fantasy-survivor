import React from "react";

import classnames from "classnames";

import {
  LeagueFormats,
  Profiles,
  RealitySeries,
  Seasons,
} from "@/features/core/db/graphql/schema";
import { LeagueHeader } from "@/features/core/leagues/LeaguePage/LeagueHeader";
import { LeaguePills } from "@/features/core/leagues/LeaguePage/LeaguePills";
import { RulesTab } from "@/features/core/leagues/LeaguePage/RulesTab";

export type LeaguePageProps = {
  title?: string | null;
  format: Pick<LeagueFormats, "title" | "description">;
  show: Pick<RealitySeries, "title">;
  season: Pick<Seasons, "title" | "logo_src">;
  participants: Array<Pick<Profiles, "id" | "display_name" | "thumbnail_src">>;
  orderedRules: Array<{
    id: string;
    description: string;
    points: number;
  }>;
};
export const LeaguePage = (props: LeaguePageProps) => (
  <div className="flex flex-col gap-2 p-4">
    <LeagueHeader {...props} />
    <div className="md:hidden">
      <LeaguePills {...props} />
    </div>
    <RulesTab {...props} />
  </div>
);
