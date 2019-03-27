import { combineReducers } from 'redux';
import CitiesReducer from './cities_reducer';
import ActiveCityReducer from './active_city_reducer';

const rootReducer = combineReducers({
  cities: CitiesReducer,
  activeCity: ActiveCityReducer
});

export default rootReducer;


// The reducers is a function which receives an action and the current state
// It computes and returns the new state => goal of the reducer
