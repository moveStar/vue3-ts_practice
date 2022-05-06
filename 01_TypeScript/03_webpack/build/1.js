const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const isProd = process.env.NODE_ENV === 'production' // 是否生产环境

function resolve (dir) {
  return path.resolve(__dirname, '..', dir)
}

module.exports = {
  mode: isProd ? 'production' : 'development',  // 环境
  entry: { // 入口文件
    app: './src/main.ts'
  },
  output: {
    path: resolve('dist'),  // 打包后的文件放在dist文件下
    filename: '[name].[contenthash:8].js'  // 打包文件名称[app名称].[8位hash值].js
  },
  module: {
    rules: [
      // 对于src下的tsx和ts文件进行处理
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: [resolve('src')]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
    }), // 清理之前的文件
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })  // 打包html文件
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js']   // 对于引用文件的后缀名进行处理，引用时可直接写文件名称
  },
  // 代码报错，提示信息
  devtool: isProd ? 'cheap-module-source-map' : 'cheap-module-eval-source-map',  
  // 在启动后浏览器打开页面
  devServer: {
    host: 'localhost', // 主机名
    stats: 'errors-only', // 打包日志输出输出错误信息
    port: 8081,
    open: true
  }
}