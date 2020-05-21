import { Contestant } from 'src/model/core/Contestant/Contestant.entity'

export type BuildContestantWithName = {
  name: string
}
export type BuildContestantWithFirstLastName = {
  firstName: string,
  lastName: string
}

export function buildContestant(props: BuildContestantWithName | BuildContestantWithFirstLastName): Contestant

export function buildContestant (props): Contestant {
  if (props.name) {
    // Build contestant with name split
    const splitName = props.name.split(' ')
    if (!splitName || splitName.length !== 2) {
      throw new Error('Error converting name into first/last name')
    }
    return buildContestantHelper(splitName[0], splitName[1])
  } else {
    return buildContestantHelper(props.firstName, props.lastName)
  }
}

function buildContestantHelper (firstName: string, lastName: string): Contestant {
  const contestant = new Contestant()
  contestant.firstName = firstName
  contestant.lastName = lastName
  return contestant
}
