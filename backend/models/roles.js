module.exports = (sequelize, DataTypes) => {
  const Roles = sequelize.define('roles', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.ENUM,
      values: ['USER', 'ADMIN'],
      allowNull: false
    }
  })
  Roles.associate = (models) => {
    Roles.hasMany(models['users'], {
      foreignKey: 'roleId',
      as: 'users'
    })
  }
  return Roles
}
