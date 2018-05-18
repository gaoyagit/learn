/**
 * Created by Administrator on 2018/5/18.
 */
var fs = require('fs');
//var data = '¸ßæ«ÄãºÃ';

var readStream = fs.createReadStream('input.txt');
//console.log(readStream.toString());
//readStream.setEncoding('UTF-8');
var writeStream = fs.createWriteStream('output.txt');

readStream.pipe(writeStream);


console.log('cheng xu zhi xing wan bi')