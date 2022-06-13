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
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  BigInt: any,
  Cursor: any,
  Date: any,
  Datetime: any,
  JSON: any,
  Time: any,
  UUID: any
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars["BigInt"]>,
  gt?: InputMaybe<Scalars["BigInt"]>,
  gte?: InputMaybe<Scalars["BigInt"]>,
  lt?: InputMaybe<Scalars["BigInt"]>,
  lte?: InputMaybe<Scalars["BigInt"]>,
  neq?: InputMaybe<Scalars["BigInt"]>
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars["Boolean"]>,
  gt?: InputMaybe<Scalars["Boolean"]>,
  gte?: InputMaybe<Scalars["Boolean"]>,
  lt?: InputMaybe<Scalars["Boolean"]>,
  lte?: InputMaybe<Scalars["Boolean"]>,
  neq?: InputMaybe<Scalars["Boolean"]>
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars["Date"]>,
  gt?: InputMaybe<Scalars["Date"]>,
  gte?: InputMaybe<Scalars["Date"]>,
  lt?: InputMaybe<Scalars["Date"]>,
  lte?: InputMaybe<Scalars["Date"]>,
  neq?: InputMaybe<Scalars["Date"]>
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars["Datetime"]>,
  gt?: InputMaybe<Scalars["Datetime"]>,
  gte?: InputMaybe<Scalars["Datetime"]>,
  lt?: InputMaybe<Scalars["Datetime"]>,
  lte?: InputMaybe<Scalars["Datetime"]>,
  neq?: InputMaybe<Scalars["Datetime"]>
};

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars["Float"]>,
  gt?: InputMaybe<Scalars["Float"]>,
  gte?: InputMaybe<Scalars["Float"]>,
  lt?: InputMaybe<Scalars["Float"]>,
  lte?: InputMaybe<Scalars["Float"]>,
  neq?: InputMaybe<Scalars["Float"]>
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars["Int"]>,
  gt?: InputMaybe<Scalars["Int"]>,
  gte?: InputMaybe<Scalars["Int"]>,
  lt?: InputMaybe<Scalars["Int"]>,
  lte?: InputMaybe<Scalars["Int"]>,
  neq?: InputMaybe<Scalars["Int"]>
};

/** Boolean expression comparing fields on type "JSON" */
export type JsonFilter = {
  eq?: InputMaybe<Scalars["JSON"]>,
  neq?: InputMaybe<Scalars["JSON"]>
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: "Mutation",
  /** Deletes zero or more records from the collection */
  deleteFromreality_seriesCollection: RealitySeriesDeleteResponse,
  /** Deletes zero or more records from the collection */
  deleteFromrolesCollection: RolesDeleteResponse,
  /** Deletes zero or more records from the collection */
  deleteFromuser_rolesCollection: UserRolesDeleteResponse,
  /** Adds one or more `reality_seriesInsertResponse` records to the collection */
  insertIntoreality_seriesCollection?: Maybe<RealitySeriesInsertResponse>,
  /** Adds one or more `rolesInsertResponse` records to the collection */
  insertIntorolesCollection?: Maybe<RolesInsertResponse>,
  /** Adds one or more `user_rolesInsertResponse` records to the collection */
  insertIntouser_rolesCollection?: Maybe<UserRolesInsertResponse>,
  /** Updates zero or more records in the collection */
  updatereality_seriesCollection: RealitySeriesUpdateResponse,
  /** Updates zero or more records in the collection */
  updaterolesCollection: RolesUpdateResponse,
  /** Updates zero or more records in the collection */
  updateuser_rolesCollection: UserRolesUpdateResponse
};

/** The root type for creating and mutating data */
export type MutationDeleteFromrealitySeriesCollectionArgs = {
  atMost?: Scalars["Int"],
  filter?: InputMaybe<RealitySeriesFilter>
};

/** The root type for creating and mutating data */
export type MutationDeleteFromrolesCollectionArgs = {
  atMost?: Scalars["Int"],
  filter?: InputMaybe<RolesFilter>
};

/** The root type for creating and mutating data */
export type MutationDeleteFromuserRolesCollectionArgs = {
  atMost?: Scalars["Int"],
  filter?: InputMaybe<UserRolesFilter>
};

/** The root type for creating and mutating data */
export type MutationInsertIntorealitySeriesCollectionArgs = {
  objects: Array<RealitySeriesInsertInput>
};

/** The root type for creating and mutating data */
export type MutationInsertIntorolesCollectionArgs = {
  objects: Array<RolesInsertInput>
};

/** The root type for creating and mutating data */
export type MutationInsertIntouserRolesCollectionArgs = {
  objects: Array<UserRolesInsertInput>
};

/** The root type for creating and mutating data */
export type MutationUpdaterealitySeriesCollectionArgs = {
  atMost?: Scalars["Int"],
  filter?: InputMaybe<RealitySeriesFilter>,
  set: RealitySeriesUpdateInput
};

/** The root type for creating and mutating data */
export type MutationUpdaterolesCollectionArgs = {
  atMost?: Scalars["Int"],
  filter?: InputMaybe<RolesFilter>,
  set: RolesUpdateInput
};

/** The root type for creating and mutating data */
export type MutationUpdateuserRolesCollectionArgs = {
  atMost?: Scalars["Int"],
  filter?: InputMaybe<UserRolesFilter>,
  set: UserRolesUpdateInput
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  AscNullsFirst = "AscNullsFirst",
  AscNullsLast = "AscNullsLast",
  DescNullsFirst = "DescNullsFirst",
  DescNullsLast = "DescNullsLast",
}

export type PageInfo = {
  __typename?: "PageInfo",
  endCursor?: Maybe<Scalars["String"]>,
  hasNextPage: Scalars["Boolean"],
  hasPreviousPage: Scalars["Boolean"],
  startCursor?: Maybe<Scalars["String"]>
};

/** The root type for querying data */
export type Query = {
  __typename?: "Query",
  /** A pagable collection of type `reality_series` */
  reality_seriesCollection?: Maybe<RealitySeriesConnection>,
  /** A pagable collection of type `roles` */
  rolesCollection?: Maybe<RolesConnection>,
  /** A pagable collection of type `user_roles` */
  user_rolesCollection?: Maybe<UserRolesConnection>
};

/** The root type for querying data */
export type QueryRealitySeriesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>,
  before?: InputMaybe<Scalars["Cursor"]>,
  filter?: InputMaybe<RealitySeriesFilter>,
  first?: InputMaybe<Scalars["Int"]>,
  last?: InputMaybe<Scalars["Int"]>,
  orderBy?: InputMaybe<Array<RealitySeriesOrderBy>>
};

/** The root type for querying data */
export type QueryRolesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>,
  before?: InputMaybe<Scalars["Cursor"]>,
  filter?: InputMaybe<RolesFilter>,
  first?: InputMaybe<Scalars["Int"]>,
  last?: InputMaybe<Scalars["Int"]>,
  orderBy?: InputMaybe<Array<RolesOrderBy>>
};

/** The root type for querying data */
export type QueryUserRolesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>,
  before?: InputMaybe<Scalars["Cursor"]>,
  filter?: InputMaybe<UserRolesFilter>,
  first?: InputMaybe<Scalars["Int"]>,
  last?: InputMaybe<Scalars["Int"]>,
  orderBy?: InputMaybe<Array<UserRolesOrderBy>>
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars["String"]>,
  gt?: InputMaybe<Scalars["String"]>,
  gte?: InputMaybe<Scalars["String"]>,
  lt?: InputMaybe<Scalars["String"]>,
  lte?: InputMaybe<Scalars["String"]>,
  neq?: InputMaybe<Scalars["String"]>
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars["Time"]>,
  gt?: InputMaybe<Scalars["Time"]>,
  gte?: InputMaybe<Scalars["Time"]>,
  lt?: InputMaybe<Scalars["Time"]>,
  lte?: InputMaybe<Scalars["Time"]>,
  neq?: InputMaybe<Scalars["Time"]>
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars["UUID"]>,
  neq?: InputMaybe<Scalars["UUID"]>
};

export type RealitySeries = {
  __typename?: "reality_series",
  created_at: Scalars["Datetime"],
  in_progress: Scalars["Boolean"],
  logo_src: Scalars["String"],
  premiere_time?: Maybe<Scalars["Datetime"]>,
  slug: Scalars["String"],
  title: Scalars["String"],
  updated_at: Scalars["Datetime"]
};

export type RealitySeriesConnection = {
  __typename?: "reality_seriesConnection",
  edges: Array<RealitySeriesEdge>,
  pageInfo: PageInfo
};

export type RealitySeriesDeleteResponse = {
  __typename?: "reality_seriesDeleteResponse",
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"],
  /** Array of records impacted by the mutation */
  records: Array<RealitySeries>
};

export type RealitySeriesEdge = {
  __typename?: "reality_seriesEdge",
  cursor: Scalars["String"],
  node?: Maybe<RealitySeries>
};

export type RealitySeriesFilter = {
  created_at?: InputMaybe<DatetimeFilter>,
  in_progress?: InputMaybe<BooleanFilter>,
  logo_src?: InputMaybe<StringFilter>,
  premiere_time?: InputMaybe<DatetimeFilter>,
  slug?: InputMaybe<StringFilter>,
  title?: InputMaybe<StringFilter>,
  updated_at?: InputMaybe<DatetimeFilter>
};

export type RealitySeriesInsertInput = {
  created_at?: InputMaybe<Scalars["Datetime"]>,
  in_progress?: InputMaybe<Scalars["Boolean"]>,
  logo_src?: InputMaybe<Scalars["String"]>,
  premiere_time?: InputMaybe<Scalars["Datetime"]>,
  slug?: InputMaybe<Scalars["String"]>,
  title?: InputMaybe<Scalars["String"]>,
  updated_at?: InputMaybe<Scalars["Datetime"]>
};

export type RealitySeriesInsertResponse = {
  __typename?: "reality_seriesInsertResponse",
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"],
  /** Array of records impacted by the mutation */
  records: Array<RealitySeries>
};

export type RealitySeriesOrderBy = {
  created_at?: InputMaybe<OrderByDirection>,
  in_progress?: InputMaybe<OrderByDirection>,
  logo_src?: InputMaybe<OrderByDirection>,
  premiere_time?: InputMaybe<OrderByDirection>,
  slug?: InputMaybe<OrderByDirection>,
  title?: InputMaybe<OrderByDirection>,
  updated_at?: InputMaybe<OrderByDirection>
};

export type RealitySeriesUpdateInput = {
  created_at?: InputMaybe<Scalars["Datetime"]>,
  in_progress?: InputMaybe<Scalars["Boolean"]>,
  logo_src?: InputMaybe<Scalars["String"]>,
  premiere_time?: InputMaybe<Scalars["Datetime"]>,
  slug?: InputMaybe<Scalars["String"]>,
  title?: InputMaybe<Scalars["String"]>,
  updated_at?: InputMaybe<Scalars["Datetime"]>
};

export type RealitySeriesUpdateResponse = {
  __typename?: "reality_seriesUpdateResponse",
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"],
  /** Array of records impacted by the mutation */
  records: Array<RealitySeries>
};

export type Roles = {
  __typename?: "roles",
  display_name: Scalars["String"],
  id: Scalars["String"],
  user_rolesCollection?: Maybe<UserRolesConnection>
};

export type RolesUserRolesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>,
  before?: InputMaybe<Scalars["Cursor"]>,
  filter?: InputMaybe<UserRolesFilter>,
  first?: InputMaybe<Scalars["Int"]>,
  last?: InputMaybe<Scalars["Int"]>,
  orderBy?: InputMaybe<Array<UserRolesOrderBy>>
};

export type RolesConnection = {
  __typename?: "rolesConnection",
  edges: Array<RolesEdge>,
  pageInfo: PageInfo
};

export type RolesDeleteResponse = {
  __typename?: "rolesDeleteResponse",
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"],
  /** Array of records impacted by the mutation */
  records: Array<Roles>
};

export type RolesEdge = {
  __typename?: "rolesEdge",
  cursor: Scalars["String"],
  node?: Maybe<Roles>
};

export type RolesFilter = {
  display_name?: InputMaybe<StringFilter>,
  id?: InputMaybe<StringFilter>
};

export type RolesInsertInput = {
  display_name?: InputMaybe<Scalars["String"]>,
  id?: InputMaybe<Scalars["String"]>
};

export type RolesInsertResponse = {
  __typename?: "rolesInsertResponse",
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"],
  /** Array of records impacted by the mutation */
  records: Array<Roles>
};

export type RolesOrderBy = {
  display_name?: InputMaybe<OrderByDirection>,
  id?: InputMaybe<OrderByDirection>
};

export type RolesUpdateInput = {
  display_name?: InputMaybe<Scalars["String"]>,
  id?: InputMaybe<Scalars["String"]>
};

export type RolesUpdateResponse = {
  __typename?: "rolesUpdateResponse",
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"],
  /** Array of records impacted by the mutation */
  records: Array<Roles>
};

export type UserRoles = {
  __typename?: "user_roles",
  role_id: Scalars["String"],
  roles?: Maybe<Roles>,
  user_id: Scalars["UUID"]
};

export type UserRolesConnection = {
  __typename?: "user_rolesConnection",
  edges: Array<UserRolesEdge>,
  pageInfo: PageInfo
};

export type UserRolesDeleteResponse = {
  __typename?: "user_rolesDeleteResponse",
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"],
  /** Array of records impacted by the mutation */
  records: Array<UserRoles>
};

export type UserRolesEdge = {
  __typename?: "user_rolesEdge",
  cursor: Scalars["String"],
  node?: Maybe<UserRoles>
};

export type UserRolesFilter = {
  role_id?: InputMaybe<StringFilter>,
  user_id?: InputMaybe<UuidFilter>
};

export type UserRolesInsertInput = {
  role_id?: InputMaybe<Scalars["String"]>,
  user_id?: InputMaybe<Scalars["UUID"]>
};

export type UserRolesInsertResponse = {
  __typename?: "user_rolesInsertResponse",
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"],
  /** Array of records impacted by the mutation */
  records: Array<UserRoles>
};

export type UserRolesOrderBy = {
  role_id?: InputMaybe<OrderByDirection>,
  user_id?: InputMaybe<OrderByDirection>
};

export type UserRolesUpdateInput = {
  role_id?: InputMaybe<Scalars["String"]>,
  user_id?: InputMaybe<Scalars["UUID"]>
};

export type UserRolesUpdateResponse = {
  __typename?: "user_rolesUpdateResponse",
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"],
  /** Array of records impacted by the mutation */
  records: Array<UserRoles>
};
