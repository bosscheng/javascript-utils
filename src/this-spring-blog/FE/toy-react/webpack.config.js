/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-11-27 13:09:25
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-11-27 13:19:14
 */
module.exports = {
    entry: {
        main: './main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [['@babel/plugin-transform-react-jsx', {pragma: 'createElement'}]],
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    mode: 'development',
    optimization: {
        minimize: false,
    }
}