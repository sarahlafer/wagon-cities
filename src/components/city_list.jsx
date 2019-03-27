import React, { Component } from "react";

import City from './city';


// class CityList extends Component {
//   renderList = (props) => {
//     return this.props.cities.map((city, index) => {
//       return <City city={city} selectCity={props.selectCity}/>
//     })
//   }
//   render() {
//     return (
//     <div className="cities">
//       {this.renderList(this.props)}
//     </div>
//     )
//   }
// };


const CityList = (props) => {
  const renderList = () => {
    return props.cities.map((city, index) => {
      return (
        <City
          city={city}
          selected={city.name === props.activeCity.name}
          index={index}
          selectCity={props.selectCity}
        />
      );
    });
  };

  return (
    <div className="cities">
      {renderList()}
    </div>
  );
};

export default CityList;
