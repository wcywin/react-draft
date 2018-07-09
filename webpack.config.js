const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader', // for 1 loader
            test: /\.js$/, // regex - any file that ends with .js
            exclude: /node_modules/
        }, {
            test: /\.s?css$/, // any file that ends with .scss and .css "?" - "s" is optional
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ] // gives option to use an array of loaders
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};

// loader - for Babel

