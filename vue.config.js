const path = require('path');

module.exports = {
   publicPath: '/',
   configureWebpack: {
      resolve: {
         alias: {
            '@imgs': path.resolve(__dirname, 'src/assets/imgs'),
            '@css': path.resolve(__dirname, 'src/assets/css'),
         },
      },
   }
}
