import { Key } from './types'
import { Storage } from './Storage'

export function mutate<S>(key: Key, value?: S) {
  const store = Storage.get(key)

  if (store && store.setState) {
    store.setState(key, value)
  } else {
    // init state, if no store exist
    Storage.set(key, { state: value } as any)
  }
}
