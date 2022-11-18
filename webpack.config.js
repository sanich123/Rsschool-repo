const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV || "development";
const devMode = mode === "development";
const target = devMode ? "web" : "browserslist";
const devtool = devMode ? "source-map" : undefined;

module.exports = {
  mode,
  target,
  devtool,
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  entry: ["@babel/polyfill", path.resolve(__dirname, "src/js", "entry.js")],
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    filename: "bundle.js",
    assetModuleFilename: "asset/[ext]",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({ filename: "styles.css" }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(c|le)ss$/i,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: { plugins: ["postcss-preset-env"] },
            },
          },
          "less-loader",
        ],
      },
      {
        test: /\.woff2?$/i,
        type: "asset/resource",
        generator: { filename: "fonts/[name][ext]" },
      },
      {
        test: /\.mp3$/i,
        type: "asset/resource",
        generator: { filename: "audio/[name][ext]" },
      },
      {
        test: /\.mp4$/i,
        type: "asset/resource",
        generator: { filename: "video/[name][ext]" },
      },
      {
        test: /\.(jpe?g|png|svg|webp)$/i,
        type: "asset/resource",
        generator: { filename: "img/[name][ext]" },
        use: [
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: { progressive: true },
              optipng: { enabled: false },
              pngquant: { quality: [0.65, 0.9], speed: 4 },
              gifsicle: { interlaced: false },
              webp: { quality: 75 },
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env"] },
        },
      },
    ],
  },
};
