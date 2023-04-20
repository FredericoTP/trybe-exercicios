import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class User extends Model {
  declare id: number;
  declare name: string;
  declare emai: string;
  declare password: string;
}

User.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER
  },
  name: {
    allowNull: false,
    type: STRING
  },
  email: {
    allowNull: false,
    type: STRING
  },
  password: {
    allowNull: false,
    type: STRING
  }
}, {
  sequelize: db,
  modelName: 'Users',
  timestamps: false,
});

export default User;