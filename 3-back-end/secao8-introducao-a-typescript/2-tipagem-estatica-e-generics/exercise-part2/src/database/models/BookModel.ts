import { Model, INTEGER, STRING } from 'sequelize';
import db from './index';
import Author from './AuthorModel';

class Book extends Model {
  declare id: number;
  declare title: string;
  declare authorId: number;
  declare genreId: number;
}

Book.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  title: {
    allowNull: false,
    type: STRING,
  },
  authorId: {
    allowNull: false,
    type: INTEGER,
    references: {
      model: 'authors',
      key: 'id',
    },
  },
  genreId: {
    allowNull: false,
    type: INTEGER,
    references: {
      model: 'genres',
      key: 'id',
    },
  }
}, {
  sequelize: db,
  underscored: true,
  modelName: 'books',
  timestamps: false,
});

Book.belongsTo(Author, { foreignKey: 'id' });
Author.hasMany(Book, { foreignKey: 'authorId' });

export default Book;