import React from 'react';
import Tilt from 'react-tilt'
import icon from './weatherIcon.jpg'
import './Navigation.css';
import { Grid, ButtonGroup, Button} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
import {useDispatch} from 'react-redux'
import {showSearchPage, showFavoritePage} from '../../actions'

const Navigation = () => {

	const dispatch = useDispatch();

	const showsearchpage = () => {
		dispatch(showSearchPage());
	}

	const showfavoritepage = () => {
        dispatch(showFavoritePage());
	}

	return (
	       <nav>
	       <Grid container spacing={10} alignItems="center" justifyContent="space-around">
				  <Grid item xs={4}>
					    <ButtonGroup  color="primary" variant="text">
						  <Button startIcon={<SearchIcon />} onClick ={showsearchpage}> SEARCH CITIES </Button>
						  <Button endIcon={<FavoriteIcon />} onClick ={showfavoritepage}> FAVORITES </Button>
					   </ButtonGroup>
				  </Grid>
				  <Grid item xs={4} >
				        <p className="blue f2 pa2 br-pill ba b--blue"> the weather app </p> 
				  </Grid>
				  <Grid item xs={1}> </Grid>
				  <Grid item xs={3} >
				         <Tilt className="Tilt" options={{ max : 45 }} style={{ height: 120, width: 120}} >
                               <div className="Tilt-inner "> 
                                    <img alt='' id={'websiteIcon'} src={icon}/> 
                               </div>
                         </Tilt> 
				   </Grid>
            </Grid>
	       </nav>

		);

}

export default Navigation;