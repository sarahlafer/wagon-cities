import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import selectCity from '../actions/index';

const City = (props) => {
  return (
    <li
      className="list-group-item"
      onClick={() => props.selectCity(props.city)}
    >
    {props.city.name}
    </li>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCity }, dispatch);
}

// This function binds actions to the props of the component. We need to import the
// bindingActionCreators and connect functions as well as the function in our
// action file.
// We need this so that the component has access to the action.
// dispatch is an argument the mapDispatchToProps function receives.
// It's something that is used for the action to be triggered.(internal stuff in redux)

// Then we need to connect the function to the component with the connect import.


export default connect(null, mapDispatchToProps)(City);
// We still need to connect the component to the redux state store. With the
// mapStateToProps function (in city_list.jsx).
// We pass mapDispatchToProps to the City (component)
// The props now usually come from the redux state and not from the parent.
