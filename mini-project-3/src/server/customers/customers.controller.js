import * as customerModel from "./customers.model.js";
import * as bookModel from "../books/books.model.js";

export async function getAllCustomers(req, res) {
  try {
    let allCustomers = await customerModel.getAll();
    res.json(allCustomers);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function postCustomer(req, res) {
  try {
    let newCustomer = req.body;
    await customerModel.add(newCustomer);
    res.end()
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function getCustomer(req, res) {
  try {
    let id = parseInt(req.params.id)
    let customer = await customerModel.getByID(id);
    res.json(customer);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function putCustomer(req, res) {
  try {
    let id = parseInt(req.params.id)
    let customer = req.body;
    console.log('customer.controller: ', customer.basket)
    await customerModel.update(id, customer);
    res.end();
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function deleteCustomer(req, res) {
  try {
    let id = parseInt(req.params.id)
    await customerModel.remove(id);
    res.end();
  } catch (error) {
    // res.statusMessage=
    res.status(400).send(error.message);
  }
}

export async function getCustomerBasket(req, res) {
  try {
    let id = parseInt(req.params.id)
    console.log('customer id:', id)
    let basket = await customerModel.getBasket(id);
    console.log('getCustomerBasket', basket)
    let basketContent = await bookModel.getBasket(basket)
    res.json(basketContent);
  } catch (error) {
    res.status(400).send(error.message);
  }
}