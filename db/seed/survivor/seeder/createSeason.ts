import { dbClient } from "@/seed/dbClient";

export const createSeason = async (
  seriesId: string,
  seasonNumber: number,
  seasonTitle?: string
) => {
  const supabase = await dbClient();

  const { data } = await supabase.from("seasons").upsert(
    {
      reality_show: seriesId,
      logo_src: `${seriesId}_${seasonNumber}`,
      order: seasonNumber,
      title: seasonTitle || `Season ${seasonNumber}`,
    },
    {
      onConflict: "reality_show,order",
    }
  );
  return data?.[0];
};
