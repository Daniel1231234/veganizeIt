import nonVegan from "./nonVegan.json" assert { type: "json" }
import vegan from "./canBeVegan.json" assert { type: "json" }

export const checkVeganService = {
  checkVegan,
  checkIngredients,
}

function checkVegan(ing) {
  if (ing.length === 0) return null
  const ingToCheck = ing.trim().toLowerCase()
  const nonVeganList = nonVegan.includes(ingToCheck)
  if (nonVeganList === true) return false
  const ingredientWords = ingToCheck.split(" ")
  const isIngVegan = ingredientWords.every((word) => _isVeganIngredient(word))
  if (ingredientWords.length > 1 && isIngVegan) return true
  return true
}

function checkIngredients(ingredientsToCheck) {
  const filteredElements = {
    nonvegan: _containsNonVeganIngredients(ingredientsToCheck),
    vegan: _containsFlaggedIngredients(ingredientsToCheck),
  }
  console.log(filteredElements)
  return filteredElements
}

function _containsNonVeganIngredients(ingredientsToCheck) {
  return ingredientsToCheck.filter(
    (ingredient) => !_isVeganIngredient(ingredient)
  )
}

function _containsFlaggedIngredients(ingredientsToCheck) {
  return ingredientsToCheck.filter((ingredient) =>
    _isFlaggedIngredient(ingredient)
  )
}

function _isFlaggedIngredient(ingredientToCheck) {
  if (ingredientToCheck.length === 0) return true
  const formattedIngredientToCheck = ingredientToCheck.trim().toLowerCase()

  return vegan.includes(formattedIngredientToCheck)
}

function _isVeganIngredient(ingredientToCheck) {
  if (ingredientToCheck.length === 0) return true
  const ingsToCheck = ingredientToCheck.trim().toLowerCase()

  const nonVeganListIncludesIngredient = nonVegan.includes(ingsToCheck)
  if (nonVeganListIncludesIngredient === true) return false

  const ingredientWords = ingsToCheck.split(" ")
  if (
    ingredientWords.length > 1 &&
    ingredientWords.every((word) => !_isVeganIngredient(word))
  )
    return false

  return true
}
