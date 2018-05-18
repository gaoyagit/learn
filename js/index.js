/**
 * Created by Administrator on 2018/5/18.
 */
var server = require('./server');
var router = require('./route');
server.start(router.route);