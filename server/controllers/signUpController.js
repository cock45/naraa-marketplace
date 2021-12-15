const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;
const dotenv = require('dotenv');
dotenv.config();

exports.signUp = async (req, res, next) => {
  if (!req.body.address || !req.body.username || !req.body.email) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const user = {
    email: req.body.email,
    username: req.body.username,
    address: req.body.address,
  };

  console.log('user => ', user);

  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(data => {
    if (data) {
      res.json({
        success: false,
        msg: "Your email is already registered."
      })
    } else {
      User.create(user)
      .then(data => {
        res.json({
          success: true,
          user:user
        });
      })
      .catch(err => {
        res.json({
          success: false,
          message: 'DB Error.'
        });
      });
    }
  })
  
  
  // Save Tutorial in the database
  
};
