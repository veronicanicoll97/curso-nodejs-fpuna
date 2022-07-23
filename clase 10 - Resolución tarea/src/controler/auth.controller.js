const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const {sign} = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const signUp = async (req, res) => {
  try {
    const {username, password, isAdmin} = req.body;

    if(!isAdmin) {
      console.log("Este usuario no va ser administrador.")
    }
    else {
      console.log("Va ser administrador.")
    }

    const salt = await bcryptjs.genSalt();
    const hash = await bcryptjs.hash(password, salt);

    const newUser = await User.create({
      username,
      password: hash,
      isAdmin
    });

    const token = sign(
      {id: newUser.id},
      SECRET,
      { expiresIn: 3600 },
    );

    return res.status(201).json({token});
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

const login = async (req, res) => {
  try {
    const {username, password} = req.body;

    const user = await User.findOne({where: {username}});

    if (!user) {
      return res.status(401).json({message: 'Usuario o contraseña incorrectos'});
    }

    const valid = await bcryptjs.compare(password, user.password);
    if (!valid) {
      return res.status(401).json({message: 'Usuario o contraseña incorrectos'});
    }

    const token = sign(
      {id: user.id},
      SECRET,
      { expiresIn: 3600 },
    );

    return res.status(200).json({token});
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

module.exports = {
  signUp,
  login,
};
