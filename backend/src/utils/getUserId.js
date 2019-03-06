const { verify } = require('jsonwebtoken')

class AuthError extends Error {
  constructor() {
    super('You are not authorized')
  }
}

function getUserId(context) {
  const { token } = context.request.cookies

  if (!token) {
    return null
  }

  const verifiedToken = verify(token, process.env.APP_SECRET)
  return verifiedToken && verifiedToken.userId
}

module.exports = {
  getUserId,
  AuthError,
}
