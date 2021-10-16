import React from 'react';
import {Grid} from '@material-ui/core';
import {useSelector, useDispatch} from 'react-redux'
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import DoneIcon from '@material-ui/icons/Done';

import {addToFavorites, requestFiveDaysForcast,setFiveDaysForacst, removeFromFavorites} from '../../actions.js'

const OneDayForcast = () => {
  
  const currentCitySelector = useSelector(state => state.handleChosenCity.city);
  const oneDayForcast = useSelector(state => state.requestOneDayForcast.OneDayForcast);
  const indexSelector = useSelector(state => state.handlePageIndicator.mainPage);
  const dispatch = useDispatch();

  const getWeatherIcon = (num) => {
     if (num<10) {
       return '0'+num
    } 
    else {
      return num
    }
  }

  const addCityToFavorites = () =>{
    dispatch(addToFavorites(currentCitySelector));
    var DoneIconelement = document.getElementById("DonIconSpan");
    DoneIconelement.style.display = "block";
    setTimeout( function() { 
                      DoneIconelement.style.display = "none";
                      }, 1000);
  }

  const onFiveDaysForcastSubmit = () => {
    dispatch(setFiveDaysForacst());
    dispatch(requestFiveDaysForcast(currentCitySelector.Key));
  }


  return (
    <div className=' br3 pa4 ma2 dib bw2 shadow-5'>
      <div>
        <h2> {oneDayForcast.WeatherText} </h2>
        <h4> at </h4>
        <h2>{currentCitySelector.LocalizedName} / </h2>
        <h2> {currentCitySelector.Country.LocalizedName} </h2>
        <p>  {oneDayForcast.LocalObservationDateTime.split('T')[0]} </p>
        <p> {oneDayForcast.LocalObservationDateTime.split('T')[1].split('+')[0]} </p>
        <p> {oneDayForcast.Temperature.Metric.Value}  {oneDayForcast.Temperature.Metric.Unit}</p>
        
        <img alt='' id={'weathericon'} src={'https://developer.accuweather.com/sites/default/files/'+ getWeatherIcon(oneDayForcast.WeatherIcon) +'-s.png'} width= "200px"/>
      </div>
      <div className="flex fl">
        {(indexSelector==='SEARCH')? 
           <div>
            <span id="DonIconSpan" className =" dn fl">
            <DoneIcon />
            </span>
            <span className ="pointer  fl">
            <FavoriteIcon onClick={addCityToFavorites}/> 
            </span>
            </div>
          : 
            <div> </div>   
         }
      </div>
      <div className="flex pointer fr">
         <MoreHoriz onClick={onFiveDaysForcastSubmit}/>
      </div>
    </div>
    
  );
}

export default OneDayForcast;
