import { User } from "@supabase/auth-helpers-nextjs";

import {
  LeagueFormats,
  Maybe,
  RealitySeries,
  Seasons,
} from "@/features/core/db/graphql/schema";

export type Contestant = {
  id: string;
  slug: string;
  nickname: string;
  firstname: string;
  surname: string;
  fullName: string;
  portrait_src: string;
  team_color: string;
};

export type LeagueProps = {
  id: string;
  title?: string | null;
  format: Pick<LeagueFormats, "title" | "description">;
  show: Pick<RealitySeries, "title">;
  season: Pick<Seasons, "title" | "logo_src" | "order">;
  contestants: Array<Contestant>;
  orderedRules: Array<{
    id: string;
    description: string;
    points: number;
  }>;
};
export type LeagueUser = {
  data: Maybe<User>;
  isLoading: boolean;
  participantId?: string;
  roster?: Roster;
};
export type Roster = Array<{
  id?: string;
  rank: string;
  data: Contestant;
}>;
