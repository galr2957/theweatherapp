import {
  REQUEST_ONE_DAY_FORCAST_PENDING,
  REQUEST_ONE_DAY_FORCAST_SUCCESS,
  REQUEST_ONE_DAY_FORCAST_FAILED

 } from '../constants'

import {initialonedayforcast} from '../initialState' //intial db for dev 

const initialStateOneDayForcast = {
  OneDayForcast: initialonedayforcast,
  isPending: false
}

export const requestOneDayForcast = (state=initialStateOneDayForcast, action={}) => {
  switch (action.type) {
    case REQUEST_ONE_DAY_FORCAST_PENDING:
      return Object.assign({}, state, {isPending: true})
    case REQUEST_ONE_DAY_FORCAST_SUCCESS:
      return Object.assign({}, state, {OneDayForcast: action.payload, isPending: false})
    case REQUEST_ONE_DAY_FORCAST_FAILED:
      return Object.assign({}, state, {error: action.payload})
    default:
      return state
  }
}

