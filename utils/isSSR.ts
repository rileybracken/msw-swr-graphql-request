export const isSSR =
  process.env.NODE_ENV === 'test' || typeof window === 'undefined';
