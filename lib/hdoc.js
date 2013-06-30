'use strict';
module.exports = Heredoc;

function Heredoc() {}

function hdoc(fn) {
  return fn && fn.toString().split('\n').slice(1, -1).join('\n').
    replace(/\\([*/\\])/g, '$1').
    replace(/\\?\$\{.+?\}/g, function(c) {
      return c.charAt(0) === '\\' ? c.slice(1) : eval(c.slice(2, -1));
    });
}
Heredoc.h = '(' + hdoc.toString() + ')';

function hdoci(fn) {
  if (!fn) return fn;
  var lines = fn.toString().split('\n');
  var reg = new RegExp('^' + lines[1].match(/^[ \t]*/), 'g');
  return lines.slice(1, -1).
    map(function(line) {
      return line.replace(reg, '');
    }).join('\n').
    replace(/\\([*/\\])/g, '$1').
    replace(/\\?\$\{.+?\}/g, function(c) {
      return c.charAt(0) === '\\' ? c.slice(1) : eval(c.slice(2, -1));
    });
}
Heredoc.i = '(' + hdoci.toString() + ')';
