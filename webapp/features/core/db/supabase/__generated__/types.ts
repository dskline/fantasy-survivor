export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      contestant_seasons: {
        Row: {
          contestant: string;
          season: string;
          avatar_src: string;
          portrait_src: string;
          id: string;
          team_color: string | null;
        };
        Insert: {
          contestant?: string;
          season?: string;
          avatar_src?: string;
          portrait_src?: string;
          id?: string;
          team_color?: string | null;
        };
        Update: {
          contestant?: string;
          season?: string;
          avatar_src?: string;
          portrait_src?: string;
          id?: string;
          team_color?: string | null;
        };
      };
      events: {
        Row: {
          rule: string;
          comment: string | null;
          id: string;
          episode: string;
          contestant_season: string;
        };
        Insert: {
          rule: string;
          comment?: string | null;
          id?: string;
          episode?: string;
          contestant_season?: string;
        };
        Update: {
          rule?: string;
          comment?: string | null;
          id?: string;
          episode?: string;
          contestant_season?: string;
        };
      };
      league_participants: {
        Row: {
          id: string;
          created_at: string;
          league: string;
          participant: string;
        };
        Insert: {
          id?: string;
          created_at?: string;
          league?: string;
          participant?: string;
        };
        Update: {
          id?: string;
          created_at?: string;
          league?: string;
          participant?: string;
        };
      };
      rs_league_formats: {
        Row: {
          reality_series: string;
          league_format: string;
          default_ruleset: string;
        };
        Insert: {
          reality_series?: string;
          league_format?: string;
          default_ruleset?: string;
        };
        Update: {
          reality_series?: string;
          league_format?: string;
          default_ruleset?: string;
        };
      };
      leagues: {
        Row: {
          id: string;
          created_by: string;
          season: string;
          ruleset: string | null;
          created_at: string;
          title: string | null;
          format: string | null;
          is_private: boolean;
        };
        Insert: {
          id?: string;
          created_by?: string;
          season?: string;
          ruleset?: string | null;
          created_at?: string;
          title?: string | null;
          format?: string | null;
          is_private?: boolean;
        };
        Update: {
          id?: string;
          created_by?: string;
          season?: string;
          ruleset?: string | null;
          created_at?: string;
          title?: string | null;
          format?: string | null;
          is_private?: boolean;
        };
      };
      league_formats: {
        Row: {
          id: string;
          title: string;
          description: string;
        };
        Insert: {
          id: string;
          title: string;
          description: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
        };
      };
      reality_series: {
        Row: {
          slug: string;
          title: string;
          premiere_time: string | null;
          in_progress: boolean;
          logo_src: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          slug: string;
          title: string;
          premiere_time?: string | null;
          in_progress: boolean;
          logo_src: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          slug?: string;
          title?: string;
          premiere_time?: string | null;
          in_progress?: boolean;
          logo_src?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      contestants: {
        Row: {
          firstname: string;
          surname: string | null;
          nickname: string | null;
          slug: string;
        };
        Insert: {
          firstname: string;
          surname?: string | null;
          nickname?: string | null;
          slug: string;
        };
        Update: {
          firstname?: string;
          surname?: string | null;
          nickname?: string | null;
          slug?: string;
        };
      };
      profiles: {
        Row: {
          id: string;
          email: string;
          display_name: string | null;
          thumbnail_src: string | null;
        };
        Insert: {
          id: string;
          email: string;
          display_name?: string | null;
          thumbnail_src?: string | null;
        };
        Update: {
          id?: string;
          email?: string;
          display_name?: string | null;
          thumbnail_src?: string | null;
        };
      };
      roles: {
        Row: {
          id: string;
          display_name: string;
        };
        Insert: {
          id: string;
          display_name: string;
        };
        Update: {
          id?: string;
          display_name?: string;
        };
      };
      rules: {
        Row: {
          id: string;
          description: string;
          is_negative: boolean | null;
          reality_series: string;
        };
        Insert: {
          id: string;
          description: string;
          is_negative?: boolean | null;
          reality_series: string;
        };
        Update: {
          id?: string;
          description?: string;
          is_negative?: boolean | null;
          reality_series?: string;
        };
      };
      seasons: {
        Row: {
          order: number;
          title: string;
          logo_src: string;
          id: string;
          updated_at: string;
          reality_show: string;
        };
        Insert: {
          order: number;
          title: string;
          logo_src: string;
          id?: string;
          updated_at?: string;
          reality_show?: string;
        };
        Update: {
          order?: number;
          title?: string;
          logo_src?: string;
          id?: string;
          updated_at?: string;
          reality_show?: string;
        };
      };
      rulesets: {
        Row: {
          data: Json;
          id: string;
          updated_at: string;
          created_by: string;
        };
        Insert: {
          data: Json;
          id?: string;
          updated_at?: string;
          created_by?: string;
        };
        Update: {
          data?: Json;
          id?: string;
          updated_at?: string;
          created_by?: string;
        };
      };
      user_roles: {
        Row: {
          user: string;
          role: string;
        };
        Insert: {
          user?: string;
          role?: string;
        };
        Update: {
          user?: string;
          role?: string;
        };
      };
      episodes: {
        Row: {
          start_time: string;
          id: string;
          season: string;
        };
        Insert: {
          start_time: string;
          id?: string;
          season?: string;
        };
        Update: {
          start_time?: string;
          id?: string;
          season?: string;
        };
      };
      lp_contestants: {
        Row: {
          rank: string | null;
          id: string;
          contestant_season: string;
          league_participant: string;
        };
        Insert: {
          rank?: string | null;
          id?: string;
          contestant_season?: string;
          league_participant?: string;
        };
        Update: {
          rank?: string | null;
          id?: string;
          contestant_season?: string;
          league_participant?: string;
        };
      };
      api_tokens: {
        Row: {
          owner: string;
          name: string;
          token: string;
          id: string;
        };
        Insert: {
          owner: string;
          name: string;
          token: string;
          id?: string;
        };
        Update: {
          owner?: string;
          name?: string;
          token?: string;
          id?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      create_league: {
        Args: {
          season_id: string;
          format_id: string;
          ruleset_id: string;
          title: unknown;
          rule_data: unknown;
          owner_id: unknown;
        };
        Returns: string;
      };
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
