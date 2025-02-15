import React from "react";
import { Link, useParams } from "react-router-dom";
import Player from "../components/Player";
import { songsArray } from "../assets/database/songs";
import { artistsArray } from "../assets/database/artists";

const Song = () => {
  const { id } = useParams();
  const songObj = songsArray.filter(
    (currentSongObj) => currentSongObj._id === id
  )[0];
  const artistObj = artistsArray.filter(
    (currentArtistObj) => currentArtistObj.name === songObj.artist
  )[0];

  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === artistObj.name
  );

  const ramdomIndex = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );

  const ramdomIndex2 = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );

  const ramdomIdFromArtist = songsArrayFromArtist[ramdomIndex]._id;
  const ramdomId2FromArtist = songsArrayFromArtist[ramdomIndex2]._id;

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={songObj.image} alt={`Imagem da Música ${songObj.name}`} />
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
          <img
            width={75}
            height={75}
            src={artistObj.image}
            alt={`Imagem do Artista ${songObj.artist}`}
          />
        </Link>

        <Player
          duration={songObj.duration}
          ramdomIdFromArtist={ramdomIdFromArtist}
          ramdomId2FromArtist={ramdomId2FromArtist}
          audio={songObj.audio}
        />

        <div>
          <p className="song__name">{songObj.name}</p>
          <p>{songObj.artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
