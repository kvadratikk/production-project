import webpack from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: Required<webpack.Configuration> }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve.modules?.push(paths.src);
  config.resolve.extensions?.push('.ts', '.tsx');

  config.module.rules = config.module.rules?.map((rule) => {
    if (typeof rule !== 'string' && /svg/.test(String(rule.test))) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  config.module.rules?.push(buildCssLoader(true));

  return config;
};
