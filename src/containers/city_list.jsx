import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import City from '../containers/city';

class CityList extends Component {
  renderList() {
    return this.props.cities.map((city) => {
      return (
        <City key={city.name} city={city} />
      );
    });
  };

  render() {
    return (
      <ul className="list-group cities">
        {this.renderList()}
      </ul>
    );
  }
};

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}
// This state is the redux state!!
// This function links the big store to the component

// Then you pass it to the connect function
export default connect(mapStateToProps)(CityList);
