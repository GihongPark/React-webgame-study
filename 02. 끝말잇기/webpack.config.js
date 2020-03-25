const path = require('path');

module.exports = {
    name: 'word-relay-setting',
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    entry: {    // 입력
        app: ['./client']   // client.jsx에서 불러오는 파일은 적어줄 필요 없다.
    },
    output: {   // 출력
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env', {
                            targets: {
                                browsers: ['> 5% in KR', 'last 2 chrome versions'],     // browserslist
                            }
                        }], '@babel/preset-react'],
                    plugins: [
                        '@babel/plugin-proposal-class-properties',
                        'react-hot-loader/babel'
                    ]
                }
            }
        ]
    },
    plugins: [
        
    ]
}