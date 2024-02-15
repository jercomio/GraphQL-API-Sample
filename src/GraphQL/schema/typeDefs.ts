const typeDefs = `#graphql
  
  type Book {
    title: String!
    author: String!
    published: Int!
    users: [String!]!
  }

  type User {
    id: Int!
    name: String!
    age: Int!,
    email: String!,
    books: [Book!]!
  }

  type Query {
    books(userName: String!): [Book!]!
    users(userName: String!): [User!]!
  }
`;

export { typeDefs }