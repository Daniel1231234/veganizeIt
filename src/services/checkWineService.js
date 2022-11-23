import {httpService} from "./http.service"

export const checkWineService = {
  checkWinerie,
  getWineries,
}

const BASE_URL = "wine"

async function getWineries() {
  return await httpService.get(BASE_URL)
}

async function checkWinerie(val) {
  if (!val || val.length === 0) return null
  const res = await httpService.get(
    `${BASE_URL}/${typeof val === "string" ? val : val.name}`
  )
  return res
}
