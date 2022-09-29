import {
  LeagueFormats,
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
export type Episode = {
  id: string;
  startTime: string;
  watched?: boolean;
  events: Array<{
    contestant: Contestant;
    rule: string;
    comment?: string | null;
  }>;
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
  orderedEpisodes: Array<Episode>;
};
export type LeagueUser = {
  id?: string;
  isLoading: boolean;
  participantId?: string;
  userRoster?: UserRoster;
  features: Array<string>;
  watched: Array<string>;
  // scoreByEpisode: Array<number>;
};
export type RosterItem = {
  id?: string;
  rank: string;
  data: Contestant;
};
export type Roster = Array<RosterItem>;
export type UserRoster = {
  teamName: string;
  roster: Roster;
};
