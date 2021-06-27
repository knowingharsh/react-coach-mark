const path = require('path');
module.exports = {
    mode: 'production',
    entry: "./src/lib/index.tsx",
    output: {
        filename: "coachmark.js",
        library: 'CoachMark',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        configFile: "library.tsconfig.json"
                    }
                }],
                exclude: /node_modules/,
            },
            {
                test: /\.(le|c)ss$/, use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                strictMath: true,
                            },
                        },
                    },
                ],
            }]
    }
}
