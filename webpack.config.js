const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.png$/,
                loader: 'file-loader'
            },
            {
                test: /\.tsx$/,
                loader: 'xml-loader'
            } // will load all .xml files with xml-loader by default

        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "./dist"),
        watchContentBase: true
    },
    //devtool: 'inline-source-map'
    devtool: 'source-map'
};
