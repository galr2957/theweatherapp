import {
  REQUEST_CITIES_PENDING,
  REQUEST_CITIES_SUCCESS,
  REQUEST_CITIES_FAILED,
  RESET_RESULTS_ARRAY,

  SET_CHOSEN_CITY,

  REQUEST_ONE_DAY_FORCAST_PENDING,
  REQUEST_ONE_DAY_FORCAST_SUCCESS,
  REQUEST_ONE_DAY_FORCAST_FAILED,

  REQUEST_FIVE_DAY_FORCAST_PENDING,
  REQUEST_FIVE_DAY_FORCAST_SUCCESS,
  REQUEST_FIVE_DAY_FORCAST_FAILED,

  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,

  SET_SEARCH_PAGE,
  SET_FAVORITE_PAGE,
  SHOW_ONE_DAY_FORCAST,
  HIDE_ONE_DAY_FORCAST,
  SHOW_FIVE_DAY_FORCAST,
  HIDE_FIVE_DAY_FORCAST
 } from './constants'

export const showSearchPage = () => ({type: SET_SEARCH_PAGE})
export const showFavoritePage = () => ({type: SET_FAVORITE_PAGE})
export const setOneDayForacst = () => ({type: SHOW_ONE_DAY_FORCAST})
export const hideOneDayForacst = () => ({type: HIDE_ONE_DAY_FORCAST})
export const setFiveDaysForacst = () => ({type: SHOW_FIVE_DAY_FORCAST})
export const hideFiveDaysForacst = () => ({type: HIDE_FIVE_DAY_FORCAST})

export const requestCities = (cityName) => (dispatch) => {
  dispatch({ type: REQUEST_CITIES_PENDING })
  fetch('https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=8xJUQWLGqD48OliATlNnUwHGKBqroaUA&q='+cityName).then(response => response.json())
    .then(data => dispatch({ type: REQUEST_CITIES_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_CITIES_FAILED, payload: error }))
}

export const resetResultsArray = () => ({type: RESET_RESULTS_ARRAY})

export const setChosenCity = (city) => ({type: SET_CHOSEN_CITY, payload: city})


export const requestOneDayForcast = (cityKey) => (dispatch) => {
  dispatch({ type: REQUEST_ONE_DAY_FORCAST_PENDING })
  fetch('https://dataservice.accuweather.com/currentconditions/v1/'+ cityKey +'?apikey=8xJUQWLGqD48OliATlNnUwHGKBqroaUA').then(response => response.json())
    .then(data => dispatch({ type: REQUEST_ONE_DAY_FORCAST_SUCCESS, payload: data[0] }))
    .catch(error => dispatch({ type: REQUEST_ONE_DAY_FORCAST_FAILED, payload: error }))
}


export const requestFiveDaysForcast = (cityKey) => (dispatch) => {
  dispatch({ type: REQUEST_FIVE_DAY_FORCAST_PENDING })
  fetch('https://dataservice.accuweather.com/forecasts/v1/daily/5day/'+ cityKey +'?apikey=8xJUQWLGqD48OliATlNnUwHGKBqroaUA&metric=true').then(response => response.json())
    .then(data => dispatch({ type: REQUEST_FIVE_DAY_FORCAST_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_FIVE_DAY_FORCAST_FAILED, payload: error }))
}

export const addToFavorites = (city) => ({type: ADD_TO_FAVORITES, payload: city})
export const removeFromFavorites = (cityKey) => ({type: REMOVE_FROM_FAVORITES, payload: cityKey})

