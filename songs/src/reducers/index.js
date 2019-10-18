import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Chasing Cars', duration: '3:05'},
    { title: 'No Scrubs', duration: '4:00'},
    { title: 'All Star', duration: '3:15'},
    { title: 'I Want it That Way', duration: '1:40'}
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});