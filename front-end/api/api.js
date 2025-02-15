import axios from "axios";

const URL = "http://localhost:3005";

const respArtists = await axios.get(`${URL}/artists`);
const respSongs = await axios.get(`${URL}/songs`);

export const artistsArray = respArtists.data;
export const songsArray = respSongs.data;

// console.log(artistsArray);
// console.log(songsArray);
