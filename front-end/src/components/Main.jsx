import React from "react";
import ItemList from "./ItemList";
import { artistsArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = ({ type }) => {
  return (
    <div className="main">
      {/* ItemList de Artistas */}
      {type === "artists" || type === undefined ? (
        <ItemList
          title="Artistas"
          items={10}
          itemsArray={artistsArray}
          path="/artists"
          idPath="/artist"
        />
      ) : (
        <></>
      )}

      {/* ItemList de Músicas */}
      {type === "songs" || type === undefined ? (
        <ItemList
          title="Músicas"
          items={20}
          itemsArray={songsArray}
          path="/songs"
          idPath="/song"
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Main;
