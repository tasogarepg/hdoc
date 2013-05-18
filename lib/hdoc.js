'use strict';
module.exports = hdoc;

function hdoc(fn) {
  return fn && fn.toString().split(/\n/).slice(1, -1).join('\n');
}
