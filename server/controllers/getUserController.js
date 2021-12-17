const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;
const dotenv = require('dotenv');
dotenv.config();

exports.getUser = async (req, res, next) => {
  if (!req.body.address) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // try{ 
    User.findOne({
      where: {
        address: req.body.address
      }
    }).then(data => {
      if (data) {
        res.json({
          success: true,
          user: data
        });
      } else {
        res.json({
          success: false,
        });
      }
    }).catch ((err) =>{
      console.log('error:', err);
    })

};
