import { dbClient } from "@/seed/dbClient";
import { Season } from "@/seed/survivor/survivor.seed";

export const createContestants = async (
  names: Array<string>,
  season: Season
) => {
  const supabase = await dbClient();

  const contestants = names.map((name) => {
    const splitName = name.split(" ");
    return {
      slug: name.replace(" ", "_"),
      firstname: splitName[0],
      surname: splitName[1],
      nickname: splitName[0],
    };
  });

  await supabase.from("contestants").upsert(
    contestants.map((contestant) => ({
      slug: contestant.slug,
      firstname: contestant.firstname,
      surname: contestant.surname,
      nickname: contestant.nickname,
    }))
  );
  const { data } = await supabase.from("contestant_seasons").upsert(
    contestants.map((contestant) => ({
      season: season.id,
      contestant: contestant.slug,
      // TODO: remove avatar and fix slug/portrait for 3 names
      avatar_src: `${contestant.slug}_${season.order}_Avatar`,
      portrait_src: `${contestant.slug.replace(" ", "_")}_${season.order}_Portrait`,
    })),
    {
      onConflict: "season,contestant",
    }
  );
  return data;
};
