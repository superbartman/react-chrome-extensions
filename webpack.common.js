const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    'index': './src/index.tsx',
    'background': './src/background.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: {
      name: 'ReactChromeExtensions',
      type: 'umd',
      umdNamedDefine: true
    },
    clean: {
      keep(asset) {
        return asset.includes('manifest.json') || asset.includes('index.html');
      },
    },
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'ts-loader',
            options: { transpileOnly: true }
          }
        ]
      },
    ],
  },
};
