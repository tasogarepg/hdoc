# hdoc

A here-document utility for Node.js.

## Installation

    $ npm install hdoc

## Usage
```js
var hdoc = require('hdoc');

var str = hdoc(function() {/*
  aa
  bb
  cc
*/});

console.log(str); // '  aa\n  bb\n  cc'
```

## License

The MIT License
