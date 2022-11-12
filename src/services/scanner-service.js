import barcodes from "../data/td.json" assert {type: "json"}

export const scannerService = {
  getBarcodes,
  checkIfVean,
}

function getBarcodes() {
  barcodes.shift()
  return barcodes
}

function checkIfVean(barcode) {
  const isVegan = barcodes.find((res) => res === barcode)
  if (!isVegan) return false
  return true
}
