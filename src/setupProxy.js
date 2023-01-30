const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: `http://interview.enhdi.com:8000`,
      changeOrigin: true,
      // pathRewrite: {
      //   '^/api': ''
      // },
    }),
  );
};
