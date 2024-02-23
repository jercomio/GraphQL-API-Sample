// Types for Resolvers Params
type ID = number

type UserName = string

type UserEmail = string

type UserParams = {
  userName?: UserName
  userEmail?: UserEmail
}

type AddUserParams = {
  id: number
  name: string
  age: number
  email: string
}

type AddBookParams = {
  id: number
  title: string
  author: string
  published: number
  users: [string]
}

type UpdateBookParams = {
  title: string
  author: string
  published: number
  users: [string]
}

type UpdateUserParams = {
  age: number
  email: string
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