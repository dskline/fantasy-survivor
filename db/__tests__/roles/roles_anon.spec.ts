import { beforeAll, describe, expect, it } from "vitest";
import dbClient from "@/__tests__/dbClient";
import { SupabaseClient } from "@supabase/supabase-js";

describe("anon access on roles table", () => {
  let supabase: SupabaseClient;

  beforeAll(async () => {
    // should work for any user role except service role
    supabase = await dbClient("anon");
  });

  it("should not be readable", async () => {
    let { error } = await supabase.from("roles").select("id");
    expect(error).toBeDefined();
  });

  it("should not be writable", async () => {
    let { error } = await supabase.from("roles").insert({
      id: "test",
      display_name: "test",
    });
    expect(error).toBeDefined();
  });

  it("should not be able to update", async () => {
    let { error } = await supabase
      .from("roles")
      .update({
        display_name: "new value",
      })
      .eq("id", "admin");

    expect(error).toBeDefined();
  });
});
