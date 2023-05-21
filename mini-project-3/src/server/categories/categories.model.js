import * as fs from "fs/promises";
const CATEGORIES_FILE = "./categories/categories.json";

// let globalCategories = null

export async function getCategories() {
  try {
    console.log('model, getCategories: getting categories ... ')
    let categoriesTxt = await fs.readFile(CATEGORIES_FILE);
    let categories = JSON.parse(categoriesTxt);
    return categories;
  } catch (err) {
    if (err.code === "ENOENT") {
      await save([]); 
      return []; 
    } 
    else throw err;
  }
}