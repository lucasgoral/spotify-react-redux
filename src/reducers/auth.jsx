

const initialState = {
 logged: false,
 access_token: ''
}

 const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LOG_IN':
      return {
       ...state, logged: true, access_token: action.data
      };

    default:
      return state;
  }
}


export { reducer as auth };
