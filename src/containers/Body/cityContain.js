import React from 'react';
import './cityContainer.css';

const CityContainer = (city) => {
	return(
		<div key= {city.Key}>
		    <p> {city.LocalizedName} </p>
		</div>
		);
}

export default CityContainer;
