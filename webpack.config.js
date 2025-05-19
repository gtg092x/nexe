const wcp = require('webpack-config-prefabs')
module.exports = wcp.nodeLibrary(module, {
  enableTypescript: true,
  entry: './src/fs/patch.ts',
  minimize: false,
  outputFilepath: './lib/fs/patch.bundle.js',
});
