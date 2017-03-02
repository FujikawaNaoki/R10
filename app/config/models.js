import Realm from 'realm'
const Fave = {
  name: 'Fave',
  primaryKey: 'id',
  properties: {
    id: 'string',
    faved_on: 'date'
  }
}
export default new Realm({ schema: [Fave] })

export const allFaves = realm => realm.objects('Fave').map(fave => fave.id)

export const createFave = (realm, id) => {
  realm.write(() => realm.create('Fave', { id, faved_on: new Date() }))
}

export const removeFave = (realm, id) => {
  const FaveToRemove = realm.filtered('id == $0', id)
  realm.write(() => realm.delete(FaveToRemove))
}
