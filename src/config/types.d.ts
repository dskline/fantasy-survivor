declare type Config = {
  public: {
    env: 'development' | 'staging' | 'production',
    isDebugMode: boolean,
    gqlEndpoint: string
  },
  private: {
    googleAnalyticsId: string
  }
}
