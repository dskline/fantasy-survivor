import { DB, dbClient } from "@/seed/dbClient";
import { Contestant } from "@/seed/survivor";
import { SurvivorRuleId } from "@/seed/survivor/rules";

export type SurvivorEpisode = {
  startTime: Date;
  events: Array<{
    rule: SurvivorRuleId;
    players: Array<Contestant>;
    comment?: string;
  }>;
};
export type PlayerIds = { [key: string]: string };

export class SeasonSeeder {
  season: DB["seasons"];
  contestants: PlayerIds;

  constructor(season: DB["seasons"], contestants: PlayerIds) {
    this.season = season;
    this.contestants = contestants;
  }

  async recordEpisode(episode: SurvivorEpisode): Promise<void> {
    const supabase = await dbClient();

    const season = this.season;
    const { data, error } = await supabase
      .from("episodes")
      .upsert(
        {
          season: season.id,
          start_time: episode.startTime.toISOString(),
        },
        {
          onConflict: "season,start_time",
        }
      )
      .select("id");
    if (!data?.length) {
      throw new Error(error?.message || "Unknown error creating episode");
    }
    const episodeId = data[0].id;
    await supabase.from("events").delete().eq("episode", episodeId);

    for (const event of episode.events) {
      await supabase.from("events").upsert(
        event.players
          .filter((player) => !!this.contestants[player.name])
          .map((player) => ({
            episode: episodeId,
            rule: event.rule,
            comment: event.comment,
            contestant_season: this.contestants[player.name],
          }))
      );
      if (event.rule === "ExitsGame" || event.rule === "VotedOut") {
        for (const player of event.players) {
          delete this.contestants[player.name];
        }
      }
    }
    await supabase.from("events").upsert(
      Object.values(this.contestants).map((contestant) => ({
        episode: episodeId,
        rule: "Survived",
        contestant_season: contestant,
      }))
    );
  }
}
