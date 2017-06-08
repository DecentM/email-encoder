import test from 'ava'
import encoder from '.'

test('nothing to encode', (t) => {
  const string = encoder('This is a test message')

  t.is(string, 'This is a test message')
})

test('encode one lone email', (t) => {
  const string = encoder('email@something.com')

  t.is(string, '&#x65;&#x6D;&#x61;&#x69;&#x6C;&#x40;&#x73;&#x6F;&#x6D;&#x65;&#x74;&#x68;&#x69;&#x6E;&#x67;&#x2E;&#x63;&#x6F;&#x6D;')
})

test('encode one email with additional text', (t) => {
  const string = encoder('My email is email@something.com yeah!')

  t.is(string, 'My email is &#x65;&#x6D;&#x61;&#x69;&#x6C;&#x40;&#x73;&#x6F;&#x6D;&#x65;&#x74;&#x68;&#x69;&#x6E;&#x67;&#x2E;&#x63;&#x6F;&#x6D; yeah!')
})

test('encode multiple emails', (t) => {
  const string = encoder('email@something.com else@example.net')

  t.is(string, '&#x65;&#x6D;&#x61;&#x69;&#x6C;&#x40;&#x73;&#x6F;&#x6D;&#x65;&#x74;&#x68;&#x69;&#x6E;&#x67;&#x2E;&#x63;&#x6F;&#x6D; &#x65;&#x6C;&#x73;&#x65;&#x40;&#x65;&#x78;&#x61;&#x6D;&#x70;&#x6C;&#x65;&#x2E;&#x6E;&#x65;&#x74;')
})

test('leaves HTML alone', (t) => {
  const string = encoder('<span>email@example.com</span>')

  t.is(string, '<span>&#x65;&#x6D;&#x61;&#x69;&#x6C;&#x40;&#x65;&#x78;&#x61;&#x6D;&#x70;&#x6C;&#x65;&#x2E;&#x63;&#x6F;&#x6D;</span>')
})

test('throws an error if nothing is passed', (t) => {
  t.throws(() => {
    encoder()
  })
})

test('throws an error if a number is passed', (t) => {
  t.throws(() => {
    encoder(42)
  })
})

test('throws an error if an object is passed', (t) => {
  t.throws(() => {
    encoder({
      'fun': 'rainbows'
    })
  })
})
