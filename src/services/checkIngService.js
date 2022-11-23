import {httpService} from "./http.service"

export const checkIngSerivce = {
  checkVegan,
  getAllIngs,
}

const BASE_URL = "ing"

async function getAllIngs() {
  return await httpService.get(BASE_URL)
}

async function checkVegan(ing) {
  if (!ing || ing.length === 0) return null
  const res = await httpService.get(
    `${BASE_URL}/${typeof ing === "string" ? ing : ing.name}`
  )

  return res[0]
}
