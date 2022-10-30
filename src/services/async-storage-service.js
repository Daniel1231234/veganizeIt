export const storageService = {
  query,
  get,
  post,
  put,
  remove,
}

async function query(entityType) {
  try {
    const entities = await JSON.parse(localStorage.getItem(entityType))
    if (!entities || entities.length === 0) _save(entityType, entities)
    return entities
  } catch (err) {
    console.log(err)
  }
}

async function get(entityType, entityId) {
  try {
    const res = await query(entityType)
    return res.find((r) => r.id === entityId)
  } catch (err) {
    console.log(err)
  }
}

async function post(entityType, newEntity) {
  const loadedEntities = await query(entityType)
  loadedEntities.push(newEntity)
  _save(entityType, loadedEntities)
  return newEntity
}

async function put(entityType, updatedEntity) {
  try {
    const loadedEntities = await query(entityType)
    const idx = loadedEntities.findIndex(
      (entity) => entity.id === updatedEntity.id
    )
    loadedEntities.splice(idx, 1, updatedEntity)
    _save(entityType, loadedEntities)
    return updatedEntity
  } catch (err) {
    console.log(err)
  }
}

async function remove(entityType, entityId) {
  try {
    const loadedEntities = await query(entityType)
    const idx = loadedEntities.findIndex((entity) => entity.id === entityId)
    loadedEntities.splice(idx, 1)
    _save(entityType, loadedEntities)
  } catch (err) {
    console.log(err)
  }
}

function _save(entityType, entities) {
  localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
  let str = ""
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  for (let i = 0; i < length; i++) {
    str += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return str
}
