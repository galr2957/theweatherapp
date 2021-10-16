import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  
 } from '../constants'

const initialStateFavorites = {
  favorites : [],
}

export const handleFavorites = (state= initialStateFavorites, action={} ) => {
  switch(action.type) {
    case ADD_TO_FAVORITES:
      if (state.favorites.find(city => city.Key === action.payload.Key)) { 
        return state
      }
      else {
        const newArray = [...state.favorites, action.payload]
        return Object.assign({}, state, {favorites: newArray})
      }
    case REMOVE_FROM_FAVORITES:
      const filteredFavorites = state.favorites.filter(city => city.Key !== action.payload)
      return Object.assign({}, state, {favorites: filteredFavorites})
    default:
      return state
  }
}