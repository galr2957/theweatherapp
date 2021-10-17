import {
  REQUEST_FIVE_DAY_FORCAST_PENDING,
  REQUEST_FIVE_DAY_FORCAST_SUCCESS,
  REQUEST_FIVE_DAY_FORCAST_FAILED

 } from '../constants'

import {initialFiveDaysforcast} from '../initialState' //intial db for dev 

const initialStateFiveDaysForcast = {
  FiveDaysforcast: initialFiveDaysforcast,
  isPending: false
}

export const requestFiveDaysForcast = (state=initialStateFiveDaysForcast, action={}) => {
  switch (action.type) {
    case REQUEST_FIVE_DAY_FORCAST_PENDING:
      return Object.assign({}, state, {isPending: true})
    case REQUEST_FIVE_DAY_FORCAST_SUCCESS:
      return Object.assign({}, state, {FiveDaysforcast: action.payload, isPending: false})
    case REQUEST_FIVE_DAY_FORCAST_FAILED:
      return Object.assign({}, state, {error: action.payload})
    default:
      return state
  }
}