# email-encoder [![Build Status](https://travis-ci.org/DecentM/email-encoder.svg?branch=master)](https://travis-ci.org/DecentM/email-encoder) [![Greenkeeper badge](https://badges.greenkeeper.io/DecentM/email-encoder.svg)](https://greenkeeper.io/)

> A module and cli that encodes email addresses in a string into HTML entities


## Install

```
$ npm install email-encoder
```


## Usage

```js
const emailEncoder = require('email-encoder');

emailEncoder('My email is my-email@example.com');
//=> 'My email is &#x6D;&#x79;&#x2D;&#x65;&#x6D;&#x61;&#x69;&#x6C;&#x40;&#x65;&#x78;&#x61;&#x6D;&#x70;&#x6C;&#x65;&#x2E;&#x63;&#x6F;&#x6D;'
```


## API

### emailEncoder(input)

#### input

Type: `string`

## Command line usage

```
$ npm install --global email-encoder
```

```
$ email-encoder 'My email is my-email@example.com'
My email is &#x6D;&#x79;&#x2D;&#x65;&#x6D;&#x61;&#x69;&#x6C;&#x40;&#x65;&#x78;&#x61;&#x6D;&#x70;&#x6C;&#x65;&#x2E;&#x63;&#x6F;&#x6D;
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
