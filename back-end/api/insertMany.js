import { artistsArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";
import { db } from "./connect.js";

const newArtistsArray = artistsArray.map((currentArtistObj) => {
  const newArtistObj = { ...currentArtistObj };
  delete newArtistObj.id;

  return newArtistObj;
});

const newSongsArray = songsArray.map((currentSongObj) => {
  const newSongObj = { ...currentSongObj };
  delete newSongObj.id;

  return newSongObj;
});

const respArtists = await db.collection("artists").insertMany(newArtistsArray);
const respSongs = await db.collection("songs").insertMany(newSongsArray);

// console.log(newArtistsArray);
// console.log(newSongsArray);

// console.log(respArtists);
// console.log(respSongs);
