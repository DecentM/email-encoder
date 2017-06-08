#!/usr/bin/env node
const meow = require('meow')
const emailEncoder = require('.')

const cli = meow(`
  Usage
    $ email-encoder [input]

  Examples
    $ email-encoder "Hello, world!"
    // -> "Hello, world!"
    $ email-encoder "My e-mail is hello@example.com"
    // -> My e-mail is &#x68;&#x65;&#x6C;&#x6C;&#x6F;&#x40;&#x65;&#x78;&#x61;&#x6D;&#x70;&#x6C;&#x65;&#x2E;&#x63;&#x6F;&#x6D;
`)

// eslint-disable-next-line no-console
console.log(emailEncoder(cli.input[0] || `Please run me with --help to learn how to use ${process.title}`))
