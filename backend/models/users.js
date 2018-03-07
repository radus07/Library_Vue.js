module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'roles',
        key: 'id'
      }
    }
  })
  Users.associate = (models) => {
    Users.belongsTo(models['roles'], {
      foreignKey: 'roleId',
      as: 'role'
    })
  }
  return Users
}
