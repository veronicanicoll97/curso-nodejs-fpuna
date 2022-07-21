const { verify } = require("jsonwebtoken");

const SECRET = '123456789qwerty';

const verifyToken = (req, res, next) => {
  let payload;

  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({message: 'No estas autenticado'});
  }

  try {
    payload = verify(token.substring(7), SECRET);
    req.user = payload.id;
    return next();
  } catch (error) {
    return res.status(401).json({message: 'No estas autenticado'});
  }
}

module.exports = {verifyToken};