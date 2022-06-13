## GraphQL

To rebuild the schema, run this command in the SQL Editor:

```
select graphql.rebuild_schema();
```

## Tests

Node tests run on a live database instance using the Supabase-JS library. Therefore, the tests should only be run on
a local instance of Supabase. Once this is running, copy `.env.example` to a new file named `.env` and modify the 
variables according to your instance.

Tests are written primarily to validate RLS policies, because in a few application scenarios, the web client is given
direct access for better network performance.

Tests are very brittle currently, but will be refactored once Supabase releases native type generators (WIP).
