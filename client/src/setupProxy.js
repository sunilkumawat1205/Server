const createProxyMiddleware   = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    ['/api', '/auth/google'],
    createProxyMiddleware({
      target: 'http://localhost:5000',
    })
  );
};
// module.exports = function(app) {
//     app.use(createProxyMiddleware('/auth/google',
//         { target: 'http://localhost:5000/' }
//     ));
// };
