import { combineReducers } from 'redux';
import { player } from './player';
import { auth } from './auth';
import { playlist } from './playlist'


export default combineReducers({
  player, auth, playlist
})