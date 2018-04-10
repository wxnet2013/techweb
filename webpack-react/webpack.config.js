const assertsPath = './imgs/';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const theme = require('./theme');

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: ['react', 'react-dom'],
  },
  output: {
    // development hash
    // production chunkhash
    filename: `[name].[${process.env.NODE_ENV === 'production' ? 'chunkhash' : 'hash'}:16].js`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // webpack 3 loader: 'babel-loader',
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          // eslint options (if necessary)
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.scss$/,
        use: [{
          // creates style nodes from JS strings
            loader: "style-loader"
        }, {
          // translates CSS into CommonJS
            loader: "css-loader" 
        }, {
          // compiles Sass to CSS
            loader: "sass-loader" 
        }]
      },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "less-loader", options: {
              javascriptEnabled: true,
              modifyVars: theme
            }
        }]
      },
      // {
      //   test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      //   loader: 'url-loader',
      //   options: {
      //     limit: 10000,
      //     name: utils.assetsPath('img/[name].[hash:8].[ext]')
      //   }
      // },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              // logo.f7930e7a.jpg
              name: `${assertsPath}[name].[hash:8].[ext]`
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              // logo.f7930e7a.jpg
              name: `${assertsPath}[name].[hash:8].[ext]`
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: 'index.html',
        inject: 'body',
        minify: {
            html5: true
        },
        hash: false
    })
  ],
  optimization: {
    splitChunks: {
        chunks: "all",
        minChunks: 1,
        minSize: 0,
        cacheGroups: {
            vendor: {
                test: "vendor",
                name: "vendor"
            }
        }
    }
  }
};