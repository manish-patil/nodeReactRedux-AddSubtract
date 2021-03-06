var path = require("path");

module.exports = {
    entry: ["./src/index.tsx"],
    mode: "development",
    devtool: 'source-map',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public/dist")
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    }
};  