const jwt = require('jsonwebtoken');

function generateToken(user) {
  const payload = {
    subject: user.id, 
    username: user.username,
    role: user.role
  };

  const secret = process.env.JWT_SECRET || 'A secret is a secret does.'

  const options = {
    expiresIn: '7d',
  };

  return jwt.sign(payload, secret, options);
}

module.exports = {
  generateToken
}