import { GetStaticProps, NextPage } from 'next'
import { InitialLayout } from '../layouts'
import { pokemonData } from '../utils'
import { IPokemon, IResultPokemon } from '../interface'
import { CardHomePageComponent } from '../components'

export interface IPropsHomePage {
  pokemons: IResultPokemon[]
}

const HomePage: NextPage<IPropsHomePage> = ({ pokemons }) => {
  return (
    <InitialLayout>
      <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-5 py-5'>
        {pokemons.map((pokemon: IResultPokemon) => (
          <CardHomePageComponent key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </InitialLayout>
  )
}

export default HomePage

export const getStaticProps: GetStaticProps = async ctx => {
  let pokemons: IResultPokemon[] = []
  const { data } = await pokemonData.get<IPokemon>('/pokemon?limit=201')

  for await (const pokemon of data.results) {
    const id: number = +pokemon.url.split('/')[6]

    pokemons = [
      ...pokemons,
      {
        ...data.results[id],
        id,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
      }
    ]
  }

  pokemons.pop()

  return {
    props: {
      pokemons
    }
  }
}
