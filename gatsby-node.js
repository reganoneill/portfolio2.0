import postBuild from './post-build';

exports.modifyWebpackConfig = (config) => {
  const resolveConfig = config.resolve();
  resolveConfig.alias = {
    components: './components',
    css: './css',
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



  config.resolve = () => resolveConfig;

  return config;
};

exports.postBuild = postBuild;
