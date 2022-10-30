import { storageService } from "./async-storage-service.js"

import axios from "axios"

import recipes from "../data/recipe.json" assert { type: "json" }

const RECIPE_KEY = "recipe_db"

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
    // console.log(loadedRecipes)
    if (!loadedRecipes || loadedRecipes.length === 0) {
      gRecipes = await _getRecipes()
      localStorage.setItem(RECIPE_KEY, JSON.stringify(gRecipes))
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
    url: "https://tasty.p.rapidapi.com/recipes/list",
    params: { from: "0", size: "100", tags: "vegetarian" },
    headers: {
      "X-RapidAPI-Key": "2d1c68e433msh5de6b695d7183d4p1ae6a2jsnb81cb1001112",
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  }
  try {
    const res = await axios.request(options)
    // console.log(res.data.results)
    return res.data.results
  } catch (err) {
    console.log(err)
  }
}
