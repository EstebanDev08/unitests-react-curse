module.exports = {
  verbose: true,
  collectCoverage: true,
  setupFilesAfterEnv: ['<rootDir>/src/__test__/setupTests.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],

  moduleNameMapper: {
    '\\.(styl|css)$': '<rootDir>/src/__test__/__mocks__/styleMock.js',
  },
};
