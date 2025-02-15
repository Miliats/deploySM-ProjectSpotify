import axios from "axios";

// const { NODE_ENV } = process.env;
// const URL = NODE_ENV === "development" ? "http://localhost:3005/api" : "/api";

const URL = "http://localhost:3005/api";

const respArtists = await axios.get(`${URL}/artists`);
const respSongs = await axios.get(`${URL}/songs`);

export const artistsArray = respArtists.data;
export const songsArray = respSongs.data;

// console.log(artistsArray);
// console.log(songsArray);
