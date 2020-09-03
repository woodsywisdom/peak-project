'use strict';
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        validates: {
          isEmail: true,
          len: [3, 255],
        },
      },
      username: {
        allowNull: false,
        type: DataTypes.STRING,
        validates: {
          len: [5, 50],
        },
      },
      hashedPassword: {
        allowNull: false,
        type: DataTypes.STRING.BINARY,
        validates: {
          len: [60, 60],
        },
      },
    },
    {
      defaultScope: {
        attributes: {
          exclude: ["hashedPassword", "email", "createdAt", "updatedAt"],
        },
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ["hashedPassword"] },
        },
        loginUser: {
          attributes: {},
        },
        profile: {
          attributes: {
            exclude: ["hashedPassword", "email", "updatedAt"]
          }
        }
      },
    }
  );

  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Route, { foreignKey: 'creatorId' });
  };

  User.prototype.toSafeObject = function() {
    const {
      id,
      username
    } = this;

    return { id, username };
  };

  User.login = async function({ username, password }) {
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: [{ username }, { email: username }],
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };

  User.prototype.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  User.getCurrentUserById = async function(id) {
    return await User.scope("currentUser").findByPk(id);
  };

  User.signup = async function({ username, email, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      username,
      email,
      hashedPassword
    });
    return await User.scope("currentUser").findByPk(user.id);
  };

  //Will eventually be a way for other users to see a User's profile info by username.  Not finished
  User.profile = async function(username) {
    return await User.scope('profile').findOne({ where: { username }});
  }

  return User;
};
