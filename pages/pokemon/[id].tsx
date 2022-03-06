import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { IPokemonInfo } from '../../interface'
import { InitialLayout } from '../../layouts'
import { pokemonData } from '../../utils'

export interface IPropsPokemonPage {
  pokemon: IPokemonInfo
}

const PokemonPage: NextPage<IPropsPokemonPage> = ({ pokemon }) => {
  return (
    <InitialLayout title={pokemon.name}>
      <div className='text-white w-full flex flex-col md:flex-row transform duration-1000 ease-in-out gap-4'>
        <div className='w-full flex flex-row justify-center items-center p-2 bg-slate-800'>
          <Image
            src={pokemon.sprites.front_default}
            width={200}
            height={200}
            alt={`Imagen de pokémon ${pokemon.name}`}
          />
        </div>
        <div className='w-full items-center justify-center flex flex-col gap-4'>
          <div className='w-full flex flex-row bg-slate-800 p-2 md:p-3 uppercase'>
            <div className='w-1/2 h-full flex flex-row justify-start items-center'>
              <h1 className='text-2xl'>{pokemon.name}</h1>
            </div>
            <div className='w-1/2 flex flex-row justify-end items-center p-5'>
              <button className='w-[65%] flex flex-row justify-center items-center bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] rounded-lg p-1 hover:scale-105'>
                <div className='w-[99%] h-[99%] bg-slate-800 text-xs xl:p-2'>
                  Guardar en favoritos
                </div>
              </button>
            </div>
          </div>
          <div className='w-full bg-slate-800 p-2 uppercase'>
            <h2>Sprites</h2>
            <div className='w-full grid grid-cols-4 gap-4'>
              <Image
                src={pokemon.sprites.front_default}
                width={300}
                height={300}
                alt={`Imagen de pokémon ${pokemon.name}`}
              />
              <Image
                src={pokemon.sprites.back_default}
                width={100}
                height={100}
                alt={`Imagen de pokémon ${pokemon.name}`}
              />
              <Image
                src={pokemon.sprites.front_shiny}
                width={100}
                height={100}
                alt={`Imagen de pokémon ${pokemon.name}`}
              />
              <Image
                src={pokemon.sprites.back_shiny}
                width={100}
                height={100}
                alt={`Imagen de pokémon ${pokemon.name}`}
              />
            </div>
          </div>
        </div>
      </div>
    </InitialLayout>
  )
}

export default PokemonPage

export const getStaticPaths: GetStaticPaths = async ctx => {
  const pokemon200: string[] = [...Array(200)].map((value, index) =>
    (index + 1).toString()
  )

  return {
    paths: pokemon200.map(pokemon => ({ params: { id: pokemon } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ctx => {
  const { data } = await pokemonData.get<IPokemonInfo>(
    `/pokemon/${ctx.params!.id}`
  )
  return {
    props: {
      pokemon: data
    }
  }
}
