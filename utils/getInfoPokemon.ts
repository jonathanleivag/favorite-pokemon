import { IPokemonInfo } from '../interface'
import { pokemonData } from './axios'

export const getInfoPokemon = async (param: string) => {
  const { data } = await pokemonData.get<IPokemonInfo>(`/pokemon/${param}`)

  return {
    id: data.id,
    sprites: {
      front_default: data.sprites.front_default,
      back_default: data.sprites.back_default,
      front_shiny: data.sprites.front_shiny,
      back_shiny: data.sprites.back_shiny
    },
    name: data.name
  }
}
