// GraphQL Schema

const typeDefs = `#graphql
  # Types
  type Library {
    id: ID!
    name: String!
    description: String!
    date: String!
    Owner: String!
    readers: Readers!
  }

  type Readers {
    numberOfReaders: Int!
    nameOfReaders: [String!]
  }

  type Book {
    id: ID!
    title: String!
    author: String!
    published: Int!
    users: [User!]
  }

  type User {
    id: String!
    name: String!
    age: Int,
    email: String!,
    books: [Book!]
  }

  # Query and Mutation types
  type Query {
    library: [Library!]!
    books: [Book!]!
    book(userName: String, userID: String): [Book!]!
    users: [User!]!
    user(userName: String, userEmail: String, userID: String): [User!]!
  }

  type Mutation {
    addBook(addBook: AddBook!): Book!
    addUser(addUser: AddUser!): User!
    updateBook(id: String!, updateBook: UpdateBook!): Book!
    updateUser(id: String!, updateUser: UpdateUser!): User!
    deleteUser(id: String!): Boolean!
    deleteBook(id: String!): Boolean!
  }

  input AddUser {
    id: String!
    name: String!
    age: Int
    email: String!
  }

  input UserInput {
  id: String!
  name: String!
  age: Int
  email: String!
}

  input AddBook {
    id: ID!
    title: String!
    author: String!
    published: Int!
    users: [UserInput]
  }

  input UpdateBook {
    title: String
    author: String
    published: Int
    users: [UserInput]
  }

  input UpdateUser {
    age: Int
    email: String
  }

`;

export { typeDefs }