const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: './' });

const config = {
  preset: 'ts-jest',
  resetMocks: true,
  testEnvironment: 'jest-environment-jsdom',
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.jest.json',
    },
  },
  setupFilesAfterEnv: ['./jest.setup.ts', './test/setup-env.ts'],
  coverageThreshold: {
    global: {
      branches: 20,
      functions: 20,
      lines: 20,
      statements: 20,
    },
  },
};

module.exports = createJestConfig(config);
