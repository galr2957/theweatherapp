import React from 'react';
import DeleteIcon from '@material-ui/icons/DeleteOutline';

const CityCard = ({ city,onDelete, onCityClick }) => {

  const onCityDelete =() => {
    onDelete(city);
  }

  const onCityclick = () => {
    onCityClick(city)
  }

  return (
      <div  className='tc grow bg-white br3 pa3 ma2 dib bw2 shadow-5'>
         <div className=' pointer' onClick={onCityclick}>
            <img alt='robots' src={`https://picsum.photos/200/100?random=${city.Key}`} />
            <h3>
               {city.LocalizedName}  / &nbsp; 
               {city.Country.LocalizedName}
            </h3>
         </div>
         <DeleteIcon className=' pointer' onClick={onCityDelete}/> 
      </div>
  );
}

export default CityCard;