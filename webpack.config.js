module.exports = {
    entry: "./src/index.ts",
    output: {
        path: __dirname + "/",
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }
}
