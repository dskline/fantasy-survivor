export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  graphql: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      comment_directive: {
        Args: {
          comment_: string;
        };
        Returns: Json;
      };
      exception: {
        Args: {
          message: string;
        };
        Returns: string;
      };
      get_schema_version: {
        Args: Record<PropertyKey, never>;
        Returns: number;
      };
      resolve: {
        Args: {
          query: string;
          variables?: Json;
          operationName?: string;
          extensions?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          operationName?: string;
          query?: string;
          variables?: Json;
          extensions?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  public: {
    Tables: {
      api_tokens: {
        Row: {
          id: string;
          name: string;
          owner: string;
          token: string;
        };
        Insert: {
          id?: string;
          name: string;
          owner: string;
          token: string;
        };
        Update: {
          id?: string;
          name?: string;
          owner?: string;
          token?: string;
        };
      };
      contestant_seasons: {
        Row: {
          age: number | null;
          avatar_src: string;
          contestant: string;
          hometown: string | null;
          id: string;
          occupation: string | null;
          portrait_src: string;
          season: string;
          team_color: string | null;
        };
        Insert: {
          age?: number | null;
          avatar_src?: string;
          contestant?: string;
          hometown?: string | null;
          id?: string;
          occupation?: string | null;
          portrait_src?: string;
          season?: string;
          team_color?: string | null;
        };
        Update: {
          age?: number | null;
          avatar_src?: string;
          contestant?: string;
          hometown?: string | null;
          id?: string;
          occupation?: string | null;
          portrait_src?: string;
          season?: string;
          team_color?: string | null;
        };
      };
      contestants: {
        Row: {
          firstname: string;
          nickname: string | null;
          slug: string;
          surname: string | null;
        };
        Insert: {
          firstname: string;
          nickname?: string | null;
          slug: string;
          surname?: string | null;
        };
        Update: {
          firstname?: string;
          nickname?: string | null;
          slug?: string;
          surname?: string | null;
        };
      };
      episodes: {
        Row: {
          id: string;
          season: string;
          start_time: string;
        };
        Insert: {
          id?: string;
          season?: string;
          start_time: string;
        };
        Update: {
          id?: string;
          season?: string;
          start_time?: string;
        };
      };
      events: {
        Row: {
          comment: string | null;
          contestant_season: string;
          episode: string;
          id: string;
          rule: string;
        };
        Insert: {
          comment?: string | null;
          contestant_season?: string;
          episode?: string;
          id?: string;
          rule: string;
        };
        Update: {
          comment?: string | null;
          contestant_season?: string;
          episode?: string;
          id?: string;
          rule?: string;
        };
      };
      league_formats: {
        Row: {
          description: string;
          id: string;
          title: string;
        };
        Insert: {
          description: string;
          id: string;
          title: string;
        };
        Update: {
          description?: string;
          id?: string;
          title?: string;
        };
      };
      league_participants: {
        Row: {
          created_at: string;
          id: string;
          league: string;
          participant: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          league?: string;
          participant?: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          league?: string;
          participant?: string;
        };
      };
      leagues: {
        Row: {
          created_at: string;
          created_by: string;
          format: string | null;
          id: string;
          is_private: boolean;
          ruleset: string | null;
          season: string;
          slug: string | null;
          title: string | null;
        };
        Insert: {
          created_at?: string;
          created_by?: string;
          format?: string | null;
          id?: string;
          is_private?: boolean;
          ruleset?: string | null;
          season?: string;
          slug?: string | null;
          title?: string | null;
        };
        Update: {
          created_at?: string;
          created_by?: string;
          format?: string | null;
          id?: string;
          is_private?: boolean;
          ruleset?: string | null;
          season?: string;
          slug?: string | null;
          title?: string | null;
        };
      };
      lp_contestants: {
        Row: {
          contestant_season: string;
          id: string;
          league_participant: string;
          rank: string | null;
          updated_at: string;
        };
        Insert: {
          contestant_season?: string;
          id?: string;
          league_participant?: string;
          rank?: string | null;
          updated_at?: string;
        };
        Update: {
          contestant_season?: string;
          id?: string;
          league_participant?: string;
          rank?: string | null;
          updated_at?: string;
        };
      };
      profiles: {
        Row: {
          display_name: string | null;
          email: string;
          id: string;
          thumbnail_src: string | null;
        };
        Insert: {
          display_name?: string | null;
          email: string;
          id: string;
          thumbnail_src?: string | null;
        };
        Update: {
          display_name?: string | null;
          email?: string;
          id?: string;
          thumbnail_src?: string | null;
        };
      };
      reality_series: {
        Row: {
          created_at: string;
          in_progress: boolean;
          logo_src: string;
          premiere_time: string | null;
          slug: string;
          title: string;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          in_progress: boolean;
          logo_src: string;
          premiere_time?: string | null;
          slug: string;
          title: string;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          in_progress?: boolean;
          logo_src?: string;
          premiere_time?: string | null;
          slug?: string;
          title?: string;
          updated_at?: string;
        };
      };
      roles: {
        Row: {
          display_name: string;
          id: string;
        };
        Insert: {
          display_name: string;
          id: string;
        };
        Update: {
          display_name?: string;
          id?: string;
        };
      };
      rs_league_formats: {
        Row: {
          default_ruleset: string;
          league_format: string;
          reality_series: string;
        };
        Insert: {
          default_ruleset: string;
          league_format?: string;
          reality_series?: string;
        };
        Update: {
          default_ruleset?: string;
          league_format?: string;
          reality_series?: string;
        };
      };
      rules: {
        Row: {
          description: string;
          id: string;
          is_negative: boolean | null;
          reality_series: string;
        };
        Insert: {
          description: string;
          id: string;
          is_negative?: boolean | null;
          reality_series: string;
        };
        Update: {
          description?: string;
          id?: string;
          is_negative?: boolean | null;
          reality_series?: string;
        };
      };
      rulesets: {
        Row: {
          created_by: string;
          data: Json;
          id: string;
          updated_at: string;
        };
        Insert: {
          created_by?: string;
          data: Json;
          id?: string;
          updated_at?: string;
        };
        Update: {
          created_by?: string;
          data?: Json;
          id?: string;
          updated_at?: string;
        };
      };
      seasons: {
        Row: {
          id: string;
          logo_src: string;
          order: number;
          reality_show: string;
          title: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          logo_src: string;
          order: number;
          reality_show?: string;
          title: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          logo_src?: string;
          order?: number;
          reality_show?: string;
          title?: string;
          updated_at?: string;
        };
      };
      user_fcm_tokens: {
        Row: {
          id: string;
          token: string;
          user: string;
        };
        Insert: {
          id?: string;
          token: string;
          user: string;
        };
        Update: {
          id?: string;
          token?: string;
          user?: string;
        };
      };
      user_features: {
        Row: {
          feature: string;
          id: string;
          user: string;
        };
        Insert: {
          feature: string;
          id?: string;
          user: string;
        };
        Update: {
          feature?: string;
          id?: string;
          user?: string;
        };
      };
      user_roles: {
        Row: {
          role: string;
          user: string;
        };
        Insert: {
          role?: string;
          user?: string;
        };
        Update: {
          role?: string;
          user?: string;
        };
      };
      user_watched: {
        Row: {
          episode: string;
          id: string;
          user: string;
        };
        Insert: {
          episode: string;
          id?: string;
          user: string;
        };
        Update: {
          episode?: string;
          id?: string;
          user?: string;
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
          title?: string;
          rule_data?: Json;
          owner_id?: string;
        };
        Returns: string;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  storage: {
    Tables: {
      buckets: {
        Row: {
          created_at: string | null;
          id: string;
          name: string;
          owner: string | null;
          public: boolean | null;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string | null;
          id: string;
          name: string;
          owner?: string | null;
          public?: boolean | null;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          name?: string;
          owner?: string | null;
          public?: boolean | null;
          updated_at?: string | null;
        };
      };
      migrations: {
        Row: {
          executed_at: string | null;
          hash: string;
          id: number;
          name: string;
        };
        Insert: {
          executed_at?: string | null;
          hash: string;
          id: number;
          name: string;
        };
        Update: {
          executed_at?: string | null;
          hash?: string;
          id?: number;
          name?: string;
        };
      };
      objects: {
        Row: {
          bucket_id: string | null;
          created_at: string | null;
          id: string;
          last_accessed_at: string | null;
          metadata: Json | null;
          name: string | null;
          owner: string | null;
          path_tokens: string[] | null;
          updated_at: string | null;
        };
        Insert: {
          bucket_id?: string | null;
          created_at?: string | null;
          id?: string;
          last_accessed_at?: string | null;
          metadata?: Json | null;
          name?: string | null;
          owner?: string | null;
          path_tokens?: string[] | null;
          updated_at?: string | null;
        };
        Update: {
          bucket_id?: string | null;
          created_at?: string | null;
          id?: string;
          last_accessed_at?: string | null;
          metadata?: Json | null;
          name?: string | null;
          owner?: string | null;
          path_tokens?: string[] | null;
          updated_at?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      extension: {
        Args: {
          name: string;
        };
        Returns: string;
      };
      filename: {
        Args: {
          name: string;
        };
        Returns: string;
      };
      foldername: {
        Args: {
          name: string;
        };
        Returns: string[];
      };
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>;
        Returns: {
          size: number;
          bucket_id: string;
        }[];
      };
      search: {
        Args: {
          prefix: string;
          bucketname: string;
          limits?: number;
          levels?: number;
          offsets?: number;
          search?: string;
          sortcolumn?: string;
          sortorder?: string;
        };
        Returns: {
          name: string;
          id: string;
          updated_at: string;
          created_at: string;
          last_accessed_at: string;
          metadata: Json;
        }[];
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
