import veganWinesEN from "../data/wine-data-set.json" assert {type: "json"}
import veganWinesHE from "../data/veganWines.json" assert {type: "json"}

export const checkWineService = {
  checkWinerie,
}

function checkIfValIsSplited(val) {
  if (val.charAt(" ")) {
    const allWines = getWineries()
    const wineryNames = allWines.map((wine) => {
      return wine.name
    })
    let splitedVals = val.split(" ")

    // const isWineSubset = isSubset(splitedVals, wineryNames)
    // console.log(isWineSubset)
  }
}

function checkWinerie(val) {
  if (!val || val.length === 0) return null
  // checkIfValIsSplited(val)
  const isPerfectMatch = checkIfMatchVals(val)
  if (isPerfectMatch) return isPerfectMatch
  const allWines = getWineries()
  const wineryToCheck = val.trim().toLowerCase()

  const filteredWineries = allWines.filter((winery) => {
    return winery.name.split(" ").indexOf(wineryToCheck) > -1
  })
  console.log(filteredWineries)
  return filteredWineries
}

export function getWineries() {
  const enWineries = veganWinesEN.map((i) => {
    return {
      name: i.winery.toLowerCase(),
      country: i.country?.toLowerCase(),
      isVegan: true,
      id: _makeId(),
    }
  })
  const heWineries = veganWinesHE.map((wine) => {
    return {
      name: wine,
      country: "israel",
      isVegan: true,
      id: _makeId(),
    }
  })
  const allWines = enWineries.concat(heWineries)
  return allWines
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

function checkIfMatchVals(val) {
  const totalWines = getWineries()
  const isMatch = totalWines.filter(
    (wine) => wine.name === val.trim() && wine.name.length === val.trim().length
  )
  if (isMatch.length === 1) return isMatch
}

