// eslint-disable-next-line no-undef
const { resolve } = require('path')
// eslint-disable-next-line no-undef
module.exports = {
  preset: 'ts-jest',
  // eslint-disable-next-line no-undef
  rootDir: __dirname,
  testEnvironment: 'node',
  collectCoverage: true, // 指示是否执行测试时要收集覆盖率信息
  collectCoverageFrom: ['<rootDir>/packages/**/**.ts'],
  // eslint-disable-next-line no-undef
  coverageDirectory: resolve(__dirname, 'coverage'),
  moduleNameMapper: {
    '@packages': '<rootDir>/packages/'
  },
  watchPathIgnorePatterns: ['node_modules'],
  testMatch: ['<rootDir>/__tests__/**/*spec.[jt]s?(x)']
}
