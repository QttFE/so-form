module.exports = {
  coverageReporters: ['json', 'lcov', 'text-summary', 'clover'],
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
       '^.+\\.js$': 'babel-jest',
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest'
  }
}
