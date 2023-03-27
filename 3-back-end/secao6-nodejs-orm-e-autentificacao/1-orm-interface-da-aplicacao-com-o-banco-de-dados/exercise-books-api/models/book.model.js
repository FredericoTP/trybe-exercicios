const BooksModel = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    tittle: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  return Book;
}

module.exports = BooksModel;