import { httpService } from "./http.service"

export const scanService = {
  getBarcodes,
}
async function getBarcodes() {
  const res = await httpService.get("product")
  console.log(res)
}
