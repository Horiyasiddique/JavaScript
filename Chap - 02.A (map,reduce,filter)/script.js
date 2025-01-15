// +++++++++++++++++++ filter ++++++++++++++++++++++++++++
const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const newNumbers = numbs.filter((elem) => {
  //scope likhne k  baad return likhna necessary hy
  return elem > 5;
});

console.log(newNumbers);

let books = [
  {
    name: "Jannat k Patty",
    genre: "fiction",
    author: "Nimra Ahmed",
  },
  {
    name: "Atomic Habits",
    genre: "self help",
    author: "James Clear",
  },
  {
    name: "The power Of Subconcious mind",
    genre: "self help",
    author: "Joseph Murphy",
  },
  {
    name: "Pakistan Social Studies",
    genre: "fiction",
    author: "psycho patient",
  },
  {
    name: "48 Laws of Power",
    genre: "self help",
    author: "Robert Greene",
  },
];

const userBooks = books.filter((bk) => {
  return bk.genre === "self help" || bk.author === "Nimra Ahmed";
});

console.log(userBooks);

// +++++++++++++++++++++++++ map ++++++++++++++++++++++++++++++
const addNumbers = numbs.map((num) => {
  return num + 10;
});
console.log(addNumbers);

// +++++++++++++++++++++++ reduce ++++++++++++++++++++
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let initialValue = 0;
const sumOfNumbers = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumOfNumbers);

// logic of e-commerce website add o cart checkout functionality
let cartItems = [
  {
    courseName: "Frontend Domination",
    price: 15999,
  },
  {
    courseName: "Backend COurse",
    price: 89889,
  },
  {
    courseName: "Unlock the power of AI",
    price: 21599,
  },
  {
    courseName: "Data Scientist",
    price: 987699,
  },
];

const checkOut = cartItems.reduce((acc, curr) => acc+ curr.price ,0);
console.log(checkOut);
