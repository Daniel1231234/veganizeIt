import axios from "axios"
import { storageService } from "./async-storage-service.js"
const SEARCH_KEY = "search_db"
var gSearch = []

export const searchService = {
  searchQuery,
  searchRecipe,
}

function searchQuery(val) {
  const titles = gSearch.map((t) => t.title.toLowerCase())
  const res = titles.find((t) => t.includes(val.trim()))
  const result = gSearch.find((r) => r.title.toLowerCase() === res)
  if (!res || res.length === 0) return null
  return result
}

async function searchRecipe() {
  try {
    const options = {
      method: "GET",
      url: "https://api.spoonacular.com/recipes/complexSearch?apiKey=9ca54758c3e8483eace10247917a7327",
      params: { diet: "vegan", number: 200 },

      headers: {
        "Content-Type": "application/json",
      },
    }
    const loadedSearchRec = await storageService.query(SEARCH_KEY)

    if (!loadedSearchRec || loadedSearchRec.length === 0) {
      const res = await axios.request(options)
      // console.log(res.data.results)
      gSearch = res.data.results
      console.log(gSearch)
      //   storageService.put(SEARCH_KEY, gSearch)
      localStorage.setItem(SEARCH_KEY, JSON.stringify(gSearch))
      return gSearch
    }
    console.log("loaded from storage yay")
    return loadedSearchRec
  } catch (err) {
    console.log(err)
  }
}
