import Image from 'next/image'
import { FC } from 'react'

export interface IPropsNoFavoriteComponent {
  pokemons: number[]
}

const Content = () => (
  <div className='min-h-[calc(100vh-80px)] flex flex-row justify-center items-center'>
    <div className='flex flex-col justify-center items-center'>
      <p className='text-3xl md:text-5xl'>No hay favoritos</p>
      <Image
        className='opacity-25'
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/133.svg'
        width={200}
        height={200}
        alt='Pokémon eevee'
      />
    </div>
  </div>
)

export const NoFavorites: FC<IPropsNoFavoriteComponent> = ({ pokemons }) => {
  return <>{pokemons.length === 0 ? <Content /> : null}</>
}
