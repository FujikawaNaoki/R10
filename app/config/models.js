import Realm from 'realm'
const Faves = {
  name: 'Faves',
  primaryKey: 'id',
  properties: {
    id: 'string',
    faved_on: 'date'
  }
}
export default new Realm({ schema: [Faves] })

export const getAllFaves = realm => realm.objects('Faves').map(fave => fave.id)

export const getFave = (realm, id) => realm.objects('Faves').filtered('id == $0', id)[0]

export const isFave = (realm, id) => getFave(realm, id) ? true : false 

export const createFave = (realm, id) => realm.write(() => realm.create('Faves', { id, faved_on: new Date() }))

export const deleteFave = (realm, id) => realm.write(() => realm.delete(getFave(realm, id)))

export const toggleFave = (realm, id) => isFave(realm, id) ? deleteFave(realm, id) : createFave(realm, id)


