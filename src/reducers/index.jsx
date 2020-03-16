import { combineReducers } from "redux";
import { player } from "./player";
import { auth } from "./auth";
import { playList } from "./playList";

export default combineReducers({
  player,
  auth,
  playList
});
