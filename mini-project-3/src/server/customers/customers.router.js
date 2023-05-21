import express from 'express'
import { getAllCustomers, postCustomer, getCustomer, putCustomer, deleteCustomer, getCustomerBasket } from './customers.controller.js'

export const customersRouter = express.Router();

customersRouter.use(express.json())

customersRouter.get("/customers", getAllCustomers);
customersRouter.post("/customers", postCustomer);
customersRouter.get("/customers/:id", getCustomer);
customersRouter.put("/customers/:id", putCustomer);
customersRouter.delete("/customers/:id", deleteCustomer);
customersRouter.get("/customers/:id/basket", getCustomerBasket);