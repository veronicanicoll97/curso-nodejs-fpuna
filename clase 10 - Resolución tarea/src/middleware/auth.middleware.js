const { verify } = require("jsonwebtoken");
const User = require("../models/user");

const SECRET = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
  let payload;

  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'No estas autenticado' });
  }

  try {
    payload = verify(token.substring(7), SECRET);
    req.user = payload.id;
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'No estas autenticado' });
  }
}

const verificarRole = async (req, res, next) => {
  const id = req.user;
  try {
    const user = await User.findByPk(id);
    if (!user.isAdmin) {
      return res.status(403).json({ message: 'No tienes los permisos' });
    }
    return next();
  } catch (error) {
    return res.status(403).json({ message: 'No tienes los permisos' });
  }
}


module.exports = { verifyToken, verificarRole };