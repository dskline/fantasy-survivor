import {
  Resolver as GraphCacheResolver,
  UpdateResolver as GraphCacheUpdateResolver,
  OptimisticMutationResolver as GraphCacheOptimisticMutationResolver,
  StorageAdapter as GraphCacheStorageAdapter,
} from "@urql/exchange-graphcache";
import { IntrospectionData } from "@urql/exchange-graphcache/dist/types/ast";
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
  is?: InputMaybe<FilterIs>;
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
  is?: InputMaybe<FilterIs>;
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
  is?: InputMaybe<FilterIs>;
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
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars["Datetime"]>;
  lte?: InputMaybe<Scalars["Datetime"]>;
  neq?: InputMaybe<Scalars["Datetime"]>;
};

export enum FilterIs {
  NotNull = "NOT_NULL",
  Null = "NULL",
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars["Float"]>;
  gt?: InputMaybe<Scalars["Float"]>;
  gte?: InputMaybe<Scalars["Float"]>;
  in?: InputMaybe<Array<Scalars["Float"]>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars["Float"]>;
  lte?: InputMaybe<Scalars["Float"]>;
  neq?: InputMaybe<Scalars["Float"]>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars["ID"]>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<Scalars["Int"]>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  neq?: InputMaybe<Scalars["Int"]>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: "Mutation";
  /** Deletes zero or more records from the `api_tokens` collection */
  deleteFromapi_tokensCollection: ApiTokensDeleteResponse;
  /** Deletes zero or more records from the `contestant_seasons` collection */
  deleteFromcontestant_seasonsCollection: ContestantSeasonsDeleteResponse;
  /** Deletes zero or more records from the `contestants` collection */
  deleteFromcontestantsCollection: ContestantsDeleteResponse;
  /** Deletes zero or more records from the `episodes` collection */
  deleteFromepisodesCollection: EpisodesDeleteResponse;
  /** Deletes zero or more records from the `events` collection */
  deleteFromeventsCollection: EventsDeleteResponse;
  /** Deletes zero or more records from the `league_formats` collection */
  deleteFromleague_formatsCollection: LeagueFormatsDeleteResponse;
  /** Deletes zero or more records from the `league_participants` collection */
  deleteFromleague_participantsCollection: LeagueParticipantsDeleteResponse;
  /** Deletes zero or more records from the `leagues` collection */
  deleteFromleaguesCollection: LeaguesDeleteResponse;
  /** Deletes zero or more records from the `lp_contestants` collection */
  deleteFromlp_contestantsCollection: LpContestantsDeleteResponse;
  /** Deletes zero or more records from the `reality_series` collection */
  deleteFromreality_seriesCollection: RealitySeriesDeleteResponse;
  /** Deletes zero or more records from the `roles` collection */
  deleteFromrolesCollection: RolesDeleteResponse;
  /** Deletes zero or more records from the `rs_league_formats` collection */
  deleteFromrs_league_formatsCollection: RsLeagueFormatsDeleteResponse;
  /** Deletes zero or more records from the `rules` collection */
  deleteFromrulesCollection: RulesDeleteResponse;
  /** Deletes zero or more records from the `rulesets` collection */
  deleteFromrulesetsCollection: RulesetsDeleteResponse;
  /** Deletes zero or more records from the `seasons` collection */
  deleteFromseasonsCollection: SeasonsDeleteResponse;
  /** Deletes zero or more records from the `user_fcm_tokens` collection */
  deleteFromuser_fcm_tokensCollection: UserFcmTokensDeleteResponse;
  /** Deletes zero or more records from the `user_features` collection */
  deleteFromuser_featuresCollection: UserFeaturesDeleteResponse;
  /** Deletes zero or more records from the `user_roles` collection */
  deleteFromuser_rolesCollection: UserRolesDeleteResponse;
  /** Deletes zero or more records from the `user_watched` collection */
  deleteFromuser_watchedCollection: UserWatchedDeleteResponse;
  /** Adds one or more `api_tokens` records to the collection */
  insertIntoapi_tokensCollection?: Maybe<ApiTokensInsertResponse>;
  /** Adds one or more `contestant_seasons` records to the collection */
  insertIntocontestant_seasonsCollection?: Maybe<ContestantSeasonsInsertResponse>;
  /** Adds one or more `contestants` records to the collection */
  insertIntocontestantsCollection?: Maybe<ContestantsInsertResponse>;
  /** Adds one or more `episodes` records to the collection */
  insertIntoepisodesCollection?: Maybe<EpisodesInsertResponse>;
  /** Adds one or more `events` records to the collection */
  insertIntoeventsCollection?: Maybe<EventsInsertResponse>;
  /** Adds one or more `league_formats` records to the collection */
  insertIntoleague_formatsCollection?: Maybe<LeagueFormatsInsertResponse>;
  /** Adds one or more `league_participants` records to the collection */
  insertIntoleague_participantsCollection?: Maybe<LeagueParticipantsInsertResponse>;
  /** Adds one or more `leagues` records to the collection */
  insertIntoleaguesCollection?: Maybe<LeaguesInsertResponse>;
  /** Adds one or more `lp_contestants` records to the collection */
  insertIntolp_contestantsCollection?: Maybe<LpContestantsInsertResponse>;
  /** Adds one or more `reality_series` records to the collection */
  insertIntoreality_seriesCollection?: Maybe<RealitySeriesInsertResponse>;
  /** Adds one or more `roles` records to the collection */
  insertIntorolesCollection?: Maybe<RolesInsertResponse>;
  /** Adds one or more `rs_league_formats` records to the collection */
  insertIntors_league_formatsCollection?: Maybe<RsLeagueFormatsInsertResponse>;
  /** Adds one or more `rules` records to the collection */
  insertIntorulesCollection?: Maybe<RulesInsertResponse>;
  /** Adds one or more `rulesets` records to the collection */
  insertIntorulesetsCollection?: Maybe<RulesetsInsertResponse>;
  /** Adds one or more `seasons` records to the collection */
  insertIntoseasonsCollection?: Maybe<SeasonsInsertResponse>;
  /** Adds one or more `user_fcm_tokens` records to the collection */
  insertIntouser_fcm_tokensCollection?: Maybe<UserFcmTokensInsertResponse>;
  /** Adds one or more `user_features` records to the collection */
  insertIntouser_featuresCollection?: Maybe<UserFeaturesInsertResponse>;
  /** Adds one or more `user_roles` records to the collection */
  insertIntouser_rolesCollection?: Maybe<UserRolesInsertResponse>;
  /** Adds one or more `user_watched` records to the collection */
  insertIntouser_watchedCollection?: Maybe<UserWatchedInsertResponse>;
  /** Updates zero or more records in the `api_tokens` collection */
  updateapi_tokensCollection: ApiTokensUpdateResponse;
  /** Updates zero or more records in the `contestant_seasons` collection */
  updatecontestant_seasonsCollection: ContestantSeasonsUpdateResponse;
  /** Updates zero or more records in the `contestants` collection */
  updatecontestantsCollection: ContestantsUpdateResponse;
  /** Updates zero or more records in the `episodes` collection */
  updateepisodesCollection: EpisodesUpdateResponse;
  /** Updates zero or more records in the `events` collection */
  updateeventsCollection: EventsUpdateResponse;
  /** Updates zero or more records in the `league_formats` collection */
  updateleague_formatsCollection: LeagueFormatsUpdateResponse;
  /** Updates zero or more records in the `league_participants` collection */
  updateleague_participantsCollection: LeagueParticipantsUpdateResponse;
  /** Updates zero or more records in the `leagues` collection */
  updateleaguesCollection: LeaguesUpdateResponse;
  /** Updates zero or more records in the `lp_contestants` collection */
  updatelp_contestantsCollection: LpContestantsUpdateResponse;
  /** Updates zero or more records in the `reality_series` collection */
  updatereality_seriesCollection: RealitySeriesUpdateResponse;
  /** Updates zero or more records in the `roles` collection */
  updaterolesCollection: RolesUpdateResponse;
  /** Updates zero or more records in the `rs_league_formats` collection */
  updaters_league_formatsCollection: RsLeagueFormatsUpdateResponse;
  /** Updates zero or more records in the `rules` collection */
  updaterulesCollection: RulesUpdateResponse;
  /** Updates zero or more records in the `rulesets` collection */
  updaterulesetsCollection: RulesetsUpdateResponse;
  /** Updates zero or more records in the `seasons` collection */
  updateseasonsCollection: SeasonsUpdateResponse;
  /** Updates zero or more records in the `user_fcm_tokens` collection */
  updateuser_fcm_tokensCollection: UserFcmTokensUpdateResponse;
  /** Updates zero or more records in the `user_features` collection */
  updateuser_featuresCollection: UserFeaturesUpdateResponse;
  /** Updates zero or more records in the `user_roles` collection */
  updateuser_rolesCollection: UserRolesUpdateResponse;
  /** Updates zero or more records in the `user_watched` collection */
  updateuser_watchedCollection: UserWatchedUpdateResponse;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromapiTokensCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<ApiTokensFilter>;
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
export type MutationDeleteFromuserFcmTokensCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<UserFcmTokensFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromuserFeaturesCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<UserFeaturesFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromuserRolesCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<UserRolesFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromuserWatchedCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<UserWatchedFilter>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoapiTokensCollectionArgs = {
  objects: Array<ApiTokensInsertInput>;
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
export type MutationInsertIntouserFcmTokensCollectionArgs = {
  objects: Array<UserFcmTokensInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntouserFeaturesCollectionArgs = {
  objects: Array<UserFeaturesInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntouserRolesCollectionArgs = {
  objects: Array<UserRolesInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntouserWatchedCollectionArgs = {
  objects: Array<UserWatchedInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationUpdateapiTokensCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<ApiTokensFilter>;
  set: ApiTokensUpdateInput;
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
export type MutationUpdateuserFcmTokensCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<UserFcmTokensFilter>;
  set: UserFcmTokensUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateuserFeaturesCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<UserFeaturesFilter>;
  set: UserFeaturesUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateuserRolesCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<UserRolesFilter>;
  set: UserRolesUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateuserWatchedCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<UserWatchedFilter>;
  set: UserWatchedUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars["ID"];
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
  /** A pagable collection of type `api_tokens` */
  api_tokensCollection?: Maybe<ApiTokensConnection>;
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
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
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
  /** A pagable collection of type `user_fcm_tokens` */
  user_fcm_tokensCollection?: Maybe<UserFcmTokensConnection>;
  /** A pagable collection of type `user_features` */
  user_featuresCollection?: Maybe<UserFeaturesConnection>;
  /** A pagable collection of type `user_roles` */
  user_rolesCollection?: Maybe<UserRolesConnection>;
  /** A pagable collection of type `user_watched` */
  user_watchedCollection?: Maybe<UserWatchedConnection>;
};

/** The root type for querying data */
export type QueryApiTokensCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<ApiTokensFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<ApiTokensOrderBy>>;
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
export type QueryNodeArgs = {
  nodeId: Scalars["ID"];
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
export type QueryUserFcmTokensCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<UserFcmTokensFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<UserFcmTokensOrderBy>>;
};

/** The root type for querying data */
export type QueryUserFeaturesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<UserFeaturesFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<UserFeaturesOrderBy>>;
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

/** The root type for querying data */
export type QueryUserWatchedCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<UserWatchedFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<UserWatchedOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  is?: InputMaybe<FilterIs>;
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
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars["Time"]>;
  lte?: InputMaybe<Scalars["Time"]>;
  neq?: InputMaybe<Scalars["Time"]>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars["UUID"]>;
  in?: InputMaybe<Array<Scalars["UUID"]>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars["UUID"]>;
};

export type ApiTokens = Node & {
  __typename?: "api_tokens";
  id: Scalars["UUID"];
  name: Scalars["String"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"];
  owner: Scalars["UUID"];
  profiles?: Maybe<Profiles>;
  token: Scalars["String"];
};

export type ApiTokensConnection = {
  __typename?: "api_tokensConnection";
  edges: Array<ApiTokensEdge>;
  pageInfo: PageInfo;
};

export type ApiTokensDeleteResponse = {
  __typename?: "api_tokensDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<ApiTokens>;
};

export type ApiTokensEdge = {
  __typename?: "api_tokensEdge";
  cursor: Scalars["String"];
  node: ApiTokens;
};

export type ApiTokensFilter = {
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  owner?: InputMaybe<UuidFilter>;
  token?: InputMaybe<StringFilter>;
};

export type ApiTokensInsertInput = {
  id?: InputMaybe<Scalars["UUID"]>;
  name?: InputMaybe<Scalars["String"]>;
  owner?: InputMaybe<Scalars["UUID"]>;
  token?: InputMaybe<Scalars["String"]>;
};

export type ApiTokensInsertResponse = {
  __typename?: "api_tokensInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<ApiTokens>;
};

export type ApiTokensOrderBy = {
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  owner?: InputMaybe<OrderByDirection>;
  token?: InputMaybe<OrderByDirection>;
};

export type ApiTokensUpdateInput = {
  id?: InputMaybe<Scalars["UUID"]>;
  name?: InputMaybe<Scalars["String"]>;
  owner?: InputMaybe<Scalars["UUID"]>;
  token?: InputMaybe<Scalars["String"]>;
};

export type ApiTokensUpdateResponse = {
  __typename?: "api_tokensUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<ApiTokens>;
};

export type ContestantSeasons = Node & {
  __typename?: "contestant_seasons";
  age?: Maybe<Scalars["Int"]>;
  avatar_src: Scalars["String"];
  contestant: Scalars["String"];
  contestants?: Maybe<Contestants>;
  eventsCollection?: Maybe<EventsConnection>;
  hometown?: Maybe<Scalars["String"]>;
  id: Scalars["UUID"];
  lp_contestantsCollection?: Maybe<LpContestantsConnection>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"];
  occupation?: Maybe<Scalars["String"]>;
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
  age?: InputMaybe<IntFilter>;
  avatar_src?: InputMaybe<StringFilter>;
  contestant?: InputMaybe<StringFilter>;
  hometown?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  occupation?: InputMaybe<StringFilter>;
  portrait_src?: InputMaybe<StringFilter>;
  season?: InputMaybe<UuidFilter>;
  team_color?: InputMaybe<StringFilter>;
};

export type ContestantSeasonsInsertInput = {
  age?: InputMaybe<Scalars["Int"]>;
  avatar_src?: InputMaybe<Scalars["String"]>;
  contestant?: InputMaybe<Scalars["String"]>;
  hometown?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  occupation?: InputMaybe<Scalars["String"]>;
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
  age?: InputMaybe<OrderByDirection>;
  avatar_src?: InputMaybe<OrderByDirection>;
  contestant?: InputMaybe<OrderByDirection>;
  hometown?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  occupation?: InputMaybe<OrderByDirection>;
  portrait_src?: InputMaybe<OrderByDirection>;
  season?: InputMaybe<OrderByDirection>;
  team_color?: InputMaybe<OrderByDirection>;
};

export type ContestantSeasonsUpdateInput = {
  age?: InputMaybe<Scalars["Int"]>;
  avatar_src?: InputMaybe<Scalars["String"]>;
  contestant?: InputMaybe<Scalars["String"]>;
  hometown?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  occupation?: InputMaybe<Scalars["String"]>;
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

export type Contestants = Node & {
  __typename?: "contestants";
  contestant_seasonsCollection?: Maybe<ContestantSeasonsConnection>;
  firstname: Scalars["String"];
  nickname?: Maybe<Scalars["String"]>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"];
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
  nodeId?: InputMaybe<IdFilter>;
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

export type Episodes = Node & {
  __typename?: "episodes";
  eventsCollection?: Maybe<EventsConnection>;
  id: Scalars["UUID"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"];
  season: Scalars["UUID"];
  seasons?: Maybe<Seasons>;
  start_time: Scalars["Datetime"];
  user_watchedCollection?: Maybe<UserWatchedConnection>;
};

export type EpisodesEventsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<EventsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};

export type EpisodesUserWatchedCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<UserWatchedFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<UserWatchedOrderBy>>;
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
  nodeId?: InputMaybe<IdFilter>;
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

export type Events = Node & {
  __typename?: "events";
  comment?: Maybe<Scalars["String"]>;
  contestant_season: Scalars["UUID"];
  contestant_seasons?: Maybe<ContestantSeasons>;
  episode: Scalars["UUID"];
  episodes?: Maybe<Episodes>;
  id: Scalars["UUID"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"];
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
  nodeId?: InputMaybe<IdFilter>;
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

export type LeagueFormats = Node & {
  __typename?: "league_formats";
  description: Scalars["String"];
  id: Scalars["String"];
  leaguesCollection?: Maybe<LeaguesConnection>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"];
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
  nodeId?: InputMaybe<IdFilter>;
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

export type LeagueParticipants = Node & {
  __typename?: "league_participants";
  created_at: Scalars["Datetime"];
  id: Scalars["UUID"];
  league: Scalars["UUID"];
  leagues?: Maybe<Leagues>;
  lp_contestantsCollection?: Maybe<LpContestantsConnection>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"];
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
  nodeId?: InputMaybe<IdFilter>;
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

export type Leagues = Node & {
  __typename?: "leagues";
  created_at: Scalars["Datetime"];
  created_by: Scalars["UUID"];
  format?: Maybe<Scalars["String"]>;
  id: Scalars["UUID"];
  is_private: Scalars["Boolean"];
  league_formats?: Maybe<LeagueFormats>;
  league_participantsCollection?: Maybe<LeagueParticipantsConnection>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"];
  profiles?: Maybe<Profiles>;
  ruleset?: Maybe<Scalars["UUID"]>;
  rulesets?: Maybe<Rulesets>;
  season: Scalars["UUID"];
  seasons?: Maybe<Seasons>;
  slug?: Maybe<Scalars["String"]>;
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
  nodeId?: InputMaybe<IdFilter>;
  ruleset?: InputMaybe<UuidFilter>;
  season?: InputMaybe<UuidFilter>;
  slug?: InputMaybe<StringFilter>;
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
  slug?: InputMaybe<Scalars["String"]>;
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
  slug?: InputMaybe<OrderByDirection>;
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
  slug?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type LeaguesUpdateResponse = {
  __typename?: "leaguesUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Leagues>;
};

export type LpContestants = Node & {
  __typename?: "lp_contestants";
  contestant_season: Scalars["UUID"];
  contestant_seasons?: Maybe<ContestantSeasons>;
  id: Scalars["UUID"];
  league_participant: Scalars["UUID"];
  league_participants?: Maybe<LeagueParticipants>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"];
  rank?: Maybe<Scalars["String"]>;
  updated_at: Scalars["Datetime"];
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
  nodeId?: InputMaybe<IdFilter>;
  rank?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type LpContestantsInsertInput = {
  contestant_season?: InputMaybe<Scalars["UUID"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  league_participant?: InputMaybe<Scalars["UUID"]>;
  rank?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["Datetime"]>;
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
  updated_at?: InputMaybe<OrderByDirection>;
};

export type LpContestantsUpdateInput = {
  contestant_season?: InputMaybe<Scalars["UUID"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  league_participant?: InputMaybe<Scalars["UUID"]>;
  rank?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["Datetime"]>;
};

export type LpContestantsUpdateResponse = {
  __typename?: "lp_contestantsUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<LpContestants>;
};

export type Profiles = Node & {
  __typename?: "profiles";
  api_tokensCollection?: Maybe<ApiTokensConnection>;
  display_name?: Maybe<Scalars["String"]>;
  id: Scalars["UUID"];
  league_participantsCollection?: Maybe<LeagueParticipantsConnection>;
  leaguesCollection?: Maybe<LeaguesConnection>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"];
  rulesetsCollection?: Maybe<RulesetsConnection>;
  thumbnail_src?: Maybe<Scalars["String"]>;
  user_fcm_tokensCollection?: Maybe<UserFcmTokensConnection>;
  user_featuresCollection?: Maybe<UserFeaturesConnection>;
  user_rolesCollection?: Maybe<UserRolesConnection>;
  user_watchedCollection?: Maybe<UserWatchedConnection>;
};

export type ProfilesApiTokensCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<ApiTokensFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<ApiTokensOrderBy>>;
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

export type ProfilesUserFcmTokensCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<UserFcmTokensFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<UserFcmTokensOrderBy>>;
};

export type ProfilesUserFeaturesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<UserFeaturesFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<UserFeaturesOrderBy>>;
};

export type ProfilesUserRolesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<UserRolesFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<UserRolesOrderBy>>;
};

export type ProfilesUserWatchedCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<UserWatchedFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<UserWatchedOrderBy>>;
};

export type ProfilesConnection = {
  __typename?: "profilesConnection";
  edges: Array<ProfilesEdge>;
  pageInfo: PageInfo;
};

export type ProfilesEdge = {
  __typename?: "profilesEdge";
  cursor: Scalars["String"];
  node: Profiles;
};

export type ProfilesFilter = {
  display_name?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  thumbnail_src?: InputMaybe<StringFilter>;
};

export type ProfilesOrderBy = {
  display_name?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  thumbnail_src?: InputMaybe<OrderByDirection>;
};

export type RealitySeries = Node & {
  __typename?: "reality_series";
  created_at: Scalars["Datetime"];
  in_progress: Scalars["Boolean"];
  logo_src: Scalars["String"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"];
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
  nodeId?: InputMaybe<IdFilter>;
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

export type Roles = Node & {
  __typename?: "roles";
  display_name: Scalars["String"];
  id: Scalars["String"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"];
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
  nodeId?: InputMaybe<IdFilter>;
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

export type RsLeagueFormats = Node & {
  __typename?: "rs_league_formats";
  default_ruleset: Scalars["UUID"];
  league_format: Scalars["String"];
  league_formats?: Maybe<LeagueFormats>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"];
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
  nodeId?: InputMaybe<IdFilter>;
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

export type Rules = Node & {
  __typename?: "rules";
  description: Scalars["String"];
  eventsCollection?: Maybe<EventsConnection>;
  id: Scalars["String"];
  is_negative?: Maybe<Scalars["Boolean"]>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"];
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
  nodeId?: InputMaybe<IdFilter>;
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

export type Rulesets = Node & {
  __typename?: "rulesets";
  created_by: Scalars["UUID"];
  data: Scalars["JSON"];
  id: Scalars["UUID"];
  leaguesCollection?: Maybe<LeaguesConnection>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"];
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
  nodeId?: InputMaybe<IdFilter>;
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

export type Seasons = Node & {
  __typename?: "seasons";
  contestant_seasonsCollection?: Maybe<ContestantSeasonsConnection>;
  episodesCollection?: Maybe<EpisodesConnection>;
  id: Scalars["UUID"];
  leaguesCollection?: Maybe<LeaguesConnection>;
  logo_src: Scalars["String"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"];
  order: Scalars["BigInt"];
  reality_series?: Maybe<RealitySeries>;
  reality_show: Scalars["String"];
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
  nodeId?: InputMaybe<IdFilter>;
  order?: InputMaybe<BigIntFilter>;
  reality_show?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type SeasonsInsertInput = {
  id?: InputMaybe<Scalars["UUID"]>;
  logo_src?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Scalars["BigInt"]>;
  reality_show?: InputMaybe<Scalars["String"]>;
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
  reality_show?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type SeasonsUpdateInput = {
  id?: InputMaybe<Scalars["UUID"]>;
  logo_src?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Scalars["BigInt"]>;
  reality_show?: InputMaybe<Scalars["String"]>;
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

export type UserFcmTokens = Node & {
  __typename?: "user_fcm_tokens";
  id: Scalars["UUID"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"];
  profiles?: Maybe<Profiles>;
  token: Scalars["String"];
  user: Scalars["UUID"];
};

export type UserFcmTokensConnection = {
  __typename?: "user_fcm_tokensConnection";
  edges: Array<UserFcmTokensEdge>;
  pageInfo: PageInfo;
};

export type UserFcmTokensDeleteResponse = {
  __typename?: "user_fcm_tokensDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<UserFcmTokens>;
};

export type UserFcmTokensEdge = {
  __typename?: "user_fcm_tokensEdge";
  cursor: Scalars["String"];
  node: UserFcmTokens;
};

export type UserFcmTokensFilter = {
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  token?: InputMaybe<StringFilter>;
  user?: InputMaybe<UuidFilter>;
};

export type UserFcmTokensInsertInput = {
  id?: InputMaybe<Scalars["UUID"]>;
  token?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<Scalars["UUID"]>;
};

export type UserFcmTokensInsertResponse = {
  __typename?: "user_fcm_tokensInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<UserFcmTokens>;
};

export type UserFcmTokensOrderBy = {
  id?: InputMaybe<OrderByDirection>;
  token?: InputMaybe<OrderByDirection>;
  user?: InputMaybe<OrderByDirection>;
};

export type UserFcmTokensUpdateInput = {
  id?: InputMaybe<Scalars["UUID"]>;
  token?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<Scalars["UUID"]>;
};

export type UserFcmTokensUpdateResponse = {
  __typename?: "user_fcm_tokensUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<UserFcmTokens>;
};

export type UserFeatures = Node & {
  __typename?: "user_features";
  feature: Scalars["String"];
  id: Scalars["UUID"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"];
  profiles?: Maybe<Profiles>;
  user: Scalars["UUID"];
};

export type UserFeaturesConnection = {
  __typename?: "user_featuresConnection";
  edges: Array<UserFeaturesEdge>;
  pageInfo: PageInfo;
};

export type UserFeaturesDeleteResponse = {
  __typename?: "user_featuresDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<UserFeatures>;
};

export type UserFeaturesEdge = {
  __typename?: "user_featuresEdge";
  cursor: Scalars["String"];
  node: UserFeatures;
};

export type UserFeaturesFilter = {
  feature?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  user?: InputMaybe<UuidFilter>;
};

export type UserFeaturesInsertInput = {
  feature?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  user?: InputMaybe<Scalars["UUID"]>;
};

export type UserFeaturesInsertResponse = {
  __typename?: "user_featuresInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<UserFeatures>;
};

export type UserFeaturesOrderBy = {
  feature?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  user?: InputMaybe<OrderByDirection>;
};

export type UserFeaturesUpdateInput = {
  feature?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  user?: InputMaybe<Scalars["UUID"]>;
};

export type UserFeaturesUpdateResponse = {
  __typename?: "user_featuresUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<UserFeatures>;
};

export type UserRoles = Node & {
  __typename?: "user_roles";
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"];
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
  nodeId?: InputMaybe<IdFilter>;
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

export type UserWatched = Node & {
  __typename?: "user_watched";
  episode: Scalars["UUID"];
  episodes?: Maybe<Episodes>;
  id: Scalars["UUID"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"];
  profiles?: Maybe<Profiles>;
  user: Scalars["UUID"];
};

export type UserWatchedConnection = {
  __typename?: "user_watchedConnection";
  edges: Array<UserWatchedEdge>;
  pageInfo: PageInfo;
};

export type UserWatchedDeleteResponse = {
  __typename?: "user_watchedDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<UserWatched>;
};

export type UserWatchedEdge = {
  __typename?: "user_watchedEdge";
  cursor: Scalars["String"];
  node: UserWatched;
};

export type UserWatchedFilter = {
  episode?: InputMaybe<UuidFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  user?: InputMaybe<UuidFilter>;
};

export type UserWatchedInsertInput = {
  episode?: InputMaybe<Scalars["UUID"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  user?: InputMaybe<Scalars["UUID"]>;
};

export type UserWatchedInsertResponse = {
  __typename?: "user_watchedInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<UserWatched>;
};

export type UserWatchedOrderBy = {
  episode?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  user?: InputMaybe<OrderByDirection>;
};

export type UserWatchedUpdateInput = {
  episode?: InputMaybe<Scalars["UUID"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  user?: InputMaybe<Scalars["UUID"]>;
};

export type UserWatchedUpdateResponse = {
  __typename?: "user_watchedUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<UserWatched>;
};

export type WithTypename<T extends { __typename?: any }> = Partial<T> & {
  __typename: NonNullable<T["__typename"]>;
};

export type GraphCacheKeysConfig = {
  PageInfo?: (data: WithTypename<PageInfo>) => null | string;
  api_tokens?: (data: WithTypename<ApiTokens>) => null | string;
  api_tokensConnection?: (
    data: WithTypename<ApiTokensConnection>
  ) => null | string;
  api_tokensDeleteResponse?: (
    data: WithTypename<ApiTokensDeleteResponse>
  ) => null | string;
  api_tokensEdge?: (data: WithTypename<ApiTokensEdge>) => null | string;
  api_tokensInsertResponse?: (
    data: WithTypename<ApiTokensInsertResponse>
  ) => null | string;
  api_tokensUpdateResponse?: (
    data: WithTypename<ApiTokensUpdateResponse>
  ) => null | string;
  contestant_seasons?: (data: WithTypename<ContestantSeasons>) => null | string;
  contestant_seasonsConnection?: (
    data: WithTypename<ContestantSeasonsConnection>
  ) => null | string;
  contestant_seasonsDeleteResponse?: (
    data: WithTypename<ContestantSeasonsDeleteResponse>
  ) => null | string;
  contestant_seasonsEdge?: (
    data: WithTypename<ContestantSeasonsEdge>
  ) => null | string;
  contestant_seasonsInsertResponse?: (
    data: WithTypename<ContestantSeasonsInsertResponse>
  ) => null | string;
  contestant_seasonsUpdateResponse?: (
    data: WithTypename<ContestantSeasonsUpdateResponse>
  ) => null | string;
  contestants?: (data: WithTypename<Contestants>) => null | string;
  contestantsConnection?: (
    data: WithTypename<ContestantsConnection>
  ) => null | string;
  contestantsDeleteResponse?: (
    data: WithTypename<ContestantsDeleteResponse>
  ) => null | string;
  contestantsEdge?: (data: WithTypename<ContestantsEdge>) => null | string;
  contestantsInsertResponse?: (
    data: WithTypename<ContestantsInsertResponse>
  ) => null | string;
  contestantsUpdateResponse?: (
    data: WithTypename<ContestantsUpdateResponse>
  ) => null | string;
  episodes?: (data: WithTypename<Episodes>) => null | string;
  episodesConnection?: (
    data: WithTypename<EpisodesConnection>
  ) => null | string;
  episodesDeleteResponse?: (
    data: WithTypename<EpisodesDeleteResponse>
  ) => null | string;
  episodesEdge?: (data: WithTypename<EpisodesEdge>) => null | string;
  episodesInsertResponse?: (
    data: WithTypename<EpisodesInsertResponse>
  ) => null | string;
  episodesUpdateResponse?: (
    data: WithTypename<EpisodesUpdateResponse>
  ) => null | string;
  events?: (data: WithTypename<Events>) => null | string;
  eventsConnection?: (data: WithTypename<EventsConnection>) => null | string;
  eventsDeleteResponse?: (
    data: WithTypename<EventsDeleteResponse>
  ) => null | string;
  eventsEdge?: (data: WithTypename<EventsEdge>) => null | string;
  eventsInsertResponse?: (
    data: WithTypename<EventsInsertResponse>
  ) => null | string;
  eventsUpdateResponse?: (
    data: WithTypename<EventsUpdateResponse>
  ) => null | string;
  league_formats?: (data: WithTypename<LeagueFormats>) => null | string;
  league_formatsConnection?: (
    data: WithTypename<LeagueFormatsConnection>
  ) => null | string;
  league_formatsDeleteResponse?: (
    data: WithTypename<LeagueFormatsDeleteResponse>
  ) => null | string;
  league_formatsEdge?: (data: WithTypename<LeagueFormatsEdge>) => null | string;
  league_formatsInsertResponse?: (
    data: WithTypename<LeagueFormatsInsertResponse>
  ) => null | string;
  league_formatsUpdateResponse?: (
    data: WithTypename<LeagueFormatsUpdateResponse>
  ) => null | string;
  league_participants?: (
    data: WithTypename<LeagueParticipants>
  ) => null | string;
  league_participantsConnection?: (
    data: WithTypename<LeagueParticipantsConnection>
  ) => null | string;
  league_participantsDeleteResponse?: (
    data: WithTypename<LeagueParticipantsDeleteResponse>
  ) => null | string;
  league_participantsEdge?: (
    data: WithTypename<LeagueParticipantsEdge>
  ) => null | string;
  league_participantsInsertResponse?: (
    data: WithTypename<LeagueParticipantsInsertResponse>
  ) => null | string;
  league_participantsUpdateResponse?: (
    data: WithTypename<LeagueParticipantsUpdateResponse>
  ) => null | string;
  leagues?: (data: WithTypename<Leagues>) => null | string;
  leaguesConnection?: (data: WithTypename<LeaguesConnection>) => null | string;
  leaguesDeleteResponse?: (
    data: WithTypename<LeaguesDeleteResponse>
  ) => null | string;
  leaguesEdge?: (data: WithTypename<LeaguesEdge>) => null | string;
  leaguesInsertResponse?: (
    data: WithTypename<LeaguesInsertResponse>
  ) => null | string;
  leaguesUpdateResponse?: (
    data: WithTypename<LeaguesUpdateResponse>
  ) => null | string;
  lp_contestants?: (data: WithTypename<LpContestants>) => null | string;
  lp_contestantsConnection?: (
    data: WithTypename<LpContestantsConnection>
  ) => null | string;
  lp_contestantsDeleteResponse?: (
    data: WithTypename<LpContestantsDeleteResponse>
  ) => null | string;
  lp_contestantsEdge?: (data: WithTypename<LpContestantsEdge>) => null | string;
  lp_contestantsInsertResponse?: (
    data: WithTypename<LpContestantsInsertResponse>
  ) => null | string;
  lp_contestantsUpdateResponse?: (
    data: WithTypename<LpContestantsUpdateResponse>
  ) => null | string;
  profiles?: (data: WithTypename<Profiles>) => null | string;
  profilesConnection?: (
    data: WithTypename<ProfilesConnection>
  ) => null | string;
  profilesEdge?: (data: WithTypename<ProfilesEdge>) => null | string;
  reality_series?: (data: WithTypename<RealitySeries>) => null | string;
  reality_seriesConnection?: (
    data: WithTypename<RealitySeriesConnection>
  ) => null | string;
  reality_seriesDeleteResponse?: (
    data: WithTypename<RealitySeriesDeleteResponse>
  ) => null | string;
  reality_seriesEdge?: (data: WithTypename<RealitySeriesEdge>) => null | string;
  reality_seriesInsertResponse?: (
    data: WithTypename<RealitySeriesInsertResponse>
  ) => null | string;
  reality_seriesUpdateResponse?: (
    data: WithTypename<RealitySeriesUpdateResponse>
  ) => null | string;
  roles?: (data: WithTypename<Roles>) => null | string;
  rolesConnection?: (data: WithTypename<RolesConnection>) => null | string;
  rolesDeleteResponse?: (
    data: WithTypename<RolesDeleteResponse>
  ) => null | string;
  rolesEdge?: (data: WithTypename<RolesEdge>) => null | string;
  rolesInsertResponse?: (
    data: WithTypename<RolesInsertResponse>
  ) => null | string;
  rolesUpdateResponse?: (
    data: WithTypename<RolesUpdateResponse>
  ) => null | string;
  rs_league_formats?: (data: WithTypename<RsLeagueFormats>) => null | string;
  rs_league_formatsConnection?: (
    data: WithTypename<RsLeagueFormatsConnection>
  ) => null | string;
  rs_league_formatsDeleteResponse?: (
    data: WithTypename<RsLeagueFormatsDeleteResponse>
  ) => null | string;
  rs_league_formatsEdge?: (
    data: WithTypename<RsLeagueFormatsEdge>
  ) => null | string;
  rs_league_formatsInsertResponse?: (
    data: WithTypename<RsLeagueFormatsInsertResponse>
  ) => null | string;
  rs_league_formatsUpdateResponse?: (
    data: WithTypename<RsLeagueFormatsUpdateResponse>
  ) => null | string;
  rules?: (data: WithTypename<Rules>) => null | string;
  rulesConnection?: (data: WithTypename<RulesConnection>) => null | string;
  rulesDeleteResponse?: (
    data: WithTypename<RulesDeleteResponse>
  ) => null | string;
  rulesEdge?: (data: WithTypename<RulesEdge>) => null | string;
  rulesInsertResponse?: (
    data: WithTypename<RulesInsertResponse>
  ) => null | string;
  rulesUpdateResponse?: (
    data: WithTypename<RulesUpdateResponse>
  ) => null | string;
  rulesets?: (data: WithTypename<Rulesets>) => null | string;
  rulesetsConnection?: (
    data: WithTypename<RulesetsConnection>
  ) => null | string;
  rulesetsDeleteResponse?: (
    data: WithTypename<RulesetsDeleteResponse>
  ) => null | string;
  rulesetsEdge?: (data: WithTypename<RulesetsEdge>) => null | string;
  rulesetsInsertResponse?: (
    data: WithTypename<RulesetsInsertResponse>
  ) => null | string;
  rulesetsUpdateResponse?: (
    data: WithTypename<RulesetsUpdateResponse>
  ) => null | string;
  seasons?: (data: WithTypename<Seasons>) => null | string;
  seasonsConnection?: (data: WithTypename<SeasonsConnection>) => null | string;
  seasonsDeleteResponse?: (
    data: WithTypename<SeasonsDeleteResponse>
  ) => null | string;
  seasonsEdge?: (data: WithTypename<SeasonsEdge>) => null | string;
  seasonsInsertResponse?: (
    data: WithTypename<SeasonsInsertResponse>
  ) => null | string;
  seasonsUpdateResponse?: (
    data: WithTypename<SeasonsUpdateResponse>
  ) => null | string;
  user_fcm_tokens?: (data: WithTypename<UserFcmTokens>) => null | string;
  user_fcm_tokensConnection?: (
    data: WithTypename<UserFcmTokensConnection>
  ) => null | string;
  user_fcm_tokensDeleteResponse?: (
    data: WithTypename<UserFcmTokensDeleteResponse>
  ) => null | string;
  user_fcm_tokensEdge?: (
    data: WithTypename<UserFcmTokensEdge>
  ) => null | string;
  user_fcm_tokensInsertResponse?: (
    data: WithTypename<UserFcmTokensInsertResponse>
  ) => null | string;
  user_fcm_tokensUpdateResponse?: (
    data: WithTypename<UserFcmTokensUpdateResponse>
  ) => null | string;
  user_features?: (data: WithTypename<UserFeatures>) => null | string;
  user_featuresConnection?: (
    data: WithTypename<UserFeaturesConnection>
  ) => null | string;
  user_featuresDeleteResponse?: (
    data: WithTypename<UserFeaturesDeleteResponse>
  ) => null | string;
  user_featuresEdge?: (data: WithTypename<UserFeaturesEdge>) => null | string;
  user_featuresInsertResponse?: (
    data: WithTypename<UserFeaturesInsertResponse>
  ) => null | string;
  user_featuresUpdateResponse?: (
    data: WithTypename<UserFeaturesUpdateResponse>
  ) => null | string;
  user_roles?: (data: WithTypename<UserRoles>) => null | string;
  user_rolesConnection?: (
    data: WithTypename<UserRolesConnection>
  ) => null | string;
  user_rolesDeleteResponse?: (
    data: WithTypename<UserRolesDeleteResponse>
  ) => null | string;
  user_rolesEdge?: (data: WithTypename<UserRolesEdge>) => null | string;
  user_rolesInsertResponse?: (
    data: WithTypename<UserRolesInsertResponse>
  ) => null | string;
  user_rolesUpdateResponse?: (
    data: WithTypename<UserRolesUpdateResponse>
  ) => null | string;
  user_watched?: (data: WithTypename<UserWatched>) => null | string;
  user_watchedConnection?: (
    data: WithTypename<UserWatchedConnection>
  ) => null | string;
  user_watchedDeleteResponse?: (
    data: WithTypename<UserWatchedDeleteResponse>
  ) => null | string;
  user_watchedEdge?: (data: WithTypename<UserWatchedEdge>) => null | string;
  user_watchedInsertResponse?: (
    data: WithTypename<UserWatchedInsertResponse>
  ) => null | string;
  user_watchedUpdateResponse?: (
    data: WithTypename<UserWatchedUpdateResponse>
  ) => null | string;
};

export type GraphCacheResolvers = {
  Query?: {
    api_tokensCollection?: GraphCacheResolver<
      WithTypename<Query>,
      QueryApiTokensCollectionArgs,
      WithTypename<ApiTokensConnection> | string
    >;
    contestant_seasonsCollection?: GraphCacheResolver<
      WithTypename<Query>,
      QueryContestantSeasonsCollectionArgs,
      WithTypename<ContestantSeasonsConnection> | string
    >;
    contestantsCollection?: GraphCacheResolver<
      WithTypename<Query>,
      QueryContestantsCollectionArgs,
      WithTypename<ContestantsConnection> | string
    >;
    episodesCollection?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEpisodesCollectionArgs,
      WithTypename<EpisodesConnection> | string
    >;
    eventsCollection?: GraphCacheResolver<
      WithTypename<Query>,
      QueryEventsCollectionArgs,
      WithTypename<EventsConnection> | string
    >;
    league_formatsCollection?: GraphCacheResolver<
      WithTypename<Query>,
      QueryLeagueFormatsCollectionArgs,
      WithTypename<LeagueFormatsConnection> | string
    >;
    league_participantsCollection?: GraphCacheResolver<
      WithTypename<Query>,
      QueryLeagueParticipantsCollectionArgs,
      WithTypename<LeagueParticipantsConnection> | string
    >;
    leaguesCollection?: GraphCacheResolver<
      WithTypename<Query>,
      QueryLeaguesCollectionArgs,
      WithTypename<LeaguesConnection> | string
    >;
    lp_contestantsCollection?: GraphCacheResolver<
      WithTypename<Query>,
      QueryLpContestantsCollectionArgs,
      WithTypename<LpContestantsConnection> | string
    >;
    node?: GraphCacheResolver<
      WithTypename<Query>,
      QueryNodeArgs,
      | WithTypename<ApiTokens>
      | WithTypename<ContestantSeasons>
      | WithTypename<Contestants>
      | WithTypename<Episodes>
      | WithTypename<Events>
      | WithTypename<LeagueFormats>
      | WithTypename<LeagueParticipants>
      | WithTypename<Leagues>
      | WithTypename<LpContestants>
      | WithTypename<Profiles>
      | WithTypename<RealitySeries>
      | WithTypename<Roles>
      | WithTypename<RsLeagueFormats>
      | WithTypename<Rules>
      | WithTypename<Rulesets>
      | WithTypename<Seasons>
      | WithTypename<UserFcmTokens>
      | WithTypename<UserFeatures>
      | WithTypename<UserRoles>
      | WithTypename<UserWatched>
      | string
    >;
    profilesCollection?: GraphCacheResolver<
      WithTypename<Query>,
      QueryProfilesCollectionArgs,
      WithTypename<ProfilesConnection> | string
    >;
    reality_seriesCollection?: GraphCacheResolver<
      WithTypename<Query>,
      QueryRealitySeriesCollectionArgs,
      WithTypename<RealitySeriesConnection> | string
    >;
    rolesCollection?: GraphCacheResolver<
      WithTypename<Query>,
      QueryRolesCollectionArgs,
      WithTypename<RolesConnection> | string
    >;
    rs_league_formatsCollection?: GraphCacheResolver<
      WithTypename<Query>,
      QueryRsLeagueFormatsCollectionArgs,
      WithTypename<RsLeagueFormatsConnection> | string
    >;
    rulesCollection?: GraphCacheResolver<
      WithTypename<Query>,
      QueryRulesCollectionArgs,
      WithTypename<RulesConnection> | string
    >;
    rulesetsCollection?: GraphCacheResolver<
      WithTypename<Query>,
      QueryRulesetsCollectionArgs,
      WithTypename<RulesetsConnection> | string
    >;
    seasonsCollection?: GraphCacheResolver<
      WithTypename<Query>,
      QuerySeasonsCollectionArgs,
      WithTypename<SeasonsConnection> | string
    >;
    user_fcm_tokensCollection?: GraphCacheResolver<
      WithTypename<Query>,
      QueryUserFcmTokensCollectionArgs,
      WithTypename<UserFcmTokensConnection> | string
    >;
    user_featuresCollection?: GraphCacheResolver<
      WithTypename<Query>,
      QueryUserFeaturesCollectionArgs,
      WithTypename<UserFeaturesConnection> | string
    >;
    user_rolesCollection?: GraphCacheResolver<
      WithTypename<Query>,
      QueryUserRolesCollectionArgs,
      WithTypename<UserRolesConnection> | string
    >;
    user_watchedCollection?: GraphCacheResolver<
      WithTypename<Query>,
      QueryUserWatchedCollectionArgs,
      WithTypename<UserWatchedConnection> | string
    >;
  };
  PageInfo?: {
    endCursor?: GraphCacheResolver<
      WithTypename<PageInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    hasNextPage?: GraphCacheResolver<
      WithTypename<PageInfo>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    hasPreviousPage?: GraphCacheResolver<
      WithTypename<PageInfo>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    startCursor?: GraphCacheResolver<
      WithTypename<PageInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  api_tokens?: {
    id?: GraphCacheResolver<
      WithTypename<ApiTokens>,
      Record<string, never>,
      Scalars["UUID"] | string
    >;
    name?: GraphCacheResolver<
      WithTypename<ApiTokens>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    nodeId?: GraphCacheResolver<
      WithTypename<ApiTokens>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    owner?: GraphCacheResolver<
      WithTypename<ApiTokens>,
      Record<string, never>,
      Scalars["UUID"] | string
    >;
    profiles?: GraphCacheResolver<
      WithTypename<ApiTokens>,
      Record<string, never>,
      WithTypename<Profiles> | string
    >;
    token?: GraphCacheResolver<
      WithTypename<ApiTokens>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  api_tokensConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<ApiTokensConnection>,
      Record<string, never>,
      Array<WithTypename<ApiTokensEdge> | string>
    >;
    pageInfo?: GraphCacheResolver<
      WithTypename<ApiTokensConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >;
  };
  api_tokensDeleteResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<ApiTokensDeleteResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<ApiTokensDeleteResponse>,
      Record<string, never>,
      Array<WithTypename<ApiTokens> | string>
    >;
  };
  api_tokensEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<ApiTokensEdge>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    node?: GraphCacheResolver<
      WithTypename<ApiTokensEdge>,
      Record<string, never>,
      WithTypename<ApiTokens> | string
    >;
  };
  api_tokensInsertResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<ApiTokensInsertResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<ApiTokensInsertResponse>,
      Record<string, never>,
      Array<WithTypename<ApiTokens> | string>
    >;
  };
  api_tokensUpdateResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<ApiTokensUpdateResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<ApiTokensUpdateResponse>,
      Record<string, never>,
      Array<WithTypename<ApiTokens> | string>
    >;
  };
  contestant_seasons?: {
    age?: GraphCacheResolver<
      WithTypename<ContestantSeasons>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    avatar_src?: GraphCacheResolver<
      WithTypename<ContestantSeasons>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    contestant?: GraphCacheResolver<
      WithTypename<ContestantSeasons>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    contestants?: GraphCacheResolver<
      WithTypename<ContestantSeasons>,
      Record<string, never>,
      WithTypename<Contestants> | string
    >;
    eventsCollection?: GraphCacheResolver<
      WithTypename<ContestantSeasons>,
      ContestantSeasonsEventsCollectionArgs,
      WithTypename<EventsConnection> | string
    >;
    hometown?: GraphCacheResolver<
      WithTypename<ContestantSeasons>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<ContestantSeasons>,
      Record<string, never>,
      Scalars["UUID"] | string
    >;
    lp_contestantsCollection?: GraphCacheResolver<
      WithTypename<ContestantSeasons>,
      ContestantSeasonsLpContestantsCollectionArgs,
      WithTypename<LpContestantsConnection> | string
    >;
    nodeId?: GraphCacheResolver<
      WithTypename<ContestantSeasons>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    occupation?: GraphCacheResolver<
      WithTypename<ContestantSeasons>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    portrait_src?: GraphCacheResolver<
      WithTypename<ContestantSeasons>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    season?: GraphCacheResolver<
      WithTypename<ContestantSeasons>,
      Record<string, never>,
      Scalars["UUID"] | string
    >;
    seasons?: GraphCacheResolver<
      WithTypename<ContestantSeasons>,
      Record<string, never>,
      WithTypename<Seasons> | string
    >;
    team_color?: GraphCacheResolver<
      WithTypename<ContestantSeasons>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  contestant_seasonsConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<ContestantSeasonsConnection>,
      Record<string, never>,
      Array<WithTypename<ContestantSeasonsEdge> | string>
    >;
    pageInfo?: GraphCacheResolver<
      WithTypename<ContestantSeasonsConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >;
  };
  contestant_seasonsDeleteResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<ContestantSeasonsDeleteResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<ContestantSeasonsDeleteResponse>,
      Record<string, never>,
      Array<WithTypename<ContestantSeasons> | string>
    >;
  };
  contestant_seasonsEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<ContestantSeasonsEdge>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    node?: GraphCacheResolver<
      WithTypename<ContestantSeasonsEdge>,
      Record<string, never>,
      WithTypename<ContestantSeasons> | string
    >;
  };
  contestant_seasonsInsertResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<ContestantSeasonsInsertResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<ContestantSeasonsInsertResponse>,
      Record<string, never>,
      Array<WithTypename<ContestantSeasons> | string>
    >;
  };
  contestant_seasonsUpdateResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<ContestantSeasonsUpdateResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<ContestantSeasonsUpdateResponse>,
      Record<string, never>,
      Array<WithTypename<ContestantSeasons> | string>
    >;
  };
  contestants?: {
    contestant_seasonsCollection?: GraphCacheResolver<
      WithTypename<Contestants>,
      ContestantsContestantSeasonsCollectionArgs,
      WithTypename<ContestantSeasonsConnection> | string
    >;
    firstname?: GraphCacheResolver<
      WithTypename<Contestants>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    nickname?: GraphCacheResolver<
      WithTypename<Contestants>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    nodeId?: GraphCacheResolver<
      WithTypename<Contestants>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    slug?: GraphCacheResolver<
      WithTypename<Contestants>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    surname?: GraphCacheResolver<
      WithTypename<Contestants>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  contestantsConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<ContestantsConnection>,
      Record<string, never>,
      Array<WithTypename<ContestantsEdge> | string>
    >;
    pageInfo?: GraphCacheResolver<
      WithTypename<ContestantsConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >;
  };
  contestantsDeleteResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<ContestantsDeleteResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<ContestantsDeleteResponse>,
      Record<string, never>,
      Array<WithTypename<Contestants> | string>
    >;
  };
  contestantsEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<ContestantsEdge>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    node?: GraphCacheResolver<
      WithTypename<ContestantsEdge>,
      Record<string, never>,
      WithTypename<Contestants> | string
    >;
  };
  contestantsInsertResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<ContestantsInsertResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<ContestantsInsertResponse>,
      Record<string, never>,
      Array<WithTypename<Contestants> | string>
    >;
  };
  contestantsUpdateResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<ContestantsUpdateResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<ContestantsUpdateResponse>,
      Record<string, never>,
      Array<WithTypename<Contestants> | string>
    >;
  };
  episodes?: {
    eventsCollection?: GraphCacheResolver<
      WithTypename<Episodes>,
      EpisodesEventsCollectionArgs,
      WithTypename<EventsConnection> | string
    >;
    id?: GraphCacheResolver<
      WithTypename<Episodes>,
      Record<string, never>,
      Scalars["UUID"] | string
    >;
    nodeId?: GraphCacheResolver<
      WithTypename<Episodes>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    season?: GraphCacheResolver<
      WithTypename<Episodes>,
      Record<string, never>,
      Scalars["UUID"] | string
    >;
    seasons?: GraphCacheResolver<
      WithTypename<Episodes>,
      Record<string, never>,
      WithTypename<Seasons> | string
    >;
    start_time?: GraphCacheResolver<
      WithTypename<Episodes>,
      Record<string, never>,
      Scalars["Datetime"] | string
    >;
    user_watchedCollection?: GraphCacheResolver<
      WithTypename<Episodes>,
      EpisodesUserWatchedCollectionArgs,
      WithTypename<UserWatchedConnection> | string
    >;
  };
  episodesConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<EpisodesConnection>,
      Record<string, never>,
      Array<WithTypename<EpisodesEdge> | string>
    >;
    pageInfo?: GraphCacheResolver<
      WithTypename<EpisodesConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >;
  };
  episodesDeleteResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<EpisodesDeleteResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<EpisodesDeleteResponse>,
      Record<string, never>,
      Array<WithTypename<Episodes> | string>
    >;
  };
  episodesEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<EpisodesEdge>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    node?: GraphCacheResolver<
      WithTypename<EpisodesEdge>,
      Record<string, never>,
      WithTypename<Episodes> | string
    >;
  };
  episodesInsertResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<EpisodesInsertResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<EpisodesInsertResponse>,
      Record<string, never>,
      Array<WithTypename<Episodes> | string>
    >;
  };
  episodesUpdateResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<EpisodesUpdateResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<EpisodesUpdateResponse>,
      Record<string, never>,
      Array<WithTypename<Episodes> | string>
    >;
  };
  events?: {
    comment?: GraphCacheResolver<
      WithTypename<Events>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    contestant_season?: GraphCacheResolver<
      WithTypename<Events>,
      Record<string, never>,
      Scalars["UUID"] | string
    >;
    contestant_seasons?: GraphCacheResolver<
      WithTypename<Events>,
      Record<string, never>,
      WithTypename<ContestantSeasons> | string
    >;
    episode?: GraphCacheResolver<
      WithTypename<Events>,
      Record<string, never>,
      Scalars["UUID"] | string
    >;
    episodes?: GraphCacheResolver<
      WithTypename<Events>,
      Record<string, never>,
      WithTypename<Episodes> | string
    >;
    id?: GraphCacheResolver<
      WithTypename<Events>,
      Record<string, never>,
      Scalars["UUID"] | string
    >;
    nodeId?: GraphCacheResolver<
      WithTypename<Events>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    rule?: GraphCacheResolver<
      WithTypename<Events>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    rules?: GraphCacheResolver<
      WithTypename<Events>,
      Record<string, never>,
      WithTypename<Rules> | string
    >;
  };
  eventsConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<EventsConnection>,
      Record<string, never>,
      Array<WithTypename<EventsEdge> | string>
    >;
    pageInfo?: GraphCacheResolver<
      WithTypename<EventsConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >;
  };
  eventsDeleteResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<EventsDeleteResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<EventsDeleteResponse>,
      Record<string, never>,
      Array<WithTypename<Events> | string>
    >;
  };
  eventsEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<EventsEdge>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    node?: GraphCacheResolver<
      WithTypename<EventsEdge>,
      Record<string, never>,
      WithTypename<Events> | string
    >;
  };
  eventsInsertResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<EventsInsertResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<EventsInsertResponse>,
      Record<string, never>,
      Array<WithTypename<Events> | string>
    >;
  };
  eventsUpdateResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<EventsUpdateResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<EventsUpdateResponse>,
      Record<string, never>,
      Array<WithTypename<Events> | string>
    >;
  };
  league_formats?: {
    description?: GraphCacheResolver<
      WithTypename<LeagueFormats>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<LeagueFormats>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    leaguesCollection?: GraphCacheResolver<
      WithTypename<LeagueFormats>,
      LeagueFormatsLeaguesCollectionArgs,
      WithTypename<LeaguesConnection> | string
    >;
    nodeId?: GraphCacheResolver<
      WithTypename<LeagueFormats>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    rs_league_formatsCollection?: GraphCacheResolver<
      WithTypename<LeagueFormats>,
      LeagueFormatsRsLeagueFormatsCollectionArgs,
      WithTypename<RsLeagueFormatsConnection> | string
    >;
    title?: GraphCacheResolver<
      WithTypename<LeagueFormats>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  league_formatsConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<LeagueFormatsConnection>,
      Record<string, never>,
      Array<WithTypename<LeagueFormatsEdge> | string>
    >;
    pageInfo?: GraphCacheResolver<
      WithTypename<LeagueFormatsConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >;
  };
  league_formatsDeleteResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<LeagueFormatsDeleteResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<LeagueFormatsDeleteResponse>,
      Record<string, never>,
      Array<WithTypename<LeagueFormats> | string>
    >;
  };
  league_formatsEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<LeagueFormatsEdge>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    node?: GraphCacheResolver<
      WithTypename<LeagueFormatsEdge>,
      Record<string, never>,
      WithTypename<LeagueFormats> | string
    >;
  };
  league_formatsInsertResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<LeagueFormatsInsertResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<LeagueFormatsInsertResponse>,
      Record<string, never>,
      Array<WithTypename<LeagueFormats> | string>
    >;
  };
  league_formatsUpdateResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<LeagueFormatsUpdateResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<LeagueFormatsUpdateResponse>,
      Record<string, never>,
      Array<WithTypename<LeagueFormats> | string>
    >;
  };
  league_participants?: {
    created_at?: GraphCacheResolver<
      WithTypename<LeagueParticipants>,
      Record<string, never>,
      Scalars["Datetime"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<LeagueParticipants>,
      Record<string, never>,
      Scalars["UUID"] | string
    >;
    league?: GraphCacheResolver<
      WithTypename<LeagueParticipants>,
      Record<string, never>,
      Scalars["UUID"] | string
    >;
    leagues?: GraphCacheResolver<
      WithTypename<LeagueParticipants>,
      Record<string, never>,
      WithTypename<Leagues> | string
    >;
    lp_contestantsCollection?: GraphCacheResolver<
      WithTypename<LeagueParticipants>,
      LeagueParticipantsLpContestantsCollectionArgs,
      WithTypename<LpContestantsConnection> | string
    >;
    nodeId?: GraphCacheResolver<
      WithTypename<LeagueParticipants>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    participant?: GraphCacheResolver<
      WithTypename<LeagueParticipants>,
      Record<string, never>,
      Scalars["UUID"] | string
    >;
    profiles?: GraphCacheResolver<
      WithTypename<LeagueParticipants>,
      Record<string, never>,
      WithTypename<Profiles> | string
    >;
  };
  league_participantsConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<LeagueParticipantsConnection>,
      Record<string, never>,
      Array<WithTypename<LeagueParticipantsEdge> | string>
    >;
    pageInfo?: GraphCacheResolver<
      WithTypename<LeagueParticipantsConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >;
  };
  league_participantsDeleteResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<LeagueParticipantsDeleteResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<LeagueParticipantsDeleteResponse>,
      Record<string, never>,
      Array<WithTypename<LeagueParticipants> | string>
    >;
  };
  league_participantsEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<LeagueParticipantsEdge>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    node?: GraphCacheResolver<
      WithTypename<LeagueParticipantsEdge>,
      Record<string, never>,
      WithTypename<LeagueParticipants> | string
    >;
  };
  league_participantsInsertResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<LeagueParticipantsInsertResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<LeagueParticipantsInsertResponse>,
      Record<string, never>,
      Array<WithTypename<LeagueParticipants> | string>
    >;
  };
  league_participantsUpdateResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<LeagueParticipantsUpdateResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<LeagueParticipantsUpdateResponse>,
      Record<string, never>,
      Array<WithTypename<LeagueParticipants> | string>
    >;
  };
  leagues?: {
    created_at?: GraphCacheResolver<
      WithTypename<Leagues>,
      Record<string, never>,
      Scalars["Datetime"] | string
    >;
    created_by?: GraphCacheResolver<
      WithTypename<Leagues>,
      Record<string, never>,
      Scalars["UUID"] | string
    >;
    format?: GraphCacheResolver<
      WithTypename<Leagues>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<Leagues>,
      Record<string, never>,
      Scalars["UUID"] | string
    >;
    is_private?: GraphCacheResolver<
      WithTypename<Leagues>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    league_formats?: GraphCacheResolver<
      WithTypename<Leagues>,
      Record<string, never>,
      WithTypename<LeagueFormats> | string
    >;
    league_participantsCollection?: GraphCacheResolver<
      WithTypename<Leagues>,
      LeaguesLeagueParticipantsCollectionArgs,
      WithTypename<LeagueParticipantsConnection> | string
    >;
    nodeId?: GraphCacheResolver<
      WithTypename<Leagues>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    profiles?: GraphCacheResolver<
      WithTypename<Leagues>,
      Record<string, never>,
      WithTypename<Profiles> | string
    >;
    ruleset?: GraphCacheResolver<
      WithTypename<Leagues>,
      Record<string, never>,
      Scalars["UUID"] | string
    >;
    rulesets?: GraphCacheResolver<
      WithTypename<Leagues>,
      Record<string, never>,
      WithTypename<Rulesets> | string
    >;
    season?: GraphCacheResolver<
      WithTypename<Leagues>,
      Record<string, never>,
      Scalars["UUID"] | string
    >;
    seasons?: GraphCacheResolver<
      WithTypename<Leagues>,
      Record<string, never>,
      WithTypename<Seasons> | string
    >;
    slug?: GraphCacheResolver<
      WithTypename<Leagues>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    title?: GraphCacheResolver<
      WithTypename<Leagues>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  leaguesConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<LeaguesConnection>,
      Record<string, never>,
      Array<WithTypename<LeaguesEdge> | string>
    >;
    pageInfo?: GraphCacheResolver<
      WithTypename<LeaguesConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >;
  };
  leaguesDeleteResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<LeaguesDeleteResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<LeaguesDeleteResponse>,
      Record<string, never>,
      Array<WithTypename<Leagues> | string>
    >;
  };
  leaguesEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<LeaguesEdge>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    node?: GraphCacheResolver<
      WithTypename<LeaguesEdge>,
      Record<string, never>,
      WithTypename<Leagues> | string
    >;
  };
  leaguesInsertResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<LeaguesInsertResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<LeaguesInsertResponse>,
      Record<string, never>,
      Array<WithTypename<Leagues> | string>
    >;
  };
  leaguesUpdateResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<LeaguesUpdateResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<LeaguesUpdateResponse>,
      Record<string, never>,
      Array<WithTypename<Leagues> | string>
    >;
  };
  lp_contestants?: {
    contestant_season?: GraphCacheResolver<
      WithTypename<LpContestants>,
      Record<string, never>,
      Scalars["UUID"] | string
    >;
    contestant_seasons?: GraphCacheResolver<
      WithTypename<LpContestants>,
      Record<string, never>,
      WithTypename<ContestantSeasons> | string
    >;
    id?: GraphCacheResolver<
      WithTypename<LpContestants>,
      Record<string, never>,
      Scalars["UUID"] | string
    >;
    league_participant?: GraphCacheResolver<
      WithTypename<LpContestants>,
      Record<string, never>,
      Scalars["UUID"] | string
    >;
    league_participants?: GraphCacheResolver<
      WithTypename<LpContestants>,
      Record<string, never>,
      WithTypename<LeagueParticipants> | string
    >;
    nodeId?: GraphCacheResolver<
      WithTypename<LpContestants>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    rank?: GraphCacheResolver<
      WithTypename<LpContestants>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    updated_at?: GraphCacheResolver<
      WithTypename<LpContestants>,
      Record<string, never>,
      Scalars["Datetime"] | string
    >;
  };
  lp_contestantsConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<LpContestantsConnection>,
      Record<string, never>,
      Array<WithTypename<LpContestantsEdge> | string>
    >;
    pageInfo?: GraphCacheResolver<
      WithTypename<LpContestantsConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >;
  };
  lp_contestantsDeleteResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<LpContestantsDeleteResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<LpContestantsDeleteResponse>,
      Record<string, never>,
      Array<WithTypename<LpContestants> | string>
    >;
  };
  lp_contestantsEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<LpContestantsEdge>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    node?: GraphCacheResolver<
      WithTypename<LpContestantsEdge>,
      Record<string, never>,
      WithTypename<LpContestants> | string
    >;
  };
  lp_contestantsInsertResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<LpContestantsInsertResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<LpContestantsInsertResponse>,
      Record<string, never>,
      Array<WithTypename<LpContestants> | string>
    >;
  };
  lp_contestantsUpdateResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<LpContestantsUpdateResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<LpContestantsUpdateResponse>,
      Record<string, never>,
      Array<WithTypename<LpContestants> | string>
    >;
  };
  profiles?: {
    api_tokensCollection?: GraphCacheResolver<
      WithTypename<Profiles>,
      ProfilesApiTokensCollectionArgs,
      WithTypename<ApiTokensConnection> | string
    >;
    display_name?: GraphCacheResolver<
      WithTypename<Profiles>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<Profiles>,
      Record<string, never>,
      Scalars["UUID"] | string
    >;
    league_participantsCollection?: GraphCacheResolver<
      WithTypename<Profiles>,
      ProfilesLeagueParticipantsCollectionArgs,
      WithTypename<LeagueParticipantsConnection> | string
    >;
    leaguesCollection?: GraphCacheResolver<
      WithTypename<Profiles>,
      ProfilesLeaguesCollectionArgs,
      WithTypename<LeaguesConnection> | string
    >;
    nodeId?: GraphCacheResolver<
      WithTypename<Profiles>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    rulesetsCollection?: GraphCacheResolver<
      WithTypename<Profiles>,
      ProfilesRulesetsCollectionArgs,
      WithTypename<RulesetsConnection> | string
    >;
    thumbnail_src?: GraphCacheResolver<
      WithTypename<Profiles>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    user_fcm_tokensCollection?: GraphCacheResolver<
      WithTypename<Profiles>,
      ProfilesUserFcmTokensCollectionArgs,
      WithTypename<UserFcmTokensConnection> | string
    >;
    user_featuresCollection?: GraphCacheResolver<
      WithTypename<Profiles>,
      ProfilesUserFeaturesCollectionArgs,
      WithTypename<UserFeaturesConnection> | string
    >;
    user_rolesCollection?: GraphCacheResolver<
      WithTypename<Profiles>,
      ProfilesUserRolesCollectionArgs,
      WithTypename<UserRolesConnection> | string
    >;
    user_watchedCollection?: GraphCacheResolver<
      WithTypename<Profiles>,
      ProfilesUserWatchedCollectionArgs,
      WithTypename<UserWatchedConnection> | string
    >;
  };
  profilesConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<ProfilesConnection>,
      Record<string, never>,
      Array<WithTypename<ProfilesEdge> | string>
    >;
    pageInfo?: GraphCacheResolver<
      WithTypename<ProfilesConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >;
  };
  profilesEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<ProfilesEdge>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    node?: GraphCacheResolver<
      WithTypename<ProfilesEdge>,
      Record<string, never>,
      WithTypename<Profiles> | string
    >;
  };
  reality_series?: {
    created_at?: GraphCacheResolver<
      WithTypename<RealitySeries>,
      Record<string, never>,
      Scalars["Datetime"] | string
    >;
    in_progress?: GraphCacheResolver<
      WithTypename<RealitySeries>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    logo_src?: GraphCacheResolver<
      WithTypename<RealitySeries>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    nodeId?: GraphCacheResolver<
      WithTypename<RealitySeries>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    premiere_time?: GraphCacheResolver<
      WithTypename<RealitySeries>,
      Record<string, never>,
      Scalars["Datetime"] | string
    >;
    rs_league_formatsCollection?: GraphCacheResolver<
      WithTypename<RealitySeries>,
      RealitySeriesRsLeagueFormatsCollectionArgs,
      WithTypename<RsLeagueFormatsConnection> | string
    >;
    rulesCollection?: GraphCacheResolver<
      WithTypename<RealitySeries>,
      RealitySeriesRulesCollectionArgs,
      WithTypename<RulesConnection> | string
    >;
    seasonsCollection?: GraphCacheResolver<
      WithTypename<RealitySeries>,
      RealitySeriesSeasonsCollectionArgs,
      WithTypename<SeasonsConnection> | string
    >;
    slug?: GraphCacheResolver<
      WithTypename<RealitySeries>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    title?: GraphCacheResolver<
      WithTypename<RealitySeries>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    updated_at?: GraphCacheResolver<
      WithTypename<RealitySeries>,
      Record<string, never>,
      Scalars["Datetime"] | string
    >;
  };
  reality_seriesConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<RealitySeriesConnection>,
      Record<string, never>,
      Array<WithTypename<RealitySeriesEdge> | string>
    >;
    pageInfo?: GraphCacheResolver<
      WithTypename<RealitySeriesConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >;
  };
  reality_seriesDeleteResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<RealitySeriesDeleteResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<RealitySeriesDeleteResponse>,
      Record<string, never>,
      Array<WithTypename<RealitySeries> | string>
    >;
  };
  reality_seriesEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<RealitySeriesEdge>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    node?: GraphCacheResolver<
      WithTypename<RealitySeriesEdge>,
      Record<string, never>,
      WithTypename<RealitySeries> | string
    >;
  };
  reality_seriesInsertResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<RealitySeriesInsertResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<RealitySeriesInsertResponse>,
      Record<string, never>,
      Array<WithTypename<RealitySeries> | string>
    >;
  };
  reality_seriesUpdateResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<RealitySeriesUpdateResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<RealitySeriesUpdateResponse>,
      Record<string, never>,
      Array<WithTypename<RealitySeries> | string>
    >;
  };
  roles?: {
    display_name?: GraphCacheResolver<
      WithTypename<Roles>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<Roles>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    nodeId?: GraphCacheResolver<
      WithTypename<Roles>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    user_rolesCollection?: GraphCacheResolver<
      WithTypename<Roles>,
      RolesUserRolesCollectionArgs,
      WithTypename<UserRolesConnection> | string
    >;
  };
  rolesConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<RolesConnection>,
      Record<string, never>,
      Array<WithTypename<RolesEdge> | string>
    >;
    pageInfo?: GraphCacheResolver<
      WithTypename<RolesConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >;
  };
  rolesDeleteResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<RolesDeleteResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<RolesDeleteResponse>,
      Record<string, never>,
      Array<WithTypename<Roles> | string>
    >;
  };
  rolesEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<RolesEdge>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    node?: GraphCacheResolver<
      WithTypename<RolesEdge>,
      Record<string, never>,
      WithTypename<Roles> | string
    >;
  };
  rolesInsertResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<RolesInsertResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<RolesInsertResponse>,
      Record<string, never>,
      Array<WithTypename<Roles> | string>
    >;
  };
  rolesUpdateResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<RolesUpdateResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<RolesUpdateResponse>,
      Record<string, never>,
      Array<WithTypename<Roles> | string>
    >;
  };
  rs_league_formats?: {
    default_ruleset?: GraphCacheResolver<
      WithTypename<RsLeagueFormats>,
      Record<string, never>,
      Scalars["UUID"] | string
    >;
    league_format?: GraphCacheResolver<
      WithTypename<RsLeagueFormats>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    league_formats?: GraphCacheResolver<
      WithTypename<RsLeagueFormats>,
      Record<string, never>,
      WithTypename<LeagueFormats> | string
    >;
    nodeId?: GraphCacheResolver<
      WithTypename<RsLeagueFormats>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    reality_series?: GraphCacheResolver<
      WithTypename<RsLeagueFormats>,
      Record<string, never>,
      WithTypename<RealitySeries> | string
    >;
    rulesets?: GraphCacheResolver<
      WithTypename<RsLeagueFormats>,
      Record<string, never>,
      WithTypename<Rulesets> | string
    >;
  };
  rs_league_formatsConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<RsLeagueFormatsConnection>,
      Record<string, never>,
      Array<WithTypename<RsLeagueFormatsEdge> | string>
    >;
    pageInfo?: GraphCacheResolver<
      WithTypename<RsLeagueFormatsConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >;
  };
  rs_league_formatsDeleteResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<RsLeagueFormatsDeleteResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<RsLeagueFormatsDeleteResponse>,
      Record<string, never>,
      Array<WithTypename<RsLeagueFormats> | string>
    >;
  };
  rs_league_formatsEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<RsLeagueFormatsEdge>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    node?: GraphCacheResolver<
      WithTypename<RsLeagueFormatsEdge>,
      Record<string, never>,
      WithTypename<RsLeagueFormats> | string
    >;
  };
  rs_league_formatsInsertResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<RsLeagueFormatsInsertResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<RsLeagueFormatsInsertResponse>,
      Record<string, never>,
      Array<WithTypename<RsLeagueFormats> | string>
    >;
  };
  rs_league_formatsUpdateResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<RsLeagueFormatsUpdateResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<RsLeagueFormatsUpdateResponse>,
      Record<string, never>,
      Array<WithTypename<RsLeagueFormats> | string>
    >;
  };
  rules?: {
    description?: GraphCacheResolver<
      WithTypename<Rules>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    eventsCollection?: GraphCacheResolver<
      WithTypename<Rules>,
      RulesEventsCollectionArgs,
      WithTypename<EventsConnection> | string
    >;
    id?: GraphCacheResolver<
      WithTypename<Rules>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    is_negative?: GraphCacheResolver<
      WithTypename<Rules>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    nodeId?: GraphCacheResolver<
      WithTypename<Rules>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    reality_series?: GraphCacheResolver<
      WithTypename<Rules>,
      Record<string, never>,
      WithTypename<RealitySeries> | string
    >;
  };
  rulesConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<RulesConnection>,
      Record<string, never>,
      Array<WithTypename<RulesEdge> | string>
    >;
    pageInfo?: GraphCacheResolver<
      WithTypename<RulesConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >;
  };
  rulesDeleteResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<RulesDeleteResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<RulesDeleteResponse>,
      Record<string, never>,
      Array<WithTypename<Rules> | string>
    >;
  };
  rulesEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<RulesEdge>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    node?: GraphCacheResolver<
      WithTypename<RulesEdge>,
      Record<string, never>,
      WithTypename<Rules> | string
    >;
  };
  rulesInsertResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<RulesInsertResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<RulesInsertResponse>,
      Record<string, never>,
      Array<WithTypename<Rules> | string>
    >;
  };
  rulesUpdateResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<RulesUpdateResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<RulesUpdateResponse>,
      Record<string, never>,
      Array<WithTypename<Rules> | string>
    >;
  };
  rulesets?: {
    created_by?: GraphCacheResolver<
      WithTypename<Rulesets>,
      Record<string, never>,
      Scalars["UUID"] | string
    >;
    data?: GraphCacheResolver<
      WithTypename<Rulesets>,
      Record<string, never>,
      Scalars["JSON"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<Rulesets>,
      Record<string, never>,
      Scalars["UUID"] | string
    >;
    leaguesCollection?: GraphCacheResolver<
      WithTypename<Rulesets>,
      RulesetsLeaguesCollectionArgs,
      WithTypename<LeaguesConnection> | string
    >;
    nodeId?: GraphCacheResolver<
      WithTypename<Rulesets>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    profiles?: GraphCacheResolver<
      WithTypename<Rulesets>,
      Record<string, never>,
      WithTypename<Profiles> | string
    >;
    rs_league_formatsCollection?: GraphCacheResolver<
      WithTypename<Rulesets>,
      RulesetsRsLeagueFormatsCollectionArgs,
      WithTypename<RsLeagueFormatsConnection> | string
    >;
    updated_at?: GraphCacheResolver<
      WithTypename<Rulesets>,
      Record<string, never>,
      Scalars["Datetime"] | string
    >;
  };
  rulesetsConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<RulesetsConnection>,
      Record<string, never>,
      Array<WithTypename<RulesetsEdge> | string>
    >;
    pageInfo?: GraphCacheResolver<
      WithTypename<RulesetsConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >;
  };
  rulesetsDeleteResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<RulesetsDeleteResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<RulesetsDeleteResponse>,
      Record<string, never>,
      Array<WithTypename<Rulesets> | string>
    >;
  };
  rulesetsEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<RulesetsEdge>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    node?: GraphCacheResolver<
      WithTypename<RulesetsEdge>,
      Record<string, never>,
      WithTypename<Rulesets> | string
    >;
  };
  rulesetsInsertResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<RulesetsInsertResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<RulesetsInsertResponse>,
      Record<string, never>,
      Array<WithTypename<Rulesets> | string>
    >;
  };
  rulesetsUpdateResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<RulesetsUpdateResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<RulesetsUpdateResponse>,
      Record<string, never>,
      Array<WithTypename<Rulesets> | string>
    >;
  };
  seasons?: {
    contestant_seasonsCollection?: GraphCacheResolver<
      WithTypename<Seasons>,
      SeasonsContestantSeasonsCollectionArgs,
      WithTypename<ContestantSeasonsConnection> | string
    >;
    episodesCollection?: GraphCacheResolver<
      WithTypename<Seasons>,
      SeasonsEpisodesCollectionArgs,
      WithTypename<EpisodesConnection> | string
    >;
    id?: GraphCacheResolver<
      WithTypename<Seasons>,
      Record<string, never>,
      Scalars["UUID"] | string
    >;
    leaguesCollection?: GraphCacheResolver<
      WithTypename<Seasons>,
      SeasonsLeaguesCollectionArgs,
      WithTypename<LeaguesConnection> | string
    >;
    logo_src?: GraphCacheResolver<
      WithTypename<Seasons>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    nodeId?: GraphCacheResolver<
      WithTypename<Seasons>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    order?: GraphCacheResolver<
      WithTypename<Seasons>,
      Record<string, never>,
      Scalars["BigInt"] | string
    >;
    reality_series?: GraphCacheResolver<
      WithTypename<Seasons>,
      Record<string, never>,
      WithTypename<RealitySeries> | string
    >;
    reality_show?: GraphCacheResolver<
      WithTypename<Seasons>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    title?: GraphCacheResolver<
      WithTypename<Seasons>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    updated_at?: GraphCacheResolver<
      WithTypename<Seasons>,
      Record<string, never>,
      Scalars["Datetime"] | string
    >;
  };
  seasonsConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<SeasonsConnection>,
      Record<string, never>,
      Array<WithTypename<SeasonsEdge> | string>
    >;
    pageInfo?: GraphCacheResolver<
      WithTypename<SeasonsConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >;
  };
  seasonsDeleteResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<SeasonsDeleteResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<SeasonsDeleteResponse>,
      Record<string, never>,
      Array<WithTypename<Seasons> | string>
    >;
  };
  seasonsEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<SeasonsEdge>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    node?: GraphCacheResolver<
      WithTypename<SeasonsEdge>,
      Record<string, never>,
      WithTypename<Seasons> | string
    >;
  };
  seasonsInsertResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<SeasonsInsertResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<SeasonsInsertResponse>,
      Record<string, never>,
      Array<WithTypename<Seasons> | string>
    >;
  };
  seasonsUpdateResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<SeasonsUpdateResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<SeasonsUpdateResponse>,
      Record<string, never>,
      Array<WithTypename<Seasons> | string>
    >;
  };
  user_fcm_tokens?: {
    id?: GraphCacheResolver<
      WithTypename<UserFcmTokens>,
      Record<string, never>,
      Scalars["UUID"] | string
    >;
    nodeId?: GraphCacheResolver<
      WithTypename<UserFcmTokens>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    profiles?: GraphCacheResolver<
      WithTypename<UserFcmTokens>,
      Record<string, never>,
      WithTypename<Profiles> | string
    >;
    token?: GraphCacheResolver<
      WithTypename<UserFcmTokens>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    user?: GraphCacheResolver<
      WithTypename<UserFcmTokens>,
      Record<string, never>,
      Scalars["UUID"] | string
    >;
  };
  user_fcm_tokensConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<UserFcmTokensConnection>,
      Record<string, never>,
      Array<WithTypename<UserFcmTokensEdge> | string>
    >;
    pageInfo?: GraphCacheResolver<
      WithTypename<UserFcmTokensConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >;
  };
  user_fcm_tokensDeleteResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<UserFcmTokensDeleteResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<UserFcmTokensDeleteResponse>,
      Record<string, never>,
      Array<WithTypename<UserFcmTokens> | string>
    >;
  };
  user_fcm_tokensEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<UserFcmTokensEdge>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    node?: GraphCacheResolver<
      WithTypename<UserFcmTokensEdge>,
      Record<string, never>,
      WithTypename<UserFcmTokens> | string
    >;
  };
  user_fcm_tokensInsertResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<UserFcmTokensInsertResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<UserFcmTokensInsertResponse>,
      Record<string, never>,
      Array<WithTypename<UserFcmTokens> | string>
    >;
  };
  user_fcm_tokensUpdateResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<UserFcmTokensUpdateResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<UserFcmTokensUpdateResponse>,
      Record<string, never>,
      Array<WithTypename<UserFcmTokens> | string>
    >;
  };
  user_features?: {
    feature?: GraphCacheResolver<
      WithTypename<UserFeatures>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<UserFeatures>,
      Record<string, never>,
      Scalars["UUID"] | string
    >;
    nodeId?: GraphCacheResolver<
      WithTypename<UserFeatures>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    profiles?: GraphCacheResolver<
      WithTypename<UserFeatures>,
      Record<string, never>,
      WithTypename<Profiles> | string
    >;
    user?: GraphCacheResolver<
      WithTypename<UserFeatures>,
      Record<string, never>,
      Scalars["UUID"] | string
    >;
  };
  user_featuresConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<UserFeaturesConnection>,
      Record<string, never>,
      Array<WithTypename<UserFeaturesEdge> | string>
    >;
    pageInfo?: GraphCacheResolver<
      WithTypename<UserFeaturesConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >;
  };
  user_featuresDeleteResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<UserFeaturesDeleteResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<UserFeaturesDeleteResponse>,
      Record<string, never>,
      Array<WithTypename<UserFeatures> | string>
    >;
  };
  user_featuresEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<UserFeaturesEdge>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    node?: GraphCacheResolver<
      WithTypename<UserFeaturesEdge>,
      Record<string, never>,
      WithTypename<UserFeatures> | string
    >;
  };
  user_featuresInsertResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<UserFeaturesInsertResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<UserFeaturesInsertResponse>,
      Record<string, never>,
      Array<WithTypename<UserFeatures> | string>
    >;
  };
  user_featuresUpdateResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<UserFeaturesUpdateResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<UserFeaturesUpdateResponse>,
      Record<string, never>,
      Array<WithTypename<UserFeatures> | string>
    >;
  };
  user_roles?: {
    nodeId?: GraphCacheResolver<
      WithTypename<UserRoles>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    profiles?: GraphCacheResolver<
      WithTypename<UserRoles>,
      Record<string, never>,
      WithTypename<Profiles> | string
    >;
    role?: GraphCacheResolver<
      WithTypename<UserRoles>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    roles?: GraphCacheResolver<
      WithTypename<UserRoles>,
      Record<string, never>,
      WithTypename<Roles> | string
    >;
    user?: GraphCacheResolver<
      WithTypename<UserRoles>,
      Record<string, never>,
      Scalars["UUID"] | string
    >;
  };
  user_rolesConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<UserRolesConnection>,
      Record<string, never>,
      Array<WithTypename<UserRolesEdge> | string>
    >;
    pageInfo?: GraphCacheResolver<
      WithTypename<UserRolesConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >;
  };
  user_rolesDeleteResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<UserRolesDeleteResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<UserRolesDeleteResponse>,
      Record<string, never>,
      Array<WithTypename<UserRoles> | string>
    >;
  };
  user_rolesEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<UserRolesEdge>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    node?: GraphCacheResolver<
      WithTypename<UserRolesEdge>,
      Record<string, never>,
      WithTypename<UserRoles> | string
    >;
  };
  user_rolesInsertResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<UserRolesInsertResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<UserRolesInsertResponse>,
      Record<string, never>,
      Array<WithTypename<UserRoles> | string>
    >;
  };
  user_rolesUpdateResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<UserRolesUpdateResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<UserRolesUpdateResponse>,
      Record<string, never>,
      Array<WithTypename<UserRoles> | string>
    >;
  };
  user_watched?: {
    episode?: GraphCacheResolver<
      WithTypename<UserWatched>,
      Record<string, never>,
      Scalars["UUID"] | string
    >;
    episodes?: GraphCacheResolver<
      WithTypename<UserWatched>,
      Record<string, never>,
      WithTypename<Episodes> | string
    >;
    id?: GraphCacheResolver<
      WithTypename<UserWatched>,
      Record<string, never>,
      Scalars["UUID"] | string
    >;
    nodeId?: GraphCacheResolver<
      WithTypename<UserWatched>,
      Record<string, never>,
      Scalars["ID"] | string
    >;
    profiles?: GraphCacheResolver<
      WithTypename<UserWatched>,
      Record<string, never>,
      WithTypename<Profiles> | string
    >;
    user?: GraphCacheResolver<
      WithTypename<UserWatched>,
      Record<string, never>,
      Scalars["UUID"] | string
    >;
  };
  user_watchedConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<UserWatchedConnection>,
      Record<string, never>,
      Array<WithTypename<UserWatchedEdge> | string>
    >;
    pageInfo?: GraphCacheResolver<
      WithTypename<UserWatchedConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >;
  };
  user_watchedDeleteResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<UserWatchedDeleteResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<UserWatchedDeleteResponse>,
      Record<string, never>,
      Array<WithTypename<UserWatched> | string>
    >;
  };
  user_watchedEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<UserWatchedEdge>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    node?: GraphCacheResolver<
      WithTypename<UserWatchedEdge>,
      Record<string, never>,
      WithTypename<UserWatched> | string
    >;
  };
  user_watchedInsertResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<UserWatchedInsertResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<UserWatchedInsertResponse>,
      Record<string, never>,
      Array<WithTypename<UserWatched> | string>
    >;
  };
  user_watchedUpdateResponse?: {
    affectedCount?: GraphCacheResolver<
      WithTypename<UserWatchedUpdateResponse>,
      Record<string, never>,
      Scalars["Int"] | string
    >;
    records?: GraphCacheResolver<
      WithTypename<UserWatchedUpdateResponse>,
      Record<string, never>,
      Array<WithTypename<UserWatched> | string>
    >;
  };
};

export type GraphCacheOptimisticUpdaters = {
  deleteFromapi_tokensCollection?: GraphCacheOptimisticMutationResolver<
    MutationDeleteFromapiTokensCollectionArgs,
    WithTypename<ApiTokensDeleteResponse>
  >;
  deleteFromcontestant_seasonsCollection?: GraphCacheOptimisticMutationResolver<
    MutationDeleteFromcontestantSeasonsCollectionArgs,
    WithTypename<ContestantSeasonsDeleteResponse>
  >;
  deleteFromcontestantsCollection?: GraphCacheOptimisticMutationResolver<
    MutationDeleteFromcontestantsCollectionArgs,
    WithTypename<ContestantsDeleteResponse>
  >;
  deleteFromepisodesCollection?: GraphCacheOptimisticMutationResolver<
    MutationDeleteFromepisodesCollectionArgs,
    WithTypename<EpisodesDeleteResponse>
  >;
  deleteFromeventsCollection?: GraphCacheOptimisticMutationResolver<
    MutationDeleteFromeventsCollectionArgs,
    WithTypename<EventsDeleteResponse>
  >;
  deleteFromleague_formatsCollection?: GraphCacheOptimisticMutationResolver<
    MutationDeleteFromleagueFormatsCollectionArgs,
    WithTypename<LeagueFormatsDeleteResponse>
  >;
  deleteFromleague_participantsCollection?: GraphCacheOptimisticMutationResolver<
    MutationDeleteFromleagueParticipantsCollectionArgs,
    WithTypename<LeagueParticipantsDeleteResponse>
  >;
  deleteFromleaguesCollection?: GraphCacheOptimisticMutationResolver<
    MutationDeleteFromleaguesCollectionArgs,
    WithTypename<LeaguesDeleteResponse>
  >;
  deleteFromlp_contestantsCollection?: GraphCacheOptimisticMutationResolver<
    MutationDeleteFromlpContestantsCollectionArgs,
    WithTypename<LpContestantsDeleteResponse>
  >;
  deleteFromreality_seriesCollection?: GraphCacheOptimisticMutationResolver<
    MutationDeleteFromrealitySeriesCollectionArgs,
    WithTypename<RealitySeriesDeleteResponse>
  >;
  deleteFromrolesCollection?: GraphCacheOptimisticMutationResolver<
    MutationDeleteFromrolesCollectionArgs,
    WithTypename<RolesDeleteResponse>
  >;
  deleteFromrs_league_formatsCollection?: GraphCacheOptimisticMutationResolver<
    MutationDeleteFromrsLeagueFormatsCollectionArgs,
    WithTypename<RsLeagueFormatsDeleteResponse>
  >;
  deleteFromrulesCollection?: GraphCacheOptimisticMutationResolver<
    MutationDeleteFromrulesCollectionArgs,
    WithTypename<RulesDeleteResponse>
  >;
  deleteFromrulesetsCollection?: GraphCacheOptimisticMutationResolver<
    MutationDeleteFromrulesetsCollectionArgs,
    WithTypename<RulesetsDeleteResponse>
  >;
  deleteFromseasonsCollection?: GraphCacheOptimisticMutationResolver<
    MutationDeleteFromseasonsCollectionArgs,
    WithTypename<SeasonsDeleteResponse>
  >;
  deleteFromuser_fcm_tokensCollection?: GraphCacheOptimisticMutationResolver<
    MutationDeleteFromuserFcmTokensCollectionArgs,
    WithTypename<UserFcmTokensDeleteResponse>
  >;
  deleteFromuser_featuresCollection?: GraphCacheOptimisticMutationResolver<
    MutationDeleteFromuserFeaturesCollectionArgs,
    WithTypename<UserFeaturesDeleteResponse>
  >;
  deleteFromuser_rolesCollection?: GraphCacheOptimisticMutationResolver<
    MutationDeleteFromuserRolesCollectionArgs,
    WithTypename<UserRolesDeleteResponse>
  >;
  deleteFromuser_watchedCollection?: GraphCacheOptimisticMutationResolver<
    MutationDeleteFromuserWatchedCollectionArgs,
    WithTypename<UserWatchedDeleteResponse>
  >;
  insertIntoapi_tokensCollection?: GraphCacheOptimisticMutationResolver<
    MutationInsertIntoapiTokensCollectionArgs,
    Maybe<WithTypename<ApiTokensInsertResponse>>
  >;
  insertIntocontestant_seasonsCollection?: GraphCacheOptimisticMutationResolver<
    MutationInsertIntocontestantSeasonsCollectionArgs,
    Maybe<WithTypename<ContestantSeasonsInsertResponse>>
  >;
  insertIntocontestantsCollection?: GraphCacheOptimisticMutationResolver<
    MutationInsertIntocontestantsCollectionArgs,
    Maybe<WithTypename<ContestantsInsertResponse>>
  >;
  insertIntoepisodesCollection?: GraphCacheOptimisticMutationResolver<
    MutationInsertIntoepisodesCollectionArgs,
    Maybe<WithTypename<EpisodesInsertResponse>>
  >;
  insertIntoeventsCollection?: GraphCacheOptimisticMutationResolver<
    MutationInsertIntoeventsCollectionArgs,
    Maybe<WithTypename<EventsInsertResponse>>
  >;
  insertIntoleague_formatsCollection?: GraphCacheOptimisticMutationResolver<
    MutationInsertIntoleagueFormatsCollectionArgs,
    Maybe<WithTypename<LeagueFormatsInsertResponse>>
  >;
  insertIntoleague_participantsCollection?: GraphCacheOptimisticMutationResolver<
    MutationInsertIntoleagueParticipantsCollectionArgs,
    Maybe<WithTypename<LeagueParticipantsInsertResponse>>
  >;
  insertIntoleaguesCollection?: GraphCacheOptimisticMutationResolver<
    MutationInsertIntoleaguesCollectionArgs,
    Maybe<WithTypename<LeaguesInsertResponse>>
  >;
  insertIntolp_contestantsCollection?: GraphCacheOptimisticMutationResolver<
    MutationInsertIntolpContestantsCollectionArgs,
    Maybe<WithTypename<LpContestantsInsertResponse>>
  >;
  insertIntoreality_seriesCollection?: GraphCacheOptimisticMutationResolver<
    MutationInsertIntorealitySeriesCollectionArgs,
    Maybe<WithTypename<RealitySeriesInsertResponse>>
  >;
  insertIntorolesCollection?: GraphCacheOptimisticMutationResolver<
    MutationInsertIntorolesCollectionArgs,
    Maybe<WithTypename<RolesInsertResponse>>
  >;
  insertIntors_league_formatsCollection?: GraphCacheOptimisticMutationResolver<
    MutationInsertIntorsLeagueFormatsCollectionArgs,
    Maybe<WithTypename<RsLeagueFormatsInsertResponse>>
  >;
  insertIntorulesCollection?: GraphCacheOptimisticMutationResolver<
    MutationInsertIntorulesCollectionArgs,
    Maybe<WithTypename<RulesInsertResponse>>
  >;
  insertIntorulesetsCollection?: GraphCacheOptimisticMutationResolver<
    MutationInsertIntorulesetsCollectionArgs,
    Maybe<WithTypename<RulesetsInsertResponse>>
  >;
  insertIntoseasonsCollection?: GraphCacheOptimisticMutationResolver<
    MutationInsertIntoseasonsCollectionArgs,
    Maybe<WithTypename<SeasonsInsertResponse>>
  >;
  insertIntouser_fcm_tokensCollection?: GraphCacheOptimisticMutationResolver<
    MutationInsertIntouserFcmTokensCollectionArgs,
    Maybe<WithTypename<UserFcmTokensInsertResponse>>
  >;
  insertIntouser_featuresCollection?: GraphCacheOptimisticMutationResolver<
    MutationInsertIntouserFeaturesCollectionArgs,
    Maybe<WithTypename<UserFeaturesInsertResponse>>
  >;
  insertIntouser_rolesCollection?: GraphCacheOptimisticMutationResolver<
    MutationInsertIntouserRolesCollectionArgs,
    Maybe<WithTypename<UserRolesInsertResponse>>
  >;
  insertIntouser_watchedCollection?: GraphCacheOptimisticMutationResolver<
    MutationInsertIntouserWatchedCollectionArgs,
    Maybe<WithTypename<UserWatchedInsertResponse>>
  >;
  updateapi_tokensCollection?: GraphCacheOptimisticMutationResolver<
    MutationUpdateapiTokensCollectionArgs,
    WithTypename<ApiTokensUpdateResponse>
  >;
  updatecontestant_seasonsCollection?: GraphCacheOptimisticMutationResolver<
    MutationUpdatecontestantSeasonsCollectionArgs,
    WithTypename<ContestantSeasonsUpdateResponse>
  >;
  updatecontestantsCollection?: GraphCacheOptimisticMutationResolver<
    MutationUpdatecontestantsCollectionArgs,
    WithTypename<ContestantsUpdateResponse>
  >;
  updateepisodesCollection?: GraphCacheOptimisticMutationResolver<
    MutationUpdateepisodesCollectionArgs,
    WithTypename<EpisodesUpdateResponse>
  >;
  updateeventsCollection?: GraphCacheOptimisticMutationResolver<
    MutationUpdateeventsCollectionArgs,
    WithTypename<EventsUpdateResponse>
  >;
  updateleague_formatsCollection?: GraphCacheOptimisticMutationResolver<
    MutationUpdateleagueFormatsCollectionArgs,
    WithTypename<LeagueFormatsUpdateResponse>
  >;
  updateleague_participantsCollection?: GraphCacheOptimisticMutationResolver<
    MutationUpdateleagueParticipantsCollectionArgs,
    WithTypename<LeagueParticipantsUpdateResponse>
  >;
  updateleaguesCollection?: GraphCacheOptimisticMutationResolver<
    MutationUpdateleaguesCollectionArgs,
    WithTypename<LeaguesUpdateResponse>
  >;
  updatelp_contestantsCollection?: GraphCacheOptimisticMutationResolver<
    MutationUpdatelpContestantsCollectionArgs,
    WithTypename<LpContestantsUpdateResponse>
  >;
  updatereality_seriesCollection?: GraphCacheOptimisticMutationResolver<
    MutationUpdaterealitySeriesCollectionArgs,
    WithTypename<RealitySeriesUpdateResponse>
  >;
  updaterolesCollection?: GraphCacheOptimisticMutationResolver<
    MutationUpdaterolesCollectionArgs,
    WithTypename<RolesUpdateResponse>
  >;
  updaters_league_formatsCollection?: GraphCacheOptimisticMutationResolver<
    MutationUpdatersLeagueFormatsCollectionArgs,
    WithTypename<RsLeagueFormatsUpdateResponse>
  >;
  updaterulesCollection?: GraphCacheOptimisticMutationResolver<
    MutationUpdaterulesCollectionArgs,
    WithTypename<RulesUpdateResponse>
  >;
  updaterulesetsCollection?: GraphCacheOptimisticMutationResolver<
    MutationUpdaterulesetsCollectionArgs,
    WithTypename<RulesetsUpdateResponse>
  >;
  updateseasonsCollection?: GraphCacheOptimisticMutationResolver<
    MutationUpdateseasonsCollectionArgs,
    WithTypename<SeasonsUpdateResponse>
  >;
  updateuser_fcm_tokensCollection?: GraphCacheOptimisticMutationResolver<
    MutationUpdateuserFcmTokensCollectionArgs,
    WithTypename<UserFcmTokensUpdateResponse>
  >;
  updateuser_featuresCollection?: GraphCacheOptimisticMutationResolver<
    MutationUpdateuserFeaturesCollectionArgs,
    WithTypename<UserFeaturesUpdateResponse>
  >;
  updateuser_rolesCollection?: GraphCacheOptimisticMutationResolver<
    MutationUpdateuserRolesCollectionArgs,
    WithTypename<UserRolesUpdateResponse>
  >;
  updateuser_watchedCollection?: GraphCacheOptimisticMutationResolver<
    MutationUpdateuserWatchedCollectionArgs,
    WithTypename<UserWatchedUpdateResponse>
  >;
};

export type GraphCacheUpdaters = {
  Mutation?: {
    deleteFromapi_tokensCollection?: GraphCacheUpdateResolver<
      { deleteFromapi_tokensCollection: WithTypename<ApiTokensDeleteResponse> },
      MutationDeleteFromapiTokensCollectionArgs
    >;
    deleteFromcontestant_seasonsCollection?: GraphCacheUpdateResolver<
      {
        deleteFromcontestant_seasonsCollection: WithTypename<ContestantSeasonsDeleteResponse>;
      },
      MutationDeleteFromcontestantSeasonsCollectionArgs
    >;
    deleteFromcontestantsCollection?: GraphCacheUpdateResolver<
      {
        deleteFromcontestantsCollection: WithTypename<ContestantsDeleteResponse>;
      },
      MutationDeleteFromcontestantsCollectionArgs
    >;
    deleteFromepisodesCollection?: GraphCacheUpdateResolver<
      { deleteFromepisodesCollection: WithTypename<EpisodesDeleteResponse> },
      MutationDeleteFromepisodesCollectionArgs
    >;
    deleteFromeventsCollection?: GraphCacheUpdateResolver<
      { deleteFromeventsCollection: WithTypename<EventsDeleteResponse> },
      MutationDeleteFromeventsCollectionArgs
    >;
    deleteFromleague_formatsCollection?: GraphCacheUpdateResolver<
      {
        deleteFromleague_formatsCollection: WithTypename<LeagueFormatsDeleteResponse>;
      },
      MutationDeleteFromleagueFormatsCollectionArgs
    >;
    deleteFromleague_participantsCollection?: GraphCacheUpdateResolver<
      {
        deleteFromleague_participantsCollection: WithTypename<LeagueParticipantsDeleteResponse>;
      },
      MutationDeleteFromleagueParticipantsCollectionArgs
    >;
    deleteFromleaguesCollection?: GraphCacheUpdateResolver<
      { deleteFromleaguesCollection: WithTypename<LeaguesDeleteResponse> },
      MutationDeleteFromleaguesCollectionArgs
    >;
    deleteFromlp_contestantsCollection?: GraphCacheUpdateResolver<
      {
        deleteFromlp_contestantsCollection: WithTypename<LpContestantsDeleteResponse>;
      },
      MutationDeleteFromlpContestantsCollectionArgs
    >;
    deleteFromreality_seriesCollection?: GraphCacheUpdateResolver<
      {
        deleteFromreality_seriesCollection: WithTypename<RealitySeriesDeleteResponse>;
      },
      MutationDeleteFromrealitySeriesCollectionArgs
    >;
    deleteFromrolesCollection?: GraphCacheUpdateResolver<
      { deleteFromrolesCollection: WithTypename<RolesDeleteResponse> },
      MutationDeleteFromrolesCollectionArgs
    >;
    deleteFromrs_league_formatsCollection?: GraphCacheUpdateResolver<
      {
        deleteFromrs_league_formatsCollection: WithTypename<RsLeagueFormatsDeleteResponse>;
      },
      MutationDeleteFromrsLeagueFormatsCollectionArgs
    >;
    deleteFromrulesCollection?: GraphCacheUpdateResolver<
      { deleteFromrulesCollection: WithTypename<RulesDeleteResponse> },
      MutationDeleteFromrulesCollectionArgs
    >;
    deleteFromrulesetsCollection?: GraphCacheUpdateResolver<
      { deleteFromrulesetsCollection: WithTypename<RulesetsDeleteResponse> },
      MutationDeleteFromrulesetsCollectionArgs
    >;
    deleteFromseasonsCollection?: GraphCacheUpdateResolver<
      { deleteFromseasonsCollection: WithTypename<SeasonsDeleteResponse> },
      MutationDeleteFromseasonsCollectionArgs
    >;
    deleteFromuser_fcm_tokensCollection?: GraphCacheUpdateResolver<
      {
        deleteFromuser_fcm_tokensCollection: WithTypename<UserFcmTokensDeleteResponse>;
      },
      MutationDeleteFromuserFcmTokensCollectionArgs
    >;
    deleteFromuser_featuresCollection?: GraphCacheUpdateResolver<
      {
        deleteFromuser_featuresCollection: WithTypename<UserFeaturesDeleteResponse>;
      },
      MutationDeleteFromuserFeaturesCollectionArgs
    >;
    deleteFromuser_rolesCollection?: GraphCacheUpdateResolver<
      { deleteFromuser_rolesCollection: WithTypename<UserRolesDeleteResponse> },
      MutationDeleteFromuserRolesCollectionArgs
    >;
    deleteFromuser_watchedCollection?: GraphCacheUpdateResolver<
      {
        deleteFromuser_watchedCollection: WithTypename<UserWatchedDeleteResponse>;
      },
      MutationDeleteFromuserWatchedCollectionArgs
    >;
    insertIntoapi_tokensCollection?: GraphCacheUpdateResolver<
      {
        insertIntoapi_tokensCollection: Maybe<
          WithTypename<ApiTokensInsertResponse>
        >;
      },
      MutationInsertIntoapiTokensCollectionArgs
    >;
    insertIntocontestant_seasonsCollection?: GraphCacheUpdateResolver<
      {
        insertIntocontestant_seasonsCollection: Maybe<
          WithTypename<ContestantSeasonsInsertResponse>
        >;
      },
      MutationInsertIntocontestantSeasonsCollectionArgs
    >;
    insertIntocontestantsCollection?: GraphCacheUpdateResolver<
      {
        insertIntocontestantsCollection: Maybe<
          WithTypename<ContestantsInsertResponse>
        >;
      },
      MutationInsertIntocontestantsCollectionArgs
    >;
    insertIntoepisodesCollection?: GraphCacheUpdateResolver<
      {
        insertIntoepisodesCollection: Maybe<
          WithTypename<EpisodesInsertResponse>
        >;
      },
      MutationInsertIntoepisodesCollectionArgs
    >;
    insertIntoeventsCollection?: GraphCacheUpdateResolver<
      { insertIntoeventsCollection: Maybe<WithTypename<EventsInsertResponse>> },
      MutationInsertIntoeventsCollectionArgs
    >;
    insertIntoleague_formatsCollection?: GraphCacheUpdateResolver<
      {
        insertIntoleague_formatsCollection: Maybe<
          WithTypename<LeagueFormatsInsertResponse>
        >;
      },
      MutationInsertIntoleagueFormatsCollectionArgs
    >;
    insertIntoleague_participantsCollection?: GraphCacheUpdateResolver<
      {
        insertIntoleague_participantsCollection: Maybe<
          WithTypename<LeagueParticipantsInsertResponse>
        >;
      },
      MutationInsertIntoleagueParticipantsCollectionArgs
    >;
    insertIntoleaguesCollection?: GraphCacheUpdateResolver<
      {
        insertIntoleaguesCollection: Maybe<WithTypename<LeaguesInsertResponse>>;
      },
      MutationInsertIntoleaguesCollectionArgs
    >;
    insertIntolp_contestantsCollection?: GraphCacheUpdateResolver<
      {
        insertIntolp_contestantsCollection: Maybe<
          WithTypename<LpContestantsInsertResponse>
        >;
      },
      MutationInsertIntolpContestantsCollectionArgs
    >;
    insertIntoreality_seriesCollection?: GraphCacheUpdateResolver<
      {
        insertIntoreality_seriesCollection: Maybe<
          WithTypename<RealitySeriesInsertResponse>
        >;
      },
      MutationInsertIntorealitySeriesCollectionArgs
    >;
    insertIntorolesCollection?: GraphCacheUpdateResolver<
      { insertIntorolesCollection: Maybe<WithTypename<RolesInsertResponse>> },
      MutationInsertIntorolesCollectionArgs
    >;
    insertIntors_league_formatsCollection?: GraphCacheUpdateResolver<
      {
        insertIntors_league_formatsCollection: Maybe<
          WithTypename<RsLeagueFormatsInsertResponse>
        >;
      },
      MutationInsertIntorsLeagueFormatsCollectionArgs
    >;
    insertIntorulesCollection?: GraphCacheUpdateResolver<
      { insertIntorulesCollection: Maybe<WithTypename<RulesInsertResponse>> },
      MutationInsertIntorulesCollectionArgs
    >;
    insertIntorulesetsCollection?: GraphCacheUpdateResolver<
      {
        insertIntorulesetsCollection: Maybe<
          WithTypename<RulesetsInsertResponse>
        >;
      },
      MutationInsertIntorulesetsCollectionArgs
    >;
    insertIntoseasonsCollection?: GraphCacheUpdateResolver<
      {
        insertIntoseasonsCollection: Maybe<WithTypename<SeasonsInsertResponse>>;
      },
      MutationInsertIntoseasonsCollectionArgs
    >;
    insertIntouser_fcm_tokensCollection?: GraphCacheUpdateResolver<
      {
        insertIntouser_fcm_tokensCollection: Maybe<
          WithTypename<UserFcmTokensInsertResponse>
        >;
      },
      MutationInsertIntouserFcmTokensCollectionArgs
    >;
    insertIntouser_featuresCollection?: GraphCacheUpdateResolver<
      {
        insertIntouser_featuresCollection: Maybe<
          WithTypename<UserFeaturesInsertResponse>
        >;
      },
      MutationInsertIntouserFeaturesCollectionArgs
    >;
    insertIntouser_rolesCollection?: GraphCacheUpdateResolver<
      {
        insertIntouser_rolesCollection: Maybe<
          WithTypename<UserRolesInsertResponse>
        >;
      },
      MutationInsertIntouserRolesCollectionArgs
    >;
    insertIntouser_watchedCollection?: GraphCacheUpdateResolver<
      {
        insertIntouser_watchedCollection: Maybe<
          WithTypename<UserWatchedInsertResponse>
        >;
      },
      MutationInsertIntouserWatchedCollectionArgs
    >;
    updateapi_tokensCollection?: GraphCacheUpdateResolver<
      { updateapi_tokensCollection: WithTypename<ApiTokensUpdateResponse> },
      MutationUpdateapiTokensCollectionArgs
    >;
    updatecontestant_seasonsCollection?: GraphCacheUpdateResolver<
      {
        updatecontestant_seasonsCollection: WithTypename<ContestantSeasonsUpdateResponse>;
      },
      MutationUpdatecontestantSeasonsCollectionArgs
    >;
    updatecontestantsCollection?: GraphCacheUpdateResolver<
      { updatecontestantsCollection: WithTypename<ContestantsUpdateResponse> },
      MutationUpdatecontestantsCollectionArgs
    >;
    updateepisodesCollection?: GraphCacheUpdateResolver<
      { updateepisodesCollection: WithTypename<EpisodesUpdateResponse> },
      MutationUpdateepisodesCollectionArgs
    >;
    updateeventsCollection?: GraphCacheUpdateResolver<
      { updateeventsCollection: WithTypename<EventsUpdateResponse> },
      MutationUpdateeventsCollectionArgs
    >;
    updateleague_formatsCollection?: GraphCacheUpdateResolver<
      {
        updateleague_formatsCollection: WithTypename<LeagueFormatsUpdateResponse>;
      },
      MutationUpdateleagueFormatsCollectionArgs
    >;
    updateleague_participantsCollection?: GraphCacheUpdateResolver<
      {
        updateleague_participantsCollection: WithTypename<LeagueParticipantsUpdateResponse>;
      },
      MutationUpdateleagueParticipantsCollectionArgs
    >;
    updateleaguesCollection?: GraphCacheUpdateResolver<
      { updateleaguesCollection: WithTypename<LeaguesUpdateResponse> },
      MutationUpdateleaguesCollectionArgs
    >;
    updatelp_contestantsCollection?: GraphCacheUpdateResolver<
      {
        updatelp_contestantsCollection: WithTypename<LpContestantsUpdateResponse>;
      },
      MutationUpdatelpContestantsCollectionArgs
    >;
    updatereality_seriesCollection?: GraphCacheUpdateResolver<
      {
        updatereality_seriesCollection: WithTypename<RealitySeriesUpdateResponse>;
      },
      MutationUpdaterealitySeriesCollectionArgs
    >;
    updaterolesCollection?: GraphCacheUpdateResolver<
      { updaterolesCollection: WithTypename<RolesUpdateResponse> },
      MutationUpdaterolesCollectionArgs
    >;
    updaters_league_formatsCollection?: GraphCacheUpdateResolver<
      {
        updaters_league_formatsCollection: WithTypename<RsLeagueFormatsUpdateResponse>;
      },
      MutationUpdatersLeagueFormatsCollectionArgs
    >;
    updaterulesCollection?: GraphCacheUpdateResolver<
      { updaterulesCollection: WithTypename<RulesUpdateResponse> },
      MutationUpdaterulesCollectionArgs
    >;
    updaterulesetsCollection?: GraphCacheUpdateResolver<
      { updaterulesetsCollection: WithTypename<RulesetsUpdateResponse> },
      MutationUpdaterulesetsCollectionArgs
    >;
    updateseasonsCollection?: GraphCacheUpdateResolver<
      { updateseasonsCollection: WithTypename<SeasonsUpdateResponse> },
      MutationUpdateseasonsCollectionArgs
    >;
    updateuser_fcm_tokensCollection?: GraphCacheUpdateResolver<
      {
        updateuser_fcm_tokensCollection: WithTypename<UserFcmTokensUpdateResponse>;
      },
      MutationUpdateuserFcmTokensCollectionArgs
    >;
    updateuser_featuresCollection?: GraphCacheUpdateResolver<
      {
        updateuser_featuresCollection: WithTypename<UserFeaturesUpdateResponse>;
      },
      MutationUpdateuserFeaturesCollectionArgs
    >;
    updateuser_rolesCollection?: GraphCacheUpdateResolver<
      { updateuser_rolesCollection: WithTypename<UserRolesUpdateResponse> },
      MutationUpdateuserRolesCollectionArgs
    >;
    updateuser_watchedCollection?: GraphCacheUpdateResolver<
      { updateuser_watchedCollection: WithTypename<UserWatchedUpdateResponse> },
      MutationUpdateuserWatchedCollectionArgs
    >;
  };
  Subscription?: {};
};

export type GraphCacheConfig = {
  schema?: IntrospectionData;
  updates?: GraphCacheUpdaters;
  keys?: GraphCacheKeysConfig;
  optimistic?: GraphCacheOptimisticUpdaters;
  resolvers?: GraphCacheResolvers;
  storage?: GraphCacheStorageAdapter;
};
