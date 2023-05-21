import * as fs from "fs/promises";
const BOOKS_FILE = "./books/books.json";

// get all books
export async function getAll() {
  try {
    let booksTxt = await fs.readFile(BOOKS_FILE);
    let books = JSON.parse(booksTxt);
    return books;
  } catch (err) {
    if (err.code === "ENOENT") {
      await save([]); 
      return []; 
    } 
    else throw err;
  }
}

// test function for book author
function findBookByID(bookArray, value) {
  return bookArray.findIndex(
    //check if the id of the element  is = with the value, if so,
    //return the element id, else -1
    (currBook) => currBook.id === value
  );
}

// get book by ID
export async function getByID(bookID) {
  let bookArray = await getAll();
  let index = findBookByID(bookArray, bookID);
  if (index === -1)
    throw new Error(`Books with ID:${bookID} doesn't exist`);
  else return bookArray[index];
}

// test function for book genre
//creates new array with all the elements that pass the condition
function findBookByGenre(bookArray, value) {
  return bookArray.filter(
    (currBook) => currBook.genre === value
  );
}

// get book(s) by genre
export async function getByGenre(genre) {
  let bookArray = await getAll();
  let filteredArray = findBookByGenre(bookArray, genre);
  if (filteredArray.length === 0)
    throw new Error(`Books with genre: ${genre} doesn't exist`);
  else return filteredArray;
}

// test function for book language
function findBookByLanguage(bookArray, value) {
  return bookArray.filter(
    (currBook) => currBook.language === value
  );
}

// get book(s) by language
export async function getByLanguage(language) {
  let bookArray = await getAll();
  let filteredArray = findBookByLanguage(bookArray, language);
  if (filteredArray.length === 0)
    throw new Error(`Books with language: ${language} doesn't exist`);
  else return filteredArray;
}


// test function for book author
function findByAuthor(bookArray, value) {
  return bookArray.filter(
    (currBook) => currBook.author === value
  );
}

// get book(s) by author
export async function getByAuthor(author) {
  let bookArray = await getAll();
  let filteredArray = findByAuthor(bookArray, author);
  console.log(filteredArray)
  if (filteredArray.length === 0)
    throw new Error(`Books with author: ${author} doesn't exist`);
  else return filteredArray;
}

// test function for book publisher
function findByPublisher(bookArray, value) {
  return bookArray.filter(
    (currBook) => currBook.publisher === value
  );
}

// get book(s) by publisher
export async function getByPublisher(publisher) {
  let bookArray = await getAll();
  let filteredArray = findByPublisher(bookArray, publisher);
  console.log(filteredArray)
  if (filteredArray.length === 0)
    throw new Error(`Books with publisher: ${publisher} doesn't exist`);
  else return filteredArray;
}


// get book(s) by customer basket
export async function getBasket(basket) {
  let bookArray = await getAll();
  let basketContent = [];
  basket.forEach(bookID => {
    bookArray.forEach(book => {
      if (bookID === book.id) {
        basketContent.push(book)
        return
      }
    })
  })
  console.log(basketContent)
  if (basketContent.length === 0)
    throw new Error(`Books with id(s): ${basket} doesn't exist`);
  else return basketContent;
}