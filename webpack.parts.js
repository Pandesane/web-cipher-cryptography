const { WebpackPluginServe } = require("webpack-plugin-serve")
const {BannerPlugin} = require("webpack")

//Development Server Config
exports.devServer = () => ({
  watch: true,
  plugins: [
    new WebpackPluginServe(
      {
        port: parseInt(process.env.PORT, 10) || 8080,
        static: "./dist",
        liveReload: true,
        waitForBuild: true
      }
    )
  ]
})




exports.clean = ()=>({
  output:{
    clean: true
  }
})
