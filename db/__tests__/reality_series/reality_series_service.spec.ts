import { beforeAll, describe, expect, it } from "vitest";
import dbClient from "@/__tests__/dbClient";
import { SupabaseClient } from "@supabase/supabase-js";

describe("admin access on reality_series table", () => {
  let supabase: SupabaseClient;

  beforeAll(async () => {
    supabase = await dbClient("service");
  });

  it("should be readable", async () => {
    let { data: realitySeries } = await supabase
      .from("reality_series")
      .select("slug");
    expect(realitySeries?.length).toBeGreaterThan(0);
  });

  it("should be writable", async () => {
    const slug = `testslug`;
    let { data: realitySeries } = await supabase.from("reality_series").insert({
      slug,
      title: "test",
      in_progress: false,
      logo_src: "logo.png",
    });
    expect(realitySeries?.[0]?.slug).toBe(slug);

    let { error } = await supabase
      .from("reality_series")
      .delete()
      .eq("slug", slug);
    expect(error).toBeNull();
  });
});
