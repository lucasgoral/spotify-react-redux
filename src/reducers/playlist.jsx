const initialState = {
  tracks: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TRACKS":
      return {
        tracks: [...action.data].filter(item => item.preview_url)
      };
    default:
      return state;
  }
};

export { reducer as playlist };
