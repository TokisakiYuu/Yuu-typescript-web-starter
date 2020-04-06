const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    mode: "development",    // 开发模式

    entry: {
        script: "./src/index.js",
        other: "./src/other.js",
        css: "./src/css/index.css"
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        publicPath: "/",
        library: "您有一份新的源码请注意查收",
        libraryTarget: "umd"
    },

    module: {
        rules: [
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "postcss-loader", "less-loader"]
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "postcss-loader"]
                })
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/transform-runtime']
                  }
                }
            }
        ]
    },

    plugins:[
        new ExtractTextPlugin("styles.css")
    ],

    // source map
    devtool: "inline-source-map",

    // // 开发服务器配置
    // devServer: {
    //     contentBase: path.join(__dirname, "frontend"),
    //     compress: true,
    //     host: "0.0.0.0",
    //     https: true,
    //     index: 'index.html',
    //     port: 9000,
    //     watchContentBase: { poll: true }, // 监听contentBase所配置的路径下的文件的变化，有变化会自动刷新打开的页面(轮询方式)
    //     headers: {
    //         "X-Webpack-Dev": "yes"
    //     },
    //     color: true,
    //     open: true,             // 随devServer启动浏览器
    //     openPage: "/",          // 从浏览器打开页面
    //     overlay: {              // 显示警告和错误
    //         warnings: true,
    //         errors: true
    //     },
    //     progress: true          // 将运行进度输出到控制台
    // },

    // // 源码变动监听
    // watch: true
}