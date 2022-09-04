export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  Cursor: any;
  Date: any;
  Datetime: any;
  JSON: any;
  Time: any;
  UUID: any;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars["BigInt"]>;
  gt?: InputMaybe<Scalars["BigInt"]>;
  gte?: InputMaybe<Scalars["BigInt"]>;
  in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lt?: InputMaybe<Scalars["BigInt"]>;
  lte?: InputMaybe<Scalars["BigInt"]>;
  neq?: InputMaybe<Scalars["BigInt"]>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars["Boolean"]>;
  gt?: InputMaybe<Scalars["Boolean"]>;
  gte?: InputMaybe<Scalars["Boolean"]>;
  in?: InputMaybe<Array<Scalars["Boolean"]>>;
  lt?: InputMaybe<Scalars["Boolean"]>;
  lte?: InputMaybe<Scalars["Boolean"]>;
  neq?: InputMaybe<Scalars["Boolean"]>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars["Date"]>;
  gt?: InputMaybe<Scalars["Date"]>;
  gte?: InputMaybe<Scalars["Date"]>;
  in?: InputMaybe<Array<Scalars["Date"]>>;
  lt?: InputMaybe<Scalars["Date"]>;
  lte?: InputMaybe<Scalars["Date"]>;
  neq?: InputMaybe<Scalars["Date"]>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars["Datetime"]>;
  gt?: InputMaybe<Scalars["Datetime"]>;
  gte?: InputMaybe<Scalars["Datetime"]>;
  in?: InputMaybe<Array<Scalars["Datetime"]>>;
  lt?: InputMaybe<Scalars["Datetime"]>;
  lte?: InputMaybe<Scalars["Datetime"]>;
  neq?: InputMaybe<Scalars["Datetime"]>;
};

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars["Float"]>;
  gt?: InputMaybe<Scalars["Float"]>;
  gte?: InputMaybe<Scalars["Float"]>;
  in?: InputMaybe<Array<Scalars["Float"]>>;
  lt?: InputMaybe<Scalars["Float"]>;
  lte?: InputMaybe<Scalars["Float"]>;
  neq?: InputMaybe<Scalars["Float"]>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<Scalars["Int"]>>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  neq?: InputMaybe<Scalars["Int"]>;
};

/** Boolean expression comparing fields on type "JSON" */
export type JsonFilter = {
  eq?: InputMaybe<Scalars["JSON"]>;
  neq?: InputMaybe<Scalars["JSON"]>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: "Mutation";
  /** Deletes zero or more records from the collection */
  deleteFromcontestant_seasonsCollection: ContestantSeasonsDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFromcontestantsCollection: ContestantsDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFromepisodesCollection: EpisodesDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFromeventsCollection: EventsDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFromleague_formatsCollection: LeagueFormatsDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFromleague_participantsCollection: LeagueParticipantsDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFromleaguesCollection: LeaguesDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFromlp_contestantsCollection: LpContestantsDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFromprofilesCollection: ProfilesDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFromreality_seriesCollection: RealitySeriesDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFromrolesCollection: RolesDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFromrs_league_formatsCollection: RsLeagueFormatsDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFromrulesCollection: RulesDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFromrulesetsCollection: RulesetsDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFromseasonsCollection: SeasonsDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFromuser_rolesCollection: UserRolesDeleteResponse;
  /** Adds one or more `contestant_seasonsInsertResponse` records to the collection */
  insertIntocontestant_seasonsCollection?: Maybe<ContestantSeasonsInsertResponse>;
  /** Adds one or more `contestantsInsertResponse` records to the collection */
  insertIntocontestantsCollection?: Maybe<ContestantsInsertResponse>;
  /** Adds one or more `episodesInsertResponse` records to the collection */
  insertIntoepisodesCollection?: Maybe<EpisodesInsertResponse>;
  /** Adds one or more `eventsInsertResponse` records to the collection */
  insertIntoeventsCollection?: Maybe<EventsInsertResponse>;
  /** Adds one or more `league_formatsInsertResponse` records to the collection */
  insertIntoleague_formatsCollection?: Maybe<LeagueFormatsInsertResponse>;
  /** Adds one or more `league_participantsInsertResponse` records to the collection */
  insertIntoleague_participantsCollection?: Maybe<LeagueParticipantsInsertResponse>;
  /** Adds one or more `leaguesInsertResponse` records to the collection */
  insertIntoleaguesCollection?: Maybe<LeaguesInsertResponse>;
  /** Adds one or more `lp_contestantsInsertResponse` records to the collection */
  insertIntolp_contestantsCollection?: Maybe<LpContestantsInsertResponse>;
  /** Adds one or more `profilesInsertResponse` records to the collection */
  insertIntoprofilesCollection?: Maybe<ProfilesInsertResponse>;
  /** Adds one or more `reality_seriesInsertResponse` records to the collection */
  insertIntoreality_seriesCollection?: Maybe<RealitySeriesInsertResponse>;
  /** Adds one or more `rolesInsertResponse` records to the collection */
  insertIntorolesCollection?: Maybe<RolesInsertResponse>;
  /** Adds one or more `rs_league_formatsInsertResponse` records to the collection */
  insertIntors_league_formatsCollection?: Maybe<RsLeagueFormatsInsertResponse>;
  /** Adds one or more `rulesInsertResponse` records to the collection */
  insertIntorulesCollection?: Maybe<RulesInsertResponse>;
  /** Adds one or more `rulesetsInsertResponse` records to the collection */
  insertIntorulesetsCollection?: Maybe<RulesetsInsertResponse>;
  /** Adds one or more `seasonsInsertResponse` records to the collection */
  insertIntoseasonsCollection?: Maybe<SeasonsInsertResponse>;
  /** Adds one or more `user_rolesInsertResponse` records to the collection */
  insertIntouser_rolesCollection?: Maybe<UserRolesInsertResponse>;
  /** Updates zero or more records in the collection */
  updatecontestant_seasonsCollection: ContestantSeasonsUpdateResponse;
  /** Updates zero or more records in the collection */
  updatecontestantsCollection: ContestantsUpdateResponse;
  /** Updates zero or more records in the collection */
  updateepisodesCollection: EpisodesUpdateResponse;
  /** Updates zero or more records in the collection */
  updateeventsCollection: EventsUpdateResponse;
  /** Updates zero or more records in the collection */
  updateleague_formatsCollection: LeagueFormatsUpdateResponse;
  /** Updates zero or more records in the collection */
  updateleague_participantsCollection: LeagueParticipantsUpdateResponse;
  /** Updates zero or more records in the collection */
  updateleaguesCollection: LeaguesUpdateResponse;
  /** Updates zero or more records in the collection */
  updatelp_contestantsCollection: LpContestantsUpdateResponse;
  /** Updates zero or more records in the collection */
  updateprofilesCollection: ProfilesUpdateResponse;
  /** Updates zero or more records in the collection */
  updatereality_seriesCollection: RealitySeriesUpdateResponse;
  /** Updates zero or more records in the collection */
  updaterolesCollection: RolesUpdateResponse;
  /** Updates zero or more records in the collection */
  updaters_league_formatsCollection: RsLeagueFormatsUpdateResponse;
  /** Updates zero or more records in the collection */
  updaterulesCollection: RulesUpdateResponse;
  /** Updates zero or more records in the collection */
  updaterulesetsCollection: RulesetsUpdateResponse;
  /** Updates zero or more records in the collection */
  updateseasonsCollection: SeasonsUpdateResponse;
  /** Updates zero or more records in the collection */
  updateuser_rolesCollection: UserRolesUpdateResponse;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromcontestantSeasonsCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<ContestantSeasonsFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromcontestantsCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<ContestantsFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromepisodesCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<EpisodesFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromeventsCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<EventsFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromleagueFormatsCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<LeagueFormatsFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromleagueParticipantsCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<LeagueParticipantsFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromleaguesCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<LeaguesFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromlpContestantsCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<LpContestantsFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromprofilesCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<ProfilesFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromrealitySeriesCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<RealitySeriesFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromrolesCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<RolesFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromrsLeagueFormatsCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<RsLeagueFormatsFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromrulesCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<RulesFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromrulesetsCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<RulesetsFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromseasonsCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<SeasonsFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromuserRolesCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<UserRolesFilter>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntocontestantSeasonsCollectionArgs = {
  objects: Array<ContestantSeasonsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntocontestantsCollectionArgs = {
  objects: Array<ContestantsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoepisodesCollectionArgs = {
  objects: Array<EpisodesInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoeventsCollectionArgs = {
  objects: Array<EventsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoleagueFormatsCollectionArgs = {
  objects: Array<LeagueFormatsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoleagueParticipantsCollectionArgs = {
  objects: Array<LeagueParticipantsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoleaguesCollectionArgs = {
  objects: Array<LeaguesInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntolpContestantsCollectionArgs = {
  objects: Array<LpContestantsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoprofilesCollectionArgs = {
  objects: Array<ProfilesInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntorealitySeriesCollectionArgs = {
  objects: Array<RealitySeriesInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntorolesCollectionArgs = {
  objects: Array<RolesInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntorsLeagueFormatsCollectionArgs = {
  objects: Array<RsLeagueFormatsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntorulesCollectionArgs = {
  objects: Array<RulesInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntorulesetsCollectionArgs = {
  objects: Array<RulesetsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoseasonsCollectionArgs = {
  objects: Array<SeasonsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntouserRolesCollectionArgs = {
  objects: Array<UserRolesInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationUpdatecontestantSeasonsCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<ContestantSeasonsFilter>;
  set: ContestantSeasonsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdatecontestantsCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<ContestantsFilter>;
  set: ContestantsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateepisodesCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<EpisodesFilter>;
  set: EpisodesUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateeventsCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<EventsFilter>;
  set: EventsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateleagueFormatsCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<LeagueFormatsFilter>;
  set: LeagueFormatsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateleagueParticipantsCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<LeagueParticipantsFilter>;
  set: LeagueParticipantsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateleaguesCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<LeaguesFilter>;
  set: LeaguesUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdatelpContestantsCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<LpContestantsFilter>;
  set: LpContestantsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateprofilesCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<ProfilesFilter>;
  set: ProfilesUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdaterealitySeriesCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<RealitySeriesFilter>;
  set: RealitySeriesUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdaterolesCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<RolesFilter>;
  set: RolesUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdatersLeagueFormatsCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<RsLeagueFormatsFilter>;
  set: RsLeagueFormatsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdaterulesCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<RulesFilter>;
  set: RulesUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdaterulesetsCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<RulesetsFilter>;
  set: RulesetsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateseasonsCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<SeasonsFilter>;
  set: SeasonsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateuserRolesCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<UserRolesFilter>;
  set: UserRolesUpdateInput;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = "AscNullsFirst",
  /** Ascending order, nulls last */
  AscNullsLast = "AscNullsLast",
  /** Descending order, nulls first */
  DescNullsFirst = "DescNullsFirst",
  /** Descending order, nulls last */
  DescNullsLast = "DescNullsLast",
}

export type PageInfo = {
  __typename?: "PageInfo";
  endCursor?: Maybe<Scalars["String"]>;
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  startCursor?: Maybe<Scalars["String"]>;
};

/** The root type for querying data */
export type Query = {
  __typename?: "Query";
  /** A pagable collection of type `contestant_seasons` */
  contestant_seasonsCollection?: Maybe<ContestantSeasonsConnection>;
  /** A pagable collection of type `contestants` */
  contestantsCollection?: Maybe<ContestantsConnection>;
  /** A pagable collection of type `episodes` */
  episodesCollection?: Maybe<EpisodesConnection>;
  /** A pagable collection of type `events` */
  eventsCollection?: Maybe<EventsConnection>;
  /** A pagable collection of type `league_formats` */
  league_formatsCollection?: Maybe<LeagueFormatsConnection>;
  /** A pagable collection of type `league_participants` */
  league_participantsCollection?: Maybe<LeagueParticipantsConnection>;
  /** A pagable collection of type `leagues` */
  leaguesCollection?: Maybe<LeaguesConnection>;
  /** A pagable collection of type `lp_contestants` */
  lp_contestantsCollection?: Maybe<LpContestantsConnection>;
  /** A pagable collection of type `profiles` */
  profilesCollection?: Maybe<ProfilesConnection>;
  /** A pagable collection of type `reality_series` */
  reality_seriesCollection?: Maybe<RealitySeriesConnection>;
  /** A pagable collection of type `roles` */
  rolesCollection?: Maybe<RolesConnection>;
  /** A pagable collection of type `rs_league_formats` */
  rs_league_formatsCollection?: Maybe<RsLeagueFormatsConnection>;
  /** A pagable collection of type `rules` */
  rulesCollection?: Maybe<RulesConnection>;
  /** A pagable collection of type `rulesets` */
  rulesetsCollection?: Maybe<RulesetsConnection>;
  /** A pagable collection of type `seasons` */
  seasonsCollection?: Maybe<SeasonsConnection>;
  /** A pagable collection of type `user_roles` */
  user_rolesCollection?: Maybe<UserRolesConnection>;
};

/** The root type for querying data */
export type QueryContestantSeasonsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<ContestantSeasonsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<ContestantSeasonsOrderBy>>;
};

/** The root type for querying data */
export type QueryContestantsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<ContestantsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<ContestantsOrderBy>>;
};

/** The root type for querying data */
export type QueryEpisodesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<EpisodesFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<EpisodesOrderBy>>;
};

/** The root type for querying data */
export type QueryEventsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<EventsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};

/** The root type for querying data */
export type QueryLeagueFormatsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<LeagueFormatsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<LeagueFormatsOrderBy>>;
};

/** The root type for querying data */
export type QueryLeagueParticipantsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<LeagueParticipantsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<LeagueParticipantsOrderBy>>;
};

/** The root type for querying data */
export type QueryLeaguesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<LeaguesFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<LeaguesOrderBy>>;
};

/** The root type for querying data */
export type QueryLpContestantsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<LpContestantsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<LpContestantsOrderBy>>;
};

/** The root type for querying data */
export type QueryProfilesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<ProfilesFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<ProfilesOrderBy>>;
};

/** The root type for querying data */
export type QueryRealitySeriesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<RealitySeriesFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<RealitySeriesOrderBy>>;
};

/** The root type for querying data */
export type QueryRolesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<RolesFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<RolesOrderBy>>;
};

/** The root type for querying data */
export type QueryRsLeagueFormatsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<RsLeagueFormatsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<RsLeagueFormatsOrderBy>>;
};

/** The root type for querying data */
export type QueryRulesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<RulesFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<RulesOrderBy>>;
};

/** The root type for querying data */
export type QueryRulesetsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<RulesetsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<RulesetsOrderBy>>;
};

/** The root type for querying data */
export type QuerySeasonsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<SeasonsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<SeasonsOrderBy>>;
};

/** The root type for querying data */
export type QueryUserRolesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<UserRolesFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<UserRolesOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  neq?: InputMaybe<Scalars["String"]>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars["Time"]>;
  gt?: InputMaybe<Scalars["Time"]>;
  gte?: InputMaybe<Scalars["Time"]>;
  in?: InputMaybe<Array<Scalars["Time"]>>;
  lt?: InputMaybe<Scalars["Time"]>;
  lte?: InputMaybe<Scalars["Time"]>;
  neq?: InputMaybe<Scalars["Time"]>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars["UUID"]>;
  in?: InputMaybe<Array<Scalars["UUID"]>>;
  neq?: InputMaybe<Scalars["UUID"]>;
};

export type ContestantSeasons = {
  __typename?: "contestant_seasons";
  avatar_src: Scalars["String"];
  contestant: Scalars["String"];
  contestants?: Maybe<Contestants>;
  eventsCollection?: Maybe<EventsConnection>;
  id: Scalars["UUID"];
  lp_contestantsCollection?: Maybe<LpContestantsConnection>;
  portrait_src: Scalars["String"];
  season: Scalars["UUID"];
  seasons?: Maybe<Seasons>;
  team_color?: Maybe<Scalars["String"]>;
};

export type ContestantSeasonsEventsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<EventsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};

export type ContestantSeasonsLpContestantsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<LpContestantsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<LpContestantsOrderBy>>;
};

export type ContestantSeasonsConnection = {
  __typename?: "contestant_seasonsConnection";
  edges: Array<ContestantSeasonsEdge>;
  pageInfo: PageInfo;
};

export type ContestantSeasonsDeleteResponse = {
  __typename?: "contestant_seasonsDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<ContestantSeasons>;
};

export type ContestantSeasonsEdge = {
  __typename?: "contestant_seasonsEdge";
  cursor: Scalars["String"];
  node: ContestantSeasons;
};

export type ContestantSeasonsFilter = {
  avatar_src?: InputMaybe<StringFilter>;
  contestant?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  portrait_src?: InputMaybe<StringFilter>;
  season?: InputMaybe<UuidFilter>;
  team_color?: InputMaybe<StringFilter>;
};

export type ContestantSeasonsInsertInput = {
  avatar_src?: InputMaybe<Scalars["String"]>;
  contestant?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  portrait_src?: InputMaybe<Scalars["String"]>;
  season?: InputMaybe<Scalars["UUID"]>;
  team_color?: InputMaybe<Scalars["String"]>;
};

export type ContestantSeasonsInsertResponse = {
  __typename?: "contestant_seasonsInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<ContestantSeasons>;
};

export type ContestantSeasonsOrderBy = {
  avatar_src?: InputMaybe<OrderByDirection>;
  contestant?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  portrait_src?: InputMaybe<OrderByDirection>;
  season?: InputMaybe<OrderByDirection>;
  team_color?: InputMaybe<OrderByDirection>;
};

export type ContestantSeasonsUpdateInput = {
  avatar_src?: InputMaybe<Scalars["String"]>;
  contestant?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  portrait_src?: InputMaybe<Scalars["String"]>;
  season?: InputMaybe<Scalars["UUID"]>;
  team_color?: InputMaybe<Scalars["String"]>;
};

export type ContestantSeasonsUpdateResponse = {
  __typename?: "contestant_seasonsUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<ContestantSeasons>;
};

export type Contestants = {
  __typename?: "contestants";
  contestant_seasonsCollection?: Maybe<ContestantSeasonsConnection>;
  firstname: Scalars["String"];
  nickname?: Maybe<Scalars["String"]>;
  slug: Scalars["String"];
  surname?: Maybe<Scalars["String"]>;
};

export type ContestantsContestantSeasonsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<ContestantSeasonsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<ContestantSeasonsOrderBy>>;
};

export type ContestantsConnection = {
  __typename?: "contestantsConnection";
  edges: Array<ContestantsEdge>;
  pageInfo: PageInfo;
};

export type ContestantsDeleteResponse = {
  __typename?: "contestantsDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Contestants>;
};

export type ContestantsEdge = {
  __typename?: "contestantsEdge";
  cursor: Scalars["String"];
  node: Contestants;
};

export type ContestantsFilter = {
  firstname?: InputMaybe<StringFilter>;
  nickname?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
  surname?: InputMaybe<StringFilter>;
};

export type ContestantsInsertInput = {
  firstname?: InputMaybe<Scalars["String"]>;
  nickname?: InputMaybe<Scalars["String"]>;
  slug?: InputMaybe<Scalars["String"]>;
  surname?: InputMaybe<Scalars["String"]>;
};

export type ContestantsInsertResponse = {
  __typename?: "contestantsInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Contestants>;
};

export type ContestantsOrderBy = {
  firstname?: InputMaybe<OrderByDirection>;
  nickname?: InputMaybe<OrderByDirection>;
  slug?: InputMaybe<OrderByDirection>;
  surname?: InputMaybe<OrderByDirection>;
};

export type ContestantsUpdateInput = {
  firstname?: InputMaybe<Scalars["String"]>;
  nickname?: InputMaybe<Scalars["String"]>;
  slug?: InputMaybe<Scalars["String"]>;
  surname?: InputMaybe<Scalars["String"]>;
};

export type ContestantsUpdateResponse = {
  __typename?: "contestantsUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Contestants>;
};

export type Episodes = {
  __typename?: "episodes";
  eventsCollection?: Maybe<EventsConnection>;
  id: Scalars["UUID"];
  season: Scalars["UUID"];
  seasons?: Maybe<Seasons>;
  start_time: Scalars["Datetime"];
};

export type EpisodesEventsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<EventsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};

export type EpisodesConnection = {
  __typename?: "episodesConnection";
  edges: Array<EpisodesEdge>;
  pageInfo: PageInfo;
};

export type EpisodesDeleteResponse = {
  __typename?: "episodesDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Episodes>;
};

export type EpisodesEdge = {
  __typename?: "episodesEdge";
  cursor: Scalars["String"];
  node: Episodes;
};

export type EpisodesFilter = {
  id?: InputMaybe<UuidFilter>;
  season?: InputMaybe<UuidFilter>;
  start_time?: InputMaybe<DatetimeFilter>;
};

export type EpisodesInsertInput = {
  id?: InputMaybe<Scalars["UUID"]>;
  season?: InputMaybe<Scalars["UUID"]>;
  start_time?: InputMaybe<Scalars["Datetime"]>;
};

export type EpisodesInsertResponse = {
  __typename?: "episodesInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Episodes>;
};

export type EpisodesOrderBy = {
  id?: InputMaybe<OrderByDirection>;
  season?: InputMaybe<OrderByDirection>;
  start_time?: InputMaybe<OrderByDirection>;
};

export type EpisodesUpdateInput = {
  id?: InputMaybe<Scalars["UUID"]>;
  season?: InputMaybe<Scalars["UUID"]>;
  start_time?: InputMaybe<Scalars["Datetime"]>;
};

export type EpisodesUpdateResponse = {
  __typename?: "episodesUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Episodes>;
};

export type Events = {
  __typename?: "events";
  comment?: Maybe<Scalars["String"]>;
  contestant_season: Scalars["UUID"];
  contestant_seasons?: Maybe<ContestantSeasons>;
  episode: Scalars["UUID"];
  episodes?: Maybe<Episodes>;
  id: Scalars["UUID"];
  rule: Scalars["String"];
  rules?: Maybe<Rules>;
};

export type EventsConnection = {
  __typename?: "eventsConnection";
  edges: Array<EventsEdge>;
  pageInfo: PageInfo;
};

export type EventsDeleteResponse = {
  __typename?: "eventsDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Events>;
};

export type EventsEdge = {
  __typename?: "eventsEdge";
  cursor: Scalars["String"];
  node: Events;
};

export type EventsFilter = {
  comment?: InputMaybe<StringFilter>;
  contestant_season?: InputMaybe<UuidFilter>;
  episode?: InputMaybe<UuidFilter>;
  id?: InputMaybe<UuidFilter>;
  rule?: InputMaybe<StringFilter>;
};

export type EventsInsertInput = {
  comment?: InputMaybe<Scalars["String"]>;
  contestant_season?: InputMaybe<Scalars["UUID"]>;
  episode?: InputMaybe<Scalars["UUID"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  rule?: InputMaybe<Scalars["String"]>;
};

export type EventsInsertResponse = {
  __typename?: "eventsInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Events>;
};

export type EventsOrderBy = {
  comment?: InputMaybe<OrderByDirection>;
  contestant_season?: InputMaybe<OrderByDirection>;
  episode?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  rule?: InputMaybe<OrderByDirection>;
};

export type EventsUpdateInput = {
  comment?: InputMaybe<Scalars["String"]>;
  contestant_season?: InputMaybe<Scalars["UUID"]>;
  episode?: InputMaybe<Scalars["UUID"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  rule?: InputMaybe<Scalars["String"]>;
};

export type EventsUpdateResponse = {
  __typename?: "eventsUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Events>;
};

export type LeagueFormats = {
  __typename?: "league_formats";
  description: Scalars["String"];
  id: Scalars["String"];
  leaguesCollection?: Maybe<LeaguesConnection>;
  rs_league_formatsCollection?: Maybe<RsLeagueFormatsConnection>;
  title: Scalars["String"];
};

export type LeagueFormatsLeaguesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<LeaguesFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<LeaguesOrderBy>>;
};

export type LeagueFormatsRsLeagueFormatsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<RsLeagueFormatsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<RsLeagueFormatsOrderBy>>;
};

export type LeagueFormatsConnection = {
  __typename?: "league_formatsConnection";
  edges: Array<LeagueFormatsEdge>;
  pageInfo: PageInfo;
};

export type LeagueFormatsDeleteResponse = {
  __typename?: "league_formatsDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<LeagueFormats>;
};

export type LeagueFormatsEdge = {
  __typename?: "league_formatsEdge";
  cursor: Scalars["String"];
  node: LeagueFormats;
};

export type LeagueFormatsFilter = {
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type LeagueFormatsInsertInput = {
  description?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type LeagueFormatsInsertResponse = {
  __typename?: "league_formatsInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<LeagueFormats>;
};

export type LeagueFormatsOrderBy = {
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
};

export type LeagueFormatsUpdateInput = {
  description?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type LeagueFormatsUpdateResponse = {
  __typename?: "league_formatsUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<LeagueFormats>;
};

export type LeagueParticipants = {
  __typename?: "league_participants";
  created_at: Scalars["Datetime"];
  id: Scalars["UUID"];
  league: Scalars["UUID"];
  leagues?: Maybe<Leagues>;
  lp_contestantsCollection?: Maybe<LpContestantsConnection>;
  participant: Scalars["UUID"];
  profiles?: Maybe<Profiles>;
};

export type LeagueParticipantsLpContestantsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<LpContestantsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<LpContestantsOrderBy>>;
};

export type LeagueParticipantsConnection = {
  __typename?: "league_participantsConnection";
  edges: Array<LeagueParticipantsEdge>;
  pageInfo: PageInfo;
};

export type LeagueParticipantsDeleteResponse = {
  __typename?: "league_participantsDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<LeagueParticipants>;
};

export type LeagueParticipantsEdge = {
  __typename?: "league_participantsEdge";
  cursor: Scalars["String"];
  node: LeagueParticipants;
};

export type LeagueParticipantsFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  league?: InputMaybe<UuidFilter>;
  participant?: InputMaybe<UuidFilter>;
};

export type LeagueParticipantsInsertInput = {
  created_at?: InputMaybe<Scalars["Datetime"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  league?: InputMaybe<Scalars["UUID"]>;
  participant?: InputMaybe<Scalars["UUID"]>;
};

export type LeagueParticipantsInsertResponse = {
  __typename?: "league_participantsInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<LeagueParticipants>;
};

export type LeagueParticipantsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  league?: InputMaybe<OrderByDirection>;
  participant?: InputMaybe<OrderByDirection>;
};

export type LeagueParticipantsUpdateInput = {
  created_at?: InputMaybe<Scalars["Datetime"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  league?: InputMaybe<Scalars["UUID"]>;
  participant?: InputMaybe<Scalars["UUID"]>;
};

export type LeagueParticipantsUpdateResponse = {
  __typename?: "league_participantsUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<LeagueParticipants>;
};

export type Leagues = {
  __typename?: "leagues";
  created_at: Scalars["Datetime"];
  created_by: Scalars["UUID"];
  format?: Maybe<Scalars["String"]>;
  id: Scalars["UUID"];
  is_private: Scalars["Boolean"];
  league_formats?: Maybe<LeagueFormats>;
  league_participantsCollection?: Maybe<LeagueParticipantsConnection>;
  profiles?: Maybe<Profiles>;
  ruleset?: Maybe<Scalars["UUID"]>;
  rulesets?: Maybe<Rulesets>;
  season: Scalars["UUID"];
  seasons?: Maybe<Seasons>;
  title?: Maybe<Scalars["String"]>;
};

export type LeaguesLeagueParticipantsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<LeagueParticipantsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<LeagueParticipantsOrderBy>>;
};

export type LeaguesConnection = {
  __typename?: "leaguesConnection";
  edges: Array<LeaguesEdge>;
  pageInfo: PageInfo;
};

export type LeaguesDeleteResponse = {
  __typename?: "leaguesDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Leagues>;
};

export type LeaguesEdge = {
  __typename?: "leaguesEdge";
  cursor: Scalars["String"];
  node: Leagues;
};

export type LeaguesFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  created_by?: InputMaybe<UuidFilter>;
  format?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  is_private?: InputMaybe<BooleanFilter>;
  ruleset?: InputMaybe<UuidFilter>;
  season?: InputMaybe<UuidFilter>;
  title?: InputMaybe<StringFilter>;
};

export type LeaguesInsertInput = {
  created_at?: InputMaybe<Scalars["Datetime"]>;
  created_by?: InputMaybe<Scalars["UUID"]>;
  format?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  is_private?: InputMaybe<Scalars["Boolean"]>;
  ruleset?: InputMaybe<Scalars["UUID"]>;
  season?: InputMaybe<Scalars["UUID"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type LeaguesInsertResponse = {
  __typename?: "leaguesInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Leagues>;
};

export type LeaguesOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  created_by?: InputMaybe<OrderByDirection>;
  format?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  is_private?: InputMaybe<OrderByDirection>;
  ruleset?: InputMaybe<OrderByDirection>;
  season?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
};

export type LeaguesUpdateInput = {
  created_at?: InputMaybe<Scalars["Datetime"]>;
  created_by?: InputMaybe<Scalars["UUID"]>;
  format?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  is_private?: InputMaybe<Scalars["Boolean"]>;
  ruleset?: InputMaybe<Scalars["UUID"]>;
  season?: InputMaybe<Scalars["UUID"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type LeaguesUpdateResponse = {
  __typename?: "leaguesUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Leagues>;
};

export type LpContestants = {
  __typename?: "lp_contestants";
  contestant_season: Scalars["UUID"];
  contestant_seasons?: Maybe<ContestantSeasons>;
  id: Scalars["UUID"];
  league_participant: Scalars["UUID"];
  league_participants?: Maybe<LeagueParticipants>;
  rank?: Maybe<Scalars["String"]>;
};

export type LpContestantsConnection = {
  __typename?: "lp_contestantsConnection";
  edges: Array<LpContestantsEdge>;
  pageInfo: PageInfo;
};

export type LpContestantsDeleteResponse = {
  __typename?: "lp_contestantsDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<LpContestants>;
};

export type LpContestantsEdge = {
  __typename?: "lp_contestantsEdge";
  cursor: Scalars["String"];
  node: LpContestants;
};

export type LpContestantsFilter = {
  contestant_season?: InputMaybe<UuidFilter>;
  id?: InputMaybe<UuidFilter>;
  league_participant?: InputMaybe<UuidFilter>;
  rank?: InputMaybe<StringFilter>;
};

export type LpContestantsInsertInput = {
  contestant_season?: InputMaybe<Scalars["UUID"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  league_participant?: InputMaybe<Scalars["UUID"]>;
  rank?: InputMaybe<Scalars["String"]>;
};

export type LpContestantsInsertResponse = {
  __typename?: "lp_contestantsInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<LpContestants>;
};

export type LpContestantsOrderBy = {
  contestant_season?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  league_participant?: InputMaybe<OrderByDirection>;
  rank?: InputMaybe<OrderByDirection>;
};

export type LpContestantsUpdateInput = {
  contestant_season?: InputMaybe<Scalars["UUID"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  league_participant?: InputMaybe<Scalars["UUID"]>;
  rank?: InputMaybe<Scalars["String"]>;
};

export type LpContestantsUpdateResponse = {
  __typename?: "lp_contestantsUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<LpContestants>;
};

export type Profiles = {
  __typename?: "profiles";
  display_name?: Maybe<Scalars["String"]>;
  email: Scalars["String"];
  id: Scalars["UUID"];
  league_participantsCollection?: Maybe<LeagueParticipantsConnection>;
  leaguesCollection?: Maybe<LeaguesConnection>;
  rulesetsCollection?: Maybe<RulesetsConnection>;
  thumbnail_src?: Maybe<Scalars["String"]>;
  user_rolesCollection?: Maybe<UserRolesConnection>;
};

export type ProfilesLeagueParticipantsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<LeagueParticipantsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<LeagueParticipantsOrderBy>>;
};

export type ProfilesLeaguesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<LeaguesFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<LeaguesOrderBy>>;
};

export type ProfilesRulesetsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<RulesetsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<RulesetsOrderBy>>;
};

export type ProfilesUserRolesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<UserRolesFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<UserRolesOrderBy>>;
};

export type ProfilesConnection = {
  __typename?: "profilesConnection";
  edges: Array<ProfilesEdge>;
  pageInfo: PageInfo;
};

export type ProfilesDeleteResponse = {
  __typename?: "profilesDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

export type ProfilesEdge = {
  __typename?: "profilesEdge";
  cursor: Scalars["String"];
  node: Profiles;
};

export type ProfilesFilter = {
  display_name?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  thumbnail_src?: InputMaybe<StringFilter>;
};

export type ProfilesInsertInput = {
  display_name?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  thumbnail_src?: InputMaybe<Scalars["String"]>;
};

export type ProfilesInsertResponse = {
  __typename?: "profilesInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

export type ProfilesOrderBy = {
  display_name?: InputMaybe<OrderByDirection>;
  email?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  thumbnail_src?: InputMaybe<OrderByDirection>;
};

export type ProfilesUpdateInput = {
  display_name?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  thumbnail_src?: InputMaybe<Scalars["String"]>;
};

export type ProfilesUpdateResponse = {
  __typename?: "profilesUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

export type RealitySeries = {
  __typename?: "reality_series";
  created_at: Scalars["Datetime"];
  in_progress: Scalars["Boolean"];
  logo_src: Scalars["String"];
  premiere_time?: Maybe<Scalars["Datetime"]>;
  rs_league_formatsCollection?: Maybe<RsLeagueFormatsConnection>;
  rulesCollection?: Maybe<RulesConnection>;
  seasonsCollection?: Maybe<SeasonsConnection>;
  slug: Scalars["String"];
  title: Scalars["String"];
  updated_at: Scalars["Datetime"];
};

export type RealitySeriesRsLeagueFormatsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<RsLeagueFormatsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<RsLeagueFormatsOrderBy>>;
};

export type RealitySeriesRulesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<RulesFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<RulesOrderBy>>;
};

export type RealitySeriesSeasonsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<SeasonsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<SeasonsOrderBy>>;
};

export type RealitySeriesConnection = {
  __typename?: "reality_seriesConnection";
  edges: Array<RealitySeriesEdge>;
  pageInfo: PageInfo;
};

export type RealitySeriesDeleteResponse = {
  __typename?: "reality_seriesDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<RealitySeries>;
};

export type RealitySeriesEdge = {
  __typename?: "reality_seriesEdge";
  cursor: Scalars["String"];
  node: RealitySeries;
};

export type RealitySeriesFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  in_progress?: InputMaybe<BooleanFilter>;
  logo_src?: InputMaybe<StringFilter>;
  premiere_time?: InputMaybe<DatetimeFilter>;
  slug?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type RealitySeriesInsertInput = {
  created_at?: InputMaybe<Scalars["Datetime"]>;
  in_progress?: InputMaybe<Scalars["Boolean"]>;
  logo_src?: InputMaybe<Scalars["String"]>;
  premiere_time?: InputMaybe<Scalars["Datetime"]>;
  slug?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["Datetime"]>;
};

export type RealitySeriesInsertResponse = {
  __typename?: "reality_seriesInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<RealitySeries>;
};

export type RealitySeriesOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  in_progress?: InputMaybe<OrderByDirection>;
  logo_src?: InputMaybe<OrderByDirection>;
  premiere_time?: InputMaybe<OrderByDirection>;
  slug?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type RealitySeriesUpdateInput = {
  created_at?: InputMaybe<Scalars["Datetime"]>;
  in_progress?: InputMaybe<Scalars["Boolean"]>;
  logo_src?: InputMaybe<Scalars["String"]>;
  premiere_time?: InputMaybe<Scalars["Datetime"]>;
  slug?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["Datetime"]>;
};

export type RealitySeriesUpdateResponse = {
  __typename?: "reality_seriesUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<RealitySeries>;
};

export type Roles = {
  __typename?: "roles";
  display_name: Scalars["String"];
  id: Scalars["String"];
  user_rolesCollection?: Maybe<UserRolesConnection>;
};

export type RolesUserRolesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<UserRolesFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<UserRolesOrderBy>>;
};

export type RolesConnection = {
  __typename?: "rolesConnection";
  edges: Array<RolesEdge>;
  pageInfo: PageInfo;
};

export type RolesDeleteResponse = {
  __typename?: "rolesDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Roles>;
};

export type RolesEdge = {
  __typename?: "rolesEdge";
  cursor: Scalars["String"];
  node: Roles;
};

export type RolesFilter = {
  display_name?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
};

export type RolesInsertInput = {
  display_name?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
};

export type RolesInsertResponse = {
  __typename?: "rolesInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Roles>;
};

export type RolesOrderBy = {
  display_name?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
};

export type RolesUpdateInput = {
  display_name?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
};

export type RolesUpdateResponse = {
  __typename?: "rolesUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Roles>;
};

export type RsLeagueFormats = {
  __typename?: "rs_league_formats";
  default_ruleset: Scalars["UUID"];
  league_format: Scalars["String"];
  league_formats?: Maybe<LeagueFormats>;
  reality_series?: Maybe<RealitySeries>;
  rulesets?: Maybe<Rulesets>;
};

export type RsLeagueFormatsConnection = {
  __typename?: "rs_league_formatsConnection";
  edges: Array<RsLeagueFormatsEdge>;
  pageInfo: PageInfo;
};

export type RsLeagueFormatsDeleteResponse = {
  __typename?: "rs_league_formatsDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<RsLeagueFormats>;
};

export type RsLeagueFormatsEdge = {
  __typename?: "rs_league_formatsEdge";
  cursor: Scalars["String"];
  node: RsLeagueFormats;
};

export type RsLeagueFormatsFilter = {
  default_ruleset?: InputMaybe<UuidFilter>;
  league_format?: InputMaybe<StringFilter>;
  reality_series?: InputMaybe<StringFilter>;
};

export type RsLeagueFormatsInsertInput = {
  default_ruleset?: InputMaybe<Scalars["UUID"]>;
  league_format?: InputMaybe<Scalars["String"]>;
  reality_series?: InputMaybe<Scalars["String"]>;
};

export type RsLeagueFormatsInsertResponse = {
  __typename?: "rs_league_formatsInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<RsLeagueFormats>;
};

export type RsLeagueFormatsOrderBy = {
  default_ruleset?: InputMaybe<OrderByDirection>;
  league_format?: InputMaybe<OrderByDirection>;
  reality_series?: InputMaybe<OrderByDirection>;
};

export type RsLeagueFormatsUpdateInput = {
  default_ruleset?: InputMaybe<Scalars["UUID"]>;
  league_format?: InputMaybe<Scalars["String"]>;
  reality_series?: InputMaybe<Scalars["String"]>;
};

export type RsLeagueFormatsUpdateResponse = {
  __typename?: "rs_league_formatsUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<RsLeagueFormats>;
};

export type Rules = {
  __typename?: "rules";
  description: Scalars["String"];
  eventsCollection?: Maybe<EventsConnection>;
  id: Scalars["String"];
  is_negative?: Maybe<Scalars["Boolean"]>;
  reality_series?: Maybe<RealitySeries>;
};

export type RulesEventsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<EventsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};

export type RulesConnection = {
  __typename?: "rulesConnection";
  edges: Array<RulesEdge>;
  pageInfo: PageInfo;
};

export type RulesDeleteResponse = {
  __typename?: "rulesDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Rules>;
};

export type RulesEdge = {
  __typename?: "rulesEdge";
  cursor: Scalars["String"];
  node: Rules;
};

export type RulesFilter = {
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  is_negative?: InputMaybe<BooleanFilter>;
  reality_series?: InputMaybe<StringFilter>;
};

export type RulesInsertInput = {
  description?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  is_negative?: InputMaybe<Scalars["Boolean"]>;
  reality_series?: InputMaybe<Scalars["String"]>;
};

export type RulesInsertResponse = {
  __typename?: "rulesInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Rules>;
};

export type RulesOrderBy = {
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  is_negative?: InputMaybe<OrderByDirection>;
  reality_series?: InputMaybe<OrderByDirection>;
};

export type RulesUpdateInput = {
  description?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  is_negative?: InputMaybe<Scalars["Boolean"]>;
  reality_series?: InputMaybe<Scalars["String"]>;
};

export type RulesUpdateResponse = {
  __typename?: "rulesUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Rules>;
};

export type Rulesets = {
  __typename?: "rulesets";
  created_by: Scalars["UUID"];
  data: Scalars["JSON"];
  id: Scalars["UUID"];
  leaguesCollection?: Maybe<LeaguesConnection>;
  profiles?: Maybe<Profiles>;
  rs_league_formatsCollection?: Maybe<RsLeagueFormatsConnection>;
  updated_at: Scalars["Datetime"];
};

export type RulesetsLeaguesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<LeaguesFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<LeaguesOrderBy>>;
};

export type RulesetsRsLeagueFormatsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<RsLeagueFormatsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<RsLeagueFormatsOrderBy>>;
};

export type RulesetsConnection = {
  __typename?: "rulesetsConnection";
  edges: Array<RulesetsEdge>;
  pageInfo: PageInfo;
};

export type RulesetsDeleteResponse = {
  __typename?: "rulesetsDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Rulesets>;
};

export type RulesetsEdge = {
  __typename?: "rulesetsEdge";
  cursor: Scalars["String"];
  node: Rulesets;
};

export type RulesetsFilter = {
  created_by?: InputMaybe<UuidFilter>;
  id?: InputMaybe<UuidFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type RulesetsInsertInput = {
  created_by?: InputMaybe<Scalars["UUID"]>;
  data?: InputMaybe<Scalars["JSON"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  updated_at?: InputMaybe<Scalars["Datetime"]>;
};

export type RulesetsInsertResponse = {
  __typename?: "rulesetsInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Rulesets>;
};

export type RulesetsOrderBy = {
  created_by?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type RulesetsUpdateInput = {
  created_by?: InputMaybe<Scalars["UUID"]>;
  data?: InputMaybe<Scalars["JSON"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  updated_at?: InputMaybe<Scalars["Datetime"]>;
};

export type RulesetsUpdateResponse = {
  __typename?: "rulesetsUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Rulesets>;
};

export type Seasons = {
  __typename?: "seasons";
  contestant_seasonsCollection?: Maybe<ContestantSeasonsConnection>;
  episodesCollection?: Maybe<EpisodesConnection>;
  id: Scalars["UUID"];
  leaguesCollection?: Maybe<LeaguesConnection>;
  logo_src: Scalars["String"];
  order: Scalars["BigInt"];
  reality_series?: Maybe<RealitySeries>;
  title: Scalars["String"];
  updated_at: Scalars["Datetime"];
};

export type SeasonsContestantSeasonsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<ContestantSeasonsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<ContestantSeasonsOrderBy>>;
};

export type SeasonsEpisodesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<EpisodesFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<EpisodesOrderBy>>;
};

export type SeasonsLeaguesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<LeaguesFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<LeaguesOrderBy>>;
};

export type SeasonsConnection = {
  __typename?: "seasonsConnection";
  edges: Array<SeasonsEdge>;
  pageInfo: PageInfo;
};

export type SeasonsDeleteResponse = {
  __typename?: "seasonsDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Seasons>;
};

export type SeasonsEdge = {
  __typename?: "seasonsEdge";
  cursor: Scalars["String"];
  node: Seasons;
};

export type SeasonsFilter = {
  id?: InputMaybe<UuidFilter>;
  logo_src?: InputMaybe<StringFilter>;
  order?: InputMaybe<BigIntFilter>;
  reality_series?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type SeasonsInsertInput = {
  id?: InputMaybe<Scalars["UUID"]>;
  logo_src?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Scalars["BigInt"]>;
  reality_series?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["Datetime"]>;
};

export type SeasonsInsertResponse = {
  __typename?: "seasonsInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Seasons>;
};

export type SeasonsOrderBy = {
  id?: InputMaybe<OrderByDirection>;
  logo_src?: InputMaybe<OrderByDirection>;
  order?: InputMaybe<OrderByDirection>;
  reality_series?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type SeasonsUpdateInput = {
  id?: InputMaybe<Scalars["UUID"]>;
  logo_src?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Scalars["BigInt"]>;
  reality_series?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["Datetime"]>;
};

export type SeasonsUpdateResponse = {
  __typename?: "seasonsUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Seasons>;
};

export type UserRoles = {
  __typename?: "user_roles";
  profiles?: Maybe<Profiles>;
  role: Scalars["String"];
  roles?: Maybe<Roles>;
  user: Scalars["UUID"];
};

export type UserRolesConnection = {
  __typename?: "user_rolesConnection";
  edges: Array<UserRolesEdge>;
  pageInfo: PageInfo;
};

export type UserRolesDeleteResponse = {
  __typename?: "user_rolesDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<UserRoles>;
};

export type UserRolesEdge = {
  __typename?: "user_rolesEdge";
  cursor: Scalars["String"];
  node: UserRoles;
};

export type UserRolesFilter = {
  role?: InputMaybe<StringFilter>;
  user?: InputMaybe<UuidFilter>;
};

export type UserRolesInsertInput = {
  role?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<Scalars["UUID"]>;
};

export type UserRolesInsertResponse = {
  __typename?: "user_rolesInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<UserRoles>;
};

export type UserRolesOrderBy = {
  role?: InputMaybe<OrderByDirection>;
  user?: InputMaybe<OrderByDirection>;
};

export type UserRolesUpdateInput = {
  role?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<Scalars["UUID"]>;
};

export type UserRolesUpdateResponse = {
  __typename?: "user_rolesUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<UserRoles>;
};
