import { SurvivorRuleId } from "@/seed/survivor/rules";
import { dbClient } from "@/seed/dbClient";
import { Season } from "@/seed/survivor/survivor.seed";

export type SurvivorEpisode = {
  startTime: Date;
  events: Array<{
    rule: SurvivorRuleId;
    players: Array<string>;
    comment?: string;
  }>;
};
type PlayerIds = { [key: string]: { id: string } };

export class SeasonSeeder {
  season: Season;
  contestants: PlayerIds;

  constructor(season: Season, contestants: PlayerIds) {
    this.season = season;
    this.contestants = contestants;
  }

  async recordEpisode(episode: SurvivorEpisode): Promise<void> {
    const supabase = await dbClient();

    const season = this.season;
    const { data, error } = await supabase.from("episodes").upsert(
      {
        season: season.id,
        start_time: episode.startTime,
      },
      {
        onConflict: "season,start_time",
      }
    );
    if (!data?.length) {
      throw new Error(error?.message || "Unknown error creating episode");
    }
    const episodeId = data[0].id;
    await supabase.from("events").delete().eq("episode", episodeId);

    for (const event of episode.events) {
      await supabase.from("events").upsert(
        event.players.map((player) => {
          const contestant = this.contestants[player];
          return contestant
            ? {
                episode: episodeId,
                rule: event.rule,
                comment: event.comment,
                contestant_season: contestant.id,
              }
            : [];
        })
      );
      if (event.rule === "ExitsGame" || event.rule === "VotedOut") {
        for (const player of event.players) {
          delete this.contestants[player];
        }
      }
    }
    await supabase.from("events").upsert(
      Object.values(this.contestants).map((contestant) => ({
        episode: episodeId,
        rule: "Survived",
        contestant_season: contestant.id,
      }))
    );
  }
}
