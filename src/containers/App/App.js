import './App.css';
import Navigation from '../../components/Navigation/Navigation.js'
import Body from '../Body/Body.js'
import Favorites from '../Favorites/Favorites.js'
import {useSelector} from 'react-redux'


function App() {

  const indexSelector = useSelector(state => state.handlePageIndicator.mainPage);

  return (
    <div className="App">
        <Navigation/>
        {indexSelector === 'SEARCH' ? 
             <Body />
             : 
             <Favorites/>
        }
     </div>
  );
}

export default App;

