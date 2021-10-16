import React from 'react';
import './Body.css';
import CityContainer from '../../components/cityContainer/cityContainer'
import CityForcast from '../../components/CityForcast/CityForcast.js'
import SearchForm from '../../components/SearchForm/SearchForm.js'
import {useSelector, useDispatch} from 'react-redux'
import {requestCities, setChosenCity, requestOneDayForcast, hideFiveDaysForacst, resetResultsArray, setOneDayForacst} from '../../actions'
import {Grid} from '@material-ui/core';

const Body = () => {

    const queryCitiesSelector = useSelector(state => state.requestCities.cities);
    const cityIndexSelector = useSelector(state => state.handlePageIndicator.oneDayForcastIndex);
    const dispatch = useDispatch();


	const showcity = (city) => {
		dispatch(setChosenCity(city));
		dispatch(requestOneDayForcast(city.Key));
		dispatch(hideFiveDaysForacst());
		dispatch(setOneDayForacst());
	}

	const onSearch = (value) => {
		(value.length !== 0)?
		dispatch(requestCities(value))
		:
		dispatch(resetResultsArray());

	}

	return(  (!cityIndexSelector)?
	        <div>
	           <SearchForm onSearch= {onSearch}/>
	           <Grid container  alignItems="center" justifyContent="space-around">
               <Grid container item xs={8} spacing={2} alignItems="center" justifyContent="space-around">
                  {queryCitiesSelector.map((city, i) => {
                     return (
                        <Grid item xs={3}>
                           <CityContainer
			              key={i}
			              city={city}
			              onDivClick = {showcity}
			              />
                        </Grid>
                      );
                   })}
                </Grid>
                </Grid>
	         </div>
            :
            
             <CityForcast/>

		);
}

export default Body;