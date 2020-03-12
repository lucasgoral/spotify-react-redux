

const initialState = {

  trackNumber: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TRACK':
      return {
        ...state, trackNumber: action.trackNumber
      };

    default:
      return state;
  }
}


export { reducer as player };
