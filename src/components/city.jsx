import React, { Component } from 'react';

// class City extends Component {
//    handleClick = () => {
//     // if (this.props.selectCity) {
//       // console.log(this.props.city.name)
//      console.log(this.props.selectCity(this.props.index))
//      this.props.selectCity(this.props.index);
//     // }
//   }
// render() {
//   return (
//     <div className="list-group-item" onClick={this.handleClick} >
//     </div>

// );
// };
// }


class City extends Component {
  handleClick = () => {
    if (this.props.selectCity) {
    this.props.selectCity(this.props.index);

    }
    // console.log(this.props.selectCity(1))
  }

  render() {
    return (
      <div className={`list-group-item${this.props.selected ? ' active-city' : ''}`} onClick={this.handleClick}>
      <h2>{this.props.city.name}</h2>
      </div>
    );
  }
}

export default City;
