export const toggleFavorite = (id: number) => {
  let favorites: number[] = JSON.parse(
    localStorage.getItem('favorites') || '[]'
  )

  if (favorites.includes(id)) {
    favorites = favorites.filter(item => item !== id)
  } else {
    favorites.push(id)
  }

  localStorage.setItem('favorites', JSON.stringify(favorites))
}

export const existInFavorite = (id: number): boolean => {
  let resp = false

  if (typeof window !== 'undefined') {
    const favorites: number[] = JSON.parse(
      localStorage.getItem('favorites') || '[]'
    )
    resp = favorites.includes(id)
  }

  return resp
}

export const pokemons = (): number[] => {
  let resp: number[] = []

  if (typeof window !== 'undefined') {
    resp = JSON.parse(localStorage.getItem('favorites') || '[]')
  }

  return resp
}
