import { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { NoFavorites } from '../../components'
import { InitialLayout } from '../../layouts'
import { pokemons } from '../../utils'

const FavoritesPage: NextPage = () => {
  const [favoritePokemon, setFavoritePokemon] = useState<number[]>([])
  const router = useRouter()

  useEffect(() => {
    setFavoritePokemon(pokemons())
    return () => {}
  }, [])

  const onFavoriteClick = (id: number) => router.push(`/pokemon/${id}`)

  return (
    <InitialLayout title='Mis pokémones favoritos'>
      <NoFavorites pokemons={favoritePokemon} />
      <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-5 py-5 w-full'>
        {favoritePokemon.map(id => (
          <button onClick={() => onFavoriteClick(id)} key={id}>
            <div className='text-white w-full h-40 flex flex-col bg-slate-800 transform duration-500 ease-in-out hover:scale-105 rounded-lg cursor-pointer'>
              <div className='w-full h-full flex flex-row justify-center items-center'>
                <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                  alt='Imagen de pokémon favorito'
                  width={128}
                  height={128}
                />
              </div>
            </div>
          </button>
        ))}
      </div>
    </InitialLayout>
  )
}

export default FavoritesPage
