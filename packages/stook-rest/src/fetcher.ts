import { Fetcher, FetcherItem } from './types'

export class fetcher {
  private static store: Fetcher = {}

  static set(name: string, value: FetcherItem) {
    fetcher.store[name] = value
  }

  static get(name: string) {
    if (!fetcher.store[name]) {
      fetcher.store[name] = {
        refetch() {
          const error = new Error(`[stook-rest]: In fetcher, can not get ${name}`)
          console.warn(error)
        },
      } as FetcherItem
    }
    return fetcher.store[name]
  }
}