// This file is used to create a mock database for the sample API.
interface User {
  id: string,
  name: string,
  age: number,
  email: string,
  books: () => Book[]
}
  
interface Book {
  id: number,
  title: string,
  author: string,
  published: number,
  users: User[]
}

interface Library {
  id: number,
  name: string,
  description: string,
  date: string,
  Owner: string,
  readers: {
    numberOfReaders: NumberOfReaders,
    nameOfReaders: NameOfReaders
  }
}

type NumberOfReaders = () => number
type NameOfReaders = () => string[] | string

const numberOfReaders = () => {
  return users.length
}

const nameOfReaders = () => {
  if (users.length > 0) {
    return users.map(user => user.name)
  } else {
    return "No readers"
  }
}

const booksByUser = (userName?: string, userID?: string) => {
  return books.filter((book) => {
    if (book.users.some(user => user.name === userName)) {
      return book;
    } else if (book.users.some(user => user.id === userID)) {
      return book;
    }
  });
}

export const getUser = (userID?: string[], userName?: string[]) => {
  return users.filter((user) => {
    if (userID?.includes(user.id)) {
      return user;
    } else if (userName?.includes(user.name)) {
      return user;
    }
  })
}

const library: Library[] = [
  {
    id: 1,
    name: "Graph Library",
    description: "A library for example",
    date: "2024-01-01",
    Owner: "James Books",
    readers: {
      numberOfReaders: () => numberOfReaders(),
      nameOfReaders: () => nameOfReaders()
    },
  }
]

const users: User[] = [
    {
      id: "1",
      name: "John",
      age: 30,
      email: "johndoe@gmail.com",
      books: () => booksByUser('John')
    },
    {
      id: "2",
      name: "Jane",
      age: 25,
      email: "janedoe@gmail.com",
      books: () => booksByUser('Jane')
    }
  ];
  
  const books: Book[] = [
    {
      id: 1,
      title: "The Awakening",
      author: "Kate Chopin",
      published: 1899,
      users: getUser(['1','2']),
    },
    {
      id: 2,
      title: "City of Glass",
      author: "Paul Auster",
      published: 1985,
      users: getUser(['2']),
    },
  ];
  
  export { library, users, books, booksByUser, numberOfReaders }