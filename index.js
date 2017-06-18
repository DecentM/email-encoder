const getEmails = require('emails-in-string')
const he = require('he')

module.exports = (input) => {
  let output = input

  if (typeof input !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof input}`)
  }

  const emails = getEmails(input)

  emails.forEach((email) => {
    const encoded = he.encode(email, {
      'encodeEverything': true
    })
    const regexp = new RegExp(email, 'g')

    output = output.replace(regexp, encoded)
  })
  return output
}
