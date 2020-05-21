import * as extensions from "../extensions";
import {
  TypeData,
  ScalarType,
  FieldsType,
  EnumType,
  FieldsTypeArg
} from "gqless";

type Extension<TName extends string> = TName extends keyof typeof extensions
  ? typeof extensions[TName]
  : any;

/**
 * @name Boolean
 * @type SCALAR
 */
type t_Boolean<T extends boolean = boolean> = ScalarType<
  T,
  Extension<"Boolean">
>;

/**
 * @name Float
 * @type SCALAR
 */
type t_Float<T extends number = number> = ScalarType<T, Extension<"Float">>;

/**
 * @name ID
 * @type SCALAR
 */
type t_ID<T extends string = string> = ScalarType<T, Extension<"ID">>;

/**
 * @name Int
 * @type SCALAR
 */
type t_Int<T extends number = number> = ScalarType<T, Extension<"Int">>;

/**
 * @name Int_comparison_exp
 * @type INPUT_OBJECT
 */
export type Int_comparison_exp = {
  _eq?: number | null;
  _gt?: number | null;
  _gte?: number | null;
  _in?: number[] | null;
  _is_null?: boolean | null;
  _lt?: number | null;
  _lte?: number | null;
  _neq?: number | null;
  _nin?: number[] | null;
};

/**
 * @name String
 * @type SCALAR
 */
type t_String<T extends string = string> = ScalarType<T, Extension<"String">>;

/**
 * @name String_comparison_exp
 * @type INPUT_OBJECT
 */
export type String_comparison_exp = {
  _eq?: string | null;
  _gt?: string | null;
  _gte?: string | null;
  _ilike?: string | null;
  _in?: string[] | null;
  _is_null?: boolean | null;
  _like?: string | null;
  _lt?: string | null;
  _lte?: string | null;
  _neq?: string | null;
  _nilike?: string | null;
  _nin?: string[] | null;
  _nlike?: string | null;
  _nsimilar?: string | null;
  _similar?: string | null;
};

/**
 * @name __Directive
 * @type OBJECT
 */
type t___Directive = FieldsType<
  {
    __typename: t_String<"__Directive">;
    args: t___InputValue[];
    description?: t_String | null;
    locations: t___DirectiveLocation[];
    name: t_String;
  },
  Extension<"__Directive">
>;

/**
 * @name __DirectiveLocation
 * @type ENUM
 */
type t___DirectiveLocation = EnumType<
  | "ARGUMENT_DEFINITION"
  | "ENUM"
  | "ENUM_VALUE"
  | "FIELD"
  | "FIELD_DEFINITION"
  | "FRAGMENT_DEFINITION"
  | "FRAGMENT_SPREAD"
  | "INLINE_FRAGMENT"
  | "INPUT_FIELD_DEFINITION"
  | "INPUT_OBJECT"
  | "INTERFACE"
  | "MUTATION"
  | "OBJECT"
  | "QUERY"
  | "SCALAR"
  | "SCHEMA"
  | "SUBSCRIPTION"
  | "UNION"
>;

/**
 * @name __EnumValue
 * @type OBJECT
 */
type t___EnumValue = FieldsType<
  {
    __typename: t_String<"__EnumValue">;
    deprecationReason?: t_String | null;
    description?: t_String | null;
    isDeprecated: t_Boolean;
    name: t_String;
  },
  Extension<"__EnumValue">
>;

/**
 * @name __Field
 * @type OBJECT
 */
type t___Field = FieldsType<
  {
    __typename: t_String<"__Field">;
    args: t___InputValue[];
    deprecationReason?: t_String | null;
    description?: t_String | null;
    isDeprecated: t_Boolean;
    name: t_String;
    type: t___Type;
  },
  Extension<"__Field">
>;

/**
 * @name __InputValue
 * @type OBJECT
 */
type t___InputValue = FieldsType<
  {
    __typename: t_String<"__InputValue">;
    defaultValue?: t_String | null;
    description?: t_String | null;
    name: t_String;
    type: t___Type;
  },
  Extension<"__InputValue">
>;

/**
 * @name __Schema
 * @type OBJECT
 */
type t___Schema = FieldsType<
  {
    __typename: t_String<"__Schema">;
    directives: t___Directive[];
    mutationType?: t___Type | null;
    queryType: t___Type;
    subscriptionType?: t___Type | null;
    types: t___Type[];
  },
  Extension<"__Schema">
>;

/**
 * @name __Type
 * @type OBJECT
 */
type t___Type = FieldsType<
  {
    __typename: t_String<"__Type">;
    description?: t_String | null;
    enumValues?: FieldsTypeArg<
      { includeDeprecated?: boolean | null },
      t___EnumValue[] | null
    >;
    fields?: FieldsTypeArg<
      { includeDeprecated?: boolean | null },
      t___Field[] | null
    >;
    inputFields?: t___InputValue[] | null;
    interfaces?: t___Type[] | null;
    kind: t___TypeKind;
    name?: t_String | null;
    ofType?: t___Type | null;
    possibleTypes?: t___Type[] | null;
  },
  Extension<"__Type">
>;

/**
 * @name __TypeKind
 * @type ENUM
 */
type t___TypeKind = EnumType<
  | "ENUM"
  | "INPUT_OBJECT"
  | "INTERFACE"
  | "LIST"
  | "NON_NULL"
  | "OBJECT"
  | "SCALAR"
  | "UNION"
>;

/**
 * @name contestant
 * @type OBJECT
 */
type t_contestant = FieldsType<
  {
    __typename: t_String<"contestant">;
    firstName: t_String;
    id: t_String;
    lastName: t_String;
    seasonId?: t_String | null;
  },
  Extension<"contestant">
>;

/**
 * @name contestant_aggregate
 * @type OBJECT
 */
type t_contestant_aggregate = FieldsType<
  {
    __typename: t_String<"contestant_aggregate">;
    aggregate?: t_contestant_aggregate_fields | null;
    nodes: t_contestant[];
  },
  Extension<"contestant_aggregate">
>;

/**
 * @name contestant_aggregate_fields
 * @type OBJECT
 */
type t_contestant_aggregate_fields = FieldsType<
  {
    __typename: t_String<"contestant_aggregate_fields">;
    count?: FieldsTypeArg<
      {
        columns?: contestant_select_column[] | null;
        distinct?: boolean | null;
      },
      t_Int | null
    >;
    max?: t_contestant_max_fields | null;
    min?: t_contestant_min_fields | null;
  },
  Extension<"contestant_aggregate_fields">
>;

/**
 * @name contestant_aggregate_order_by
 * @type INPUT_OBJECT
 */
export type contestant_aggregate_order_by = {
  count?: order_by | null;
  max?: contestant_max_order_by | null;
  min?: contestant_min_order_by | null;
};

/**
 * @name contestant_arr_rel_insert_input
 * @type INPUT_OBJECT
 */
export type contestant_arr_rel_insert_input = {
  data: contestant_insert_input[];
  on_conflict?: contestant_on_conflict | null;
};

/**
 * @name contestant_bool_exp
 * @type INPUT_OBJECT
 */
export type contestant_bool_exp = {
  _and?: (contestant_bool_exp | null)[] | null;
  _not?: contestant_bool_exp | null;
  _or?: (contestant_bool_exp | null)[] | null;
  firstName?: String_comparison_exp | null;
  id?: String_comparison_exp | null;
  lastName?: String_comparison_exp | null;
  seasonId?: String_comparison_exp | null;
};

/**
 * @name contestant_constraint
 * @type ENUM
 */
type t_contestant_constraint = EnumType<"PK_6043f69512bdcc3a7e7194b2ec8">;

/**
 * @name contestant_insert_input
 * @type INPUT_OBJECT
 */
export type contestant_insert_input = {
  firstName?: string | null;
  id?: string | null;
  lastName?: string | null;
  seasonId?: string | null;
};

/**
 * @name contestant_max_fields
 * @type OBJECT
 */
type t_contestant_max_fields = FieldsType<
  {
    __typename: t_String<"contestant_max_fields">;
    firstName?: t_String | null;
    id?: t_String | null;
    lastName?: t_String | null;
    seasonId?: t_String | null;
  },
  Extension<"contestant_max_fields">
>;

/**
 * @name contestant_max_order_by
 * @type INPUT_OBJECT
 */
export type contestant_max_order_by = {
  firstName?: order_by | null;
  id?: order_by | null;
  lastName?: order_by | null;
  seasonId?: order_by | null;
};

/**
 * @name contestant_min_fields
 * @type OBJECT
 */
type t_contestant_min_fields = FieldsType<
  {
    __typename: t_String<"contestant_min_fields">;
    firstName?: t_String | null;
    id?: t_String | null;
    lastName?: t_String | null;
    seasonId?: t_String | null;
  },
  Extension<"contestant_min_fields">
>;

/**
 * @name contestant_min_order_by
 * @type INPUT_OBJECT
 */
export type contestant_min_order_by = {
  firstName?: order_by | null;
  id?: order_by | null;
  lastName?: order_by | null;
  seasonId?: order_by | null;
};

/**
 * @name contestant_mutation_response
 * @type OBJECT
 */
type t_contestant_mutation_response = FieldsType<
  {
    __typename: t_String<"contestant_mutation_response">;

    /**
     * number of affected rows by the mutation
     */
    affected_rows: t_Int;

    /**
     * data of the affected rows by the mutation
     */
    returning: t_contestant[];
  },
  Extension<"contestant_mutation_response">
>;

/**
 * @name contestant_obj_rel_insert_input
 * @type INPUT_OBJECT
 */
export type contestant_obj_rel_insert_input = {
  data: contestant_insert_input;
  on_conflict?: contestant_on_conflict | null;
};

/**
 * @name contestant_on_conflict
 * @type INPUT_OBJECT
 */
export type contestant_on_conflict = {
  constraint: contestant_constraint;
  update_columns: contestant_update_column[];
  where?: contestant_bool_exp | null;
};

/**
 * @name contestant_order_by
 * @type INPUT_OBJECT
 */
export type contestant_order_by = {
  firstName?: order_by | null;
  id?: order_by | null;
  lastName?: order_by | null;
  seasonId?: order_by | null;
};

/**
 * @name contestant_pk_columns_input
 * @type INPUT_OBJECT
 */
export type contestant_pk_columns_input = { id: string };

/**
 * @name contestant_select_column
 * @type ENUM
 */
type t_contestant_select_column = EnumType<
  "firstName" | "id" | "lastName" | "seasonId"
>;

/**
 * @name contestant_set_input
 * @type INPUT_OBJECT
 */
export type contestant_set_input = {
  firstName?: string | null;
  id?: string | null;
  lastName?: string | null;
  seasonId?: string | null;
};

/**
 * @name contestant_update_column
 * @type ENUM
 */
type t_contestant_update_column = EnumType<
  "firstName" | "id" | "lastName" | "seasonId"
>;

/**
 * @name jsonb
 * @type SCALAR
 */
type t_jsonb<T extends any = any> = ScalarType<T, Extension<"jsonb">>;

/**
 * @name jsonb_comparison_exp
 * @type INPUT_OBJECT
 */
export type jsonb_comparison_exp = {
  _contained_in?: any | null;
  _contains?: any | null;
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _has_key?: string | null;
  _has_keys_all?: string[] | null;
  _has_keys_any?: string[] | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
};

/**
 * @name league
 * @type OBJECT
 */
type t_league = FieldsType<
  {
    __typename: t_String<"league">;
    createdDate: t_timestamp;
    id: t_uuid;
    seasonId?: t_String | null;
    updatedDate: t_timestamp;
  },
  Extension<"league">
>;

/**
 * @name league_aggregate
 * @type OBJECT
 */
type t_league_aggregate = FieldsType<
  {
    __typename: t_String<"league_aggregate">;
    aggregate?: t_league_aggregate_fields | null;
    nodes: t_league[];
  },
  Extension<"league_aggregate">
>;

/**
 * @name league_aggregate_fields
 * @type OBJECT
 */
type t_league_aggregate_fields = FieldsType<
  {
    __typename: t_String<"league_aggregate_fields">;
    count?: FieldsTypeArg<
      { columns?: league_select_column[] | null; distinct?: boolean | null },
      t_Int | null
    >;
    max?: t_league_max_fields | null;
    min?: t_league_min_fields | null;
  },
  Extension<"league_aggregate_fields">
>;

/**
 * @name league_aggregate_order_by
 * @type INPUT_OBJECT
 */
export type league_aggregate_order_by = {
  count?: order_by | null;
  max?: league_max_order_by | null;
  min?: league_min_order_by | null;
};

/**
 * @name league_arr_rel_insert_input
 * @type INPUT_OBJECT
 */
export type league_arr_rel_insert_input = {
  data: league_insert_input[];
  on_conflict?: league_on_conflict | null;
};

/**
 * @name league_bool_exp
 * @type INPUT_OBJECT
 */
export type league_bool_exp = {
  _and?: (league_bool_exp | null)[] | null;
  _not?: league_bool_exp | null;
  _or?: (league_bool_exp | null)[] | null;
  createdDate?: timestamp_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  seasonId?: String_comparison_exp | null;
  updatedDate?: timestamp_comparison_exp | null;
};

/**
 * @name league_constraint
 * @type ENUM
 */
type t_league_constraint = EnumType<"PK_0bd74b698f9e28875df738f7864">;

/**
 * @name league_insert_input
 * @type INPUT_OBJECT
 */
export type league_insert_input = {
  createdDate?: any | null;
  id?: any | null;
  seasonId?: string | null;
  updatedDate?: any | null;
};

/**
 * @name league_max_fields
 * @type OBJECT
 */
type t_league_max_fields = FieldsType<
  {
    __typename: t_String<"league_max_fields">;
    createdDate?: t_timestamp | null;
    id?: t_uuid | null;
    seasonId?: t_String | null;
    updatedDate?: t_timestamp | null;
  },
  Extension<"league_max_fields">
>;

/**
 * @name league_max_order_by
 * @type INPUT_OBJECT
 */
export type league_max_order_by = {
  createdDate?: order_by | null;
  id?: order_by | null;
  seasonId?: order_by | null;
  updatedDate?: order_by | null;
};

/**
 * @name league_min_fields
 * @type OBJECT
 */
type t_league_min_fields = FieldsType<
  {
    __typename: t_String<"league_min_fields">;
    createdDate?: t_timestamp | null;
    id?: t_uuid | null;
    seasonId?: t_String | null;
    updatedDate?: t_timestamp | null;
  },
  Extension<"league_min_fields">
>;

/**
 * @name league_min_order_by
 * @type INPUT_OBJECT
 */
export type league_min_order_by = {
  createdDate?: order_by | null;
  id?: order_by | null;
  seasonId?: order_by | null;
  updatedDate?: order_by | null;
};

/**
 * @name league_mutation_response
 * @type OBJECT
 */
type t_league_mutation_response = FieldsType<
  {
    __typename: t_String<"league_mutation_response">;

    /**
     * number of affected rows by the mutation
     */
    affected_rows: t_Int;

    /**
     * data of the affected rows by the mutation
     */
    returning: t_league[];
  },
  Extension<"league_mutation_response">
>;

/**
 * @name league_obj_rel_insert_input
 * @type INPUT_OBJECT
 */
export type league_obj_rel_insert_input = {
  data: league_insert_input;
  on_conflict?: league_on_conflict | null;
};

/**
 * @name league_on_conflict
 * @type INPUT_OBJECT
 */
export type league_on_conflict = {
  constraint: league_constraint;
  update_columns: league_update_column[];
  where?: league_bool_exp | null;
};

/**
 * @name league_order_by
 * @type INPUT_OBJECT
 */
export type league_order_by = {
  createdDate?: order_by | null;
  id?: order_by | null;
  seasonId?: order_by | null;
  updatedDate?: order_by | null;
};

/**
 * @name league_pk_columns_input
 * @type INPUT_OBJECT
 */
export type league_pk_columns_input = { id: any };

/**
 * @name league_rule
 * @type OBJECT
 */
type t_league_rule = FieldsType<
  {
    __typename: t_String<"league_rule">;
    id: t_uuid;
    leagueId?: t_uuid | null;
    options: FieldsTypeArg<{ path?: string | null }, t_jsonb>;
    ruleId: t_String;
  },
  Extension<"league_rule">
>;

/**
 * @name league_rule_aggregate
 * @type OBJECT
 */
type t_league_rule_aggregate = FieldsType<
  {
    __typename: t_String<"league_rule_aggregate">;
    aggregate?: t_league_rule_aggregate_fields | null;
    nodes: t_league_rule[];
  },
  Extension<"league_rule_aggregate">
>;

/**
 * @name league_rule_aggregate_fields
 * @type OBJECT
 */
type t_league_rule_aggregate_fields = FieldsType<
  {
    __typename: t_String<"league_rule_aggregate_fields">;
    count?: FieldsTypeArg<
      {
        columns?: league_rule_select_column[] | null;
        distinct?: boolean | null;
      },
      t_Int | null
    >;
    max?: t_league_rule_max_fields | null;
    min?: t_league_rule_min_fields | null;
  },
  Extension<"league_rule_aggregate_fields">
>;

/**
 * @name league_rule_aggregate_order_by
 * @type INPUT_OBJECT
 */
export type league_rule_aggregate_order_by = {
  count?: order_by | null;
  max?: league_rule_max_order_by | null;
  min?: league_rule_min_order_by | null;
};

/**
 * @name league_rule_append_input
 * @type INPUT_OBJECT
 */
export type league_rule_append_input = { options?: any | null };

/**
 * @name league_rule_arr_rel_insert_input
 * @type INPUT_OBJECT
 */
export type league_rule_arr_rel_insert_input = {
  data: league_rule_insert_input[];
  on_conflict?: league_rule_on_conflict | null;
};

/**
 * @name league_rule_bool_exp
 * @type INPUT_OBJECT
 */
export type league_rule_bool_exp = {
  _and?: (league_rule_bool_exp | null)[] | null;
  _not?: league_rule_bool_exp | null;
  _or?: (league_rule_bool_exp | null)[] | null;
  id?: uuid_comparison_exp | null;
  leagueId?: uuid_comparison_exp | null;
  options?: jsonb_comparison_exp | null;
  ruleId?: String_comparison_exp | null;
};

/**
 * @name league_rule_constraint
 * @type ENUM
 */
type t_league_rule_constraint = EnumType<"PK_6a6627b75e868ac26c40af79ff3">;

/**
 * @name league_rule_delete_at_path_input
 * @type INPUT_OBJECT
 */
export type league_rule_delete_at_path_input = {
  options?: (string | null)[] | null;
};

/**
 * @name league_rule_delete_elem_input
 * @type INPUT_OBJECT
 */
export type league_rule_delete_elem_input = { options?: number | null };

/**
 * @name league_rule_delete_key_input
 * @type INPUT_OBJECT
 */
export type league_rule_delete_key_input = { options?: string | null };

/**
 * @name league_rule_insert_input
 * @type INPUT_OBJECT
 */
export type league_rule_insert_input = {
  id?: any | null;
  leagueId?: any | null;
  options?: any | null;
  ruleId?: string | null;
};

/**
 * @name league_rule_max_fields
 * @type OBJECT
 */
type t_league_rule_max_fields = FieldsType<
  {
    __typename: t_String<"league_rule_max_fields">;
    id?: t_uuid | null;
    leagueId?: t_uuid | null;
    ruleId?: t_String | null;
  },
  Extension<"league_rule_max_fields">
>;

/**
 * @name league_rule_max_order_by
 * @type INPUT_OBJECT
 */
export type league_rule_max_order_by = {
  id?: order_by | null;
  leagueId?: order_by | null;
  ruleId?: order_by | null;
};

/**
 * @name league_rule_min_fields
 * @type OBJECT
 */
type t_league_rule_min_fields = FieldsType<
  {
    __typename: t_String<"league_rule_min_fields">;
    id?: t_uuid | null;
    leagueId?: t_uuid | null;
    ruleId?: t_String | null;
  },
  Extension<"league_rule_min_fields">
>;

/**
 * @name league_rule_min_order_by
 * @type INPUT_OBJECT
 */
export type league_rule_min_order_by = {
  id?: order_by | null;
  leagueId?: order_by | null;
  ruleId?: order_by | null;
};

/**
 * @name league_rule_mutation_response
 * @type OBJECT
 */
type t_league_rule_mutation_response = FieldsType<
  {
    __typename: t_String<"league_rule_mutation_response">;

    /**
     * number of affected rows by the mutation
     */
    affected_rows: t_Int;

    /**
     * data of the affected rows by the mutation
     */
    returning: t_league_rule[];
  },
  Extension<"league_rule_mutation_response">
>;

/**
 * @name league_rule_obj_rel_insert_input
 * @type INPUT_OBJECT
 */
export type league_rule_obj_rel_insert_input = {
  data: league_rule_insert_input;
  on_conflict?: league_rule_on_conflict | null;
};

/**
 * @name league_rule_on_conflict
 * @type INPUT_OBJECT
 */
export type league_rule_on_conflict = {
  constraint: league_rule_constraint;
  update_columns: league_rule_update_column[];
  where?: league_rule_bool_exp | null;
};

/**
 * @name league_rule_order_by
 * @type INPUT_OBJECT
 */
export type league_rule_order_by = {
  id?: order_by | null;
  leagueId?: order_by | null;
  options?: order_by | null;
  ruleId?: order_by | null;
};

/**
 * @name league_rule_pk_columns_input
 * @type INPUT_OBJECT
 */
export type league_rule_pk_columns_input = { id: any };

/**
 * @name league_rule_prepend_input
 * @type INPUT_OBJECT
 */
export type league_rule_prepend_input = { options?: any | null };

/**
 * @name league_rule_select_column
 * @type ENUM
 */
type t_league_rule_select_column = EnumType<
  "id" | "leagueId" | "options" | "ruleId"
>;

/**
 * @name league_rule_set_input
 * @type INPUT_OBJECT
 */
export type league_rule_set_input = {
  id?: any | null;
  leagueId?: any | null;
  options?: any | null;
  ruleId?: string | null;
};

/**
 * @name league_rule_update_column
 * @type ENUM
 */
type t_league_rule_update_column = EnumType<
  "id" | "leagueId" | "options" | "ruleId"
>;

/**
 * @name league_select_column
 * @type ENUM
 */
type t_league_select_column = EnumType<
  "createdDate" | "id" | "seasonId" | "updatedDate"
>;

/**
 * @name league_set_input
 * @type INPUT_OBJECT
 */
export type league_set_input = {
  createdDate?: any | null;
  id?: any | null;
  seasonId?: string | null;
  updatedDate?: any | null;
};

/**
 * @name league_update_column
 * @type ENUM
 */
type t_league_update_column = EnumType<
  "createdDate" | "id" | "seasonId" | "updatedDate"
>;

/**
 * @name mutation_root
 * @type OBJECT
 */
type t_mutation_root = FieldsType<
  {
    __typename: t_String<"mutation_root">;

    /**
     * delete data from the table: "contestant"
     */
    delete_contestant?: FieldsTypeArg<
      { where: contestant_bool_exp },
      t_contestant_mutation_response | null
    >;

    /**
     * delete single row from the table: "contestant"
     */
    delete_contestant_by_pk?: FieldsTypeArg<
      { id: string },
      t_contestant | null
    >;

    /**
     * delete data from the table: "league"
     */
    delete_league?: FieldsTypeArg<
      { where: league_bool_exp },
      t_league_mutation_response | null
    >;

    /**
     * delete single row from the table: "league"
     */
    delete_league_by_pk?: FieldsTypeArg<{ id: any }, t_league | null>;

    /**
     * delete data from the table: "league_rule"
     */
    delete_league_rule?: FieldsTypeArg<
      { where: league_rule_bool_exp },
      t_league_rule_mutation_response | null
    >;

    /**
     * delete single row from the table: "league_rule"
     */
    delete_league_rule_by_pk?: FieldsTypeArg<{ id: any }, t_league_rule | null>;

    /**
     * delete data from the table: "season"
     */
    delete_season?: FieldsTypeArg<
      { where: season_bool_exp },
      t_season_mutation_response | null
    >;

    /**
     * delete single row from the table: "season"
     */
    delete_season_by_pk?: FieldsTypeArg<{ id: string }, t_season | null>;

    /**
     * delete data from the table: "user"
     */
    delete_user?: FieldsTypeArg<
      { where: user_bool_exp },
      t_user_mutation_response | null
    >;

    /**
     * delete single row from the table: "user"
     */
    delete_user_by_pk?: FieldsTypeArg<{ id: any }, t_user | null>;

    /**
     * delete data from the table: "user_league_contestant"
     */
    delete_user_league_contestant?: FieldsTypeArg<
      { where: user_league_contestant_bool_exp },
      t_user_league_contestant_mutation_response | null
    >;

    /**
     * delete single row from the table: "user_league_contestant"
     */
    delete_user_league_contestant_by_pk?: FieldsTypeArg<
      { id: any },
      t_user_league_contestant | null
    >;

    /**
     * insert data into the table: "contestant"
     */
    insert_contestant?: FieldsTypeArg<
      {
        objects: contestant_insert_input[];
        on_conflict?: contestant_on_conflict | null;
      },
      t_contestant_mutation_response | null
    >;

    /**
     * insert a single row into the table: "contestant"
     */
    insert_contestant_one?: FieldsTypeArg<
      {
        object: contestant_insert_input;
        on_conflict?: contestant_on_conflict | null;
      },
      t_contestant | null
    >;

    /**
     * insert data into the table: "league"
     */
    insert_league?: FieldsTypeArg<
      {
        objects: league_insert_input[];
        on_conflict?: league_on_conflict | null;
      },
      t_league_mutation_response | null
    >;

    /**
     * insert a single row into the table: "league"
     */
    insert_league_one?: FieldsTypeArg<
      { object: league_insert_input; on_conflict?: league_on_conflict | null },
      t_league | null
    >;

    /**
     * insert data into the table: "league_rule"
     */
    insert_league_rule?: FieldsTypeArg<
      {
        objects: league_rule_insert_input[];
        on_conflict?: league_rule_on_conflict | null;
      },
      t_league_rule_mutation_response | null
    >;

    /**
     * insert a single row into the table: "league_rule"
     */
    insert_league_rule_one?: FieldsTypeArg<
      {
        object: league_rule_insert_input;
        on_conflict?: league_rule_on_conflict | null;
      },
      t_league_rule | null
    >;

    /**
     * insert data into the table: "season"
     */
    insert_season?: FieldsTypeArg<
      {
        objects: season_insert_input[];
        on_conflict?: season_on_conflict | null;
      },
      t_season_mutation_response | null
    >;

    /**
     * insert a single row into the table: "season"
     */
    insert_season_one?: FieldsTypeArg<
      { object: season_insert_input; on_conflict?: season_on_conflict | null },
      t_season | null
    >;

    /**
     * insert data into the table: "user"
     */
    insert_user?: FieldsTypeArg<
      { objects: user_insert_input[]; on_conflict?: user_on_conflict | null },
      t_user_mutation_response | null
    >;

    /**
     * insert data into the table: "user_league_contestant"
     */
    insert_user_league_contestant?: FieldsTypeArg<
      {
        objects: user_league_contestant_insert_input[];
        on_conflict?: user_league_contestant_on_conflict | null;
      },
      t_user_league_contestant_mutation_response | null
    >;

    /**
     * insert a single row into the table: "user_league_contestant"
     */
    insert_user_league_contestant_one?: FieldsTypeArg<
      {
        object: user_league_contestant_insert_input;
        on_conflict?: user_league_contestant_on_conflict | null;
      },
      t_user_league_contestant | null
    >;

    /**
     * insert a single row into the table: "user"
     */
    insert_user_one?: FieldsTypeArg<
      { object: user_insert_input; on_conflict?: user_on_conflict | null },
      t_user | null
    >;

    /**
     * update data of the table: "contestant"
     */
    update_contestant?: FieldsTypeArg<
      { _set?: contestant_set_input | null; where: contestant_bool_exp },
      t_contestant_mutation_response | null
    >;

    /**
     * update single row of the table: "contestant"
     */
    update_contestant_by_pk?: FieldsTypeArg<
      {
        _set?: contestant_set_input | null;
        pk_columns: contestant_pk_columns_input;
      },
      t_contestant | null
    >;

    /**
     * update data of the table: "league"
     */
    update_league?: FieldsTypeArg<
      { _set?: league_set_input | null; where: league_bool_exp },
      t_league_mutation_response | null
    >;

    /**
     * update single row of the table: "league"
     */
    update_league_by_pk?: FieldsTypeArg<
      { _set?: league_set_input | null; pk_columns: league_pk_columns_input },
      t_league | null
    >;

    /**
     * update data of the table: "league_rule"
     */
    update_league_rule?: FieldsTypeArg<
      {
        _append?: league_rule_append_input | null;
        _delete_at_path?: league_rule_delete_at_path_input | null;
        _delete_elem?: league_rule_delete_elem_input | null;
        _delete_key?: league_rule_delete_key_input | null;
        _prepend?: league_rule_prepend_input | null;
        _set?: league_rule_set_input | null;
        where: league_rule_bool_exp;
      },
      t_league_rule_mutation_response | null
    >;

    /**
     * update single row of the table: "league_rule"
     */
    update_league_rule_by_pk?: FieldsTypeArg<
      {
        _append?: league_rule_append_input | null;
        _delete_at_path?: league_rule_delete_at_path_input | null;
        _delete_elem?: league_rule_delete_elem_input | null;
        _delete_key?: league_rule_delete_key_input | null;
        _prepend?: league_rule_prepend_input | null;
        _set?: league_rule_set_input | null;
        pk_columns: league_rule_pk_columns_input;
      },
      t_league_rule | null
    >;

    /**
     * update data of the table: "season"
     */
    update_season?: FieldsTypeArg<
      {
        _inc?: season_inc_input | null;
        _set?: season_set_input | null;
        where: season_bool_exp;
      },
      t_season_mutation_response | null
    >;

    /**
     * update single row of the table: "season"
     */
    update_season_by_pk?: FieldsTypeArg<
      {
        _inc?: season_inc_input | null;
        _set?: season_set_input | null;
        pk_columns: season_pk_columns_input;
      },
      t_season | null
    >;

    /**
     * update data of the table: "user"
     */
    update_user?: FieldsTypeArg<
      { _set?: user_set_input | null; where: user_bool_exp },
      t_user_mutation_response | null
    >;

    /**
     * update single row of the table: "user"
     */
    update_user_by_pk?: FieldsTypeArg<
      { _set?: user_set_input | null; pk_columns: user_pk_columns_input },
      t_user | null
    >;

    /**
     * update data of the table: "user_league_contestant"
     */
    update_user_league_contestant?: FieldsTypeArg<
      {
        _inc?: user_league_contestant_inc_input | null;
        _set?: user_league_contestant_set_input | null;
        where: user_league_contestant_bool_exp;
      },
      t_user_league_contestant_mutation_response | null
    >;

    /**
     * update single row of the table: "user_league_contestant"
     */
    update_user_league_contestant_by_pk?: FieldsTypeArg<
      {
        _inc?: user_league_contestant_inc_input | null;
        _set?: user_league_contestant_set_input | null;
        pk_columns: user_league_contestant_pk_columns_input;
      },
      t_user_league_contestant | null
    >;
  },
  Extension<"mutation_root">
>;

/**
 * @name order_by
 * @type ENUM
 */
type t_order_by = EnumType<
  | "asc"
  | "asc_nulls_first"
  | "asc_nulls_last"
  | "desc"
  | "desc_nulls_first"
  | "desc_nulls_last"
>;

/**
 * @name query_root
 * @type OBJECT
 */
type t_query_root = FieldsType<
  {
    __typename: t_String<"query_root">;

    /**
     * fetch data from the table: "contestant"
     */
    contestant: FieldsTypeArg<
      {
        distinct_on?: contestant_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: contestant_order_by[] | null;
        where?: contestant_bool_exp | null;
      },
      t_contestant[]
    >;

    /**
     * fetch aggregated fields from the table: "contestant"
     */
    contestant_aggregate: FieldsTypeArg<
      {
        distinct_on?: contestant_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: contestant_order_by[] | null;
        where?: contestant_bool_exp | null;
      },
      t_contestant_aggregate
    >;

    /**
     * fetch data from the table: "contestant" using primary key columns
     */
    contestant_by_pk?: FieldsTypeArg<{ id: string }, t_contestant | null>;

    /**
     * fetch data from the table: "league"
     */
    league: FieldsTypeArg<
      {
        distinct_on?: league_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: league_order_by[] | null;
        where?: league_bool_exp | null;
      },
      t_league[]
    >;

    /**
     * fetch aggregated fields from the table: "league"
     */
    league_aggregate: FieldsTypeArg<
      {
        distinct_on?: league_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: league_order_by[] | null;
        where?: league_bool_exp | null;
      },
      t_league_aggregate
    >;

    /**
     * fetch data from the table: "league" using primary key columns
     */
    league_by_pk?: FieldsTypeArg<{ id: any }, t_league | null>;

    /**
     * fetch data from the table: "league_rule"
     */
    league_rule: FieldsTypeArg<
      {
        distinct_on?: league_rule_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: league_rule_order_by[] | null;
        where?: league_rule_bool_exp | null;
      },
      t_league_rule[]
    >;

    /**
     * fetch aggregated fields from the table: "league_rule"
     */
    league_rule_aggregate: FieldsTypeArg<
      {
        distinct_on?: league_rule_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: league_rule_order_by[] | null;
        where?: league_rule_bool_exp | null;
      },
      t_league_rule_aggregate
    >;

    /**
     * fetch data from the table: "league_rule" using primary key columns
     */
    league_rule_by_pk?: FieldsTypeArg<{ id: any }, t_league_rule | null>;

    /**
     * fetch data from the table: "season"
     */
    season: FieldsTypeArg<
      {
        distinct_on?: season_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: season_order_by[] | null;
        where?: season_bool_exp | null;
      },
      t_season[]
    >;

    /**
     * fetch aggregated fields from the table: "season"
     */
    season_aggregate: FieldsTypeArg<
      {
        distinct_on?: season_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: season_order_by[] | null;
        where?: season_bool_exp | null;
      },
      t_season_aggregate
    >;

    /**
     * fetch data from the table: "season" using primary key columns
     */
    season_by_pk?: FieldsTypeArg<{ id: string }, t_season | null>;

    /**
     * fetch data from the table: "user"
     */
    user: FieldsTypeArg<
      {
        distinct_on?: user_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: user_order_by[] | null;
        where?: user_bool_exp | null;
      },
      t_user[]
    >;

    /**
     * fetch aggregated fields from the table: "user"
     */
    user_aggregate: FieldsTypeArg<
      {
        distinct_on?: user_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: user_order_by[] | null;
        where?: user_bool_exp | null;
      },
      t_user_aggregate
    >;

    /**
     * fetch data from the table: "user" using primary key columns
     */
    user_by_pk?: FieldsTypeArg<{ id: any }, t_user | null>;

    /**
     * fetch data from the table: "user_league_contestant"
     */
    user_league_contestant: FieldsTypeArg<
      {
        distinct_on?: user_league_contestant_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: user_league_contestant_order_by[] | null;
        where?: user_league_contestant_bool_exp | null;
      },
      t_user_league_contestant[]
    >;

    /**
     * fetch aggregated fields from the table: "user_league_contestant"
     */
    user_league_contestant_aggregate: FieldsTypeArg<
      {
        distinct_on?: user_league_contestant_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: user_league_contestant_order_by[] | null;
        where?: user_league_contestant_bool_exp | null;
      },
      t_user_league_contestant_aggregate
    >;

    /**
     * fetch data from the table: "user_league_contestant" using primary key columns
     */
    user_league_contestant_by_pk?: FieldsTypeArg<
      { id: any },
      t_user_league_contestant | null
    >;
  },
  Extension<"query_root">
>;

/**
 * @name season
 * @type OBJECT
 */
type t_season = FieldsType<
  {
    __typename: t_String<"season">;
    countryCode: t_season_countrycode_enum;
    id: t_String;
    name: t_String;
    number: t_Int;
  },
  Extension<"season">
>;

/**
 * @name season_aggregate
 * @type OBJECT
 */
type t_season_aggregate = FieldsType<
  {
    __typename: t_String<"season_aggregate">;
    aggregate?: t_season_aggregate_fields | null;
    nodes: t_season[];
  },
  Extension<"season_aggregate">
>;

/**
 * @name season_aggregate_fields
 * @type OBJECT
 */
type t_season_aggregate_fields = FieldsType<
  {
    __typename: t_String<"season_aggregate_fields">;
    avg?: t_season_avg_fields | null;
    count?: FieldsTypeArg<
      { columns?: season_select_column[] | null; distinct?: boolean | null },
      t_Int | null
    >;
    max?: t_season_max_fields | null;
    min?: t_season_min_fields | null;
    stddev?: t_season_stddev_fields | null;
    stddev_pop?: t_season_stddev_pop_fields | null;
    stddev_samp?: t_season_stddev_samp_fields | null;
    sum?: t_season_sum_fields | null;
    var_pop?: t_season_var_pop_fields | null;
    var_samp?: t_season_var_samp_fields | null;
    variance?: t_season_variance_fields | null;
  },
  Extension<"season_aggregate_fields">
>;

/**
 * @name season_aggregate_order_by
 * @type INPUT_OBJECT
 */
export type season_aggregate_order_by = {
  avg?: season_avg_order_by | null;
  count?: order_by | null;
  max?: season_max_order_by | null;
  min?: season_min_order_by | null;
  stddev?: season_stddev_order_by | null;
  stddev_pop?: season_stddev_pop_order_by | null;
  stddev_samp?: season_stddev_samp_order_by | null;
  sum?: season_sum_order_by | null;
  var_pop?: season_var_pop_order_by | null;
  var_samp?: season_var_samp_order_by | null;
  variance?: season_variance_order_by | null;
};

/**
 * @name season_arr_rel_insert_input
 * @type INPUT_OBJECT
 */
export type season_arr_rel_insert_input = {
  data: season_insert_input[];
  on_conflict?: season_on_conflict | null;
};

/**
 * @name season_avg_fields
 * @type OBJECT
 */
type t_season_avg_fields = FieldsType<
  {
    __typename: t_String<"season_avg_fields">;
    number?: t_Float | null;
  },
  Extension<"season_avg_fields">
>;

/**
 * @name season_avg_order_by
 * @type INPUT_OBJECT
 */
export type season_avg_order_by = { number?: order_by | null };

/**
 * @name season_bool_exp
 * @type INPUT_OBJECT
 */
export type season_bool_exp = {
  _and?: (season_bool_exp | null)[] | null;
  _not?: season_bool_exp | null;
  _or?: (season_bool_exp | null)[] | null;
  countryCode?: season_countrycode_enum_comparison_exp | null;
  id?: String_comparison_exp | null;
  name?: String_comparison_exp | null;
  number?: Int_comparison_exp | null;
};

/**
 * @name season_constraint
 * @type ENUM
 */
type t_season_constraint = EnumType<"PK_8ac0d081dbdb7ab02d166bcda9f">;

/**
 * @name season_countrycode_enum
 * @type SCALAR
 */
type t_season_countrycode_enum<T extends any = any> = ScalarType<
  T,
  Extension<"season_countrycode_enum">
>;

/**
 * @name season_countrycode_enum_comparison_exp
 * @type INPUT_OBJECT
 */
export type season_countrycode_enum_comparison_exp = {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
};

/**
 * @name season_inc_input
 * @type INPUT_OBJECT
 */
export type season_inc_input = { number?: number | null };

/**
 * @name season_insert_input
 * @type INPUT_OBJECT
 */
export type season_insert_input = {
  countryCode?: any | null;
  id?: string | null;
  name?: string | null;
  number?: number | null;
};

/**
 * @name season_max_fields
 * @type OBJECT
 */
type t_season_max_fields = FieldsType<
  {
    __typename: t_String<"season_max_fields">;
    id?: t_String | null;
    name?: t_String | null;
    number?: t_Int | null;
  },
  Extension<"season_max_fields">
>;

/**
 * @name season_max_order_by
 * @type INPUT_OBJECT
 */
export type season_max_order_by = {
  id?: order_by | null;
  name?: order_by | null;
  number?: order_by | null;
};

/**
 * @name season_min_fields
 * @type OBJECT
 */
type t_season_min_fields = FieldsType<
  {
    __typename: t_String<"season_min_fields">;
    id?: t_String | null;
    name?: t_String | null;
    number?: t_Int | null;
  },
  Extension<"season_min_fields">
>;

/**
 * @name season_min_order_by
 * @type INPUT_OBJECT
 */
export type season_min_order_by = {
  id?: order_by | null;
  name?: order_by | null;
  number?: order_by | null;
};

/**
 * @name season_mutation_response
 * @type OBJECT
 */
type t_season_mutation_response = FieldsType<
  {
    __typename: t_String<"season_mutation_response">;

    /**
     * number of affected rows by the mutation
     */
    affected_rows: t_Int;

    /**
     * data of the affected rows by the mutation
     */
    returning: t_season[];
  },
  Extension<"season_mutation_response">
>;

/**
 * @name season_obj_rel_insert_input
 * @type INPUT_OBJECT
 */
export type season_obj_rel_insert_input = {
  data: season_insert_input;
  on_conflict?: season_on_conflict | null;
};

/**
 * @name season_on_conflict
 * @type INPUT_OBJECT
 */
export type season_on_conflict = {
  constraint: season_constraint;
  update_columns: season_update_column[];
  where?: season_bool_exp | null;
};

/**
 * @name season_order_by
 * @type INPUT_OBJECT
 */
export type season_order_by = {
  countryCode?: order_by | null;
  id?: order_by | null;
  name?: order_by | null;
  number?: order_by | null;
};

/**
 * @name season_pk_columns_input
 * @type INPUT_OBJECT
 */
export type season_pk_columns_input = { id: string };

/**
 * @name season_select_column
 * @type ENUM
 */
type t_season_select_column = EnumType<
  "countryCode" | "id" | "name" | "number"
>;

/**
 * @name season_set_input
 * @type INPUT_OBJECT
 */
export type season_set_input = {
  countryCode?: any | null;
  id?: string | null;
  name?: string | null;
  number?: number | null;
};

/**
 * @name season_stddev_fields
 * @type OBJECT
 */
type t_season_stddev_fields = FieldsType<
  {
    __typename: t_String<"season_stddev_fields">;
    number?: t_Float | null;
  },
  Extension<"season_stddev_fields">
>;

/**
 * @name season_stddev_order_by
 * @type INPUT_OBJECT
 */
export type season_stddev_order_by = { number?: order_by | null };

/**
 * @name season_stddev_pop_fields
 * @type OBJECT
 */
type t_season_stddev_pop_fields = FieldsType<
  {
    __typename: t_String<"season_stddev_pop_fields">;
    number?: t_Float | null;
  },
  Extension<"season_stddev_pop_fields">
>;

/**
 * @name season_stddev_pop_order_by
 * @type INPUT_OBJECT
 */
export type season_stddev_pop_order_by = { number?: order_by | null };

/**
 * @name season_stddev_samp_fields
 * @type OBJECT
 */
type t_season_stddev_samp_fields = FieldsType<
  {
    __typename: t_String<"season_stddev_samp_fields">;
    number?: t_Float | null;
  },
  Extension<"season_stddev_samp_fields">
>;

/**
 * @name season_stddev_samp_order_by
 * @type INPUT_OBJECT
 */
export type season_stddev_samp_order_by = { number?: order_by | null };

/**
 * @name season_sum_fields
 * @type OBJECT
 */
type t_season_sum_fields = FieldsType<
  {
    __typename: t_String<"season_sum_fields">;
    number?: t_Int | null;
  },
  Extension<"season_sum_fields">
>;

/**
 * @name season_sum_order_by
 * @type INPUT_OBJECT
 */
export type season_sum_order_by = { number?: order_by | null };

/**
 * @name season_update_column
 * @type ENUM
 */
type t_season_update_column = EnumType<
  "countryCode" | "id" | "name" | "number"
>;

/**
 * @name season_var_pop_fields
 * @type OBJECT
 */
type t_season_var_pop_fields = FieldsType<
  {
    __typename: t_String<"season_var_pop_fields">;
    number?: t_Float | null;
  },
  Extension<"season_var_pop_fields">
>;

/**
 * @name season_var_pop_order_by
 * @type INPUT_OBJECT
 */
export type season_var_pop_order_by = { number?: order_by | null };

/**
 * @name season_var_samp_fields
 * @type OBJECT
 */
type t_season_var_samp_fields = FieldsType<
  {
    __typename: t_String<"season_var_samp_fields">;
    number?: t_Float | null;
  },
  Extension<"season_var_samp_fields">
>;

/**
 * @name season_var_samp_order_by
 * @type INPUT_OBJECT
 */
export type season_var_samp_order_by = { number?: order_by | null };

/**
 * @name season_variance_fields
 * @type OBJECT
 */
type t_season_variance_fields = FieldsType<
  {
    __typename: t_String<"season_variance_fields">;
    number?: t_Float | null;
  },
  Extension<"season_variance_fields">
>;

/**
 * @name season_variance_order_by
 * @type INPUT_OBJECT
 */
export type season_variance_order_by = { number?: order_by | null };

/**
 * @name subscription_root
 * @type OBJECT
 */
type t_subscription_root = FieldsType<
  {
    __typename: t_String<"subscription_root">;

    /**
     * fetch data from the table: "contestant"
     */
    contestant: FieldsTypeArg<
      {
        distinct_on?: contestant_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: contestant_order_by[] | null;
        where?: contestant_bool_exp | null;
      },
      t_contestant[]
    >;

    /**
     * fetch aggregated fields from the table: "contestant"
     */
    contestant_aggregate: FieldsTypeArg<
      {
        distinct_on?: contestant_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: contestant_order_by[] | null;
        where?: contestant_bool_exp | null;
      },
      t_contestant_aggregate
    >;

    /**
     * fetch data from the table: "contestant" using primary key columns
     */
    contestant_by_pk?: FieldsTypeArg<{ id: string }, t_contestant | null>;

    /**
     * fetch data from the table: "league"
     */
    league: FieldsTypeArg<
      {
        distinct_on?: league_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: league_order_by[] | null;
        where?: league_bool_exp | null;
      },
      t_league[]
    >;

    /**
     * fetch aggregated fields from the table: "league"
     */
    league_aggregate: FieldsTypeArg<
      {
        distinct_on?: league_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: league_order_by[] | null;
        where?: league_bool_exp | null;
      },
      t_league_aggregate
    >;

    /**
     * fetch data from the table: "league" using primary key columns
     */
    league_by_pk?: FieldsTypeArg<{ id: any }, t_league | null>;

    /**
     * fetch data from the table: "league_rule"
     */
    league_rule: FieldsTypeArg<
      {
        distinct_on?: league_rule_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: league_rule_order_by[] | null;
        where?: league_rule_bool_exp | null;
      },
      t_league_rule[]
    >;

    /**
     * fetch aggregated fields from the table: "league_rule"
     */
    league_rule_aggregate: FieldsTypeArg<
      {
        distinct_on?: league_rule_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: league_rule_order_by[] | null;
        where?: league_rule_bool_exp | null;
      },
      t_league_rule_aggregate
    >;

    /**
     * fetch data from the table: "league_rule" using primary key columns
     */
    league_rule_by_pk?: FieldsTypeArg<{ id: any }, t_league_rule | null>;

    /**
     * fetch data from the table: "season"
     */
    season: FieldsTypeArg<
      {
        distinct_on?: season_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: season_order_by[] | null;
        where?: season_bool_exp | null;
      },
      t_season[]
    >;

    /**
     * fetch aggregated fields from the table: "season"
     */
    season_aggregate: FieldsTypeArg<
      {
        distinct_on?: season_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: season_order_by[] | null;
        where?: season_bool_exp | null;
      },
      t_season_aggregate
    >;

    /**
     * fetch data from the table: "season" using primary key columns
     */
    season_by_pk?: FieldsTypeArg<{ id: string }, t_season | null>;

    /**
     * fetch data from the table: "user"
     */
    user: FieldsTypeArg<
      {
        distinct_on?: user_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: user_order_by[] | null;
        where?: user_bool_exp | null;
      },
      t_user[]
    >;

    /**
     * fetch aggregated fields from the table: "user"
     */
    user_aggregate: FieldsTypeArg<
      {
        distinct_on?: user_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: user_order_by[] | null;
        where?: user_bool_exp | null;
      },
      t_user_aggregate
    >;

    /**
     * fetch data from the table: "user" using primary key columns
     */
    user_by_pk?: FieldsTypeArg<{ id: any }, t_user | null>;

    /**
     * fetch data from the table: "user_league_contestant"
     */
    user_league_contestant: FieldsTypeArg<
      {
        distinct_on?: user_league_contestant_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: user_league_contestant_order_by[] | null;
        where?: user_league_contestant_bool_exp | null;
      },
      t_user_league_contestant[]
    >;

    /**
     * fetch aggregated fields from the table: "user_league_contestant"
     */
    user_league_contestant_aggregate: FieldsTypeArg<
      {
        distinct_on?: user_league_contestant_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: user_league_contestant_order_by[] | null;
        where?: user_league_contestant_bool_exp | null;
      },
      t_user_league_contestant_aggregate
    >;

    /**
     * fetch data from the table: "user_league_contestant" using primary key columns
     */
    user_league_contestant_by_pk?: FieldsTypeArg<
      { id: any },
      t_user_league_contestant | null
    >;
  },
  Extension<"subscription_root">
>;

/**
 * @name timestamp
 * @type SCALAR
 */
type t_timestamp<T extends any = any> = ScalarType<T, Extension<"timestamp">>;

/**
 * @name timestamp_comparison_exp
 * @type INPUT_OBJECT
 */
export type timestamp_comparison_exp = {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
};

/**
 * @name user
 * @type OBJECT
 */
type t_user = FieldsType<
  {
    __typename: t_String<"user">;
    email: t_String;
    id: t_uuid;
    name: t_String;
  },
  Extension<"user">
>;

/**
 * @name user_aggregate
 * @type OBJECT
 */
type t_user_aggregate = FieldsType<
  {
    __typename: t_String<"user_aggregate">;
    aggregate?: t_user_aggregate_fields | null;
    nodes: t_user[];
  },
  Extension<"user_aggregate">
>;

/**
 * @name user_aggregate_fields
 * @type OBJECT
 */
type t_user_aggregate_fields = FieldsType<
  {
    __typename: t_String<"user_aggregate_fields">;
    count?: FieldsTypeArg<
      { columns?: user_select_column[] | null; distinct?: boolean | null },
      t_Int | null
    >;
    max?: t_user_max_fields | null;
    min?: t_user_min_fields | null;
  },
  Extension<"user_aggregate_fields">
>;

/**
 * @name user_aggregate_order_by
 * @type INPUT_OBJECT
 */
export type user_aggregate_order_by = {
  count?: order_by | null;
  max?: user_max_order_by | null;
  min?: user_min_order_by | null;
};

/**
 * @name user_arr_rel_insert_input
 * @type INPUT_OBJECT
 */
export type user_arr_rel_insert_input = {
  data: user_insert_input[];
  on_conflict?: user_on_conflict | null;
};

/**
 * @name user_bool_exp
 * @type INPUT_OBJECT
 */
export type user_bool_exp = {
  _and?: (user_bool_exp | null)[] | null;
  _not?: user_bool_exp | null;
  _or?: (user_bool_exp | null)[] | null;
  email?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  name?: String_comparison_exp | null;
};

/**
 * @name user_constraint
 * @type ENUM
 */
type t_user_constraint = EnumType<
  "PK_cace4a159ff9f2512dd42373760" | "UQ_e12875dfb3b1d92d7d7c5377e22"
>;

/**
 * @name user_insert_input
 * @type INPUT_OBJECT
 */
export type user_insert_input = {
  email?: string | null;
  id?: any | null;
  name?: string | null;
};

/**
 * @name user_league_contestant
 * @type OBJECT
 */
type t_user_league_contestant = FieldsType<
  {
    __typename: t_String<"user_league_contestant">;
    contestantId?: t_String | null;
    id: t_uuid;
    leagueId?: t_uuid | null;
    rank: t_Int;
    userId?: t_uuid | null;
  },
  Extension<"user_league_contestant">
>;

/**
 * @name user_league_contestant_aggregate
 * @type OBJECT
 */
type t_user_league_contestant_aggregate = FieldsType<
  {
    __typename: t_String<"user_league_contestant_aggregate">;
    aggregate?: t_user_league_contestant_aggregate_fields | null;
    nodes: t_user_league_contestant[];
  },
  Extension<"user_league_contestant_aggregate">
>;

/**
 * @name user_league_contestant_aggregate_fields
 * @type OBJECT
 */
type t_user_league_contestant_aggregate_fields = FieldsType<
  {
    __typename: t_String<"user_league_contestant_aggregate_fields">;
    avg?: t_user_league_contestant_avg_fields | null;
    count?: FieldsTypeArg<
      {
        columns?: user_league_contestant_select_column[] | null;
        distinct?: boolean | null;
      },
      t_Int | null
    >;
    max?: t_user_league_contestant_max_fields | null;
    min?: t_user_league_contestant_min_fields | null;
    stddev?: t_user_league_contestant_stddev_fields | null;
    stddev_pop?: t_user_league_contestant_stddev_pop_fields | null;
    stddev_samp?: t_user_league_contestant_stddev_samp_fields | null;
    sum?: t_user_league_contestant_sum_fields | null;
    var_pop?: t_user_league_contestant_var_pop_fields | null;
    var_samp?: t_user_league_contestant_var_samp_fields | null;
    variance?: t_user_league_contestant_variance_fields | null;
  },
  Extension<"user_league_contestant_aggregate_fields">
>;

/**
 * @name user_league_contestant_aggregate_order_by
 * @type INPUT_OBJECT
 */
export type user_league_contestant_aggregate_order_by = {
  avg?: user_league_contestant_avg_order_by | null;
  count?: order_by | null;
  max?: user_league_contestant_max_order_by | null;
  min?: user_league_contestant_min_order_by | null;
  stddev?: user_league_contestant_stddev_order_by | null;
  stddev_pop?: user_league_contestant_stddev_pop_order_by | null;
  stddev_samp?: user_league_contestant_stddev_samp_order_by | null;
  sum?: user_league_contestant_sum_order_by | null;
  var_pop?: user_league_contestant_var_pop_order_by | null;
  var_samp?: user_league_contestant_var_samp_order_by | null;
  variance?: user_league_contestant_variance_order_by | null;
};

/**
 * @name user_league_contestant_arr_rel_insert_input
 * @type INPUT_OBJECT
 */
export type user_league_contestant_arr_rel_insert_input = {
  data: user_league_contestant_insert_input[];
  on_conflict?: user_league_contestant_on_conflict | null;
};

/**
 * @name user_league_contestant_avg_fields
 * @type OBJECT
 */
type t_user_league_contestant_avg_fields = FieldsType<
  {
    __typename: t_String<"user_league_contestant_avg_fields">;
    rank?: t_Float | null;
  },
  Extension<"user_league_contestant_avg_fields">
>;

/**
 * @name user_league_contestant_avg_order_by
 * @type INPUT_OBJECT
 */
export type user_league_contestant_avg_order_by = { rank?: order_by | null };

/**
 * @name user_league_contestant_bool_exp
 * @type INPUT_OBJECT
 */
export type user_league_contestant_bool_exp = {
  _and?: (user_league_contestant_bool_exp | null)[] | null;
  _not?: user_league_contestant_bool_exp | null;
  _or?: (user_league_contestant_bool_exp | null)[] | null;
  contestantId?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  leagueId?: uuid_comparison_exp | null;
  rank?: Int_comparison_exp | null;
  userId?: uuid_comparison_exp | null;
};

/**
 * @name user_league_contestant_constraint
 * @type ENUM
 */
type t_user_league_contestant_constraint = EnumType<
  "PK_70ca0a925e7b82b61ac800a2ada"
>;

/**
 * @name user_league_contestant_inc_input
 * @type INPUT_OBJECT
 */
export type user_league_contestant_inc_input = { rank?: number | null };

/**
 * @name user_league_contestant_insert_input
 * @type INPUT_OBJECT
 */
export type user_league_contestant_insert_input = {
  contestantId?: string | null;
  id?: any | null;
  leagueId?: any | null;
  rank?: number | null;
  userId?: any | null;
};

/**
 * @name user_league_contestant_max_fields
 * @type OBJECT
 */
type t_user_league_contestant_max_fields = FieldsType<
  {
    __typename: t_String<"user_league_contestant_max_fields">;
    contestantId?: t_String | null;
    id?: t_uuid | null;
    leagueId?: t_uuid | null;
    rank?: t_Int | null;
    userId?: t_uuid | null;
  },
  Extension<"user_league_contestant_max_fields">
>;

/**
 * @name user_league_contestant_max_order_by
 * @type INPUT_OBJECT
 */
export type user_league_contestant_max_order_by = {
  contestantId?: order_by | null;
  id?: order_by | null;
  leagueId?: order_by | null;
  rank?: order_by | null;
  userId?: order_by | null;
};

/**
 * @name user_league_contestant_min_fields
 * @type OBJECT
 */
type t_user_league_contestant_min_fields = FieldsType<
  {
    __typename: t_String<"user_league_contestant_min_fields">;
    contestantId?: t_String | null;
    id?: t_uuid | null;
    leagueId?: t_uuid | null;
    rank?: t_Int | null;
    userId?: t_uuid | null;
  },
  Extension<"user_league_contestant_min_fields">
>;

/**
 * @name user_league_contestant_min_order_by
 * @type INPUT_OBJECT
 */
export type user_league_contestant_min_order_by = {
  contestantId?: order_by | null;
  id?: order_by | null;
  leagueId?: order_by | null;
  rank?: order_by | null;
  userId?: order_by | null;
};

/**
 * @name user_league_contestant_mutation_response
 * @type OBJECT
 */
type t_user_league_contestant_mutation_response = FieldsType<
  {
    __typename: t_String<"user_league_contestant_mutation_response">;

    /**
     * number of affected rows by the mutation
     */
    affected_rows: t_Int;

    /**
     * data of the affected rows by the mutation
     */
    returning: t_user_league_contestant[];
  },
  Extension<"user_league_contestant_mutation_response">
>;

/**
 * @name user_league_contestant_obj_rel_insert_input
 * @type INPUT_OBJECT
 */
export type user_league_contestant_obj_rel_insert_input = {
  data: user_league_contestant_insert_input;
  on_conflict?: user_league_contestant_on_conflict | null;
};

/**
 * @name user_league_contestant_on_conflict
 * @type INPUT_OBJECT
 */
export type user_league_contestant_on_conflict = {
  constraint: user_league_contestant_constraint;
  update_columns: user_league_contestant_update_column[];
  where?: user_league_contestant_bool_exp | null;
};

/**
 * @name user_league_contestant_order_by
 * @type INPUT_OBJECT
 */
export type user_league_contestant_order_by = {
  contestantId?: order_by | null;
  id?: order_by | null;
  leagueId?: order_by | null;
  rank?: order_by | null;
  userId?: order_by | null;
};

/**
 * @name user_league_contestant_pk_columns_input
 * @type INPUT_OBJECT
 */
export type user_league_contestant_pk_columns_input = { id: any };

/**
 * @name user_league_contestant_select_column
 * @type ENUM
 */
type t_user_league_contestant_select_column = EnumType<
  "contestantId" | "id" | "leagueId" | "rank" | "userId"
>;

/**
 * @name user_league_contestant_set_input
 * @type INPUT_OBJECT
 */
export type user_league_contestant_set_input = {
  contestantId?: string | null;
  id?: any | null;
  leagueId?: any | null;
  rank?: number | null;
  userId?: any | null;
};

/**
 * @name user_league_contestant_stddev_fields
 * @type OBJECT
 */
type t_user_league_contestant_stddev_fields = FieldsType<
  {
    __typename: t_String<"user_league_contestant_stddev_fields">;
    rank?: t_Float | null;
  },
  Extension<"user_league_contestant_stddev_fields">
>;

/**
 * @name user_league_contestant_stddev_order_by
 * @type INPUT_OBJECT
 */
export type user_league_contestant_stddev_order_by = { rank?: order_by | null };

/**
 * @name user_league_contestant_stddev_pop_fields
 * @type OBJECT
 */
type t_user_league_contestant_stddev_pop_fields = FieldsType<
  {
    __typename: t_String<"user_league_contestant_stddev_pop_fields">;
    rank?: t_Float | null;
  },
  Extension<"user_league_contestant_stddev_pop_fields">
>;

/**
 * @name user_league_contestant_stddev_pop_order_by
 * @type INPUT_OBJECT
 */
export type user_league_contestant_stddev_pop_order_by = {
  rank?: order_by | null;
};

/**
 * @name user_league_contestant_stddev_samp_fields
 * @type OBJECT
 */
type t_user_league_contestant_stddev_samp_fields = FieldsType<
  {
    __typename: t_String<"user_league_contestant_stddev_samp_fields">;
    rank?: t_Float | null;
  },
  Extension<"user_league_contestant_stddev_samp_fields">
>;

/**
 * @name user_league_contestant_stddev_samp_order_by
 * @type INPUT_OBJECT
 */
export type user_league_contestant_stddev_samp_order_by = {
  rank?: order_by | null;
};

/**
 * @name user_league_contestant_sum_fields
 * @type OBJECT
 */
type t_user_league_contestant_sum_fields = FieldsType<
  {
    __typename: t_String<"user_league_contestant_sum_fields">;
    rank?: t_Int | null;
  },
  Extension<"user_league_contestant_sum_fields">
>;

/**
 * @name user_league_contestant_sum_order_by
 * @type INPUT_OBJECT
 */
export type user_league_contestant_sum_order_by = { rank?: order_by | null };

/**
 * @name user_league_contestant_update_column
 * @type ENUM
 */
type t_user_league_contestant_update_column = EnumType<
  "contestantId" | "id" | "leagueId" | "rank" | "userId"
>;

/**
 * @name user_league_contestant_var_pop_fields
 * @type OBJECT
 */
type t_user_league_contestant_var_pop_fields = FieldsType<
  {
    __typename: t_String<"user_league_contestant_var_pop_fields">;
    rank?: t_Float | null;
  },
  Extension<"user_league_contestant_var_pop_fields">
>;

/**
 * @name user_league_contestant_var_pop_order_by
 * @type INPUT_OBJECT
 */
export type user_league_contestant_var_pop_order_by = {
  rank?: order_by | null;
};

/**
 * @name user_league_contestant_var_samp_fields
 * @type OBJECT
 */
type t_user_league_contestant_var_samp_fields = FieldsType<
  {
    __typename: t_String<"user_league_contestant_var_samp_fields">;
    rank?: t_Float | null;
  },
  Extension<"user_league_contestant_var_samp_fields">
>;

/**
 * @name user_league_contestant_var_samp_order_by
 * @type INPUT_OBJECT
 */
export type user_league_contestant_var_samp_order_by = {
  rank?: order_by | null;
};

/**
 * @name user_league_contestant_variance_fields
 * @type OBJECT
 */
type t_user_league_contestant_variance_fields = FieldsType<
  {
    __typename: t_String<"user_league_contestant_variance_fields">;
    rank?: t_Float | null;
  },
  Extension<"user_league_contestant_variance_fields">
>;

/**
 * @name user_league_contestant_variance_order_by
 * @type INPUT_OBJECT
 */
export type user_league_contestant_variance_order_by = {
  rank?: order_by | null;
};

/**
 * @name user_max_fields
 * @type OBJECT
 */
type t_user_max_fields = FieldsType<
  {
    __typename: t_String<"user_max_fields">;
    email?: t_String | null;
    id?: t_uuid | null;
    name?: t_String | null;
  },
  Extension<"user_max_fields">
>;

/**
 * @name user_max_order_by
 * @type INPUT_OBJECT
 */
export type user_max_order_by = {
  email?: order_by | null;
  id?: order_by | null;
  name?: order_by | null;
};

/**
 * @name user_min_fields
 * @type OBJECT
 */
type t_user_min_fields = FieldsType<
  {
    __typename: t_String<"user_min_fields">;
    email?: t_String | null;
    id?: t_uuid | null;
    name?: t_String | null;
  },
  Extension<"user_min_fields">
>;

/**
 * @name user_min_order_by
 * @type INPUT_OBJECT
 */
export type user_min_order_by = {
  email?: order_by | null;
  id?: order_by | null;
  name?: order_by | null;
};

/**
 * @name user_mutation_response
 * @type OBJECT
 */
type t_user_mutation_response = FieldsType<
  {
    __typename: t_String<"user_mutation_response">;

    /**
     * number of affected rows by the mutation
     */
    affected_rows: t_Int;

    /**
     * data of the affected rows by the mutation
     */
    returning: t_user[];
  },
  Extension<"user_mutation_response">
>;

/**
 * @name user_obj_rel_insert_input
 * @type INPUT_OBJECT
 */
export type user_obj_rel_insert_input = {
  data: user_insert_input;
  on_conflict?: user_on_conflict | null;
};

/**
 * @name user_on_conflict
 * @type INPUT_OBJECT
 */
export type user_on_conflict = {
  constraint: user_constraint;
  update_columns: user_update_column[];
  where?: user_bool_exp | null;
};

/**
 * @name user_order_by
 * @type INPUT_OBJECT
 */
export type user_order_by = {
  email?: order_by | null;
  id?: order_by | null;
  name?: order_by | null;
};

/**
 * @name user_pk_columns_input
 * @type INPUT_OBJECT
 */
export type user_pk_columns_input = { id: any };

/**
 * @name user_select_column
 * @type ENUM
 */
type t_user_select_column = EnumType<"email" | "id" | "name">;

/**
 * @name user_set_input
 * @type INPUT_OBJECT
 */
export type user_set_input = {
  email?: string | null;
  id?: any | null;
  name?: string | null;
};

/**
 * @name user_update_column
 * @type ENUM
 */
type t_user_update_column = EnumType<"email" | "id" | "name">;

/**
 * @name uuid
 * @type SCALAR
 */
type t_uuid<T extends any = any> = ScalarType<T, Extension<"uuid">>;

/**
 * @name uuid_comparison_exp
 * @type INPUT_OBJECT
 */
export type uuid_comparison_exp = {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
};

/**
 * @name Boolean
 * @type SCALAR
 */
export type Boolean = TypeData<t_Boolean>;

/**
 * @name Float
 * @type SCALAR
 */
export type Float = TypeData<t_Float>;

/**
 * @name ID
 * @type SCALAR
 */
export type ID = TypeData<t_ID>;

/**
 * @name Int
 * @type SCALAR
 */
export type Int = TypeData<t_Int>;

/**
 * @name String
 * @type SCALAR
 */
export type String = TypeData<t_String>;

/**
 * @name __Directive
 * @type OBJECT
 */
export type __Directive = TypeData<t___Directive>;

/**
 * @name __DirectiveLocation
 * @type ENUM
 */
export enum __DirectiveLocation {
  ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION",
  ENUM = "ENUM",
  ENUM_VALUE = "ENUM_VALUE",
  FIELD = "FIELD",
  FIELD_DEFINITION = "FIELD_DEFINITION",
  FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION",
  FRAGMENT_SPREAD = "FRAGMENT_SPREAD",
  INLINE_FRAGMENT = "INLINE_FRAGMENT",
  INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION",
  INPUT_OBJECT = "INPUT_OBJECT",
  INTERFACE = "INTERFACE",
  MUTATION = "MUTATION",
  OBJECT = "OBJECT",
  QUERY = "QUERY",
  SCALAR = "SCALAR",
  SCHEMA = "SCHEMA",
  SUBSCRIPTION = "SUBSCRIPTION",
  UNION = "UNION"
}

/**
 * @name __EnumValue
 * @type OBJECT
 */
export type __EnumValue = TypeData<t___EnumValue>;

/**
 * @name __Field
 * @type OBJECT
 */
export type __Field = TypeData<t___Field>;

/**
 * @name __InputValue
 * @type OBJECT
 */
export type __InputValue = TypeData<t___InputValue>;

/**
 * @name __Schema
 * @type OBJECT
 */
export type __Schema = TypeData<t___Schema>;

/**
 * @name __Type
 * @type OBJECT
 */
export type __Type = TypeData<t___Type>;

/**
 * @name __TypeKind
 * @type ENUM
 */
export enum __TypeKind {
  ENUM = "ENUM",
  INPUT_OBJECT = "INPUT_OBJECT",
  INTERFACE = "INTERFACE",
  LIST = "LIST",
  NON_NULL = "NON_NULL",
  OBJECT = "OBJECT",
  SCALAR = "SCALAR",
  UNION = "UNION"
}

/**
 * @name contestant
 * @type OBJECT
 */
export type contestant = TypeData<t_contestant>;

/**
 * @name contestant_aggregate
 * @type OBJECT
 */
export type contestant_aggregate = TypeData<t_contestant_aggregate>;

/**
 * @name contestant_aggregate_fields
 * @type OBJECT
 */
export type contestant_aggregate_fields = TypeData<
  t_contestant_aggregate_fields
>;

/**
 * @name contestant_constraint
 * @type ENUM
 */
export enum contestant_constraint {
  PK_6043f69512bdcc3a7e7194b2ec8 = "PK_6043f69512bdcc3a7e7194b2ec8"
}

/**
 * @name contestant_max_fields
 * @type OBJECT
 */
export type contestant_max_fields = TypeData<t_contestant_max_fields>;

/**
 * @name contestant_min_fields
 * @type OBJECT
 */
export type contestant_min_fields = TypeData<t_contestant_min_fields>;

/**
 * @name contestant_mutation_response
 * @type OBJECT
 */
export type contestant_mutation_response = TypeData<
  t_contestant_mutation_response
>;

/**
 * @name contestant_select_column
 * @type ENUM
 */
export enum contestant_select_column {
  firstName = "firstName",
  id = "id",
  lastName = "lastName",
  seasonId = "seasonId"
}

/**
 * @name contestant_update_column
 * @type ENUM
 */
export enum contestant_update_column {
  firstName = "firstName",
  id = "id",
  lastName = "lastName",
  seasonId = "seasonId"
}

/**
 * @name jsonb
 * @type SCALAR
 */
export type jsonb = TypeData<t_jsonb>;

/**
 * @name league
 * @type OBJECT
 */
export type league = TypeData<t_league>;

/**
 * @name league_aggregate
 * @type OBJECT
 */
export type league_aggregate = TypeData<t_league_aggregate>;

/**
 * @name league_aggregate_fields
 * @type OBJECT
 */
export type league_aggregate_fields = TypeData<t_league_aggregate_fields>;

/**
 * @name league_constraint
 * @type ENUM
 */
export enum league_constraint {
  PK_0bd74b698f9e28875df738f7864 = "PK_0bd74b698f9e28875df738f7864"
}

/**
 * @name league_max_fields
 * @type OBJECT
 */
export type league_max_fields = TypeData<t_league_max_fields>;

/**
 * @name league_min_fields
 * @type OBJECT
 */
export type league_min_fields = TypeData<t_league_min_fields>;

/**
 * @name league_mutation_response
 * @type OBJECT
 */
export type league_mutation_response = TypeData<t_league_mutation_response>;

/**
 * @name league_rule
 * @type OBJECT
 */
export type league_rule = TypeData<t_league_rule>;

/**
 * @name league_rule_aggregate
 * @type OBJECT
 */
export type league_rule_aggregate = TypeData<t_league_rule_aggregate>;

/**
 * @name league_rule_aggregate_fields
 * @type OBJECT
 */
export type league_rule_aggregate_fields = TypeData<
  t_league_rule_aggregate_fields
>;

/**
 * @name league_rule_constraint
 * @type ENUM
 */
export enum league_rule_constraint {
  PK_6a6627b75e868ac26c40af79ff3 = "PK_6a6627b75e868ac26c40af79ff3"
}

/**
 * @name league_rule_max_fields
 * @type OBJECT
 */
export type league_rule_max_fields = TypeData<t_league_rule_max_fields>;

/**
 * @name league_rule_min_fields
 * @type OBJECT
 */
export type league_rule_min_fields = TypeData<t_league_rule_min_fields>;

/**
 * @name league_rule_mutation_response
 * @type OBJECT
 */
export type league_rule_mutation_response = TypeData<
  t_league_rule_mutation_response
>;

/**
 * @name league_rule_select_column
 * @type ENUM
 */
export enum league_rule_select_column {
  id = "id",
  leagueId = "leagueId",
  options = "options",
  ruleId = "ruleId"
}

/**
 * @name league_rule_update_column
 * @type ENUM
 */
export enum league_rule_update_column {
  id = "id",
  leagueId = "leagueId",
  options = "options",
  ruleId = "ruleId"
}

/**
 * @name league_select_column
 * @type ENUM
 */
export enum league_select_column {
  createdDate = "createdDate",
  id = "id",
  seasonId = "seasonId",
  updatedDate = "updatedDate"
}

/**
 * @name league_update_column
 * @type ENUM
 */
export enum league_update_column {
  createdDate = "createdDate",
  id = "id",
  seasonId = "seasonId",
  updatedDate = "updatedDate"
}

/**
 * @name mutation_root
 * @type OBJECT
 */
export type mutation_root = TypeData<t_mutation_root>;

/**
 * @name order_by
 * @type ENUM
 */
export enum order_by {
  asc = "asc",
  asc_nulls_first = "asc_nulls_first",
  asc_nulls_last = "asc_nulls_last",
  desc = "desc",
  desc_nulls_first = "desc_nulls_first",
  desc_nulls_last = "desc_nulls_last"
}

/**
 * @name query_root
 * @type OBJECT
 */
export type query_root = TypeData<t_query_root>;

/**
 * @name season
 * @type OBJECT
 */
export type season = TypeData<t_season>;

/**
 * @name season_aggregate
 * @type OBJECT
 */
export type season_aggregate = TypeData<t_season_aggregate>;

/**
 * @name season_aggregate_fields
 * @type OBJECT
 */
export type season_aggregate_fields = TypeData<t_season_aggregate_fields>;

/**
 * @name season_avg_fields
 * @type OBJECT
 */
export type season_avg_fields = TypeData<t_season_avg_fields>;

/**
 * @name season_constraint
 * @type ENUM
 */
export enum season_constraint {
  PK_8ac0d081dbdb7ab02d166bcda9f = "PK_8ac0d081dbdb7ab02d166bcda9f"
}

/**
 * @name season_countrycode_enum
 * @type SCALAR
 */
export type season_countrycode_enum = TypeData<t_season_countrycode_enum>;

/**
 * @name season_max_fields
 * @type OBJECT
 */
export type season_max_fields = TypeData<t_season_max_fields>;

/**
 * @name season_min_fields
 * @type OBJECT
 */
export type season_min_fields = TypeData<t_season_min_fields>;

/**
 * @name season_mutation_response
 * @type OBJECT
 */
export type season_mutation_response = TypeData<t_season_mutation_response>;

/**
 * @name season_select_column
 * @type ENUM
 */
export enum season_select_column {
  countryCode = "countryCode",
  id = "id",
  name = "name",
  number = "number"
}

/**
 * @name season_stddev_fields
 * @type OBJECT
 */
export type season_stddev_fields = TypeData<t_season_stddev_fields>;

/**
 * @name season_stddev_pop_fields
 * @type OBJECT
 */
export type season_stddev_pop_fields = TypeData<t_season_stddev_pop_fields>;

/**
 * @name season_stddev_samp_fields
 * @type OBJECT
 */
export type season_stddev_samp_fields = TypeData<t_season_stddev_samp_fields>;

/**
 * @name season_sum_fields
 * @type OBJECT
 */
export type season_sum_fields = TypeData<t_season_sum_fields>;

/**
 * @name season_update_column
 * @type ENUM
 */
export enum season_update_column {
  countryCode = "countryCode",
  id = "id",
  name = "name",
  number = "number"
}

/**
 * @name season_var_pop_fields
 * @type OBJECT
 */
export type season_var_pop_fields = TypeData<t_season_var_pop_fields>;

/**
 * @name season_var_samp_fields
 * @type OBJECT
 */
export type season_var_samp_fields = TypeData<t_season_var_samp_fields>;

/**
 * @name season_variance_fields
 * @type OBJECT
 */
export type season_variance_fields = TypeData<t_season_variance_fields>;

/**
 * @name subscription_root
 * @type OBJECT
 */
export type subscription_root = TypeData<t_subscription_root>;

/**
 * @name timestamp
 * @type SCALAR
 */
export type timestamp = TypeData<t_timestamp>;

/**
 * @name user
 * @type OBJECT
 */
export type user = TypeData<t_user>;

/**
 * @name user_aggregate
 * @type OBJECT
 */
export type user_aggregate = TypeData<t_user_aggregate>;

/**
 * @name user_aggregate_fields
 * @type OBJECT
 */
export type user_aggregate_fields = TypeData<t_user_aggregate_fields>;

/**
 * @name user_constraint
 * @type ENUM
 */
export enum user_constraint {
  PK_cace4a159ff9f2512dd42373760 = "PK_cace4a159ff9f2512dd42373760",
  UQ_e12875dfb3b1d92d7d7c5377e22 = "UQ_e12875dfb3b1d92d7d7c5377e22"
}

/**
 * @name user_league_contestant
 * @type OBJECT
 */
export type user_league_contestant = TypeData<t_user_league_contestant>;

/**
 * @name user_league_contestant_aggregate
 * @type OBJECT
 */
export type user_league_contestant_aggregate = TypeData<
  t_user_league_contestant_aggregate
>;

/**
 * @name user_league_contestant_aggregate_fields
 * @type OBJECT
 */
export type user_league_contestant_aggregate_fields = TypeData<
  t_user_league_contestant_aggregate_fields
>;

/**
 * @name user_league_contestant_avg_fields
 * @type OBJECT
 */
export type user_league_contestant_avg_fields = TypeData<
  t_user_league_contestant_avg_fields
>;

/**
 * @name user_league_contestant_constraint
 * @type ENUM
 */
export enum user_league_contestant_constraint {
  PK_70ca0a925e7b82b61ac800a2ada = "PK_70ca0a925e7b82b61ac800a2ada"
}

/**
 * @name user_league_contestant_max_fields
 * @type OBJECT
 */
export type user_league_contestant_max_fields = TypeData<
  t_user_league_contestant_max_fields
>;

/**
 * @name user_league_contestant_min_fields
 * @type OBJECT
 */
export type user_league_contestant_min_fields = TypeData<
  t_user_league_contestant_min_fields
>;

/**
 * @name user_league_contestant_mutation_response
 * @type OBJECT
 */
export type user_league_contestant_mutation_response = TypeData<
  t_user_league_contestant_mutation_response
>;

/**
 * @name user_league_contestant_select_column
 * @type ENUM
 */
export enum user_league_contestant_select_column {
  contestantId = "contestantId",
  id = "id",
  leagueId = "leagueId",
  rank = "rank",
  userId = "userId"
}

/**
 * @name user_league_contestant_stddev_fields
 * @type OBJECT
 */
export type user_league_contestant_stddev_fields = TypeData<
  t_user_league_contestant_stddev_fields
>;

/**
 * @name user_league_contestant_stddev_pop_fields
 * @type OBJECT
 */
export type user_league_contestant_stddev_pop_fields = TypeData<
  t_user_league_contestant_stddev_pop_fields
>;

/**
 * @name user_league_contestant_stddev_samp_fields
 * @type OBJECT
 */
export type user_league_contestant_stddev_samp_fields = TypeData<
  t_user_league_contestant_stddev_samp_fields
>;

/**
 * @name user_league_contestant_sum_fields
 * @type OBJECT
 */
export type user_league_contestant_sum_fields = TypeData<
  t_user_league_contestant_sum_fields
>;

/**
 * @name user_league_contestant_update_column
 * @type ENUM
 */
export enum user_league_contestant_update_column {
  contestantId = "contestantId",
  id = "id",
  leagueId = "leagueId",
  rank = "rank",
  userId = "userId"
}

/**
 * @name user_league_contestant_var_pop_fields
 * @type OBJECT
 */
export type user_league_contestant_var_pop_fields = TypeData<
  t_user_league_contestant_var_pop_fields
>;

/**
 * @name user_league_contestant_var_samp_fields
 * @type OBJECT
 */
export type user_league_contestant_var_samp_fields = TypeData<
  t_user_league_contestant_var_samp_fields
>;

/**
 * @name user_league_contestant_variance_fields
 * @type OBJECT
 */
export type user_league_contestant_variance_fields = TypeData<
  t_user_league_contestant_variance_fields
>;

/**
 * @name user_max_fields
 * @type OBJECT
 */
export type user_max_fields = TypeData<t_user_max_fields>;

/**
 * @name user_min_fields
 * @type OBJECT
 */
export type user_min_fields = TypeData<t_user_min_fields>;

/**
 * @name user_mutation_response
 * @type OBJECT
 */
export type user_mutation_response = TypeData<t_user_mutation_response>;

/**
 * @name user_select_column
 * @type ENUM
 */
export enum user_select_column {
  email = "email",
  id = "id",
  name = "name"
}

/**
 * @name user_update_column
 * @type ENUM
 */
export enum user_update_column {
  email = "email",
  id = "id",
  name = "name"
}

/**
 * @name uuid
 * @type SCALAR
 */
export type uuid = TypeData<t_uuid>;
