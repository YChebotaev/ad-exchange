import mongodb from 'mongodb'

export const connection = mongodb.connect('mongodb://localhost:27017')
export const db = pickDatabase(connection, 'ad_exchange')
export const adsCollection = pickCollection(db, 'ads')

export async function pickDatabase(connection, dbName) {
  return (await connection).db(dbName)
}

export async function pickCollection(db, collectionName) {
  return (await db).collection(collectionName)
}
