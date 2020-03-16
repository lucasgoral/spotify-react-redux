export const SET_TRACK = "SET_TRACK";
export const SET_TRACKS = "SET_TRACKS";
export const LOG_IN = "LOG_IN";
export const SEARCH_LOADING = "SEARCH_LOADING";

const setTracks = tracks => ({ type: SET_TRACKS, data: tracks });
const searchLoading = () => ({ type: SEARCH_LOADING });

export const searchTracks = (token, query) => {
  return dispatch => {
    dispatch(searchLoading());
    fetch(`https://api.spotify.com/v1/search?q=${query}&type=track,artist`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.tracks) {
          dispatch(setTracks(data.tracks.items));
        } else {
          dispatch(setTracks([]));
        }
      });
  };
};

export const setTrack = trackNumber => {
  return {
    type: SET_TRACK,
    trackNumber: trackNumber
  };
};
