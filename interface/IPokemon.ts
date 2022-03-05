export interface IResultPokemon {
  name: string
  url: string
  id: number
  image: string
}

export interface IPokemon {
  count: number
  next: string
  previous: null
  results: IResultPokemon[]
}
