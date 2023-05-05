import { BuildOptions } from './types/config'
import { Configuration } from 'webpack-dev-server'

export function buildDevServer({ port }: BuildOptions): Configuration {
  return {
    port: port,
    open: true,
    historyApiFallback: true,
    hot: true,
  }
}
