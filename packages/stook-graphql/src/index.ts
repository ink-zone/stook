import { Client } from './Client'

const client = new Client({ endpoint: '/graphql' })
const { query, useQuery, useMutation, useSubscription, applyMiddleware, config } = client

export * from './types'
export * from './fetcher'
export { Client, client, query, useQuery, useMutation, useSubscription, applyMiddleware, config }

export * from './types'
export * from './fetcher'
