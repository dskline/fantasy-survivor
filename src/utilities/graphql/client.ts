import { Client, QueryFetcher } from 'gqless'

import { query_root as Query, schema } from 'src/utilities/graphql/generated'

const endpoint = 'http://localhost:8080/v1/graphql'

const fetchQuery: QueryFetcher = async (query, variables) => {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query,
      variables
    }),
    mode: 'cors'
  })

  if (!response.ok) {
    throw new Error(`Network error, received status code ${response.status}`)
  }

  return await response.json()
}

export const client = new Client<Query>(schema.query_root, fetchQuery)

export const query = client.query
