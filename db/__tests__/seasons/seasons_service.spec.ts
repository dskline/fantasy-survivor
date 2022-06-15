import { beforeAll, describe, expect, it } from "vitest";
import dbClient from "@/__tests__/dbClient";
import { SupabaseClient } from "@supabase/supabase-js";
import { uuid } from "@supabase/supabase-js/dist/main/lib/helpers";

describe("admin access on seasons table", () => {
  let supabase: SupabaseClient;

  beforeAll(async () => {
    supabase = await dbClient("service");
  });

  it("should be writable", async () => {
    let testRealitySeriesSlug = uuid();
    await supabase.from("reality_series").insert({
      slug: testRealitySeriesSlug,
      title: "test",
      in_progress: false,
      logo_src: "logo",
    });
    const { data } = await supabase.from("seasons").insert({
      title: "test",
      reality_series: testRealitySeriesSlug,
      order: 1,
      logo_src: "logo",
    });
    const generatedId = data?.[0].id;
    expect(generatedId).toBeDefined();

    let { error } = await supabase
      .from("seasons")
      .delete()
      .eq("id", generatedId);
    expect(error).toBeNull();
  });
});
