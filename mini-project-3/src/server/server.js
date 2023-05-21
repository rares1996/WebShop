// const express = require ('express')
import express from "express";
// The app object conventionally denotes the Express 
// application. Create it by calling the top-level 
// express() function exported by the Express module:

const app = express();
const PORT = process.env.PORT || 5000 || 3000;

// const lampsRouter = require("../backend/routes/lamps.router.js");
// const categoryRouter = require("../backend/routes/category.router.js");
// const customerRouter = require("../backend/routes/customers.router.js");

import { booksRouter } from "./books/books.router.js"
import { categoriesRouter } from "./categories/categories.router.js";
import { customersRouter } from "./customers/customers.router.js";

// all paths handled in routers

app.use(express.json());
app.use(express.urlencoded({ extended: false}));


// Mounts the specified middleware function or functions at 
// the specified path: the middleware function is executed when the
//  base of the requested path matches path.

// app.use([path,] callback [, callback...])
// The path for which the middleware function is invoked;
// Callback functions; can be:
// A middleware function.
// A series of middleware functions (separated by commas).
// An array of middleware functions.
// A combination of all of the above.

app.use("/", booksRouter);
app.use("/books", booksRouter);
app.use("/", categoriesRouter);
app.use("/categories", categoriesRouter);
app.use("/", customersRouter);
app.use("/users", customersRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// testing apis
// app.get("/api", (req, res) => {
//   res.json([{"lamps" : ["userOne", "userTwo"]}, {"lamps" : ["userOne", "userTwo"]}])
// })


//invalid address


