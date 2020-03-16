import React, { useRef } from "react";
import { connect } from "react-redux";
import { searchTracks, setTrack } from "../actions/Actions";

const mapDispatchToProps = dispatch => {
  return {
    search: (token, query) => {
      dispatch(searchTracks(token, query));
    },
    goToFirstTrack: () => {
      dispatch(setTrack(0));
    }
  };
};

function mapStateToProps(state) {
  return {
    token: state.auth.access_token,
    isLoading: state.playList.isLoading
  };
}

const Search = ({ token, search, goToFirstTrack, isLoading }) => {
  const searchInput = useRef();

  const handleSubmit = e => {
    e.preventDefault();

    search(token, searchInput.current.value);
    goToFirstTrack();
  };

  return (
    <div className="Search">
      <form onSubmit={handleSubmit} className="Search__form">
        <input
          name="search"
          ref={searchInput}
          className="Search__input"
          placeholder="Search"
        ></input>
        <button type="submit" className={`Search__bt`}>
          Search
        </button>
        {isLoading ? <span className="Search__loading"></span> : ""}
      </form>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
