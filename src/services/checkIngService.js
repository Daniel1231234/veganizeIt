import nonVegan from "../data/nonVegan.json" assert {type: "json"}
import vegan from "../data/canBeVegan.json" assert {type: "json"}
import {getWineries} from "./checkWineService"

export const checkIngSerivce = {
  checkVegan,
  checkFixedVal,
}

let gNonVeganIngs = _setInitialDataNonVegan()
let gVeganIngs = _setInitialDataVegan()

function checkVegan(ing) {
  const ingToCheck = ing.trim().toLowerCase()
  const isIngVegan = _checkIfVegan(ingToCheck)
  console.log(isIngVegan)
  return isIngVegan
}

function checkFixedVal(val) {
  const fixedVal = val.trim().toLowerCase()
  let mixedIngs = gVeganIngs.concat(gNonVeganIngs)
  const allWines = getWineries()
  const totalItems = mixedIngs.concat(allWines)
  const res = totalItems.find((item) => item.name === fixedVal)
  return res
}

function _checkIfVegan(enteredIngName) {
  const veganIngs = gVeganIngs.filter(
    (i) => i.name.split(" ").indexOf(enteredIngName) > -1
  )
  const nonVeganIngs = gNonVeganIngs.filter(
    (i) => i.name.split(" ").indexOf(enteredIngName) > -1
  )
  console.log(veganIngs, nonVeganIngs)

  if (veganIngs.length > 0 && nonVeganIngs.length > 0) {
    let mixed = veganIngs.concat(nonVeganIngs)
    return mixed
  }

  if (veganIngs.length > 0 && nonVeganIngs.length === 0) return veganIngs
  if (veganIngs.length === 0 && nonVeganIngs.length > 0) return nonVeganIngs
}

function _setInitialDataNonVegan() {
  let nonVeganIngrs = []
  for (let key in nonVegan) {
    let item = {
      name: nonVegan[key],
      isVegan: false,
      id: _makeId(),
    }
    nonVeganIngrs.push(item)
  }
  return nonVeganIngrs
}

function _setInitialDataVegan() {
  let veganIngrs = []
  for (let key in vegan) {
    let item = {
      name: vegan[key],
      isVegan: true,
      id: _makeId(),
    }
    veganIngrs.push(item)
  }
  return veganIngrs
}

function _makeId(length = 5) {
  var text = ""
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return text
}
