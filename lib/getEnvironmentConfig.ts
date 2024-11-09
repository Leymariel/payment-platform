interface EnvironmentConfig {
  returnUrl: string;
  baseUrl: string;
}

export function getEnvironmentConfig(): EnvironmentConfig {
  const isProd = process.env.NODE_ENV === 'production';
  
  if (isProd) {
    return {
      returnUrl: 'https://your-production-domain.com',
      baseUrl: 'https://your-production-domain.com',
    };
  }
  
  return {
    returnUrl: 'http://www.localhost:3001',
    baseUrl: 'http://www.localhost:3001',
  };
} 