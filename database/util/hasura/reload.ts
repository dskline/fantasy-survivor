/* eslint-disable no-console */
import fetch from 'isomorphic-unfetch'

import config from 'src/config'

/**
 * This fetch was generated from Chrome by observing the XHR request when
 * pressing "Reload metadata" in Hasura console
 */
async function main (): Promise<void> {
  await fetch(`${config.get('graphql.endpoint')}/v1/query`, {
    headers: {
      accept: '*/*',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/json',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin'
    },
    referrerPolicy: 'no-referrer-when-downgrade',
    body: '{"type":"bulk","args":[{"type":"reload_metadata","args":{"reload_remote_schemas":false}},{"type":"get_inconsistent_metadata","args":{}}]}',
    method: 'POST',
    mode: 'cors'
  })
}
main()
  .then(() => console.log('Hasura reload completed'))
  .catch((e) => console.error(e))
