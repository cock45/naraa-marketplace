module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      username: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
      },
      bio: {
        type:Sequelize.STRING,
      },
      user_type: {
        type: Sequelize.INTEGER,
      },
      address: {
        type: Sequelize.STRING,
        unique: true,
      },
      is_active: {
        type: Sequelize.BOOLEAN,
      },
    });
  
    return Users;
  };