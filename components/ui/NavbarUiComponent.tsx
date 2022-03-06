import Image from 'next/image'

export const NavbarUiComponent = () => {
  return (
    <nav className='flex flex-row text-white px-3'>
      <div className='w-1/2 py-2 flex flex-row justify-start text-[#FDCB06] stroke-text items-center font-pokemon-solid text-center'>
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
      </div>
      <div className='w-1/2 flex flex-row justify-end items-center'>
        Favoritos
      </div>
    </nav>
  )
}
