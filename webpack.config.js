const { mode } = require("webpack-nano/argv")
const { merge } = require("webpack-merge")
const parts = require("./webpack.parts")



const commonConfig = merge([
  { entry: ["./src/main.js"],

   },
   parts.clean(),
])



const productionConfig = merge([
  {
  }
])

const developmentConfig = merge([
  { entry: ["webpack-plugin-serve/client"] },
  parts.devServer(),
])


const getConfig = (mode) => {
  switch (mode) {
    case "production":
      return merge(commonConfig, productionConfig, { mode })
    case "development":
      return merge(commonConfig, developmentConfig, { mode })
    default:
      throw new Error(`Trying to use unknown mode, ${mode}`)
  }
}

module.exports = getConfig(mode)