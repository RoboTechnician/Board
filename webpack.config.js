module.exports = {
    entry: {
        thread: './frontend/thread.js',
        board: './frontend/board.js'
    },
    output: {
        path: __dirname + '/public/js',
        filename: '[name].js',
        library: 'my'
    },
    watch: true,
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            }
        ]
    }
};