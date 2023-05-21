import express from 'express'
import { getCategories } from './categories.controller.js'

export const categoriesRouter = express.Router();

categoriesRouter.use(express.json())

categoriesRouter.get("/categories", getCategories);
