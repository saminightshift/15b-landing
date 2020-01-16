const withCSS = require('@zeit/next-css')
// module.exports = withCSS({
//   /* config options here */
// })

module.exports = withCSS({
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  }
});