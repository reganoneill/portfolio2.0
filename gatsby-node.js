import postBuild from './post-build';
import ExtractTextPlugin from ('extract-text-webpack-plugin');

exports.modifyWebpackConfig = (config) => {
  const resolveConfig = config.resolve();
  resolveConfig.alias = {
    components: './components',
    css: './scss',
  };


  config.loader('file-loader', function(cfg) {
   cfg.test = /\.(gif|png|jpe?g|svg|ico)$/i,
   cfg.loader = 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]'
   return cfg
 })


 config.loader('url-loader', function(cfg) {
  cfg.test = /\.(png|jpg|jpeg)$/,
  cfg.include = path.join(__dirname, 'img'),
  cfg.loader = 'url-loader?limit=30000&name=images/[name].[ext]'
  return cfg
})

config.loader('css-loader', function(cfg) {
 cfg.test = /\.scss$/,
 cfg.loader = ExtractTextPlugin.extract(['css-loader', 'sass-loader', 'postcss-loader'])
 return cfg
})

  config.resolve = () => resolveConfig;

  return config;
};

exports.postBuild = postBuild;
