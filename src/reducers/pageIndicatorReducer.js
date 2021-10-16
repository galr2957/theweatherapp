import {
  SET_SEARCH_PAGE,
  SET_FAVORITE_PAGE,
  SHOW_ONE_DAY_FORCAST,
  HIDE_ONE_DAY_FORCAST,
  SHOW_FIVE_DAY_FORCAST,
  HIDE_FIVE_DAY_FORCAST
 } from '../constants'

const initialStatePageIndicator = {
  mainPage : "SEARCH",
  oneDayForcastIndex : false,
  fiveDaysForcastIndex : false
}

export const handlePageIndicator = (state= initialStatePageIndicator, action={} ) => {
  switch(action.type) {
    case SET_SEARCH_PAGE:
        return Object.assign({}, state, {mainPage: 'SEARCH', oneDayForcastIndex: false, fiveDaysForcastIndex: false})
    case SET_FAVORITE_PAGE:
        return Object.assign({}, state, {mainPage: 'FAVORITES', oneDayForcastIndex: false, fiveDaysForcastIndex: false })
    case SHOW_ONE_DAY_FORCAST:
      return Object.assign({}, state, {oneDayForcastIndex: true})
    case HIDE_ONE_DAY_FORCAST:
      return Object.assign({}, state, {oneDayForcastIndex: false})
    case SHOW_FIVE_DAY_FORCAST:
      return Object.assign({}, state, {fiveDaysForcastIndex: true})
    case HIDE_FIVE_DAY_FORCAST:
      return Object.assign({}, state, {fiveDaysForcastIndex: false})
    default:
      return state
  }
}