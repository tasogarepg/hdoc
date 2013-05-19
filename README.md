# hdoc

A here-document utility for Node.js.

## Installation

    $ npm install hdoc

## Usage
```js
var hdoc = require('hdoc').h;

var str = eval(hdoc)(function() {/*
  aa
    bb
  cc
*/});

console.log(str); // '  aa\n    bb\n  cc'
```

### cut indents
```js
var hdoci = require('hdoc').i;

var str = eval(hdoci)(function() {/*
  aa
    bb
  cc
*/});

console.log(str); // 'aa\n  bb\ncc'
```

### embed vals
```js
var hdoc = require('hdoc').h;

var v1 = 'str1';
var v2 = 20;

var str = eval(hdoc)(function() {/*
  aa
  ${v1}
  ${v2}
  bb
*/});

console.log(str); // '  aa\n  str1\n  20\n  bb'
```

## License

The MIT License
