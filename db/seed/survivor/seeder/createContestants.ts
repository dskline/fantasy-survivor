import { DB, dbClient } from "@/seed/dbClient";
import { Contestant } from "@/seed/survivor";

export const createContestants = async (
  contestants: Contestant[],
  season: DB["seasons"]
) => {
  const supabase = await dbClient();

  await supabase.from("contestants").upsert(
    contestants.map((contestant) => {
      const splitName = contestant.name.split(" ");
      return {
        slug: splitName.join("_"),
        firstname: splitName[0].replace("_", " "),
        surname: splitName.slice(1).join(" "),
        nickname: splitName[0].replace("_", " "),
      };
    }),
    {
      onConflict: "slug",
    }
  );

  const { data, error } = await supabase
    .from("contestant_seasons")
    .upsert(
      contestants.map((contestant) => {
        const contestantId = contestant.name.replaceAll(" ", "_");
        return {
          season: season.id,
          contestant: contestantId,
          age: contestant.age,
          occupation: contestant.occupation,
          hometown: contestant.hometown,
          team_color: contestant.team_color,
          // TODO: remove avatar and fix slug/portrait for 3 names
          avatar_src: `${contestantId}_${season.order}_Avatar`,
          portrait_src: `${contestantId}_${season.order}_Portrait`,
        };
      }),
      {
        onConflict: "season,contestant",
      }
    )
    .select("*");

  if (!data || data.length === 0) {
    throw new Error("Error creating contestants " + error?.message);
  }

  return data;
};
