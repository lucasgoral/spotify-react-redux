import {SEARCH_LOADING, SET_TRACKS} from "../actions/Actions";
const initialState = {
  tracks: [],
  isLoading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRACKS:
      return {
        ...state,
        tracks: [...action.data].filter(item => item.preview_url),
        isLoading: false
      };
    case SEARCH_LOADING:
    console.log('search loading')
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export { reducer as playList };
