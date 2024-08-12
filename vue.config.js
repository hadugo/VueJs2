const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // ---------- BreakPoint 설정 시작 ----------
  configureWebpack: {
      devtool: 'source-map'
  }
  // ----------- BreakPoint 설정 끝 -----------

})
