import { User } from "@supabase/auth-helpers-nextjs";

import {
  Contestants,
  ContestantSeasons,
  LeagueFormats,
  Maybe,
  RealitySeries,
  Seasons,
} from "@/features/core/db/graphql/schema";

export type Contestant = Partial<Contestants> & { fullName: string } & Pick<
    ContestantSeasons,
    "id" | "portrait_src" | "team_color"
  >;
export type LeagueProps = {
  id: string;
  title?: string | null;
  format: Pick<LeagueFormats, "title" | "description">;
  show: Pick<RealitySeries, "title">;
  season: Pick<Seasons, "title" | "logo_src">;
  contestants: Array<Contestant>;
  orderedRules: Array<{
    id: string;
    description: string;
    points: number;
  }>;
};
export type LeagueUser = {
  data: Maybe<User>;
  isInLeague: boolean;
  isLoading: boolean;
};
export type Roster = Array<{
  id: string;
  rank: string;
  contestantId: string;
}>;
