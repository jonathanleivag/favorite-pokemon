import confetti from 'canvas-confetti'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import { IPokemon, Sprites } from '../../../interface'
import { InitialLayout } from '../../../layouts'
import { getInfoPokemon, pokemonData } from '../../../utils'
import { existInFavorite, toggleFavorite } from '../../../utils/toggleFavorite'

export interface IPropsPokemonPage {
  sprites: Sprites
  name: string
  id: number
}

const PokemonNamePage: NextPage<IPropsPokemonPage> = ({
  sprites,
  name,
  id
}) => {
  const [inIsFavorites, setInIsFavorites] = useState(existInFavorite(id))

  const handleFavoritePokemon = () => {
    toggleFavorite(id)
    setInIsFavorites(!inIsFavorites)
    if (!inIsFavorites) {
      confetti({
        zIndex: 99999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        startVelocity: 30,
        origin: {
          x: 1,
          y: 0
        }
      })
    }
  }

  return (
    <InitialLayout title={name}>
      <div className='pt-10 text-white w-full flex flex-col md:flex-row transform duration-1000 ease-in-out gap-4'>
        <div className='w-full flex flex-row justify-center items-center p-2 bg-slate-800'>
          <Image
            src={sprites.front_default}
            width={200}
            height={200}
            alt={`Imagen de pokémon ${name}`}
          />
        </div>
        <div className='w-full items-center justify-center flex flex-col gap-4'>
          <div className='w-full flex flex-row bg-slate-800 p-2 md:p-3 uppercase'>
            <div className='w-1/2 h-full flex flex-row justify-start items-center'>
              <h1 className='text-2xl'>{name}</h1>
            </div>
            <div className='w-1/2 flex flex-row justify-end items-center p-5'>
              <button
                onClick={handleFavoritePokemon}
                className='border-none w-[65%] flex flex-row justify-center items-center bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] rounded-lg p-1 hover:scale-105'
              >
                <div
                  className={`w-[99%] h-[99%] ${
                    inIsFavorites
                      ? 'bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] hover:from-slate-800 hover:via-slate-800 hover:to-slate-800'
                      : 'bg-slate-800 hover:bg-transparent hover:bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]'
                  } text-xs xl:p-2`}
                >
                  {inIsFavorites
                    ? 'Quitar de favoritos'
                    : 'Guardar en favoritos'}
                </div>
              </button>
            </div>
          </div>
          <div className='w-full bg-slate-800 p-2 uppercase'>
            <h2>Sprites</h2>
            <div className='w-full grid grid-cols-4 gap-4'>
              <Image
                src={sprites.front_default}
                width={300}
                height={300}
                alt={`Imagen de pokémon ${name}`}
              />
              <Image
                src={sprites.back_default}
                width={100}
                height={100}
                alt={`Imagen de pokémon ${name}`}
              />
              <Image
                src={sprites.front_shiny}
                width={100}
                height={100}
                alt={`Imagen de pokémon ${name}`}
              />
              <Image
                src={sprites.back_shiny}
                width={100}
                height={100}
                alt={`Imagen de pokémon ${name}`}
              />
            </div>
          </div>
        </div>
      </div>
    </InitialLayout>
  )
}

export default PokemonNamePage

export const getStaticPaths: GetStaticPaths = async ctx => {
  const { data } = await pokemonData.get<IPokemon>('/pokemon?limit=200')
  const pokemon200: string[] = data.results.map(pokemon => pokemon.name)

  return {
    paths: pokemon200.map(pokemon => ({ params: { name: pokemon } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ctx => {
  const { name } = ctx.params as { name: string }

  return {
    props: {
      ...(await getInfoPokemon(name))
    }
  }
}
