const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const autoprefixer = require("autoprefixer");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageminWebpackPlugin = require("imagemin-webpack-plugin").default;
const ImageminMozjpeg = require("imagemin-mozjpeg");
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const { Compilation } = require("webpack");

class MyCustomWebpackPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap("MyCustomWebpackPlugin", (compilation) => {
      compilation.hooks.processAssets.tap(
        {
          name: "MyCustomWebpackPlugin",
          stage: Compilation.PROCESS_ASSETS_STAGE_ADDITIONS,
        },
        (assets) => {
          // Lakukan modifikasi pada assets di sini jika diperlukan
        }
      );
    });
  }
}

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src/scripts/index.js"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: "style-loader",
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: "css-loader",
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [autoprefixer],
              },
            },
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "src/templates/index.html"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/public/"),
          to: path.resolve(__dirname, "dist/"),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(jpe?g|png)/,
          options: {
            quality: 50,
            progressive: true,
          },
        },
      ],
      overrideExtension: true,
    }),
    new MyCustomWebpackPlugin(), // Plugin khusus untuk menangani perubahan aset
  ],
};
