import Head from 'next/head'
import { FC } from 'react'
import { NavbarUiComponent } from '../components'

export interface IPropsInitialLayout {
  title?: String
}

export const InitialLayout: FC<IPropsInitialLayout> = ({
  children,
  title = 'Pokémon favorito'
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='author' content='Jonathanleivag' />
        <meta name='description' content={`Información del pokémon ${title}`} />
        <meta
          name='keywords'
          content={`${title}, pokemon, pokémon, pokedex, jonathanleivag`}
        />
      </Head>
      <NavbarUiComponent />
      <main className='px-5'>{children}</main>
    </>
  )
}
