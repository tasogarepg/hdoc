var assert = require('assert');

var hdoc = require('../lib/hdoc.js');

describe('hdoc', function() {

  it('single-line', function() {
    var str = hdoc(function() {/*
aa
    */});
    assert.equal(str, 'aa');
  });

  it('multi-line', function() {
    var str = hdoc(function() {/*
aa
bb
cc
    */});
    assert.equal(str, [
      'aa',
      'bb',
      'cc',
    ].join('\n'));
  });

  it('with space', function() {
    var str = hdoc(function() {/*
      aa
      bb
      cc
    */});
    assert.equal(str, [
      '      aa',
      '      bb',
      '      cc',
    ].join('\n'));
  });

  it('with tab', function() {
		var str = hdoc(function() {/*
			aa
			bb
			cc
		*/});
    assert.equal(str, [
      '\t\t\taa',
      '\t\t\tbb',
      '\t\t\tcc',
    ].join('\n'));
  });

});
