const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;
const dotenv = require('dotenv');
dotenv.config();

exports.updateUser = async (req, res, next) => {
    console.log("Update server is running");
    const user = {
        username: req.body.username,
        bio: req.body.bio,
        address: req.body.address
    };

    console.log('USER => ', user);
    console.log('DATA => ', User);
    
    User.findOne({
        where: {
            address: req.body.address
        }
    }).then(data => {
        if (data) {
            console.log("DB Connected");
            User.update({
                username: req.body.username,
                bio: req.body.bio
            }, {
                where: { address: req.body.address },
                returning: true,
                plain: true
            })
            .then(data => {
                res.json({
                    success: true,
                    user:user
                });
            })
        } else {
            console.log('DB ERROR');
            res.json({
                success: false,
                message: 'DB Error.'
            });
        }
    }).catch ((err) =>{
        console.log('error:', err);
    })
};
