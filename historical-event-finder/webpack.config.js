const path = require( 'path' );
module.exports = {
    entry: './client/src/index.jsx',
    output: {
        path: path.resolve( __dirname, 'public' ),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                include: path.resolve(__dirname, 'client', 'src'),
                loader: 'babel-loader'
            }
        ]
    }
};