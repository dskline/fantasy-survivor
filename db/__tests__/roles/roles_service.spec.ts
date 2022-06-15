import { beforeAll, describe, expect, it } from 'vitest'
import dbClient from "@/__tests__/dbClient";
import { SupabaseClient } from '@supabase/supabase-js'
import { uuid } from '@supabase/supabase-js/dist/main/lib/helpers'

describe("admin access on roles table", () => {
  let supabase: SupabaseClient;

  beforeAll(async () => {
    supabase = await dbClient("service");
  });

  it("should be readable", async () => {
    let { data: roles } = await supabase.from("roles").select("id");
    expect(roles?.length).toBeGreaterThan(0);
  });

  it("should be writable", async () => {
    const id = uuid();
    let { data: roles } = await supabase.from("roles").insert({
      id,
      display_name: "test",
    });
    expect(roles?.[0]?.id).toBe(id);

    let { error } = await supabase.from("roles").delete().eq("id", id);
    expect(error).toBeNull();
  });
});
