// This file is used to create a mock database for the sample API.
interface User {
  id: number,
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
  users: string[]
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

const booksByUser = (userName: string) => {
  return books.filter((book) => {
    if (book.users.includes(userName)) {
      return book;
    }
  });
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
      id: 1,
      name: "John",
      age: 30,
      email: "johndoe@gmail.com",
      books: () => booksByUser('John')
    },
    {
      id: 2,
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
      users: ['John', 'Jane'],
    },
    {
      id: 2,
      title: "City of Glass",
      author: "Paul Auster",
      published: 1985,
      users: ['Jane'],
    },
  ];
  
  export { library, users, books, booksByUser, numberOfReaders }