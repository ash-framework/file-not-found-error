/* global describe, it */
const assert = require('assert')
const FileNotFoundError = require('../src')

describe('FileNotFoundError', function () {
  it('name and path', function () {
    const error = new FileNotFoundError('index.js', '/src/project/')
    assert.strictEqual(error.message, 'Unable to find file index.js in /src/project/')
  })

  it('name only', function () {
    const error = new FileNotFoundError('/src/project/index.js')
    assert.strictEqual(error.message, 'Unable to find file /src/project/index.js')
  })

  it('name must be a string', function () {
    const test = () => new FileNotFoundError(1)
    assert.throws(test)
  })

  it('path must be a string if present', function () {
    const test = () => new FileNotFoundError('asd', 1)
    assert.throws(test)
  })
})
