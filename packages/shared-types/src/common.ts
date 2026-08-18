export interface FeatureFlag {
  key: string;
  enabled: boolean;
  metadata?: Record<string, unknown>;
}

export interface MarketConfig {
  marketCode: string;
  locale: string;
  currency: string;
  timezone: string;
  features: FeatureFlag[];
}

export interface RouteConfig {
  path: string;
  component: string;
  exact?: boolean;
  protected?: boolean;
  featureFlag?: string;
}
