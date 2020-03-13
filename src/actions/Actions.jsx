export const SET_TRACK = "SET_TRACK";
export const SET_TRACKS = "SET_TRACKS";
export const LOG_IN = "LOG_IN";

const setTracks = tracks => ({ type: SET_TRACKS, data: tracks });

export const searchTracks = (token, query) => {
  return dispatch => {
    fetch(`https://api.spotify.com/v1/search?q=${query}&type=track,artist`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.tracks) {
          console.log(data);
        }
        dispatch(setTracks(data.tracks.items));
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };
};

export const setTrack = trackNumber => {
  return {
    type: SET_TRACK,
    trackNumber: trackNumber
  };
};
