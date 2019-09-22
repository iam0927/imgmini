
const path = require('path')

const { CleanWebpackPlugin} = require('clean-webpack-plugin')



module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name],bundle.[hash:8].js',
    publicPath: './'
  },
  module: {
    rules: [
      // 处理图片
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: "[name].[ext]",
              limit: false,
              outputPath: 'images',
              publicPath: "images/"
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true
            }
          }
        ]

      }

    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}