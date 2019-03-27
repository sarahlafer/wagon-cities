export default function(state = null, action) {
  switch(action.type) {
    case 'CITY_SELECTED': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

// if the action type matches the action we coded in the action file,
//   return the payload coded in the action file
// otherwise return the current state (we don't care about the action
//   so we don't touch the state)
