import { afterAll, beforeAll, describe, expect, it } from "vitest";
import dbClient from "@/__tests__/dbClient";
import { SupabaseClient } from "@supabase/supabase-js";

describe("anon access on reality_series table", () => {
  let supabase: SupabaseClient;
  let testSlug: "testId";

  beforeAll(async () => {
    const seeder = await dbClient("service");
    seeder.from("reality_series").insert({
      slug: testSlug,
      title: "test",
      in_progress: false,
      logo_src: "logo.png",
    });

    // should work for any user role except service role
    supabase = await dbClient("anon");
  });

  afterAll(async () => {
    const cleanup = await dbClient("service");
    cleanup.from("reality_series").delete().eq("slug", testSlug);
  });

  it("should be readable", async () => {
    let { data } = await supabase.from("reality_series").select("slug");
    expect(data?.length).toBeGreaterThan(0);
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
