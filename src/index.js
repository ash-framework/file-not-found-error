'use strict'

const ArgumentError = require('@ash-framework/argument-error')

function validateInput (name, path) {
  if (typeof name !== 'string') {
    throw new ArgumentError('FileNotFoundError', 'constructor', `expected 'name' to be a string, got '${typeof name}'`)
  }
  if (path) {
    if (typeof path !== 'string') {
      throw new ArgumentError('FileNotFoundError', 'constructor', `expected 'path' to be a string, got '${typeof name}'`)
    }
  }
}

module.exports = class FileNotFoundError extends Error {
  constructor (name, path) {
    validateInput(name, path)

    let message
    if (name && path) {
      message = `Unable to find file ${name} in ${path}`
    } else if (name) {
      message = `Unable to find file ${name}`
    }
    super(message)

    this.name = this.constructor.name
  }
}
