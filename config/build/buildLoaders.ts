import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from './types/config'

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const styleLoader = isDev ? 'style-loader' : MiniCssExtractPlugin.loader
  const localIdentName = isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      styleLoader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string): Boolean => resPath.includes('.module'),
            localIdentName,
          },
        },
      },
      'sass-loader',
    ],
  }

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [typescriptLoader, cssLoader]
}
