import { totalCountries } from '../data/countries';
import wines from '../data/wine.json'

export const checkWineService = {
  getCountries,
  getWineriesName
};


function getCountries() {
  return totalCountries;
}

function getWineriesName() {
  const result = [...new Set(wines.map((a) => JSON.stringify(a)))].map((a) =>
  JSON.parse(a)
)
return result.map((wine) => {
  return {
    id:_makeId(),
    name:wine.name
  }
})
return result;
}

function _makeId(length = 5) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}
