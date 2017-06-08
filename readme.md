# email-encoder [![Build Status](https://travis-ci.org/DecentM/email-encoder.svg?branch=master)](https://travis-ci.org/DecentM/email-encoder)

> A module and cli that encodes email addresses in a string into HTML entities


## Install

```
$ npm install email-encoder
```


## Usage

```js
const emailEncoder = require('email-encoder');

emailEncoder('unicorns');
//=> 'unicorns & rainbows'
```


## API

### emailEncoder(input)

#### input

Type: `string`

Lorem ipsum.

## CLI

```
$ npm install --global email-encoder
```

```
$ email-encoder --help

  Usage
    email-encoder [input]

  Examples
    $ email-encoder "Hello, world!"
    // -> "Hello, world!"
    $ email-encoder "My e-mail is hello@example.com"
    // -> My e-mail is &#x68;&#x65;&#x6C;&#x6C;&#x6F;&#x40;&#x65;&#x78;&#x61;&#x6D;&#x70;&#x6C;&#x65;&#x2E;&#x63;&#x6F;&#x6D;
```


## License

MIT © [DecentM](http://decentm.com)
