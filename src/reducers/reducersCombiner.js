import {requestCities, handleChosenCity} from './requestCitiesReducers'
import {requestOneDayForcast} from './requestOneDayForcast'
import {requestFiveDaysForcast} from './requestFiveDaysForcast'
import {handleFavorites} from './favoriteReducer'
import {handlePageIndicator} from './pageIndicatorReducer'

import {combineReducers} from 'redux';

export default combineReducers({
  requestCities,
  handleChosenCity,
  requestOneDayForcast,
  requestFiveDaysForcast,
  handleFavorites,
  handlePageIndicator
})
