import { beforeAll, describe, expect, it } from "vitest";
import dbClient from "@/__tests__/dbClient";
import { SupabaseClient } from "@supabase/supabase-js";

describe("anon access on reality_series table", () => {
  let supabase: SupabaseClient;

  beforeAll(async () => {
    // should work for any user role except service role
    supabase = await dbClient("anon");
  });

  it("should not be readable", async () => {
    let { error } = await supabase.from("reality_series").select("id");
    expect(error).toBeDefined();
  });

  it("should not be writable", async () => {
    let { error } = await supabase.from("reality_series").insert({
      slug: "test",
      title: "test",
    });
    expect(error).toBeDefined();
  });

  it("should not be able to update", async () => {
    let { error } = await supabase
      .from("reality_series")
      .update({
        title: "new value",
      })
      .eq("slug", "survivor_us");

    expect(error).toBeDefined();
  });
});
