module.exports = {
    entry: "./entry.js",
    devtool: 'source-map',
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module:{
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};