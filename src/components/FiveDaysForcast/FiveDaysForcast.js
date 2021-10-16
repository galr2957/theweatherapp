import React from 'react';
import {Grid} from '@material-ui/core';
import {useSelector} from 'react-redux';
import CalenderIcon from '@material-ui/icons/CalendarToday';
import ArrowBack from '@material-ui/icons/ArrowBack';
import {useDispatch} from 'react-redux'
import {hideFiveDaysForacst} from '../../actions'


const FiveDaysForcast = () => {

  const dispatch = useDispatch();

  const getWeatherIcon = (num) => {
    if (num<10) {
      return '0'+num
    } 
    else {
      return num
    }
  } 

  const onArrowClick = () => {
    dispatch(hideFiveDaysForacst());

  }

  const FiveDaysForcastSelector = useSelector(state => state.requestFiveDaysForcast.FiveDaysforcast);
  const currentCitySelector = useSelector(state => state.handleChosenCity.city);
  const indexSelector = useSelector(state => state.handlePageIndicator.mainPage);

  return (
      <Grid container spacing={0} alignItems="center" justifyContent="space-around">
        <Grid item xs={12}>
            <h2> {FiveDaysForcastSelector.Headline.Text} </h2>
            <h4> at </h4>
            <h2> 
               {currentCitySelector.LocalizedName} /  
               {currentCitySelector.Country.LocalizedName} 
            </h2>
            <p> 
                <CalenderIcon/> &nbsp; 
                {FiveDaysForcastSelector.Headline.EffectiveDate.split('T')[0]} 
            </p>
        </Grid>
        {FiveDaysForcastSelector.DailyForecasts.map(day => {
            return (
                <Grid item xs={2}>
                   <div className=' card tc bg-white br3 pa3 ma2  bw2 shadow-5 h8 grow'>
                      <div class="bb ">
                         <p> {day.Date.split('T')[0]} </p>
                         <p> {day.Day.IconPhrase} </p>
                         <p> 
                             <span className="f7 b"> 
                                 max: 
                             </span> 
                             {day.Temperature.Maximum.Value} &nbsp; 
                             {day.Temperature.Maximum.Unit} 
                         </p>
                         <img alt='' 
                              id={'weathericon'} src={'https://developer.accuweather.com/sites/default/files/'+ getWeatherIcon(day.Day.Icon) +'-s.png'} 
                              width= "140px"/>
                      </div>
                      <p> {day.Night.IconPhrase} </p>
                      <p> 
                         <span className="f7 b"> min: 
                         </span> 
                         {day.Temperature.Minimum.Value} &nbsp; 
                         {day.Temperature.Minimum.Unit} </p>
                      <img alt='' 
                           id={'weathericon'} src={'https://developer.accuweather.com/sites/default/files/'+ getWeatherIcon(day.Night.Icon) +'-s.png' } 
                           width= "140px"/>
                    </div>
                </Grid>
                )
        })}
        {indexSelector === 'FAVORITES' ? 
          <div/> // empty div
          :
          <Grid item xs={12}>
            <ArrowBack className="pa4 pointer" onClick={onArrowClick}/>
          </Grid>}
      </Grid>
  );
}

export default FiveDaysForcast;
