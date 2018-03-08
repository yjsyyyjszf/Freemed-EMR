

const { LoaderOptionsPlugin, optimize: { ModuleConcatenationPlugin }, ProvidePlugin } = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const webpackPlugins = (options) => {
    const { prod } = options;
    let plugins = [];
    if (prod) {
        plugins = [
            new UglifyJSPlugin({ sourceMap: true }),
        ];
    }
    const defaults = [
        new LoaderOptionsPlugin({ minimize: prod, debug: !prod }),
        new ExtractTextPlugin({ filename: '[name].css' }),
        new ProvidePlugin({	$: "jquery", jQuery: "jquery"	}),
        new ModuleConcatenationPlugin(),
        new CaseSensitivePathsPlugin(),
    ];
    return defaults.concat(plugins);
};

module.exports = webpackPlugins;
