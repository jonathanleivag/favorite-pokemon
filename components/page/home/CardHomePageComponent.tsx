import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { IResultPokemon } from '../../../interface'

export interface IPropsHomePage {
  pokemon: IResultPokemon
}

export const CardHomePageComponent: FC<IPropsHomePage> = ({ pokemon }) => {
  const [selectEffect, setSelectEffect] = useState<string>('')
  const router = useRouter()

  const handleClick = () => {
    setSelectEffect('animate-ping')
    router.push(`/pokemon/${pokemon.id}`)
  }

  return (
    <button className={selectEffect} onClick={handleClick}>
      <div className='text-white w-full h-40 flex flex-col bg-slate-800 transform duration-500 ease-in-out hover:scale-105 rounded-lg cursor-pointer'>
        <div className='w-full h-[80%] flex flex-row justify-center items-center'>
          <Image
            src={pokemon.image}
            alt={`Imagen del pokémon ${pokemon.image}`}
            width={128}
            height={128}
          />
        </div>
        <div className='w-full h-[20%] flex flex-row px-[5%]'>
          <div className='w-1/2 h-full'> {pokemon.name} </div>
          <div className='w-1/2 flex flex-row justify-end h-full'>
            {`#${pokemon.id}`}
          </div>
        </div>
      </div>
    </button>
  )
}
