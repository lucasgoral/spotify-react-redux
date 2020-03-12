import React from "react";
import "./scss/App.scss";
import Player from "./components/Player";
import Playlist from "./components/Playlist";
import SpotifyLogin from "react-spotify-login";
import Search from "./containers/Search";

import { connect } from "react-redux";
import { SET_TRACKS, LOG_IN } from "./actions/Actions";
export const clientId = "a256c7c1a8f645d7878d3b9b6eefe11b";

export const redirectUri =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/"
    : "http://lukgor.webd.pl/react/";

// const getPlaylist = (token, dispatch) => {
//   fetch(
//     "https://api.spotify.com/v1/artists/57vWImR43h4CaDao012Ofp/top-tracks?country=SE",
//     {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     }
//   )
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       dispatch({ type: SET_TRACKS, data: data.tracks });
//     });
// };
const mapDispatchToProps = dispatch => {
  return {
    logIn: data => {
      dispatch({ type: LOG_IN, data: data });
    },
    dispatch: data => {
      dispatch(data);
    }
  };
};

function mapStateToProps(state) {
  return {
    logged: state.auth.logged
  };
}

const App = ({ logged, logIn, dispatch }) => {
  const onSuccess = response => {
    logIn(response.access_token);
    // getPlaylist(response.access_token, dispatch);
  };
  const onFailure = response => {
    console.error(response);
  };

  if (!logged) {
    return (
      <div className="App">
        <SpotifyLogin
          className="spotify-bt"
          clientId={clientId}
          redirectUri={redirectUri}
          onSuccess={onSuccess}
          onFailure={onFailure}
        />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Search />
        <Player />
        <Playlist />
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
