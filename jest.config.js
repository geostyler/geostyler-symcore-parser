module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: [
    'ts',
    'js'
  ],
  setupFilesAfterEnv: [
    'jest-canvas-mock'
  ],
  transform: {
    '^.+\\.(ts|js)$': '<rootDir>/node_modules/babel-jest'
  },
  testRegex: '/src/.*\\.spec.ts$',
  collectCoverageFrom: [
    'src/*.ts'
  ]
};
