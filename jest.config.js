module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  testMatch: ['**/*.(test|spec|steps).(ts|tsx)'],
  globals: {
    'ts-jest': {
      babelConfig: 'babel.config.js',
      tsConfig: 'jest.tsconfig.json',
      diagnostics: true,
      isolatedModules: false,
    },
  },
  coveragePathIgnorePatterns: ['/node_modules/'],
  // reporters: [
  //   "default",
  //   ["jest-html-reporters", {
  //     "publicPath": "./html-report",
  //     "filename": "report.html",
  //     "expand": true,
  //     "openReport": true
  //   }]
  // ]
}
