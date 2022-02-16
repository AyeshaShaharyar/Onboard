import React from "react";
// import "./styles.css";
// import YoutubeEmbed from "./videoYoutube";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default function Video() {
  return (
    <div className="App">
      <h1>VIDEO</h1>
      <YoutubeEmbed embedId="2p9sIugbIwo" />
    </div>
  );
}

// styles.css
// .video-responsive {
//   overflow: hidden;
//   padding-bottom: 56.25%;
//   position: relative;
//   height: 0;
// }

// .video-responsive iframe {
//   left: 0;
//   top: 0;
//   height: 100%;
//   width: 100%;
//   position: absolute;
// }
