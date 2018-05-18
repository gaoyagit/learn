/**
 * Created by Administrator on 2018/5/18.
 */
var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('input.txt').pipe(zlib.createGzip()).
    pipe(fs.createWriteStream('input.txt.gz'));

console.log('ya suo wan cheng');