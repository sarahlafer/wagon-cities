// import React, { Component } from 'react';

// import CityList from './city_list';

// import City from './city';
// import ActiveCity from './active_city';


// const cities = [
//   { name: 'Paris', address: '16 Villa Gaudelet, 75011 Paris', slug: 'paris' },
//   { name: 'London', address: '14-22 Elder St, London E1 6BT', slug: 'london' },
//   { name: 'Berlin', address: 'Rudi-Dutschke-Straße 26, 10969 Berlin', slug: 'berlin' },
// ];

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       activeCity: cities[0],
//       cities
//     }
//   }

//    selectCity = (index) => {
//     this.setState({
//       activeCity: cities[index]
//     });
//   };

//   render() {
//   return (
//     <div className="app">
//       <CityList cities={this.state.cities} activeCity={this.state.activeCity} selectCity={this.selectCity} />
//       <div className="active-city">
//       <ActiveCity city={this.state.activeCity}  />

//       </div>
//     </div>
//   );
// }
// };

// export default App;


import React from 'react';

import CityList from '../containers/city_list';
import ActiveCity from '../containers/active_city';

const App = () => {
  return (
    <div className="app">
      <CityList />
      <ActiveCity />
    </div>
  );
};

export default App;

// If the component nedds to handle an action it should be a container!
