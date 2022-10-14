const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/index.js",
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    devServer: {
        static: "./dist",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "博客列表",
        }),
    ],
    module: {
        rules: [{
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
};