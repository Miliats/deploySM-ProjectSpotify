import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://miliats:sM0210Db@miliatscluster.z5mwh.mongodb.net/?retryWrites=true&w=majority&appName=MiliatsCluster";
const client = new MongoClient(URI);

export const db = client.db("projectSpotify"); // Conexão com o Banco de Dados

// const artistsCollection = await db.collection("artists").find({}).toArray();
// const songsCollection = await db.collection("songs").find({}).toArray();

// console.log(artistsCollection);
// console.log(songsCollection);
