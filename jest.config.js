module.exports = {
  collectCoverage: true,
  coverageDirectory: './coverage/',
  coveragePathIgnorePatterns: ['/dist/'],
  moduleFileExtensions: ['js', 'json', 'vue'],
  modulePathIgnorePatterns: ['/examples/'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ["/node_modules/(?!vue-awesome)", "examples"],
  transform: {
    '^.+\\.(js)$': 'esbuild-jest',
    '^.+\\.(mjs)$': 'esbuild-jest',
      '^.+\\.(vue)$': '@vue/vue3-jest'
  },
  moduleNameMapper: {
    '^vue$': '@vue/compat'
  },
  'globals': {
    'vue-jest': {
      compilerOptions: {
        whitespace: 'condense'
      }
    }
  }


}
