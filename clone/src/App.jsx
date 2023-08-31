import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Navbar from "./components/Navbar";
import "./App.css";
import { getVideo } from "./api/fetch";

function App() {


  const [videoList, setVideoList] = useState([])
  const [video, setVideo] = useState({})



  return (
    <div className="wrapper">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home videoList={videoList} video={video} setVideoList={setVideoList}/>} />
          <Route path="/about" element={<Aboutus />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
