// Types for Resolvers Params
type ID = Number

type UserName = String

type UserEmail = String

type UserParams = {
  userName?: UserName
  userEmail?: UserEmail
}

type AddUserParams = {
  id: Number
  name: String
  age: Number
  email: String
}

type AddBookParams = {
  id: Number
  title: String
  author: String
  published: Number
  users: [String]
}

type UpdateBookParams = {
  title: String
  author: String
  published: Number
  users: [String]
}

type UpdateUserParams = {
  age: Number
  email: String
}

export {
    ID,
    UserName,
    UserEmail,
    UserParams,
    AddUserParams,
    AddBookParams,
    UpdateBookParams,
    UpdateUserParams
}