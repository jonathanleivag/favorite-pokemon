import axios, { AxiosInstance } from 'axios'

export const pokemonData: AxiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
})
