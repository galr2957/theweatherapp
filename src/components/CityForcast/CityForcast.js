import React from 'react';
import OneDayForcast from '../OneDayForcast/OneDayForcast.js'
import FiveDaysForcast from '../FiveDaysForcast/FiveDaysForcast.js'
import {useSelector} from 'react-redux';

const CityForcast = () => {
   
  const showFiveDaysSelector = useSelector(state => state.handlePageIndicator.fiveDaysForcastIndex);
  return (
    <div className="" >
       {(!showFiveDaysSelector)?
           <OneDayForcast/> 
         :
           <FiveDaysForcast/>
       }
    </div>
  );
}

export default CityForcast;



