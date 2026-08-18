export const config = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8080/api',
  bffBaseUrl: import.meta.env.VITE_BFF_BASE_URL ?? 'http://localhost:8081/api',
  marketCode: import.meta.env.VITE_MARKET_CODE ?? 'RO',
  environment: import.meta.env.VITE_ENVIRONMENT ?? 'development',
} as const;
