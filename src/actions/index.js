// TODO: add and export your own actions
export default function selectCity(city) {
  return {
    type: 'CITY_SELECTED',
    payload: city
  };
}


// We need to create an action to call the reducer to update the store
// The reducer does something with the action coded in here
