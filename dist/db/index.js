const users = [
    {
        id: 1,
        name: "John",
        age: 30,
        email: "johndoe@gmail.com",
        books: () => books.filter((book) => book.users.includes('John'))
    },
    {
        id: 2,
        name: "Jane",
        age: 25,
        email: "janedoe@gmail.com",
        books: () => books.filter((book) => book.users.includes('Jane'))
    },
];
const books = [
    {
        title: "The Awakening",
        author: "Kate Chopin",
        published: 1899,
        users: ['John', 'Jane'],
    },
    {
        title: "City of Glass",
        author: "Paul Auster",
        published: 1985,
        users: ['Jane'],
    },
];
export { users, books };
