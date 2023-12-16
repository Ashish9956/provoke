import { useState } from "react";
import "./App.css";
import axios from "axios";
import VideoPlayer from './VideoPlayer';
import { useEffect } from "react";
function App() {

  const url='https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=the%20weeknd&key=AIzaSyDJMlrLeN43t0Sw_MMi_OmXq9M4CIRdpP0'
  const [Data,setData]=useState([]);
  const [loading,setloading]=useState(true);
  
  async function fetchData(){
    setloading(true);
    const{items}=await axios.get(url);
    console.log(items);
    setData(items);
    setloading(false);
  }
  useEffect(()=>{
    fetchData();
},[])


const videoIds='f1r0XZLNlGQ';
console.log("Video IDs:", videoIds);
  return (
    <div>
    <h1>Your YouTube Video Player</h1>
    <VideoPlayer videoId={videoIds} />
  </div>
  );
}

export default App;
