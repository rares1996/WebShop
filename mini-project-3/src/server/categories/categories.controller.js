import * as categoryModel from "./categories.model.js";

export async function getCategories(req, res) {
  try {
    console.log('controller: getting categories ... ')
    let categories = await categoryModel.getCategories();
    console.log(categories)
    res.json(categories);
  } catch (error) {
    res.status(400).send(error.message);
  }
}
