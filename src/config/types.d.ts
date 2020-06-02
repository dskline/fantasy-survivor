declare type Config = {
  public: {
    env: 'development' | 'staging' | 'production',
    isDebugMode: boolean,
    gqlEndpoint: string,
    cloudinaryCloudName: string
  },
  private: {
    googleAnalyticsId: string
  }
}
