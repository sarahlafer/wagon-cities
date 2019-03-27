import React, { Component } from 'react';


class ActiveCity extends Component {
  handleClick = () => {
    if (this.props.selectCity) {
    this.props.selectCity(this.props.index);

    }
  }

  render() {
    return (
      <div onClick={this.handleClick}>
      <h2>{this.props.city.name}</h2>
      <h2>{this.props.city.address}</h2>
      <img src={`https://kitt.lewagon.com/placeholder/cities/${this.props.city.slug}`}/>


      </div>
    );
  }
}

export default ActiveCity;
