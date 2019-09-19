import {combineReducers} from 'redux';
import bookMovies from './catalogo';
import infoMovie from './info';

const rootReducer = combineReducers({
  bookMovies,
  infoMovie,
});

export default rootReducer;
