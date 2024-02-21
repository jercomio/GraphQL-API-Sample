import { books, booksByUser, users } from "../../db/index.js";


const resolvers = {
    Query: {
      users: () => users,
      user: (_, {userName}) => {
        return users.filter(user => user.name === userName);
      },
      books: () => books,
      book: (_, {userName}) => {
        return books.filter((book) => {
          if (book.users.includes(userName)) {
            return book;
          }
        });
      }
    },
    Mutation: {
      addUser: (_, {addUser}) => {
        let checkID = users.findIndex(user => user.id === addUser.id)
        if (checkID === -1) {
          const userBooks = {books: () => booksByUser(addUser.name)}
          let newUser = {...addUser, ...userBooks}
          users.push(newUser)
          return newUser
        } else {
          throw new Error("User already exists");
        }
      },
      addBook: (_, {addBook}) => {
        let checkID = books.findIndex(book => book.id === addBook.id)
        if (checkID === -1) {
          let newBook = addBook
          books.push(newBook)
          return newBook
        } else {
          throw new Error("Book already exists")
        }
      },
      updateBook: (_, {id, updateBook}) => {
        let checkID = books.findIndex(book => book.id === id)
        if (checkID !== -1) {
          books[checkID] = {...books[checkID], ...updateBook}
          return books[checkID]
        } else {
          throw new Error("Book does not exist")
        }
      },
      updateUser: (_, {id, updateUser}) => {
        let checkID = users.findIndex(user => user.id === id)
        if (checkID !== -1) {
          users[checkID] = {...users[checkID], ...updateUser}
          return users[checkID]
        } else {
          throw new Error("User does not exist")
        }
      },
      deleteUser: (_, {id}) => {
        let checkID = users.findIndex(user => user.id === id)
        if (checkID !== -1) {
          users.splice(checkID, 1)
          return true
        } else {
          throw new Error("User does not exist")
        }
      },
      deleteBook: (_, {id}) => {
        let checkID = books.findIndex(book => book.id === id)
        if (checkID !== -1) {
          books.splice(checkID, 1)
          return true
        } else {
          throw new Error("Book does not exist")
        }
      }
    }
};

export { resolvers }