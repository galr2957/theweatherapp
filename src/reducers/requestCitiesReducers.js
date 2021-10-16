import {
  REQUEST_CITIES_PENDING,
  REQUEST_CITIES_SUCCESS,
  REQUEST_CITIES_FAILED,
  RESET_RESULTS_ARRAY,

  SET_CHOSEN_CITY
 } from '../constants'

import {initialcity} from '../initialCity' //intial db for dev 


const initialStateCities = {
  cities: [],
  isPending: false
}

export const requestCities = (state=initialStateCities, action={}) => {
  switch (action.type) {
    case REQUEST_CITIES_PENDING:
      return Object.assign({}, state, {isPending: true})
    case REQUEST_CITIES_SUCCESS:
      return Object.assign({}, state, {cities: action.payload, isPending: false})
    case REQUEST_CITIES_FAILED:
      return state
    case RESET_RESULTS_ARRAY:
      return Object.assign({}, state, {cities: []})
    default:
      return state
  }
}


const initialStateChosenCity = {
  city : initialcity,
}

export const handleChosenCity = (state= initialStateChosenCity, action={} ) => {
  switch(action.type) {
    case SET_CHOSEN_CITY:
      return Object.assign({}, state, {city: action.payload})
    default:
      return state
  }
}












