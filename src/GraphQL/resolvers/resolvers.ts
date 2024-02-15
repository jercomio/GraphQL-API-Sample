import { books, users } from "../../db/index.js";

const resolvers = {
    Query: {
      users: (_, {userName}) => {
        return users.filter(user => user.name === userName);
      },
      books: (_, {userName}) => {
        return books.filter((book) => {
          if (book.users.includes(userName)) {
            return book;
          }
        });
      }
    }
};

export { resolvers }