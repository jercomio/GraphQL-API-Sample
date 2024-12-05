// Types for Resolvers Params
type Book = {
  id: number,
  title: string,
  author: string,
  published: number,
  users: User[]
}

type ID = number

type UserName = string

type UserEmail = string

type UserID = string

type User = {
  id: string,
  name: string,
  age: number,
  email: string,
  books: () => Book[]
}

type UserParams = {
  userName?: UserName
  userEmail?: UserEmail
  userID?: UserID
}

type AddUserParams = {
  id: string
  name: string
  age: number
  email: string
}

type AddBookParams = {
  id: number
  title: string
  author: string
  published: number
  users: [User]
}

type UpdateBookParams = {
  title: string
  author: string
  published: number
  users: [User]
}

type UpdateUserParams = {
  age: number
  email: string
}

export {
    ID,
    UserID,
    UserName,
    UserEmail,
    UserParams,
    AddUserParams,
    AddBookParams,
    UpdateBookParams,
    UpdateUserParams
}