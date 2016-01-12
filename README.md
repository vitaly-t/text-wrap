text-wrap
=========

Fast and efficient way to wrap your text with a header + footer.

[![Build Status](https://travis-ci.org/vitaly-t/text-wrap.svg?branch=master)](https://travis-ci.org/vitaly-t/text-wrap)
[![Coverage Status](https://coveralls.io/repos/vitaly-t/text-wrap/badge.svg?branch=master)](https://coveralls.io/r/vitaly-t/text-wrap?branch=master)

Reasons for using it:

* Separate initialization for header + footer is necessary for fast file processing.
* Customizable verification for header + footer presence to avoid their duplication.

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

### wrap(text, [options]) ⇒ String

Wraps the `text` with the current `header` + `footer`, according to the `options`, and returns the result. 

##### options.skipCheck ⇒ Boolean

Disables verification for duplicate header or footer.

* `false (default)` - add header + footer, if they are missing  
* `true` - add header + footer regardless of their presence

By default, the header is added when it is not found within the `text`, or when there are non-empty symbols that precede it.
Accordingly, the footer is added when it is not found within the `text`, or when there are non-empty symbols that follow it. 

Enabling this option is effectively switching off most of what this library does, which may be needed when processing
files in a bulk requires no verification for certain file types.  

##### options.unique ⇒ Boolean

Enforces uniqueness of both header and footer within the `text`. 

* `false (default)` - verify for non-empty symbols that precede the header or follow the footer
* `true` - ignore non-empty symbols, add header + footer only when not found

By default, if the header is found within the `text`, it will still be added, if any non-empty symbol is found that precede
the header - any symbol other than a space, a tab or a line break. Accordingly, the footer will be added even when it is
found, if it is followed by any non-empty symbol.

Enabling this option is to ignore non-empty symbols that precede the header or follow the footer, and add them only
when they are not found within the `text` at all.

NOTE: This option has no effect when option `skipCheck` is enabled.

### wrap.header ⇒ String

Header text to be added, set to an empty string by default.

### wrap.footer ⇒ String

Footer text to be added, set to an empty string by default.

## License

Copyright © 2016 [Vitaly Tomilov](https://github.com/vitaly-t);
Released under the MIT license.

[text-wrap]:https://github.com/vitaly-t/text-wrap
