import { afterAll, beforeAll, describe, expect, it } from "vitest";
import dbClient from "@/__tests__/dbClient";
import { SupabaseClient } from "@supabase/supabase-js";

describe("anon access on seasons table", () => {
  let supabase: SupabaseClient;
  let testSeasonId: number;
  let testRealitySeriesSlug = "testRealitySeriesSlug";

  beforeAll(async () => {
    const seeder = await dbClient("service");

    await seeder.from("reality_series").insert({
      slug: testRealitySeriesSlug,
      title: "test",
      in_progress: false,
      logo_src: "logo.png",
    });
    const { data } = await seeder.from("seasons").insert({
      title: "test",
      reality_series: testRealitySeriesSlug,
      order: 1,
      logo_src: "test",
    });
    testSeasonId = data?.[0]?.id;

    // tests will run as an anonymous user
    supabase = await dbClient("anon");
  });

  afterAll(async () => {
    const cleanup = await dbClient("service");
    await cleanup.from("seasons").delete().eq("id", testSeasonId);
    await cleanup
      .from("reality_series")
      .delete()
      .eq("slug", testRealitySeriesSlug);
  });

  it("should be readable", async () => {
    let { data } = await supabase.from("seasons").select("id");
    expect(data?.length).toBeGreaterThan(0);
  });

  it("should not be writable", async () => {
    let { error } = await supabase.from("seasons").insert({
      slug: "test",
      title: "test",
    });
    expect(error).toBeDefined();
  });

  it("should not be able to update", async () => {
    let { error } = await supabase
      .from("seasons")
      .update({
        title: "new value",
      })
      .eq("slug", "survivor_us");

    expect(error).toBeDefined();
  });
});
