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
    users: [String!]
  }

  type User {
    id: ID!
    name: String!
    age: Int,
    email: String!,
    books: [Book!]
  }

  # Query and Mutation types
  type Query {
    library: [Library!]!
    books: [Book!]!
    book(userName: String): [Book!]!
    users: [User!]!
    user(userName: String, userEmail: String): [User!]!
  }

  type Mutation {
    addBook(addBook: AddBook!): Book!
    addUser(addUser: AddUser!): User!
    updateBook(id: ID!, updateBook: UpdateBook!): Book!
    updateUser(id: ID!, updateUser: UpdateUser!): User!
    deleteUser(id: ID!): Boolean!
    deleteBook(id: ID!): Boolean!
  }

  input AddUser {
    id: ID!
    name: String!
    age: Int
    email: String!
  }

  input AddBook {
    id: ID!
    title: String!
    author: String!
    published: Int!
    users: [String!]
  }

  input UpdateBook {
    title: String
    author: String
    published: Int
    users: [String!]
  }

  input UpdateUser {
    age: Int
    email: String
  }

`;

export { typeDefs }