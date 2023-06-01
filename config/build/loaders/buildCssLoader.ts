import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildCssLoader = (isDev: boolean) => {
  const styleLoader = isDev ? 'style-loader' : MiniCssExtractPlugin.loader;
  const localIdentName = isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]';

  return {
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
  };
};
