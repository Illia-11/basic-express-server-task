let books = [
  {
    id: 1,
    title: "Book 1",
    author: "User 1",
    synopsis: "good book",
    pages: 100,
    price: 1000,
    isExists: true,
  },
  {
    id: 2,
    title: "Book 2",
    author: "User 2",
    synopsis: "very good book",
    pages: 200,
    price: 2000,
    isExists: true,
  },
  {
    id: 3,
    title: "Book 3",
    author: "User 3",
    synopsis: "very very good book",
    pages: 300,
    price: 3000,
    isExists: true,
  },
  {
    id: 4,
    title: "Book 4",
    author: "User 4",
    synopsis: "very very very good book",
    pages: 400,
    price: 4000,
    isExists: true,
  },
  {
    id: 5,
    title: "Book 5",
    author: "User 5",
    synopsis: "very very very very good book",
    pages: 500,
    price: 5000,
    isExists: true,
  },
];

class Book {
  static async findOne(id) {
    return books.find((book) => book.id === id);
  }

  static async findAll() {
    return books;
  }

  static async create(bookData) {
    const newBook = { ...bookData };

    newBook.id = Date.now();

    books.push(newBook);

    return newBook;
  }

  static async delete(id) {
    const foundBook = await book.findOne(id);

    if (foundBook) {
      books = books.filter((book) => book.id !== +id);
    } else {
      throw new Error("Book is not defined!");
    }
  }

  static async update(id, updateData) {
    const foundBook = await Book.findOne(id);

    if (foundBook) {
      let updatedBook;

      books = books.map((book) => {
        if (book.id === +id) {
          updatedBook = {
            ...book,
            ...updateData,
          };

          return updatedBook;
        }

        return book;
      });

      return updatedBook;
    } else {
      throw new Error("Book is not defined!");
    }
  }
}

module.exports = Book;