import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import nodeExternals from 'webpack-node-externals'
import CopyPlugin from 'copy-webpack-plugin'
import { Configuration } from 'webpack'
import path from 'path'

const config: Configuration = {
  entry: path.join(__dirname, 'src/app/main.ts'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'server.js'
  },
  mode: 'production',
  target: 'node',
  externals: [nodeExternals()],
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.ts']
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'package.json', to: '.' }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: /src/,
        use: [{ loader: 'ts-loader' }]
      }
    ]
  }
}

export default config