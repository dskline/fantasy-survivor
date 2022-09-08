import { User } from "@supabase/auth-helpers-nextjs";

import {
  LeagueFormats,
  Maybe,
  RealitySeries,
  Seasons,
} from "@/features/core/db/graphql/schema";

export type LeagueProps = {
  id: string;
  title?: string | null;
  format: Pick<LeagueFormats, "title" | "description">;
  show: Pick<RealitySeries, "title">;
  season: Pick<Seasons, "title" | "logo_src">;
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
