import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const NavbarUiComponent = () => {
  const router = useRouter()

  const handleClick = () => router.push('/')

  return (
    <nav className='fixed w-full top-0 z-50 bg-slate-800 h-[80px]'>
      <div className='flex flex-row text-white px-3'>
        <div className='w-1/2 py-2 flex flex-row justify-start text-[#FDCB06] stroke-text items-center font-pokemon-solid text-center'>
          <span
            className='flex flex-row items-center justify-start cursor-pointer'
            onClick={handleClick}
          >
            <div className='hidden md:block'>
              <Image
                src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
                width={80}
                height={80}
                alt='Pokémon charmander'
              />
            </div>
            <p className='text-4xl'>P</p>
            <p className='text-2xl'>okémon Api</p>
          </span>
        </div>
        <div className='w-1/2 flex flex-row justify-end items-center'>
          <Link href='/favoritos'>Favoritos</Link>
        </div>
      </div>
    </nav>
  )
}
