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
  const { data } = await pokemonData.get<IPokemon>('/pokemon?limit=151')

  const pokemons = data.results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index +
      1}.svg`
  }))

  return {
    props: {
      pokemons
    }
  }
}
