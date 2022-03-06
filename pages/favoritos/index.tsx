import { NextPage } from 'next'
import { InitialLayout } from '../../layouts'

const FavoritesPage: NextPage = () => {
  return (
    <InitialLayout title='Mis pokémones favoritos'>
      <h1>Favoritos</h1>
    </InitialLayout>
  )
}

export default FavoritesPage
