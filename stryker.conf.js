module.exports = (config) => {
  config.set({
    babelrcFile: '.babelrc',
    coverageAnalysis: 'on',
    logLevel: 'warn',
    mutate: [
      'src/**/*.js',
      '!src/**/__tests__/**/*.js'
    ],
    mutator: 'javascript',
    packageManager: 'yarn',
    reporter: [
      'clear-text',
      'darhboard',
      'progress'
    ],
    testRunner: 'jest',
    transpilers: ['babel']
  });
};
