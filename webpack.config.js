module.exports = {
  module: {
    rules: [
      ...
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
};