import express from 'express'
import { getAllBooks, getBookByID, getBooksByAuthor, getBooksByLanguage, getBooksByGenre, getBooksByPublisher } from './books.controller.js'


// A router object is an isolated instance of 
// middleware and routes. You can think of it as a
//  “mini-application,” capable only of performing middleware and routing 
//  functions. Every Express application has a built-in app router.

// A router behaves like middleware itself,
//  so you can use it as an argument to app.use() 
//  or as the argument to another router’s use() method.

// The top-level express object has a Router() 
// method that creates a new router object.

// Once you’ve created a router object,
//  you can add middleware and HTTP method routes 
//  (such as get, put, post, and so on) to it just like an application. 

export const booksRouter = express.Router();


// Routing refers to determining how an application
//  responds to a client request to a particular endpoint,
//   which is a URI (or path) and a specific HTTP request
//    method (GET, POST, and so on).
// app.METHOD(PATH, HANDLER)
// Where:

// app is an instance of express.
// METHOD is an HTTP request method, in lowercase.
// PATH is a path on the server.
// HANDLER is the function executed when the route is matched.

booksRouter.use(express.json())
//building the URL
// When the url is requested, the req.params will be populated accordingly
// in the form of json
// req.params = {id: ""}, etc
booksRouter.get("/books", getAllBooks);
booksRouter.get("/books/:id", getBookByID);
booksRouter.get("/books/author/:author", getBooksByAuthor);
booksRouter.get("/books/language/:language", getBooksByLanguage);
booksRouter.get("/books/genre/:genre", getBooksByGenre);
booksRouter.get("/books/publisher/:publisher", getBooksByPublisher);



// the state of the system can be defines as
// a set of information about the past and present of the system that s sufficient to determine
//its future outputs, assuming future inputs are given

//the system can be respresented as 1) a state transition function STF, takes the input
// and the previous state and translates it into the next state
// 2) output transformation function that stransforms the state to the output

//REACT has unidirectional flow (the state is transformed into UI from ui, events are generated)
//and from events you change the state (with even hadler useState)
//this means that server side rendering is possible

//with useState, react enables functional components to have state
//new state is completely independent from old state

//useState() accepts an initial state and returns two values: Current state
// and function that updates the state