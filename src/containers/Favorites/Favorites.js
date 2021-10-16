import {Grid} from '@material-ui/core';
import CityCard from '../../components/CityCard/CityCard.js'
import CityForcast from '../../components/CityForcast/CityForcast.js'
import {removeFromFavorites, setChosenCity, setOneDayForacst, hideOneDayForacst, requestOneDayForcast} from '../../actions'
import {useSelector, useDispatch} from 'react-redux'
import ArrowBack from '@material-ui/icons/ArrowBack';
import FavoriteIcon from '@material-ui/icons/Favorite';




function Favorites() {

  const favoritesSelector = useSelector(state => state.handleFavorites.favorites);
  const cityIndexSelector = useSelector(state => state.handlePageIndicator.oneDayForcastIndex);
  const dispatch = useDispatch();

  const onCityDelete = (city) => {
    dispatch(removeFromFavorites(city.Key))
    console.log('delete')
  }

  const onClick = (city) => {
    dispatch(setChosenCity(city));
    dispatch(requestOneDayForcast(city.Key));
    dispatch(setOneDayForacst());
  }

   const onArrowClick = () => {
    dispatch(hideOneDayForacst());
  }

  return (
    <div>
       {!(cityIndexSelector)?
           <Grid container  alignItems="center" justifyContent="space-around">
              <Grid item xs={12}> 
                   <span className="tc grow f2 br3 pa2 ma3 dib bw2 shadow-5 "> my <FavoriteIcon/> cities </span>
              </Grid>
              <Grid item xs={2}> 
                 {/*empty frid for positioning*/}
              </Grid>
              <Grid container item xs={8} spacing={2} alignItems="center" justifyContent="space-around">
                  {favoritesSelector.map((city, i) => {
                     return (
                        <Grid item xs={3}>
                           <CityCard key={i} city={city} onDelete={onCityDelete} onCityClick={onClick}/>
                        </Grid>
                      );
                   })}
               </Grid>
               <Grid item xs={2}> 
                  {/*empty frid for positioning*/}
               </Grid>
            </Grid>
        :
          <div>
             <CityForcast/>
             <ArrowBack className="pa4 pointer" onClick={onArrowClick}/> 
          </div>
        }
      </div>
  );
}

export default Favorites;
