var assert = require('assert');
var hdoc = require('../lib/hdoc.js').h;
var hdoci = require('../lib/hdoc.js').i;

describe('hdoc', function() {

  it('single-line', function() {
    var str = eval(hdoc)(function() {/*
aa
    */});
    assert.equal(str, 'aa');
  });

  it('multi-line', function() {
    var str = eval(hdoc)(function() {/*
aa
  bb
cc
    */});
    assert.equal(str, [
      'aa',
      '  bb',
      'cc'
    ].join('\n'));
  });

  it('with space', function() {
    var str = eval(hdoc)(function() {/*
      aa
        bb
      cc
    */});
    assert.equal(str, [
      '      aa',
      '        bb',
      '      cc'
    ].join('\n'));
  });

  it('cut space', function() {
    var str = eval(hdoci)(function() {/*
      aa
        bb
      cc
    */});
    assert.equal(str, [
      'aa',
      '  bb',
      'cc'
    ].join('\n'));
  });

  it('with tab', function() {
		var str = eval(hdoc)(function() {/*
			aa
				bb
			cc
		*/});
    assert.equal(str, [
      '\t\t\taa',
      '\t\t\t\tbb',
      '\t\t\tcc'
    ].join('\n'));
  });

  it('cut tab', function() {
		var str = eval(hdoci)(function() {/*
			aa
				bb
			cc
		*/});
    assert.equal(str, [
      'aa',
      '\tbb',
      'cc'
    ].join('\n'));
  });

  it('embed vals', function() {
    var v1 = 'str1';
    var v2 = 20;
    var str = eval(hdoc)(function() {/*
      aa
      ${v1}
      ${v2}
      ${v1}
      bb
    */});
    assert.equal(str, [
      '      aa',
      '      str1',
      '      20',
      '      str1',
      '      bb'
    ].join('\n'));
  });

  it('embed vals and cut indents', function() {
    var v1 = 'str1';
    var v2 = 20;
    var str = eval(hdoci)(function() {/*
      aa
      ${v1}
      ${v2}
        ${v1}
      bb
    */});
    assert.equal(str, [
      'aa',
      'str1',
      '20',
      '  str1',
      'bb'
    ].join('\n'));
  });

  it('escape special character for comment', function() {
    var str = eval(hdoc)(function() {/*
      /\* aa *\/
      \\\\bb
    */});
    assert.equal(str, [
      '      /* aa */',
      '      \\\\bb'
    ].join('\n'));
  });

  it('escape special character for comment and cut indents', function() {
    var str = eval(hdoci)(function() {/*
      /* aa *\/
      \\\\bb
    */});
    assert.equal(str, [
      '/* aa */',
      '\\\\bb'
    ].join('\n'));
  });

  it('escape special character for embeding vals', function() {
    var v1 = 'str1';
    var str = eval(hdoc)(function() {/*
      ${v1}
      \${v1}
    */});
    assert.equal(str, [
      '      str1',
      '      ${v1}',
    ].join('\n'));
  });

  it('escape special character for embeding vals and cat indents', function() {
    var v1 = 'str1';
    var str = eval(hdoci)(function() {/*
      ${v1}
        \${v1}
    */});
    assert.equal(str, [
      'str1',
      '  ${v1}',
    ].join('\n'));
  });

});
