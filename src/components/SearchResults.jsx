import React from "react";
import "./SearchResults.css";
import { Link } from "react-router-dom";

const SearchResults = ({ videoList }) => {
  return (
    <div className="searchResults">
      {videoList.map((video) => (
        <Link key={video.id.videoId} to={`/show/${video.id.videoId}`}>
          <div className="videoCard">
            <img
              src={video.snippet.thumbnails.default.url}
              alt={video.snippet.title}
            />
            <p>{video.snippet.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
