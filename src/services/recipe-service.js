import { storageService } from "./async-storage-service.js"

import recipes from "./recipe.json" assert { type: "json" }

const RECIPE_KEY = "recipe_db"

export const recipeService = {
  query,
  getById,
  save,
  remove,
}

function query() {
  return recipes
}

function getById(id) {
  return storageService.get(RECIPE_KEY, id)
}

function remove(id) {
  return storageService.remove(RECIPE_KEY, id)
}

function save(recipe) {
  if (recipe.id) return storageService.put(RECIPE_KEY, recipe)
  else return storageService.post(RECIPE_KEY, recipe)
}
