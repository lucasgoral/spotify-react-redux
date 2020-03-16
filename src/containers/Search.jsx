import React, { useRef } from "react";
import { connect } from "react-redux";
import { searchTracks } from "../actions/Actions";

const mapDispatchToProps = dispatch => {
  return {
    search: (token, query) => {
      dispatch(searchTracks(token, query));
    }
  };
};

function mapStateToProps(state) {
  return {
    token: state.auth.access_token
  };
}

const Search = ({ token, search }) => {
  const searchInput = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    search(token, searchInput.current.value);
  };

  return (
    <div className="Search">
      <form onSubmit={handleSubmit} >
        <input name="search" ref={searchInput} className="Search__input" placeholder="Search"></input>
        <button type="submit" className="Search__bt">Search</button>
      </form>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
