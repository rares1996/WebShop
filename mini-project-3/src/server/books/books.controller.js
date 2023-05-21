import * as bookModel from "./books.model.js";

export async function getAllBooks(req, res) {
  try {
    let allBooks = await bookModel.getAll();
    res.json(allBooks);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function getBookByID(req, res) {
  try {
    let id = parseInt(req.params.id)
    let book = await bookModel.getByID(id);
    res.json(book);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function getBooksByAuthor(req, res) {
  try {
    let author = req.params.author
    let books = await bookModel.getByAuthor(author);
    res.json(books);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function getBooksByGenre(req, res) {
  try {
    let genre = req.params.genre
    let books = await bookModel.getByGenre(genre);
    res.json(books);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function getBooksByLanguage(req, res) {
  try {
    let language = req.params.language
    let books = await bookModel.getByLanguage(language);
    res.json(books);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function getBooksByPublisher(req, res) {
  try {
    let publisher = req.params.publisher
    let books = await bookModel.getByPublisher(publisher);
    res.json(books);
  } catch (error) {
    res.status(400).send(error.message);
  }
}