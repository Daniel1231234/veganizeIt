import { storageService } from "./async-storage-service.js"

import axios from "axios"

import recipes from "../data/recipe.json" assert { type: "json" }

const RECIPE_KEY = "recipe_db"
const APP_ID = "820e3f93"
const APP_KEY = "bca0340252a394bfe8fe86cc77f43615"

var gRecipes = []

export const recipeService = {
  query,
  getById,
  save,
  remove,
}

async function query() {
  try {
    const loadedRecipes = await storageService.query(RECIPE_KEY)
    console.log(loadedRecipes)
    if (!loadedRecipes || loadedRecipes.length === 0) {
      gRecipes = await _getRecipes()
      localStorage.setItem(RECIPE_KEY, JSON.stringify(gRecipes))
      console.log(gRecipes)
      return gRecipes
    }
    return loadedRecipes
  } catch (err) {
    console.log(err)
  }
}

async function getById(id) {
  try {
    return await storageService.get(RECIPE_KEY, id)
  } catch (err) {
    console.log(err)
  }
}

async function remove(id) {
  try {
    return await storageService.remove(RECIPE_KEY, id)
  } catch (err) {
    console.log(err)
  }
}

async function save(recipe) {
  try {
    if (recipe.id) return await storageService.put(RECIPE_KEY, recipe)
    else return await storageService.post(RECIPE_KEY, recipe)
  } catch (err) {
    console.log(err)
  }
}

async function _getRecipes() {
  const options = {
    method: "GET",
    url: "https://api.edamam.com/api/recipes/v2?type=public&app_id=820e3f93&app_key=bca0340252a394bfe8fe86cc77f43615&health=vegan&imageSize=REGULAR",
  }
  try {
    const res = await axios.request(options)
    var loadedRecipes = res.data.hits.map((rcp) => rcp.recipe)
    return loadedRecipes
  } catch (err) {
    console.log(err)
  }
}




