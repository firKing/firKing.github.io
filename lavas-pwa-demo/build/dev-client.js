/**
 * @file 开发环境客户端
 * @author wangjinpeng03(wangjinpeng03@baidu.com)
 */

'use strict';

require('eventsource-polyfill');
let hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true');

hotClient.subscribe(function (event) {
    if (event.action === 'reload') {
        window.location.reload();
    }
});
