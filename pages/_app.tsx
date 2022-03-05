import '../styles/globals.css'
import '../public/fonts/pokemon/pokemon.css'
import { AppProps } from 'next/app'

function MyApp ({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
