import React from "react";
import { connect } from "react-redux";
import { setTrack } from "./../actions/Actions";

const mapStateToProps = state => {
  return {
    tracks: state.playlist.tracks,
    active: state.player.trackNumber
  };
};

const Playlist = ({ tracks, dispatch, active }) => {
  return (
    <div className="Playlist">
      {tracks.length === 0 ? (
        <p className="Playlist__error">No results. Please use search field.</p>
      ) : null}

      <ul className="Playlist__list">
        {tracks.map((track, index) => {
          if (track.preview_url) {
            return (
              <li key={track.id}>
                <button
                  className={
                    active === index
                      ? "Playlist__item active"
                      : "Playlist__item"
                  }
                  onClick={() => {
                    dispatch(setTrack(index));
                  }}
                >
                  <div
                    className="Playlist__image"
                    style={{
                      backgroundImage: `url("${track.album.images[0].url}")`
                    }}
                  />

                  <div className="Playlist__info">
                    <h3>{track.artists[0].name}</h3>
                    <h4>{track.name}</h4>
                  </div>
                </button>
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps)(Playlist);
