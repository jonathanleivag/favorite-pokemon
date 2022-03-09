import { IPokemonInfo } from '../interface'
import { pokemonData } from './axios'

export interface IGetInfoPokemon {
  id: number
  sprites: {
    // eslint-disable-next-line camelcase
    front_default: string
    // eslint-disable-next-line camelcase
    back_default: string
    // eslint-disable-next-line camelcase
    front_shiny: string
    // eslint-disable-next-line camelcase
    back_shiny: string
  }
  name: string
}

export const getInfoPokemon = async (
  param: string
): Promise<IGetInfoPokemon | null> => {
  let resp: IGetInfoPokemon | null = null
  try {
    const { data } = await pokemonData.get<IPokemonInfo>(`/pokemon/${param}`)

    resp = {
      id: data.id,
      sprites: {
        front_default: data.sprites.front_default,
        back_default: data.sprites.back_default,
        front_shiny: data.sprites.front_shiny,
        back_shiny: data.sprites.back_shiny
      },
      name: data.name
    }
  } catch (error) {
    resp = null
  }
  return resp
}
