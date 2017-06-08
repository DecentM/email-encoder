const getEmails = require('get-emails')
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

    output = output.replace(email, encoded)
  })
  return output
}
