import { books, booksByUser, library, users } from "../../db/index.js";
import { AddBookParams, AddUserParams, ID, UpdateBookParams, UpdateUserParams, UserID, UserParams } from "./types.js";

const resolvers = {
    Query: {
      library: () => library,
      users: () => users,
      user: (_, {userName, userEmail, userID}: UserParams) => { 
        if (userName) {
          return users.filter(user => user.name === userName)
        } else if (userEmail) {
          return users.filter(user => user.email === userEmail)
        } else if (userID) {
          return users.filter(user => user.id === userID)
        }
      },
      books: () => books,
      book: (_, {userName, userID}: UserParams) => {
        return books.filter((book) => {
          if (book.users.some(user => user.name === userName)) {
            return book;
          } else if (book.users.some(user => user.id === userID)) {
            return book;
          }
        });
      }
    },
    Mutation: {
      addUser: (_, {addUser}: {addUser: AddUserParams}) => {
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
      addBook: (_, {addBook}: {addBook: AddBookParams}) => {
        let checkID = books.findIndex(book => book.id === addBook.id)
        if (checkID === -1) {
          let newBook = addBook
          books.push(newBook)
          return newBook
        } else {
          throw new Error("Book already exists")
        }
      },
      updateBook: (_, {id, updateBook}: {id: ID, updateBook: UpdateBookParams}) => {
        let checkID = books.findIndex(book => book.id === id)
        if (checkID !== -1) {
          books[checkID] = {...books[checkID], ...updateBook}
          return books[checkID]
        } else {
          throw new Error("Book does not exist")
        }
      },
      updateUser: (_, {id, updateUser}: {id: UserID, updateUser: UpdateUserParams}) => {
        let checkID = users.findIndex(user => user.id === id)
        if (checkID !== -1) {
          users[checkID] = {...users[checkID], ...updateUser}
          return users[checkID]
        } else {
          throw new Error("User does not exist")
        }
      },
      deleteUser: (_, {id}: {id: UserID}) => {
        let checkID = users.findIndex(user => user.id === id)
        if (checkID !== -1) {
          users.splice(checkID, 1)
          return true
        } else {
          throw new Error("User does not exist")
        }
      },
      deleteBook: (_, {id}: {id: ID}) => {
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