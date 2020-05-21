// @ts-nocheck
import * as extensions from "../extensions";
import { lazyGetters } from "@gqless/utils";
import {
  ScalarNode,
  InputNode,
  InputNodeField,
  ArrayNode,
  ObjectNode,
  FieldNode,
  EnumNode,
  Arguments,
  ArgumentsField
} from "gqless";

export const schema = {
  get Boolean() {
    return new ScalarNode({
      name: "Boolean",
      extension: ((extensions as any) || {}).Boolean
    });
  },
  get Float() {
    return new ScalarNode({
      name: "Float",
      extension: ((extensions as any) || {}).Float
    });
  },
  get ID() {
    return new ScalarNode({
      name: "ID",
      extension: ((extensions as any) || {}).ID
    });
  },
  get Int() {
    return new ScalarNode({
      name: "Int",
      extension: ((extensions as any) || {}).Int
    });
  },
  get Int_comparison_exp() {
    return new InputNode(
      {
        get _eq() {
          return new InputNodeField(schema.Int, true);
        },
        get _gt() {
          return new InputNodeField(schema.Int, true);
        },
        get _gte() {
          return new InputNodeField(schema.Int, true);
        },
        get _in() {
          return new InputNodeField(new ArrayNode(schema.Int, true), true);
        },
        get _is_null() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _lt() {
          return new InputNodeField(schema.Int, true);
        },
        get _lte() {
          return new InputNodeField(schema.Int, true);
        },
        get _neq() {
          return new InputNodeField(schema.Int, true);
        },
        get _nin() {
          return new InputNodeField(new ArrayNode(schema.Int, true), true);
        }
      },
      { name: "Int_comparison_exp" }
    );
  },
  get String() {
    return new ScalarNode({
      name: "String",
      extension: ((extensions as any) || {}).String
    });
  },
  get String_comparison_exp() {
    return new InputNode(
      {
        get _eq() {
          return new InputNodeField(schema.String, true);
        },
        get _gt() {
          return new InputNodeField(schema.String, true);
        },
        get _gte() {
          return new InputNodeField(schema.String, true);
        },
        get _ilike() {
          return new InputNodeField(schema.String, true);
        },
        get _in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get _is_null() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _like() {
          return new InputNodeField(schema.String, true);
        },
        get _lt() {
          return new InputNodeField(schema.String, true);
        },
        get _lte() {
          return new InputNodeField(schema.String, true);
        },
        get _neq() {
          return new InputNodeField(schema.String, true);
        },
        get _nilike() {
          return new InputNodeField(schema.String, true);
        },
        get _nin() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get _nlike() {
          return new InputNodeField(schema.String, true);
        },
        get _nsimilar() {
          return new InputNodeField(schema.String, true);
        },
        get _similar() {
          return new InputNodeField(schema.String, true);
        }
      },
      { name: "String_comparison_exp" }
    );
  },
  get __Directive() {
    return new ObjectNode(
      {
        get args() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, false),
            undefined,
            false
          );
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get locations() {
          return new FieldNode(
            new ArrayNode(schema.__DirectiveLocation, false),
            undefined,
            false
          );
        },
        get name() {
          return new FieldNode(schema.String, undefined, false);
        }
      },
      {
        name: "__Directive",
        extension: ((extensions as any) || {}).__Directive
      }
    );
  },
  get __DirectiveLocation() {
    return new EnumNode({ name: "__DirectiveLocation" });
  },
  get __EnumValue() {
    return new ObjectNode(
      {
        get deprecationReason() {
          return new FieldNode(schema.String, undefined, true);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get isDeprecated() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, false);
        }
      },
      {
        name: "__EnumValue",
        extension: ((extensions as any) || {}).__EnumValue
      }
    );
  },
  get __Field() {
    return new ObjectNode(
      {
        get args() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, false),
            undefined,
            false
          );
        },
        get deprecationReason() {
          return new FieldNode(schema.String, undefined, true);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get isDeprecated() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get type() {
          return new FieldNode(schema.__Type, undefined, false);
        }
      },
      { name: "__Field", extension: ((extensions as any) || {}).__Field }
    );
  },
  get __InputValue() {
    return new ObjectNode(
      {
        get defaultValue() {
          return new FieldNode(schema.String, undefined, true);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get type() {
          return new FieldNode(schema.__Type, undefined, false);
        }
      },
      {
        name: "__InputValue",
        extension: ((extensions as any) || {}).__InputValue
      }
    );
  },
  get __Schema() {
    return new ObjectNode(
      {
        get directives() {
          return new FieldNode(
            new ArrayNode(schema.__Directive, false),
            undefined,
            false
          );
        },
        get mutationType() {
          return new FieldNode(schema.__Type, undefined, true);
        },
        get queryType() {
          return new FieldNode(schema.__Type, undefined, false);
        },
        get subscriptionType() {
          return new FieldNode(schema.__Type, undefined, true);
        },
        get types() {
          return new FieldNode(
            new ArrayNode(schema.__Type, false),
            undefined,
            false
          );
        }
      },
      { name: "__Schema", extension: ((extensions as any) || {}).__Schema }
    );
  },
  get __Type() {
    return new ObjectNode(
      {
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get enumValues() {
          return new FieldNode(
            new ArrayNode(schema.__EnumValue, true),
            new Arguments({
              get includeDeprecated() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        },
        get fields() {
          return new FieldNode(
            new ArrayNode(schema.__Field, true),
            new Arguments({
              get includeDeprecated() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        },
        get inputFields() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, true),
            undefined,
            true
          );
        },
        get interfaces() {
          return new FieldNode(
            new ArrayNode(schema.__Type, true),
            undefined,
            true
          );
        },
        get kind() {
          return new FieldNode(schema.__TypeKind, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get ofType() {
          return new FieldNode(schema.__Type, undefined, true);
        },
        get possibleTypes() {
          return new FieldNode(
            new ArrayNode(schema.__Type, true),
            undefined,
            true
          );
        }
      },
      { name: "__Type", extension: ((extensions as any) || {}).__Type }
    );
  },
  get __TypeKind() {
    return new EnumNode({ name: "__TypeKind" });
  },
  get contestant() {
    return new ObjectNode(
      {
        get firstName() {
          return new FieldNode(schema.String, undefined, false);
        },
        get id() {
          return new FieldNode(schema.String, undefined, false);
        },
        get lastName() {
          return new FieldNode(schema.String, undefined, false);
        },
        get seasonId() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      { name: "contestant", extension: ((extensions as any) || {}).contestant }
    );
  },
  get contestant_aggregate() {
    return new ObjectNode(
      {
        get aggregate() {
          return new FieldNode(
            schema.contestant_aggregate_fields,
            undefined,
            true
          );
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.contestant, false),
            undefined,
            false
          );
        }
      },
      {
        name: "contestant_aggregate",
        extension: ((extensions as any) || {}).contestant_aggregate
      }
    );
  },
  get contestant_aggregate_fields() {
    return new ObjectNode(
      {
        get count() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get columns() {
                return new ArgumentsField(
                  new ArrayNode(schema.contestant_select_column, true),
                  true
                );
              },
              get distinct() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        },
        get max() {
          return new FieldNode(schema.contestant_max_fields, undefined, true);
        },
        get min() {
          return new FieldNode(schema.contestant_min_fields, undefined, true);
        }
      },
      {
        name: "contestant_aggregate_fields",
        extension: ((extensions as any) || {}).contestant_aggregate_fields
      }
    );
  },
  get contestant_aggregate_order_by() {
    return new InputNode(
      {
        get count() {
          return new InputNodeField(schema.order_by, true);
        },
        get max() {
          return new InputNodeField(schema.contestant_max_order_by, true);
        },
        get min() {
          return new InputNodeField(schema.contestant_min_order_by, true);
        }
      },
      { name: "contestant_aggregate_order_by" }
    );
  },
  get contestant_arr_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            new ArrayNode(schema.contestant_insert_input, false),
            false
          );
        },
        get on_conflict() {
          return new InputNodeField(schema.contestant_on_conflict, true);
        }
      },
      { name: "contestant_arr_rel_insert_input" }
    );
  },
  get contestant_bool_exp() {
    return new InputNode(
      {
        get _and() {
          return new InputNodeField(
            new ArrayNode(schema.contestant_bool_exp, true),
            true
          );
        },
        get _not() {
          return new InputNodeField(schema.contestant_bool_exp, true);
        },
        get _or() {
          return new InputNodeField(
            new ArrayNode(schema.contestant_bool_exp, true),
            true
          );
        },
        get firstName() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get id() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get lastName() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get seasonId() {
          return new InputNodeField(schema.String_comparison_exp, true);
        }
      },
      { name: "contestant_bool_exp" }
    );
  },
  get contestant_constraint() {
    return new EnumNode({ name: "contestant_constraint" });
  },
  get contestant_insert_input() {
    return new InputNode(
      {
        get firstName() {
          return new InputNodeField(schema.String, true);
        },
        get id() {
          return new InputNodeField(schema.String, true);
        },
        get lastName() {
          return new InputNodeField(schema.String, true);
        },
        get seasonId() {
          return new InputNodeField(schema.String, true);
        }
      },
      { name: "contestant_insert_input" }
    );
  },
  get contestant_max_fields() {
    return new ObjectNode(
      {
        get firstName() {
          return new FieldNode(schema.String, undefined, true);
        },
        get id() {
          return new FieldNode(schema.String, undefined, true);
        },
        get lastName() {
          return new FieldNode(schema.String, undefined, true);
        },
        get seasonId() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "contestant_max_fields",
        extension: ((extensions as any) || {}).contestant_max_fields
      }
    );
  },
  get contestant_max_order_by() {
    return new InputNode(
      {
        get firstName() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get lastName() {
          return new InputNodeField(schema.order_by, true);
        },
        get seasonId() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "contestant_max_order_by" }
    );
  },
  get contestant_min_fields() {
    return new ObjectNode(
      {
        get firstName() {
          return new FieldNode(schema.String, undefined, true);
        },
        get id() {
          return new FieldNode(schema.String, undefined, true);
        },
        get lastName() {
          return new FieldNode(schema.String, undefined, true);
        },
        get seasonId() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "contestant_min_fields",
        extension: ((extensions as any) || {}).contestant_min_fields
      }
    );
  },
  get contestant_min_order_by() {
    return new InputNode(
      {
        get firstName() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get lastName() {
          return new InputNodeField(schema.order_by, true);
        },
        get seasonId() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "contestant_min_order_by" }
    );
  },
  get contestant_mutation_response() {
    return new ObjectNode(
      {
        get affected_rows() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get returning() {
          return new FieldNode(
            new ArrayNode(schema.contestant, false),
            undefined,
            false
          );
        }
      },
      {
        name: "contestant_mutation_response",
        extension: ((extensions as any) || {}).contestant_mutation_response
      }
    );
  },
  get contestant_obj_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(schema.contestant_insert_input, false);
        },
        get on_conflict() {
          return new InputNodeField(schema.contestant_on_conflict, true);
        }
      },
      { name: "contestant_obj_rel_insert_input" }
    );
  },
  get contestant_on_conflict() {
    return new InputNode(
      {
        get constraint() {
          return new InputNodeField(schema.contestant_constraint, false);
        },
        get update_columns() {
          return new InputNodeField(
            new ArrayNode(schema.contestant_update_column, false),
            false
          );
        },
        get where() {
          return new InputNodeField(schema.contestant_bool_exp, true);
        }
      },
      { name: "contestant_on_conflict" }
    );
  },
  get contestant_order_by() {
    return new InputNode(
      {
        get firstName() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get lastName() {
          return new InputNodeField(schema.order_by, true);
        },
        get seasonId() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "contestant_order_by" }
    );
  },
  get contestant_pk_columns_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.String, false);
        }
      },
      { name: "contestant_pk_columns_input" }
    );
  },
  get contestant_select_column() {
    return new EnumNode({ name: "contestant_select_column" });
  },
  get contestant_set_input() {
    return new InputNode(
      {
        get firstName() {
          return new InputNodeField(schema.String, true);
        },
        get id() {
          return new InputNodeField(schema.String, true);
        },
        get lastName() {
          return new InputNodeField(schema.String, true);
        },
        get seasonId() {
          return new InputNodeField(schema.String, true);
        }
      },
      { name: "contestant_set_input" }
    );
  },
  get contestant_update_column() {
    return new EnumNode({ name: "contestant_update_column" });
  },
  get jsonb() {
    return new ScalarNode({
      name: "jsonb",
      extension: ((extensions as any) || {}).jsonb
    });
  },
  get jsonb_comparison_exp() {
    return new InputNode(
      {
        get _contained_in() {
          return new InputNodeField(schema.jsonb, true);
        },
        get _contains() {
          return new InputNodeField(schema.jsonb, true);
        },
        get _eq() {
          return new InputNodeField(schema.jsonb, true);
        },
        get _gt() {
          return new InputNodeField(schema.jsonb, true);
        },
        get _gte() {
          return new InputNodeField(schema.jsonb, true);
        },
        get _has_key() {
          return new InputNodeField(schema.String, true);
        },
        get _has_keys_all() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get _has_keys_any() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get _in() {
          return new InputNodeField(new ArrayNode(schema.jsonb, true), true);
        },
        get _is_null() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _lt() {
          return new InputNodeField(schema.jsonb, true);
        },
        get _lte() {
          return new InputNodeField(schema.jsonb, true);
        },
        get _neq() {
          return new InputNodeField(schema.jsonb, true);
        },
        get _nin() {
          return new InputNodeField(new ArrayNode(schema.jsonb, true), true);
        }
      },
      { name: "jsonb_comparison_exp" }
    );
  },
  get league() {
    return new ObjectNode(
      {
        get createdDate() {
          return new FieldNode(schema.timestamp, undefined, false);
        },
        get id() {
          return new FieldNode(schema.uuid, undefined, false);
        },
        get seasonId() {
          return new FieldNode(schema.String, undefined, true);
        },
        get updatedDate() {
          return new FieldNode(schema.timestamp, undefined, false);
        }
      },
      { name: "league", extension: ((extensions as any) || {}).league }
    );
  },
  get league_aggregate() {
    return new ObjectNode(
      {
        get aggregate() {
          return new FieldNode(schema.league_aggregate_fields, undefined, true);
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.league, false),
            undefined,
            false
          );
        }
      },
      {
        name: "league_aggregate",
        extension: ((extensions as any) || {}).league_aggregate
      }
    );
  },
  get league_aggregate_fields() {
    return new ObjectNode(
      {
        get count() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get columns() {
                return new ArgumentsField(
                  new ArrayNode(schema.league_select_column, true),
                  true
                );
              },
              get distinct() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        },
        get max() {
          return new FieldNode(schema.league_max_fields, undefined, true);
        },
        get min() {
          return new FieldNode(schema.league_min_fields, undefined, true);
        }
      },
      {
        name: "league_aggregate_fields",
        extension: ((extensions as any) || {}).league_aggregate_fields
      }
    );
  },
  get league_aggregate_order_by() {
    return new InputNode(
      {
        get count() {
          return new InputNodeField(schema.order_by, true);
        },
        get max() {
          return new InputNodeField(schema.league_max_order_by, true);
        },
        get min() {
          return new InputNodeField(schema.league_min_order_by, true);
        }
      },
      { name: "league_aggregate_order_by" }
    );
  },
  get league_arr_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            new ArrayNode(schema.league_insert_input, false),
            false
          );
        },
        get on_conflict() {
          return new InputNodeField(schema.league_on_conflict, true);
        }
      },
      { name: "league_arr_rel_insert_input" }
    );
  },
  get league_bool_exp() {
    return new InputNode(
      {
        get _and() {
          return new InputNodeField(
            new ArrayNode(schema.league_bool_exp, true),
            true
          );
        },
        get _not() {
          return new InputNodeField(schema.league_bool_exp, true);
        },
        get _or() {
          return new InputNodeField(
            new ArrayNode(schema.league_bool_exp, true),
            true
          );
        },
        get createdDate() {
          return new InputNodeField(schema.timestamp_comparison_exp, true);
        },
        get id() {
          return new InputNodeField(schema.uuid_comparison_exp, true);
        },
        get seasonId() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get updatedDate() {
          return new InputNodeField(schema.timestamp_comparison_exp, true);
        }
      },
      { name: "league_bool_exp" }
    );
  },
  get league_constraint() {
    return new EnumNode({ name: "league_constraint" });
  },
  get league_insert_input() {
    return new InputNode(
      {
        get createdDate() {
          return new InputNodeField(schema.timestamp, true);
        },
        get id() {
          return new InputNodeField(schema.uuid, true);
        },
        get seasonId() {
          return new InputNodeField(schema.String, true);
        },
        get updatedDate() {
          return new InputNodeField(schema.timestamp, true);
        }
      },
      { name: "league_insert_input" }
    );
  },
  get league_max_fields() {
    return new ObjectNode(
      {
        get createdDate() {
          return new FieldNode(schema.timestamp, undefined, true);
        },
        get id() {
          return new FieldNode(schema.uuid, undefined, true);
        },
        get seasonId() {
          return new FieldNode(schema.String, undefined, true);
        },
        get updatedDate() {
          return new FieldNode(schema.timestamp, undefined, true);
        }
      },
      {
        name: "league_max_fields",
        extension: ((extensions as any) || {}).league_max_fields
      }
    );
  },
  get league_max_order_by() {
    return new InputNode(
      {
        get createdDate() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get seasonId() {
          return new InputNodeField(schema.order_by, true);
        },
        get updatedDate() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "league_max_order_by" }
    );
  },
  get league_min_fields() {
    return new ObjectNode(
      {
        get createdDate() {
          return new FieldNode(schema.timestamp, undefined, true);
        },
        get id() {
          return new FieldNode(schema.uuid, undefined, true);
        },
        get seasonId() {
          return new FieldNode(schema.String, undefined, true);
        },
        get updatedDate() {
          return new FieldNode(schema.timestamp, undefined, true);
        }
      },
      {
        name: "league_min_fields",
        extension: ((extensions as any) || {}).league_min_fields
      }
    );
  },
  get league_min_order_by() {
    return new InputNode(
      {
        get createdDate() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get seasonId() {
          return new InputNodeField(schema.order_by, true);
        },
        get updatedDate() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "league_min_order_by" }
    );
  },
  get league_mutation_response() {
    return new ObjectNode(
      {
        get affected_rows() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get returning() {
          return new FieldNode(
            new ArrayNode(schema.league, false),
            undefined,
            false
          );
        }
      },
      {
        name: "league_mutation_response",
        extension: ((extensions as any) || {}).league_mutation_response
      }
    );
  },
  get league_obj_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(schema.league_insert_input, false);
        },
        get on_conflict() {
          return new InputNodeField(schema.league_on_conflict, true);
        }
      },
      { name: "league_obj_rel_insert_input" }
    );
  },
  get league_on_conflict() {
    return new InputNode(
      {
        get constraint() {
          return new InputNodeField(schema.league_constraint, false);
        },
        get update_columns() {
          return new InputNodeField(
            new ArrayNode(schema.league_update_column, false),
            false
          );
        },
        get where() {
          return new InputNodeField(schema.league_bool_exp, true);
        }
      },
      { name: "league_on_conflict" }
    );
  },
  get league_order_by() {
    return new InputNode(
      {
        get createdDate() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get seasonId() {
          return new InputNodeField(schema.order_by, true);
        },
        get updatedDate() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "league_order_by" }
    );
  },
  get league_pk_columns_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.uuid, false);
        }
      },
      { name: "league_pk_columns_input" }
    );
  },
  get league_rule() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.uuid, undefined, false);
        },
        get leagueId() {
          return new FieldNode(schema.uuid, undefined, true);
        },
        get options() {
          return new FieldNode(
            schema.jsonb,
            new Arguments({
              get path() {
                return new ArgumentsField(schema.String, true);
              }
            }),
            false
          );
        },
        get ruleId() {
          return new FieldNode(schema.String, undefined, false);
        }
      },
      {
        name: "league_rule",
        extension: ((extensions as any) || {}).league_rule
      }
    );
  },
  get league_rule_aggregate() {
    return new ObjectNode(
      {
        get aggregate() {
          return new FieldNode(
            schema.league_rule_aggregate_fields,
            undefined,
            true
          );
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.league_rule, false),
            undefined,
            false
          );
        }
      },
      {
        name: "league_rule_aggregate",
        extension: ((extensions as any) || {}).league_rule_aggregate
      }
    );
  },
  get league_rule_aggregate_fields() {
    return new ObjectNode(
      {
        get count() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get columns() {
                return new ArgumentsField(
                  new ArrayNode(schema.league_rule_select_column, true),
                  true
                );
              },
              get distinct() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        },
        get max() {
          return new FieldNode(schema.league_rule_max_fields, undefined, true);
        },
        get min() {
          return new FieldNode(schema.league_rule_min_fields, undefined, true);
        }
      },
      {
        name: "league_rule_aggregate_fields",
        extension: ((extensions as any) || {}).league_rule_aggregate_fields
      }
    );
  },
  get league_rule_aggregate_order_by() {
    return new InputNode(
      {
        get count() {
          return new InputNodeField(schema.order_by, true);
        },
        get max() {
          return new InputNodeField(schema.league_rule_max_order_by, true);
        },
        get min() {
          return new InputNodeField(schema.league_rule_min_order_by, true);
        }
      },
      { name: "league_rule_aggregate_order_by" }
    );
  },
  get league_rule_append_input() {
    return new InputNode(
      {
        get options() {
          return new InputNodeField(schema.jsonb, true);
        }
      },
      { name: "league_rule_append_input" }
    );
  },
  get league_rule_arr_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            new ArrayNode(schema.league_rule_insert_input, false),
            false
          );
        },
        get on_conflict() {
          return new InputNodeField(schema.league_rule_on_conflict, true);
        }
      },
      { name: "league_rule_arr_rel_insert_input" }
    );
  },
  get league_rule_bool_exp() {
    return new InputNode(
      {
        get _and() {
          return new InputNodeField(
            new ArrayNode(schema.league_rule_bool_exp, true),
            true
          );
        },
        get _not() {
          return new InputNodeField(schema.league_rule_bool_exp, true);
        },
        get _or() {
          return new InputNodeField(
            new ArrayNode(schema.league_rule_bool_exp, true),
            true
          );
        },
        get id() {
          return new InputNodeField(schema.uuid_comparison_exp, true);
        },
        get leagueId() {
          return new InputNodeField(schema.uuid_comparison_exp, true);
        },
        get options() {
          return new InputNodeField(schema.jsonb_comparison_exp, true);
        },
        get ruleId() {
          return new InputNodeField(schema.String_comparison_exp, true);
        }
      },
      { name: "league_rule_bool_exp" }
    );
  },
  get league_rule_constraint() {
    return new EnumNode({ name: "league_rule_constraint" });
  },
  get league_rule_delete_at_path_input() {
    return new InputNode(
      {
        get options() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        }
      },
      { name: "league_rule_delete_at_path_input" }
    );
  },
  get league_rule_delete_elem_input() {
    return new InputNode(
      {
        get options() {
          return new InputNodeField(schema.Int, true);
        }
      },
      { name: "league_rule_delete_elem_input" }
    );
  },
  get league_rule_delete_key_input() {
    return new InputNode(
      {
        get options() {
          return new InputNodeField(schema.String, true);
        }
      },
      { name: "league_rule_delete_key_input" }
    );
  },
  get league_rule_insert_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.uuid, true);
        },
        get leagueId() {
          return new InputNodeField(schema.uuid, true);
        },
        get options() {
          return new InputNodeField(schema.jsonb, true);
        },
        get ruleId() {
          return new InputNodeField(schema.String, true);
        }
      },
      { name: "league_rule_insert_input" }
    );
  },
  get league_rule_max_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.uuid, undefined, true);
        },
        get leagueId() {
          return new FieldNode(schema.uuid, undefined, true);
        },
        get ruleId() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "league_rule_max_fields",
        extension: ((extensions as any) || {}).league_rule_max_fields
      }
    );
  },
  get league_rule_max_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get leagueId() {
          return new InputNodeField(schema.order_by, true);
        },
        get ruleId() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "league_rule_max_order_by" }
    );
  },
  get league_rule_min_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.uuid, undefined, true);
        },
        get leagueId() {
          return new FieldNode(schema.uuid, undefined, true);
        },
        get ruleId() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "league_rule_min_fields",
        extension: ((extensions as any) || {}).league_rule_min_fields
      }
    );
  },
  get league_rule_min_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get leagueId() {
          return new InputNodeField(schema.order_by, true);
        },
        get ruleId() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "league_rule_min_order_by" }
    );
  },
  get league_rule_mutation_response() {
    return new ObjectNode(
      {
        get affected_rows() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get returning() {
          return new FieldNode(
            new ArrayNode(schema.league_rule, false),
            undefined,
            false
          );
        }
      },
      {
        name: "league_rule_mutation_response",
        extension: ((extensions as any) || {}).league_rule_mutation_response
      }
    );
  },
  get league_rule_obj_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(schema.league_rule_insert_input, false);
        },
        get on_conflict() {
          return new InputNodeField(schema.league_rule_on_conflict, true);
        }
      },
      { name: "league_rule_obj_rel_insert_input" }
    );
  },
  get league_rule_on_conflict() {
    return new InputNode(
      {
        get constraint() {
          return new InputNodeField(schema.league_rule_constraint, false);
        },
        get update_columns() {
          return new InputNodeField(
            new ArrayNode(schema.league_rule_update_column, false),
            false
          );
        },
        get where() {
          return new InputNodeField(schema.league_rule_bool_exp, true);
        }
      },
      { name: "league_rule_on_conflict" }
    );
  },
  get league_rule_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get leagueId() {
          return new InputNodeField(schema.order_by, true);
        },
        get options() {
          return new InputNodeField(schema.order_by, true);
        },
        get ruleId() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "league_rule_order_by" }
    );
  },
  get league_rule_pk_columns_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.uuid, false);
        }
      },
      { name: "league_rule_pk_columns_input" }
    );
  },
  get league_rule_prepend_input() {
    return new InputNode(
      {
        get options() {
          return new InputNodeField(schema.jsonb, true);
        }
      },
      { name: "league_rule_prepend_input" }
    );
  },
  get league_rule_select_column() {
    return new EnumNode({ name: "league_rule_select_column" });
  },
  get league_rule_set_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.uuid, true);
        },
        get leagueId() {
          return new InputNodeField(schema.uuid, true);
        },
        get options() {
          return new InputNodeField(schema.jsonb, true);
        },
        get ruleId() {
          return new InputNodeField(schema.String, true);
        }
      },
      { name: "league_rule_set_input" }
    );
  },
  get league_rule_update_column() {
    return new EnumNode({ name: "league_rule_update_column" });
  },
  get league_select_column() {
    return new EnumNode({ name: "league_select_column" });
  },
  get league_set_input() {
    return new InputNode(
      {
        get createdDate() {
          return new InputNodeField(schema.timestamp, true);
        },
        get id() {
          return new InputNodeField(schema.uuid, true);
        },
        get seasonId() {
          return new InputNodeField(schema.String, true);
        },
        get updatedDate() {
          return new InputNodeField(schema.timestamp, true);
        }
      },
      { name: "league_set_input" }
    );
  },
  get league_update_column() {
    return new EnumNode({ name: "league_update_column" });
  },
  get mutation_root() {
    return new ObjectNode(
      {
        get delete_contestant() {
          return new FieldNode(
            schema.contestant_mutation_response,
            new Arguments(
              {
                get where() {
                  return new ArgumentsField(schema.contestant_bool_exp, false);
                }
              },
              true
            ),
            true
          );
        },
        get delete_contestant_by_pk() {
          return new FieldNode(
            schema.contestant,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.String, false);
                }
              },
              true
            ),
            true
          );
        },
        get delete_league() {
          return new FieldNode(
            schema.league_mutation_response,
            new Arguments(
              {
                get where() {
                  return new ArgumentsField(schema.league_bool_exp, false);
                }
              },
              true
            ),
            true
          );
        },
        get delete_league_by_pk() {
          return new FieldNode(
            schema.league,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.uuid, false);
                }
              },
              true
            ),
            true
          );
        },
        get delete_league_rule() {
          return new FieldNode(
            schema.league_rule_mutation_response,
            new Arguments(
              {
                get where() {
                  return new ArgumentsField(schema.league_rule_bool_exp, false);
                }
              },
              true
            ),
            true
          );
        },
        get delete_league_rule_by_pk() {
          return new FieldNode(
            schema.league_rule,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.uuid, false);
                }
              },
              true
            ),
            true
          );
        },
        get delete_season() {
          return new FieldNode(
            schema.season_mutation_response,
            new Arguments(
              {
                get where() {
                  return new ArgumentsField(schema.season_bool_exp, false);
                }
              },
              true
            ),
            true
          );
        },
        get delete_season_by_pk() {
          return new FieldNode(
            schema.season,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.String, false);
                }
              },
              true
            ),
            true
          );
        },
        get delete_user() {
          return new FieldNode(
            schema.user_mutation_response,
            new Arguments(
              {
                get where() {
                  return new ArgumentsField(schema.user_bool_exp, false);
                }
              },
              true
            ),
            true
          );
        },
        get delete_user_by_pk() {
          return new FieldNode(
            schema.user,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.uuid, false);
                }
              },
              true
            ),
            true
          );
        },
        get delete_user_league_contestant() {
          return new FieldNode(
            schema.user_league_contestant_mutation_response,
            new Arguments(
              {
                get where() {
                  return new ArgumentsField(
                    schema.user_league_contestant_bool_exp,
                    false
                  );
                }
              },
              true
            ),
            true
          );
        },
        get delete_user_league_contestant_by_pk() {
          return new FieldNode(
            schema.user_league_contestant,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.uuid, false);
                }
              },
              true
            ),
            true
          );
        },
        get insert_contestant() {
          return new FieldNode(
            schema.contestant_mutation_response,
            new Arguments({
              get objects() {
                return new ArgumentsField(
                  new ArrayNode(schema.contestant_insert_input, false),
                  false
                );
              },
              get on_conflict() {
                return new ArgumentsField(schema.contestant_on_conflict, true);
              }
            }),
            true
          );
        },
        get insert_contestant_one() {
          return new FieldNode(
            schema.contestant,
            new Arguments({
              get object() {
                return new ArgumentsField(
                  schema.contestant_insert_input,
                  false
                );
              },
              get on_conflict() {
                return new ArgumentsField(schema.contestant_on_conflict, true);
              }
            }),
            true
          );
        },
        get insert_league() {
          return new FieldNode(
            schema.league_mutation_response,
            new Arguments({
              get objects() {
                return new ArgumentsField(
                  new ArrayNode(schema.league_insert_input, false),
                  false
                );
              },
              get on_conflict() {
                return new ArgumentsField(schema.league_on_conflict, true);
              }
            }),
            true
          );
        },
        get insert_league_one() {
          return new FieldNode(
            schema.league,
            new Arguments({
              get object() {
                return new ArgumentsField(schema.league_insert_input, false);
              },
              get on_conflict() {
                return new ArgumentsField(schema.league_on_conflict, true);
              }
            }),
            true
          );
        },
        get insert_league_rule() {
          return new FieldNode(
            schema.league_rule_mutation_response,
            new Arguments({
              get objects() {
                return new ArgumentsField(
                  new ArrayNode(schema.league_rule_insert_input, false),
                  false
                );
              },
              get on_conflict() {
                return new ArgumentsField(schema.league_rule_on_conflict, true);
              }
            }),
            true
          );
        },
        get insert_league_rule_one() {
          return new FieldNode(
            schema.league_rule,
            new Arguments({
              get object() {
                return new ArgumentsField(
                  schema.league_rule_insert_input,
                  false
                );
              },
              get on_conflict() {
                return new ArgumentsField(schema.league_rule_on_conflict, true);
              }
            }),
            true
          );
        },
        get insert_season() {
          return new FieldNode(
            schema.season_mutation_response,
            new Arguments({
              get objects() {
                return new ArgumentsField(
                  new ArrayNode(schema.season_insert_input, false),
                  false
                );
              },
              get on_conflict() {
                return new ArgumentsField(schema.season_on_conflict, true);
              }
            }),
            true
          );
        },
        get insert_season_one() {
          return new FieldNode(
            schema.season,
            new Arguments({
              get object() {
                return new ArgumentsField(schema.season_insert_input, false);
              },
              get on_conflict() {
                return new ArgumentsField(schema.season_on_conflict, true);
              }
            }),
            true
          );
        },
        get insert_user() {
          return new FieldNode(
            schema.user_mutation_response,
            new Arguments({
              get objects() {
                return new ArgumentsField(
                  new ArrayNode(schema.user_insert_input, false),
                  false
                );
              },
              get on_conflict() {
                return new ArgumentsField(schema.user_on_conflict, true);
              }
            }),
            true
          );
        },
        get insert_user_league_contestant() {
          return new FieldNode(
            schema.user_league_contestant_mutation_response,
            new Arguments({
              get objects() {
                return new ArgumentsField(
                  new ArrayNode(
                    schema.user_league_contestant_insert_input,
                    false
                  ),
                  false
                );
              },
              get on_conflict() {
                return new ArgumentsField(
                  schema.user_league_contestant_on_conflict,
                  true
                );
              }
            }),
            true
          );
        },
        get insert_user_league_contestant_one() {
          return new FieldNode(
            schema.user_league_contestant,
            new Arguments({
              get object() {
                return new ArgumentsField(
                  schema.user_league_contestant_insert_input,
                  false
                );
              },
              get on_conflict() {
                return new ArgumentsField(
                  schema.user_league_contestant_on_conflict,
                  true
                );
              }
            }),
            true
          );
        },
        get insert_user_one() {
          return new FieldNode(
            schema.user,
            new Arguments({
              get object() {
                return new ArgumentsField(schema.user_insert_input, false);
              },
              get on_conflict() {
                return new ArgumentsField(schema.user_on_conflict, true);
              }
            }),
            true
          );
        },
        get update_contestant() {
          return new FieldNode(
            schema.contestant_mutation_response,
            new Arguments({
              get _set() {
                return new ArgumentsField(schema.contestant_set_input, true);
              },
              get where() {
                return new ArgumentsField(schema.contestant_bool_exp, false);
              }
            }),
            true
          );
        },
        get update_contestant_by_pk() {
          return new FieldNode(
            schema.contestant,
            new Arguments({
              get _set() {
                return new ArgumentsField(schema.contestant_set_input, true);
              },
              get pk_columns() {
                return new ArgumentsField(
                  schema.contestant_pk_columns_input,
                  false
                );
              }
            }),
            true
          );
        },
        get update_league() {
          return new FieldNode(
            schema.league_mutation_response,
            new Arguments({
              get _set() {
                return new ArgumentsField(schema.league_set_input, true);
              },
              get where() {
                return new ArgumentsField(schema.league_bool_exp, false);
              }
            }),
            true
          );
        },
        get update_league_by_pk() {
          return new FieldNode(
            schema.league,
            new Arguments({
              get _set() {
                return new ArgumentsField(schema.league_set_input, true);
              },
              get pk_columns() {
                return new ArgumentsField(
                  schema.league_pk_columns_input,
                  false
                );
              }
            }),
            true
          );
        },
        get update_league_rule() {
          return new FieldNode(
            schema.league_rule_mutation_response,
            new Arguments({
              get _append() {
                return new ArgumentsField(
                  schema.league_rule_append_input,
                  true
                );
              },
              get _delete_at_path() {
                return new ArgumentsField(
                  schema.league_rule_delete_at_path_input,
                  true
                );
              },
              get _delete_elem() {
                return new ArgumentsField(
                  schema.league_rule_delete_elem_input,
                  true
                );
              },
              get _delete_key() {
                return new ArgumentsField(
                  schema.league_rule_delete_key_input,
                  true
                );
              },
              get _prepend() {
                return new ArgumentsField(
                  schema.league_rule_prepend_input,
                  true
                );
              },
              get _set() {
                return new ArgumentsField(schema.league_rule_set_input, true);
              },
              get where() {
                return new ArgumentsField(schema.league_rule_bool_exp, false);
              }
            }),
            true
          );
        },
        get update_league_rule_by_pk() {
          return new FieldNode(
            schema.league_rule,
            new Arguments({
              get _append() {
                return new ArgumentsField(
                  schema.league_rule_append_input,
                  true
                );
              },
              get _delete_at_path() {
                return new ArgumentsField(
                  schema.league_rule_delete_at_path_input,
                  true
                );
              },
              get _delete_elem() {
                return new ArgumentsField(
                  schema.league_rule_delete_elem_input,
                  true
                );
              },
              get _delete_key() {
                return new ArgumentsField(
                  schema.league_rule_delete_key_input,
                  true
                );
              },
              get _prepend() {
                return new ArgumentsField(
                  schema.league_rule_prepend_input,
                  true
                );
              },
              get _set() {
                return new ArgumentsField(schema.league_rule_set_input, true);
              },
              get pk_columns() {
                return new ArgumentsField(
                  schema.league_rule_pk_columns_input,
                  false
                );
              }
            }),
            true
          );
        },
        get update_season() {
          return new FieldNode(
            schema.season_mutation_response,
            new Arguments({
              get _inc() {
                return new ArgumentsField(schema.season_inc_input, true);
              },
              get _set() {
                return new ArgumentsField(schema.season_set_input, true);
              },
              get where() {
                return new ArgumentsField(schema.season_bool_exp, false);
              }
            }),
            true
          );
        },
        get update_season_by_pk() {
          return new FieldNode(
            schema.season,
            new Arguments({
              get _inc() {
                return new ArgumentsField(schema.season_inc_input, true);
              },
              get _set() {
                return new ArgumentsField(schema.season_set_input, true);
              },
              get pk_columns() {
                return new ArgumentsField(
                  schema.season_pk_columns_input,
                  false
                );
              }
            }),
            true
          );
        },
        get update_user() {
          return new FieldNode(
            schema.user_mutation_response,
            new Arguments({
              get _set() {
                return new ArgumentsField(schema.user_set_input, true);
              },
              get where() {
                return new ArgumentsField(schema.user_bool_exp, false);
              }
            }),
            true
          );
        },
        get update_user_by_pk() {
          return new FieldNode(
            schema.user,
            new Arguments({
              get _set() {
                return new ArgumentsField(schema.user_set_input, true);
              },
              get pk_columns() {
                return new ArgumentsField(schema.user_pk_columns_input, false);
              }
            }),
            true
          );
        },
        get update_user_league_contestant() {
          return new FieldNode(
            schema.user_league_contestant_mutation_response,
            new Arguments({
              get _inc() {
                return new ArgumentsField(
                  schema.user_league_contestant_inc_input,
                  true
                );
              },
              get _set() {
                return new ArgumentsField(
                  schema.user_league_contestant_set_input,
                  true
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.user_league_contestant_bool_exp,
                  false
                );
              }
            }),
            true
          );
        },
        get update_user_league_contestant_by_pk() {
          return new FieldNode(
            schema.user_league_contestant,
            new Arguments({
              get _inc() {
                return new ArgumentsField(
                  schema.user_league_contestant_inc_input,
                  true
                );
              },
              get _set() {
                return new ArgumentsField(
                  schema.user_league_contestant_set_input,
                  true
                );
              },
              get pk_columns() {
                return new ArgumentsField(
                  schema.user_league_contestant_pk_columns_input,
                  false
                );
              }
            }),
            true
          );
        }
      },
      {
        name: "mutation_root",
        extension: ((extensions as any) || {}).mutation_root
      }
    );
  },
  get order_by() {
    return new EnumNode({ name: "order_by" });
  },
  get query_root() {
    return new ObjectNode(
      {
        get contestant() {
          return new FieldNode(
            new ArrayNode(schema.contestant, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.contestant_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.contestant_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.contestant_bool_exp, true);
              }
            }),
            false
          );
        },
        get contestant_aggregate() {
          return new FieldNode(
            schema.contestant_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.contestant_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.contestant_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.contestant_bool_exp, true);
              }
            }),
            false
          );
        },
        get contestant_by_pk() {
          return new FieldNode(
            schema.contestant,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.String, false);
                }
              },
              true
            ),
            true
          );
        },
        get league() {
          return new FieldNode(
            new ArrayNode(schema.league, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.league_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.league_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.league_bool_exp, true);
              }
            }),
            false
          );
        },
        get league_aggregate() {
          return new FieldNode(
            schema.league_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.league_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.league_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.league_bool_exp, true);
              }
            }),
            false
          );
        },
        get league_by_pk() {
          return new FieldNode(
            schema.league,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.uuid, false);
                }
              },
              true
            ),
            true
          );
        },
        get league_rule() {
          return new FieldNode(
            new ArrayNode(schema.league_rule, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.league_rule_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.league_rule_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.league_rule_bool_exp, true);
              }
            }),
            false
          );
        },
        get league_rule_aggregate() {
          return new FieldNode(
            schema.league_rule_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.league_rule_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.league_rule_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.league_rule_bool_exp, true);
              }
            }),
            false
          );
        },
        get league_rule_by_pk() {
          return new FieldNode(
            schema.league_rule,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.uuid, false);
                }
              },
              true
            ),
            true
          );
        },
        get season() {
          return new FieldNode(
            new ArrayNode(schema.season, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.season_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.season_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.season_bool_exp, true);
              }
            }),
            false
          );
        },
        get season_aggregate() {
          return new FieldNode(
            schema.season_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.season_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.season_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.season_bool_exp, true);
              }
            }),
            false
          );
        },
        get season_by_pk() {
          return new FieldNode(
            schema.season,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.String, false);
                }
              },
              true
            ),
            true
          );
        },
        get user() {
          return new FieldNode(
            new ArrayNode(schema.user, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.user_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.user_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.user_bool_exp, true);
              }
            }),
            false
          );
        },
        get user_aggregate() {
          return new FieldNode(
            schema.user_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.user_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.user_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.user_bool_exp, true);
              }
            }),
            false
          );
        },
        get user_by_pk() {
          return new FieldNode(
            schema.user,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.uuid, false);
                }
              },
              true
            ),
            true
          );
        },
        get user_league_contestant() {
          return new FieldNode(
            new ArrayNode(schema.user_league_contestant, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(
                    schema.user_league_contestant_select_column,
                    true
                  ),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.user_league_contestant_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.user_league_contestant_bool_exp,
                  true
                );
              }
            }),
            false
          );
        },
        get user_league_contestant_aggregate() {
          return new FieldNode(
            schema.user_league_contestant_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(
                    schema.user_league_contestant_select_column,
                    true
                  ),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.user_league_contestant_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.user_league_contestant_bool_exp,
                  true
                );
              }
            }),
            false
          );
        },
        get user_league_contestant_by_pk() {
          return new FieldNode(
            schema.user_league_contestant,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.uuid, false);
                }
              },
              true
            ),
            true
          );
        }
      },
      { name: "query_root", extension: ((extensions as any) || {}).query_root }
    );
  },
  get season() {
    return new ObjectNode(
      {
        get countryCode() {
          return new FieldNode(
            schema.season_countrycode_enum,
            undefined,
            false
          );
        },
        get id() {
          return new FieldNode(schema.String, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get number() {
          return new FieldNode(schema.Int, undefined, false);
        }
      },
      { name: "season", extension: ((extensions as any) || {}).season }
    );
  },
  get season_aggregate() {
    return new ObjectNode(
      {
        get aggregate() {
          return new FieldNode(schema.season_aggregate_fields, undefined, true);
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.season, false),
            undefined,
            false
          );
        }
      },
      {
        name: "season_aggregate",
        extension: ((extensions as any) || {}).season_aggregate
      }
    );
  },
  get season_aggregate_fields() {
    return new ObjectNode(
      {
        get avg() {
          return new FieldNode(schema.season_avg_fields, undefined, true);
        },
        get count() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get columns() {
                return new ArgumentsField(
                  new ArrayNode(schema.season_select_column, true),
                  true
                );
              },
              get distinct() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        },
        get max() {
          return new FieldNode(schema.season_max_fields, undefined, true);
        },
        get min() {
          return new FieldNode(schema.season_min_fields, undefined, true);
        },
        get stddev() {
          return new FieldNode(schema.season_stddev_fields, undefined, true);
        },
        get stddev_pop() {
          return new FieldNode(
            schema.season_stddev_pop_fields,
            undefined,
            true
          );
        },
        get stddev_samp() {
          return new FieldNode(
            schema.season_stddev_samp_fields,
            undefined,
            true
          );
        },
        get sum() {
          return new FieldNode(schema.season_sum_fields, undefined, true);
        },
        get var_pop() {
          return new FieldNode(schema.season_var_pop_fields, undefined, true);
        },
        get var_samp() {
          return new FieldNode(schema.season_var_samp_fields, undefined, true);
        },
        get variance() {
          return new FieldNode(schema.season_variance_fields, undefined, true);
        }
      },
      {
        name: "season_aggregate_fields",
        extension: ((extensions as any) || {}).season_aggregate_fields
      }
    );
  },
  get season_aggregate_order_by() {
    return new InputNode(
      {
        get avg() {
          return new InputNodeField(schema.season_avg_order_by, true);
        },
        get count() {
          return new InputNodeField(schema.order_by, true);
        },
        get max() {
          return new InputNodeField(schema.season_max_order_by, true);
        },
        get min() {
          return new InputNodeField(schema.season_min_order_by, true);
        },
        get stddev() {
          return new InputNodeField(schema.season_stddev_order_by, true);
        },
        get stddev_pop() {
          return new InputNodeField(schema.season_stddev_pop_order_by, true);
        },
        get stddev_samp() {
          return new InputNodeField(schema.season_stddev_samp_order_by, true);
        },
        get sum() {
          return new InputNodeField(schema.season_sum_order_by, true);
        },
        get var_pop() {
          return new InputNodeField(schema.season_var_pop_order_by, true);
        },
        get var_samp() {
          return new InputNodeField(schema.season_var_samp_order_by, true);
        },
        get variance() {
          return new InputNodeField(schema.season_variance_order_by, true);
        }
      },
      { name: "season_aggregate_order_by" }
    );
  },
  get season_arr_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            new ArrayNode(schema.season_insert_input, false),
            false
          );
        },
        get on_conflict() {
          return new InputNodeField(schema.season_on_conflict, true);
        }
      },
      { name: "season_arr_rel_insert_input" }
    );
  },
  get season_avg_fields() {
    return new ObjectNode(
      {
        get number() {
          return new FieldNode(schema.Float, undefined, true);
        }
      },
      {
        name: "season_avg_fields",
        extension: ((extensions as any) || {}).season_avg_fields
      }
    );
  },
  get season_avg_order_by() {
    return new InputNode(
      {
        get number() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "season_avg_order_by" }
    );
  },
  get season_bool_exp() {
    return new InputNode(
      {
        get _and() {
          return new InputNodeField(
            new ArrayNode(schema.season_bool_exp, true),
            true
          );
        },
        get _not() {
          return new InputNodeField(schema.season_bool_exp, true);
        },
        get _or() {
          return new InputNodeField(
            new ArrayNode(schema.season_bool_exp, true),
            true
          );
        },
        get countryCode() {
          return new InputNodeField(
            schema.season_countrycode_enum_comparison_exp,
            true
          );
        },
        get id() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get name() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get number() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        }
      },
      { name: "season_bool_exp" }
    );
  },
  get season_constraint() {
    return new EnumNode({ name: "season_constraint" });
  },
  get season_countrycode_enum() {
    return new ScalarNode({
      name: "season_countrycode_enum",
      extension: ((extensions as any) || {}).season_countrycode_enum
    });
  },
  get season_countrycode_enum_comparison_exp() {
    return new InputNode(
      {
        get _eq() {
          return new InputNodeField(schema.season_countrycode_enum, true);
        },
        get _gt() {
          return new InputNodeField(schema.season_countrycode_enum, true);
        },
        get _gte() {
          return new InputNodeField(schema.season_countrycode_enum, true);
        },
        get _in() {
          return new InputNodeField(
            new ArrayNode(schema.season_countrycode_enum, true),
            true
          );
        },
        get _is_null() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _lt() {
          return new InputNodeField(schema.season_countrycode_enum, true);
        },
        get _lte() {
          return new InputNodeField(schema.season_countrycode_enum, true);
        },
        get _neq() {
          return new InputNodeField(schema.season_countrycode_enum, true);
        },
        get _nin() {
          return new InputNodeField(
            new ArrayNode(schema.season_countrycode_enum, true),
            true
          );
        }
      },
      { name: "season_countrycode_enum_comparison_exp" }
    );
  },
  get season_inc_input() {
    return new InputNode(
      {
        get number() {
          return new InputNodeField(schema.Int, true);
        }
      },
      { name: "season_inc_input" }
    );
  },
  get season_insert_input() {
    return new InputNode(
      {
        get countryCode() {
          return new InputNodeField(schema.season_countrycode_enum, true);
        },
        get id() {
          return new InputNodeField(schema.String, true);
        },
        get name() {
          return new InputNodeField(schema.String, true);
        },
        get number() {
          return new InputNodeField(schema.Int, true);
        }
      },
      { name: "season_insert_input" }
    );
  },
  get season_max_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.String, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get number() {
          return new FieldNode(schema.Int, undefined, true);
        }
      },
      {
        name: "season_max_fields",
        extension: ((extensions as any) || {}).season_max_fields
      }
    );
  },
  get season_max_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        },
        get number() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "season_max_order_by" }
    );
  },
  get season_min_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.String, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get number() {
          return new FieldNode(schema.Int, undefined, true);
        }
      },
      {
        name: "season_min_fields",
        extension: ((extensions as any) || {}).season_min_fields
      }
    );
  },
  get season_min_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        },
        get number() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "season_min_order_by" }
    );
  },
  get season_mutation_response() {
    return new ObjectNode(
      {
        get affected_rows() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get returning() {
          return new FieldNode(
            new ArrayNode(schema.season, false),
            undefined,
            false
          );
        }
      },
      {
        name: "season_mutation_response",
        extension: ((extensions as any) || {}).season_mutation_response
      }
    );
  },
  get season_obj_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(schema.season_insert_input, false);
        },
        get on_conflict() {
          return new InputNodeField(schema.season_on_conflict, true);
        }
      },
      { name: "season_obj_rel_insert_input" }
    );
  },
  get season_on_conflict() {
    return new InputNode(
      {
        get constraint() {
          return new InputNodeField(schema.season_constraint, false);
        },
        get update_columns() {
          return new InputNodeField(
            new ArrayNode(schema.season_update_column, false),
            false
          );
        },
        get where() {
          return new InputNodeField(schema.season_bool_exp, true);
        }
      },
      { name: "season_on_conflict" }
    );
  },
  get season_order_by() {
    return new InputNode(
      {
        get countryCode() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        },
        get number() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "season_order_by" }
    );
  },
  get season_pk_columns_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.String, false);
        }
      },
      { name: "season_pk_columns_input" }
    );
  },
  get season_select_column() {
    return new EnumNode({ name: "season_select_column" });
  },
  get season_set_input() {
    return new InputNode(
      {
        get countryCode() {
          return new InputNodeField(schema.season_countrycode_enum, true);
        },
        get id() {
          return new InputNodeField(schema.String, true);
        },
        get name() {
          return new InputNodeField(schema.String, true);
        },
        get number() {
          return new InputNodeField(schema.Int, true);
        }
      },
      { name: "season_set_input" }
    );
  },
  get season_stddev_fields() {
    return new ObjectNode(
      {
        get number() {
          return new FieldNode(schema.Float, undefined, true);
        }
      },
      {
        name: "season_stddev_fields",
        extension: ((extensions as any) || {}).season_stddev_fields
      }
    );
  },
  get season_stddev_order_by() {
    return new InputNode(
      {
        get number() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "season_stddev_order_by" }
    );
  },
  get season_stddev_pop_fields() {
    return new ObjectNode(
      {
        get number() {
          return new FieldNode(schema.Float, undefined, true);
        }
      },
      {
        name: "season_stddev_pop_fields",
        extension: ((extensions as any) || {}).season_stddev_pop_fields
      }
    );
  },
  get season_stddev_pop_order_by() {
    return new InputNode(
      {
        get number() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "season_stddev_pop_order_by" }
    );
  },
  get season_stddev_samp_fields() {
    return new ObjectNode(
      {
        get number() {
          return new FieldNode(schema.Float, undefined, true);
        }
      },
      {
        name: "season_stddev_samp_fields",
        extension: ((extensions as any) || {}).season_stddev_samp_fields
      }
    );
  },
  get season_stddev_samp_order_by() {
    return new InputNode(
      {
        get number() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "season_stddev_samp_order_by" }
    );
  },
  get season_sum_fields() {
    return new ObjectNode(
      {
        get number() {
          return new FieldNode(schema.Int, undefined, true);
        }
      },
      {
        name: "season_sum_fields",
        extension: ((extensions as any) || {}).season_sum_fields
      }
    );
  },
  get season_sum_order_by() {
    return new InputNode(
      {
        get number() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "season_sum_order_by" }
    );
  },
  get season_update_column() {
    return new EnumNode({ name: "season_update_column" });
  },
  get season_var_pop_fields() {
    return new ObjectNode(
      {
        get number() {
          return new FieldNode(schema.Float, undefined, true);
        }
      },
      {
        name: "season_var_pop_fields",
        extension: ((extensions as any) || {}).season_var_pop_fields
      }
    );
  },
  get season_var_pop_order_by() {
    return new InputNode(
      {
        get number() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "season_var_pop_order_by" }
    );
  },
  get season_var_samp_fields() {
    return new ObjectNode(
      {
        get number() {
          return new FieldNode(schema.Float, undefined, true);
        }
      },
      {
        name: "season_var_samp_fields",
        extension: ((extensions as any) || {}).season_var_samp_fields
      }
    );
  },
  get season_var_samp_order_by() {
    return new InputNode(
      {
        get number() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "season_var_samp_order_by" }
    );
  },
  get season_variance_fields() {
    return new ObjectNode(
      {
        get number() {
          return new FieldNode(schema.Float, undefined, true);
        }
      },
      {
        name: "season_variance_fields",
        extension: ((extensions as any) || {}).season_variance_fields
      }
    );
  },
  get season_variance_order_by() {
    return new InputNode(
      {
        get number() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "season_variance_order_by" }
    );
  },
  get subscription_root() {
    return new ObjectNode(
      {
        get contestant() {
          return new FieldNode(
            new ArrayNode(schema.contestant, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.contestant_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.contestant_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.contestant_bool_exp, true);
              }
            }),
            false
          );
        },
        get contestant_aggregate() {
          return new FieldNode(
            schema.contestant_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.contestant_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.contestant_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.contestant_bool_exp, true);
              }
            }),
            false
          );
        },
        get contestant_by_pk() {
          return new FieldNode(
            schema.contestant,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.String, false);
                }
              },
              true
            ),
            true
          );
        },
        get league() {
          return new FieldNode(
            new ArrayNode(schema.league, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.league_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.league_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.league_bool_exp, true);
              }
            }),
            false
          );
        },
        get league_aggregate() {
          return new FieldNode(
            schema.league_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.league_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.league_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.league_bool_exp, true);
              }
            }),
            false
          );
        },
        get league_by_pk() {
          return new FieldNode(
            schema.league,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.uuid, false);
                }
              },
              true
            ),
            true
          );
        },
        get league_rule() {
          return new FieldNode(
            new ArrayNode(schema.league_rule, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.league_rule_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.league_rule_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.league_rule_bool_exp, true);
              }
            }),
            false
          );
        },
        get league_rule_aggregate() {
          return new FieldNode(
            schema.league_rule_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.league_rule_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.league_rule_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.league_rule_bool_exp, true);
              }
            }),
            false
          );
        },
        get league_rule_by_pk() {
          return new FieldNode(
            schema.league_rule,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.uuid, false);
                }
              },
              true
            ),
            true
          );
        },
        get season() {
          return new FieldNode(
            new ArrayNode(schema.season, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.season_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.season_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.season_bool_exp, true);
              }
            }),
            false
          );
        },
        get season_aggregate() {
          return new FieldNode(
            schema.season_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.season_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.season_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.season_bool_exp, true);
              }
            }),
            false
          );
        },
        get season_by_pk() {
          return new FieldNode(
            schema.season,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.String, false);
                }
              },
              true
            ),
            true
          );
        },
        get user() {
          return new FieldNode(
            new ArrayNode(schema.user, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.user_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.user_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.user_bool_exp, true);
              }
            }),
            false
          );
        },
        get user_aggregate() {
          return new FieldNode(
            schema.user_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.user_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.user_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.user_bool_exp, true);
              }
            }),
            false
          );
        },
        get user_by_pk() {
          return new FieldNode(
            schema.user,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.uuid, false);
                }
              },
              true
            ),
            true
          );
        },
        get user_league_contestant() {
          return new FieldNode(
            new ArrayNode(schema.user_league_contestant, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(
                    schema.user_league_contestant_select_column,
                    true
                  ),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.user_league_contestant_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.user_league_contestant_bool_exp,
                  true
                );
              }
            }),
            false
          );
        },
        get user_league_contestant_aggregate() {
          return new FieldNode(
            schema.user_league_contestant_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(
                    schema.user_league_contestant_select_column,
                    true
                  ),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.user_league_contestant_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.user_league_contestant_bool_exp,
                  true
                );
              }
            }),
            false
          );
        },
        get user_league_contestant_by_pk() {
          return new FieldNode(
            schema.user_league_contestant,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.uuid, false);
                }
              },
              true
            ),
            true
          );
        }
      },
      {
        name: "subscription_root",
        extension: ((extensions as any) || {}).subscription_root
      }
    );
  },
  get timestamp() {
    return new ScalarNode({
      name: "timestamp",
      extension: ((extensions as any) || {}).timestamp
    });
  },
  get timestamp_comparison_exp() {
    return new InputNode(
      {
        get _eq() {
          return new InputNodeField(schema.timestamp, true);
        },
        get _gt() {
          return new InputNodeField(schema.timestamp, true);
        },
        get _gte() {
          return new InputNodeField(schema.timestamp, true);
        },
        get _in() {
          return new InputNodeField(
            new ArrayNode(schema.timestamp, true),
            true
          );
        },
        get _is_null() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _lt() {
          return new InputNodeField(schema.timestamp, true);
        },
        get _lte() {
          return new InputNodeField(schema.timestamp, true);
        },
        get _neq() {
          return new InputNodeField(schema.timestamp, true);
        },
        get _nin() {
          return new InputNodeField(
            new ArrayNode(schema.timestamp, true),
            true
          );
        }
      },
      { name: "timestamp_comparison_exp" }
    );
  },
  get user() {
    return new ObjectNode(
      {
        get email() {
          return new FieldNode(schema.String, undefined, false);
        },
        get id() {
          return new FieldNode(schema.uuid, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, false);
        }
      },
      { name: "user", extension: ((extensions as any) || {}).user }
    );
  },
  get user_aggregate() {
    return new ObjectNode(
      {
        get aggregate() {
          return new FieldNode(schema.user_aggregate_fields, undefined, true);
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.user, false),
            undefined,
            false
          );
        }
      },
      {
        name: "user_aggregate",
        extension: ((extensions as any) || {}).user_aggregate
      }
    );
  },
  get user_aggregate_fields() {
    return new ObjectNode(
      {
        get count() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get columns() {
                return new ArgumentsField(
                  new ArrayNode(schema.user_select_column, true),
                  true
                );
              },
              get distinct() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        },
        get max() {
          return new FieldNode(schema.user_max_fields, undefined, true);
        },
        get min() {
          return new FieldNode(schema.user_min_fields, undefined, true);
        }
      },
      {
        name: "user_aggregate_fields",
        extension: ((extensions as any) || {}).user_aggregate_fields
      }
    );
  },
  get user_aggregate_order_by() {
    return new InputNode(
      {
        get count() {
          return new InputNodeField(schema.order_by, true);
        },
        get max() {
          return new InputNodeField(schema.user_max_order_by, true);
        },
        get min() {
          return new InputNodeField(schema.user_min_order_by, true);
        }
      },
      { name: "user_aggregate_order_by" }
    );
  },
  get user_arr_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            new ArrayNode(schema.user_insert_input, false),
            false
          );
        },
        get on_conflict() {
          return new InputNodeField(schema.user_on_conflict, true);
        }
      },
      { name: "user_arr_rel_insert_input" }
    );
  },
  get user_bool_exp() {
    return new InputNode(
      {
        get _and() {
          return new InputNodeField(
            new ArrayNode(schema.user_bool_exp, true),
            true
          );
        },
        get _not() {
          return new InputNodeField(schema.user_bool_exp, true);
        },
        get _or() {
          return new InputNodeField(
            new ArrayNode(schema.user_bool_exp, true),
            true
          );
        },
        get email() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get id() {
          return new InputNodeField(schema.uuid_comparison_exp, true);
        },
        get name() {
          return new InputNodeField(schema.String_comparison_exp, true);
        }
      },
      { name: "user_bool_exp" }
    );
  },
  get user_constraint() {
    return new EnumNode({ name: "user_constraint" });
  },
  get user_insert_input() {
    return new InputNode(
      {
        get email() {
          return new InputNodeField(schema.String, true);
        },
        get id() {
          return new InputNodeField(schema.uuid, true);
        },
        get name() {
          return new InputNodeField(schema.String, true);
        }
      },
      { name: "user_insert_input" }
    );
  },
  get user_league_contestant() {
    return new ObjectNode(
      {
        get contestantId() {
          return new FieldNode(schema.String, undefined, true);
        },
        get id() {
          return new FieldNode(schema.uuid, undefined, false);
        },
        get leagueId() {
          return new FieldNode(schema.uuid, undefined, true);
        },
        get rank() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get userId() {
          return new FieldNode(schema.uuid, undefined, true);
        }
      },
      {
        name: "user_league_contestant",
        extension: ((extensions as any) || {}).user_league_contestant
      }
    );
  },
  get user_league_contestant_aggregate() {
    return new ObjectNode(
      {
        get aggregate() {
          return new FieldNode(
            schema.user_league_contestant_aggregate_fields,
            undefined,
            true
          );
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.user_league_contestant, false),
            undefined,
            false
          );
        }
      },
      {
        name: "user_league_contestant_aggregate",
        extension: ((extensions as any) || {}).user_league_contestant_aggregate
      }
    );
  },
  get user_league_contestant_aggregate_fields() {
    return new ObjectNode(
      {
        get avg() {
          return new FieldNode(
            schema.user_league_contestant_avg_fields,
            undefined,
            true
          );
        },
        get count() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get columns() {
                return new ArgumentsField(
                  new ArrayNode(
                    schema.user_league_contestant_select_column,
                    true
                  ),
                  true
                );
              },
              get distinct() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        },
        get max() {
          return new FieldNode(
            schema.user_league_contestant_max_fields,
            undefined,
            true
          );
        },
        get min() {
          return new FieldNode(
            schema.user_league_contestant_min_fields,
            undefined,
            true
          );
        },
        get stddev() {
          return new FieldNode(
            schema.user_league_contestant_stddev_fields,
            undefined,
            true
          );
        },
        get stddev_pop() {
          return new FieldNode(
            schema.user_league_contestant_stddev_pop_fields,
            undefined,
            true
          );
        },
        get stddev_samp() {
          return new FieldNode(
            schema.user_league_contestant_stddev_samp_fields,
            undefined,
            true
          );
        },
        get sum() {
          return new FieldNode(
            schema.user_league_contestant_sum_fields,
            undefined,
            true
          );
        },
        get var_pop() {
          return new FieldNode(
            schema.user_league_contestant_var_pop_fields,
            undefined,
            true
          );
        },
        get var_samp() {
          return new FieldNode(
            schema.user_league_contestant_var_samp_fields,
            undefined,
            true
          );
        },
        get variance() {
          return new FieldNode(
            schema.user_league_contestant_variance_fields,
            undefined,
            true
          );
        }
      },
      {
        name: "user_league_contestant_aggregate_fields",
        extension: ((extensions as any) || {})
          .user_league_contestant_aggregate_fields
      }
    );
  },
  get user_league_contestant_aggregate_order_by() {
    return new InputNode(
      {
        get avg() {
          return new InputNodeField(
            schema.user_league_contestant_avg_order_by,
            true
          );
        },
        get count() {
          return new InputNodeField(schema.order_by, true);
        },
        get max() {
          return new InputNodeField(
            schema.user_league_contestant_max_order_by,
            true
          );
        },
        get min() {
          return new InputNodeField(
            schema.user_league_contestant_min_order_by,
            true
          );
        },
        get stddev() {
          return new InputNodeField(
            schema.user_league_contestant_stddev_order_by,
            true
          );
        },
        get stddev_pop() {
          return new InputNodeField(
            schema.user_league_contestant_stddev_pop_order_by,
            true
          );
        },
        get stddev_samp() {
          return new InputNodeField(
            schema.user_league_contestant_stddev_samp_order_by,
            true
          );
        },
        get sum() {
          return new InputNodeField(
            schema.user_league_contestant_sum_order_by,
            true
          );
        },
        get var_pop() {
          return new InputNodeField(
            schema.user_league_contestant_var_pop_order_by,
            true
          );
        },
        get var_samp() {
          return new InputNodeField(
            schema.user_league_contestant_var_samp_order_by,
            true
          );
        },
        get variance() {
          return new InputNodeField(
            schema.user_league_contestant_variance_order_by,
            true
          );
        }
      },
      { name: "user_league_contestant_aggregate_order_by" }
    );
  },
  get user_league_contestant_arr_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            new ArrayNode(schema.user_league_contestant_insert_input, false),
            false
          );
        },
        get on_conflict() {
          return new InputNodeField(
            schema.user_league_contestant_on_conflict,
            true
          );
        }
      },
      { name: "user_league_contestant_arr_rel_insert_input" }
    );
  },
  get user_league_contestant_avg_fields() {
    return new ObjectNode(
      {
        get rank() {
          return new FieldNode(schema.Float, undefined, true);
        }
      },
      {
        name: "user_league_contestant_avg_fields",
        extension: ((extensions as any) || {}).user_league_contestant_avg_fields
      }
    );
  },
  get user_league_contestant_avg_order_by() {
    return new InputNode(
      {
        get rank() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "user_league_contestant_avg_order_by" }
    );
  },
  get user_league_contestant_bool_exp() {
    return new InputNode(
      {
        get _and() {
          return new InputNodeField(
            new ArrayNode(schema.user_league_contestant_bool_exp, true),
            true
          );
        },
        get _not() {
          return new InputNodeField(
            schema.user_league_contestant_bool_exp,
            true
          );
        },
        get _or() {
          return new InputNodeField(
            new ArrayNode(schema.user_league_contestant_bool_exp, true),
            true
          );
        },
        get contestantId() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get id() {
          return new InputNodeField(schema.uuid_comparison_exp, true);
        },
        get leagueId() {
          return new InputNodeField(schema.uuid_comparison_exp, true);
        },
        get rank() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get userId() {
          return new InputNodeField(schema.uuid_comparison_exp, true);
        }
      },
      { name: "user_league_contestant_bool_exp" }
    );
  },
  get user_league_contestant_constraint() {
    return new EnumNode({ name: "user_league_contestant_constraint" });
  },
  get user_league_contestant_inc_input() {
    return new InputNode(
      {
        get rank() {
          return new InputNodeField(schema.Int, true);
        }
      },
      { name: "user_league_contestant_inc_input" }
    );
  },
  get user_league_contestant_insert_input() {
    return new InputNode(
      {
        get contestantId() {
          return new InputNodeField(schema.String, true);
        },
        get id() {
          return new InputNodeField(schema.uuid, true);
        },
        get leagueId() {
          return new InputNodeField(schema.uuid, true);
        },
        get rank() {
          return new InputNodeField(schema.Int, true);
        },
        get userId() {
          return new InputNodeField(schema.uuid, true);
        }
      },
      { name: "user_league_contestant_insert_input" }
    );
  },
  get user_league_contestant_max_fields() {
    return new ObjectNode(
      {
        get contestantId() {
          return new FieldNode(schema.String, undefined, true);
        },
        get id() {
          return new FieldNode(schema.uuid, undefined, true);
        },
        get leagueId() {
          return new FieldNode(schema.uuid, undefined, true);
        },
        get rank() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get userId() {
          return new FieldNode(schema.uuid, undefined, true);
        }
      },
      {
        name: "user_league_contestant_max_fields",
        extension: ((extensions as any) || {}).user_league_contestant_max_fields
      }
    );
  },
  get user_league_contestant_max_order_by() {
    return new InputNode(
      {
        get contestantId() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get leagueId() {
          return new InputNodeField(schema.order_by, true);
        },
        get rank() {
          return new InputNodeField(schema.order_by, true);
        },
        get userId() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "user_league_contestant_max_order_by" }
    );
  },
  get user_league_contestant_min_fields() {
    return new ObjectNode(
      {
        get contestantId() {
          return new FieldNode(schema.String, undefined, true);
        },
        get id() {
          return new FieldNode(schema.uuid, undefined, true);
        },
        get leagueId() {
          return new FieldNode(schema.uuid, undefined, true);
        },
        get rank() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get userId() {
          return new FieldNode(schema.uuid, undefined, true);
        }
      },
      {
        name: "user_league_contestant_min_fields",
        extension: ((extensions as any) || {}).user_league_contestant_min_fields
      }
    );
  },
  get user_league_contestant_min_order_by() {
    return new InputNode(
      {
        get contestantId() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get leagueId() {
          return new InputNodeField(schema.order_by, true);
        },
        get rank() {
          return new InputNodeField(schema.order_by, true);
        },
        get userId() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "user_league_contestant_min_order_by" }
    );
  },
  get user_league_contestant_mutation_response() {
    return new ObjectNode(
      {
        get affected_rows() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get returning() {
          return new FieldNode(
            new ArrayNode(schema.user_league_contestant, false),
            undefined,
            false
          );
        }
      },
      {
        name: "user_league_contestant_mutation_response",
        extension: ((extensions as any) || {})
          .user_league_contestant_mutation_response
      }
    );
  },
  get user_league_contestant_obj_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            schema.user_league_contestant_insert_input,
            false
          );
        },
        get on_conflict() {
          return new InputNodeField(
            schema.user_league_contestant_on_conflict,
            true
          );
        }
      },
      { name: "user_league_contestant_obj_rel_insert_input" }
    );
  },
  get user_league_contestant_on_conflict() {
    return new InputNode(
      {
        get constraint() {
          return new InputNodeField(
            schema.user_league_contestant_constraint,
            false
          );
        },
        get update_columns() {
          return new InputNodeField(
            new ArrayNode(schema.user_league_contestant_update_column, false),
            false
          );
        },
        get where() {
          return new InputNodeField(
            schema.user_league_contestant_bool_exp,
            true
          );
        }
      },
      { name: "user_league_contestant_on_conflict" }
    );
  },
  get user_league_contestant_order_by() {
    return new InputNode(
      {
        get contestantId() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get leagueId() {
          return new InputNodeField(schema.order_by, true);
        },
        get rank() {
          return new InputNodeField(schema.order_by, true);
        },
        get userId() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "user_league_contestant_order_by" }
    );
  },
  get user_league_contestant_pk_columns_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.uuid, false);
        }
      },
      { name: "user_league_contestant_pk_columns_input" }
    );
  },
  get user_league_contestant_select_column() {
    return new EnumNode({ name: "user_league_contestant_select_column" });
  },
  get user_league_contestant_set_input() {
    return new InputNode(
      {
        get contestantId() {
          return new InputNodeField(schema.String, true);
        },
        get id() {
          return new InputNodeField(schema.uuid, true);
        },
        get leagueId() {
          return new InputNodeField(schema.uuid, true);
        },
        get rank() {
          return new InputNodeField(schema.Int, true);
        },
        get userId() {
          return new InputNodeField(schema.uuid, true);
        }
      },
      { name: "user_league_contestant_set_input" }
    );
  },
  get user_league_contestant_stddev_fields() {
    return new ObjectNode(
      {
        get rank() {
          return new FieldNode(schema.Float, undefined, true);
        }
      },
      {
        name: "user_league_contestant_stddev_fields",
        extension: ((extensions as any) || {})
          .user_league_contestant_stddev_fields
      }
    );
  },
  get user_league_contestant_stddev_order_by() {
    return new InputNode(
      {
        get rank() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "user_league_contestant_stddev_order_by" }
    );
  },
  get user_league_contestant_stddev_pop_fields() {
    return new ObjectNode(
      {
        get rank() {
          return new FieldNode(schema.Float, undefined, true);
        }
      },
      {
        name: "user_league_contestant_stddev_pop_fields",
        extension: ((extensions as any) || {})
          .user_league_contestant_stddev_pop_fields
      }
    );
  },
  get user_league_contestant_stddev_pop_order_by() {
    return new InputNode(
      {
        get rank() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "user_league_contestant_stddev_pop_order_by" }
    );
  },
  get user_league_contestant_stddev_samp_fields() {
    return new ObjectNode(
      {
        get rank() {
          return new FieldNode(schema.Float, undefined, true);
        }
      },
      {
        name: "user_league_contestant_stddev_samp_fields",
        extension: ((extensions as any) || {})
          .user_league_contestant_stddev_samp_fields
      }
    );
  },
  get user_league_contestant_stddev_samp_order_by() {
    return new InputNode(
      {
        get rank() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "user_league_contestant_stddev_samp_order_by" }
    );
  },
  get user_league_contestant_sum_fields() {
    return new ObjectNode(
      {
        get rank() {
          return new FieldNode(schema.Int, undefined, true);
        }
      },
      {
        name: "user_league_contestant_sum_fields",
        extension: ((extensions as any) || {}).user_league_contestant_sum_fields
      }
    );
  },
  get user_league_contestant_sum_order_by() {
    return new InputNode(
      {
        get rank() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "user_league_contestant_sum_order_by" }
    );
  },
  get user_league_contestant_update_column() {
    return new EnumNode({ name: "user_league_contestant_update_column" });
  },
  get user_league_contestant_var_pop_fields() {
    return new ObjectNode(
      {
        get rank() {
          return new FieldNode(schema.Float, undefined, true);
        }
      },
      {
        name: "user_league_contestant_var_pop_fields",
        extension: ((extensions as any) || {})
          .user_league_contestant_var_pop_fields
      }
    );
  },
  get user_league_contestant_var_pop_order_by() {
    return new InputNode(
      {
        get rank() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "user_league_contestant_var_pop_order_by" }
    );
  },
  get user_league_contestant_var_samp_fields() {
    return new ObjectNode(
      {
        get rank() {
          return new FieldNode(schema.Float, undefined, true);
        }
      },
      {
        name: "user_league_contestant_var_samp_fields",
        extension: ((extensions as any) || {})
          .user_league_contestant_var_samp_fields
      }
    );
  },
  get user_league_contestant_var_samp_order_by() {
    return new InputNode(
      {
        get rank() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "user_league_contestant_var_samp_order_by" }
    );
  },
  get user_league_contestant_variance_fields() {
    return new ObjectNode(
      {
        get rank() {
          return new FieldNode(schema.Float, undefined, true);
        }
      },
      {
        name: "user_league_contestant_variance_fields",
        extension: ((extensions as any) || {})
          .user_league_contestant_variance_fields
      }
    );
  },
  get user_league_contestant_variance_order_by() {
    return new InputNode(
      {
        get rank() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "user_league_contestant_variance_order_by" }
    );
  },
  get user_max_fields() {
    return new ObjectNode(
      {
        get email() {
          return new FieldNode(schema.String, undefined, true);
        },
        get id() {
          return new FieldNode(schema.uuid, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "user_max_fields",
        extension: ((extensions as any) || {}).user_max_fields
      }
    );
  },
  get user_max_order_by() {
    return new InputNode(
      {
        get email() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "user_max_order_by" }
    );
  },
  get user_min_fields() {
    return new ObjectNode(
      {
        get email() {
          return new FieldNode(schema.String, undefined, true);
        },
        get id() {
          return new FieldNode(schema.uuid, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "user_min_fields",
        extension: ((extensions as any) || {}).user_min_fields
      }
    );
  },
  get user_min_order_by() {
    return new InputNode(
      {
        get email() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "user_min_order_by" }
    );
  },
  get user_mutation_response() {
    return new ObjectNode(
      {
        get affected_rows() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get returning() {
          return new FieldNode(
            new ArrayNode(schema.user, false),
            undefined,
            false
          );
        }
      },
      {
        name: "user_mutation_response",
        extension: ((extensions as any) || {}).user_mutation_response
      }
    );
  },
  get user_obj_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(schema.user_insert_input, false);
        },
        get on_conflict() {
          return new InputNodeField(schema.user_on_conflict, true);
        }
      },
      { name: "user_obj_rel_insert_input" }
    );
  },
  get user_on_conflict() {
    return new InputNode(
      {
        get constraint() {
          return new InputNodeField(schema.user_constraint, false);
        },
        get update_columns() {
          return new InputNodeField(
            new ArrayNode(schema.user_update_column, false),
            false
          );
        },
        get where() {
          return new InputNodeField(schema.user_bool_exp, true);
        }
      },
      { name: "user_on_conflict" }
    );
  },
  get user_order_by() {
    return new InputNode(
      {
        get email() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "user_order_by" }
    );
  },
  get user_pk_columns_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.uuid, false);
        }
      },
      { name: "user_pk_columns_input" }
    );
  },
  get user_select_column() {
    return new EnumNode({ name: "user_select_column" });
  },
  get user_set_input() {
    return new InputNode(
      {
        get email() {
          return new InputNodeField(schema.String, true);
        },
        get id() {
          return new InputNodeField(schema.uuid, true);
        },
        get name() {
          return new InputNodeField(schema.String, true);
        }
      },
      { name: "user_set_input" }
    );
  },
  get user_update_column() {
    return new EnumNode({ name: "user_update_column" });
  },
  get uuid() {
    return new ScalarNode({
      name: "uuid",
      extension: ((extensions as any) || {}).uuid
    });
  },
  get uuid_comparison_exp() {
    return new InputNode(
      {
        get _eq() {
          return new InputNodeField(schema.uuid, true);
        },
        get _gt() {
          return new InputNodeField(schema.uuid, true);
        },
        get _gte() {
          return new InputNodeField(schema.uuid, true);
        },
        get _in() {
          return new InputNodeField(new ArrayNode(schema.uuid, true), true);
        },
        get _is_null() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _lt() {
          return new InputNodeField(schema.uuid, true);
        },
        get _lte() {
          return new InputNodeField(schema.uuid, true);
        },
        get _neq() {
          return new InputNodeField(schema.uuid, true);
        },
        get _nin() {
          return new InputNodeField(new ArrayNode(schema.uuid, true), true);
        }
      },
      { name: "uuid_comparison_exp" }
    );
  }
};

lazyGetters(schema);
