import React from 'react';
import './cityContainer.css';


const cityContainer = ({ city, onDivClick }) => {

  const onButtonClick = () => {onDivClick(city)}

  return (
       <div  className='tc grow bg-white br3 pa3 ma2 dib bw2 shadow-5' onClick={onButtonClick}>
          <img alt='robots' src={`https://picsum.photos/220/120?random=${city.Key}`} />
            <h4>
               {city.LocalizedName} / &nbsp;
               {city.Country.LocalizedName}
            </h4>
        </div>
         
  );
}

export default cityContainer;