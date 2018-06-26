var path = require("path");

module.exports = {
    entry: ["./src/index.tsx"],
    mode: "development",
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
                use: "ts-loader"
            }
        ]
    }
};