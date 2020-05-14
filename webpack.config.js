const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = 3000;

module.exports = {
    mode: 'development',
    entry:'./src/index.js',
    output:{
      path:'/dist',
      filename: 'bundle.[hash].js'
    },
    module: {
        rules: [
    
          // 첫 번째 룰
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
    
          // 두 번째 룰
          {
            test: /\.css$/,
            use: [
              {
                loader: 'style-loader'
              },
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  localsConvention: 'camelCase',
                }
              }
            ]
          }
        ]
      },
      plugins: [
          new webpack.HotModuleReplacementPlugin(),
          new HtmlWebpackPlugin({
              template: 'public/index.html'
          })
      ],
      devServer: {
          host: 'localhost',
          port: port,
          open: true,
          historyApiFallback: true,
          hot: true
      }
};
  