text-wrap
=========

Fast and efficient way to wrap your text with header and footer.

[![Build Status](https://travis-ci.org/vitaly-t/text-wrap.svg?branch=master)](https://travis-ci.org/vitaly-t/text-wrap)
[![Coverage Status](https://coveralls.io/repos/vitaly-t/text-wrap/badge.svg?branch=master)](https://coveralls.io/r/vitaly-t/text-wrap?branch=master)

Reasons for using it:

* Separate initialization for header + footer is necessary for fast file processing.
* Automatic verification for header + footer presence to avoid their duplication.

## Installing

```
$ npm install text-wrap
```

## Testing

```
$ npm test
```

Testing with coverage:
```
$ npm run coverage
```

## Usage

As a function, when a single instance is used:

```js
var wrap = require('text-wrap');
wrap.header = 'header-';
wrap.footer = '-footer';
wrap('body'); //=> header-body-footer
```

As a class, when multiple instances are needed:

```js
var TextWrap = require('text-wrap');
var tw = new TextWrap();
tw.header = 'header-';
tw.footer = '-footer';
tw.wrap('body'); //=> header-body-footer
```

## API

UNDER DEVELOPMENT

## License

Copyright © 2016 [Vitaly Tomilov](https://github.com/vitaly-t);
Released under the MIT license.

[text-wrap]:https://github.com/vitaly-t/text-wrap
