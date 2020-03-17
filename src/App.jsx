import React from "react";
import "./scss/index.scss";
import Player from "./containers/Player";
import Playlist from "./containers/Playlist";
import SpotifyLogin from "react-spotify-login";
import Search from "./containers/Search";

import { connect } from "react-redux";
import { LOG_IN } from "./actions/Actions";
export const clientId = "6b073b0b3ab54889819e450880185561";

export const redirectUri =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/"
    : "http://lukgor.webd.pl/react-spotify/";

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

const App = ({ logged, logIn }) => {
  const onSuccess = response => {
    logIn(response.access_token);
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
