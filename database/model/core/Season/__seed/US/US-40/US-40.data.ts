import { SeasonSeedFileData } from 'src/model/core/Season/__seed/Season.seed'
import { CountryCode } from 'src/model/core/Season/CountryCode.enum'

export const data: SeasonSeedFileData = {
  season: {
    countryCode: CountryCode.UNITED_STATES,
    number: 40,
    name: 'Winners at War',
  },
  contestants: [
    {
      name: 'Natalie Anderson',
    },
    {
      name: 'Tyson Apostol',
    },
    {
      name: 'Danni Boatwright',
    },
    {
      name: 'Sophie Clarke',
    },
    {
      name: 'Jeremy Collins',
    },
    {
      name: 'Sandra Diaz-Twine',
    },
    {
      name: 'Ben Driebergen',
    },
    {
      name: 'Michele Fitzgerald',
    },
    {
      name: 'Wendell Holland',
    },
    {
      name: 'Adam Klein',
    },
    {
      name: 'Yul Kwon',
    },
    {
      name: 'Sarah Lacina',
    },
    {
      name: 'Amber Mariano',
    },
    {
      name: 'Rob Mariano',
    },
    {
      name: 'Parvati Shallow',
    },
    {
      name: 'Kim Spradlin-Wolfe',
    },
    {
      name: 'Denise Stapley',
    },
    {
      name: 'Tony Vlachos',
    },
    {
      name: 'Nick Wilson',
    },
    {
      name: 'Ethan Zohn',
    },
  ]
}
