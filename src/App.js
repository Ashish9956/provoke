import { useState } from "react";
import "./App.css";
import axios from "axios";
import VideoPlayer from "./VideoPlayer";

function App() {
  const [list, setList] = useState("");
  const [videoIds, setVideoId] = useState("");

  const handle = (e) => {
    setList(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setVideoId(list);
  };

  console.log("Video IDs:", videoIds);

  return (
    <div>
      <h1>Your YouTube Video Player</h1>
      <form onSubmit={handleSearch}>
        <input type="text" value={list} onChange={handle} />
        <button type="submit">Search</button>
      </form>
      <VideoPlayer videoId={videoIds} />
    </div>
  );
}

export default App;
