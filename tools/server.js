const express = require('express');

const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');

const getConfig = require('./webpack-config');
const webpack = require('webpack');
const config = require('./config');

const proxy = require('http-proxy-middleware');

var options = {
  target: 'http://116.196.109.213:7300/mock/5b921fdacca9d5000e3a042b/test',
  secure: false,
  changeOrigin: true,
  ws: true,
  ignorePath: false,
  pathRewrite: {
    '^/api': ''
  }
};

var webProxy = proxy(options);

function startDevServer() {
  const app = express();
  /*=============webpack start==============*/
  const devConfig = getConfig('dev');
  const compiler = webpack(devConfig);
  app.use(
    devMiddleware(compiler, {
      publicPath: devConfig.output.publicPath,
      historyApiFallback: true
    })
  );
  app.use(hotMiddleware(compiler));
  app.use('/api/*', webProxy);
  /*=============webpack end==============*/

  //前端登录界面代理
  (() => {
    const proxy_options_mock = {
      target: `http://16.158.50.144:81/`,
      secure: false,
      changeOrigin: true,
      ws: true,
      ignorePath: false
    };
    const webProxyMock = proxy(proxy_options_mock);
    app.use('/front/*', webProxyMock);
  })();

  app.listen(config.port, (err) => {
    if (err) {
      console.error(err);
    }
    console.log(`Dev server listening at http://localhost:${config.port}/`);
  });
}
startDevServer();
