import { Model, INTEGER, STRING } from 'sequelize'
import db from './index'

class Author extends Model {
  declare id: number;
  declare name: string;
}

Author.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  name: {
    allowNull: false,
    type: STRING,
  }
}, {
  sequelize: db,
  modelName: 'authors',
  timestamps: false,
});

export default Author;