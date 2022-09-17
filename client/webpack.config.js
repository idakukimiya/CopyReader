const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
				template: './index.html',
			}),
			new WebpackPwaManifest({
				name: 'COPYREADER',
				short_name: 'COPYREADER',
				description: 'copyreader',
				display: 'standalone',
				background_color: '#1f2554',
				theme_color: '#1f2554',
				start_url: '/',
				publicPath: '/',
				fingerprints: false,
				inject: true,
				icons: [
					{
						src: path.resolve('src/images/logo.png'),
						sizes: [96, 128, 192, 256, 384, 512],
						destination: path.join('assets', 'icons'),
					},
				],
			}),
			new InjectManifest({
				swSrc: './src-sw.js',
				swDest: 'service-worker.js',
			}),
    ],

    module: {
      rules: [
        
      ],
    },
  };
};
