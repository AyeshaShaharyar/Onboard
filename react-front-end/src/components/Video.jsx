import React from "react";
import "./styles.css";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ url }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={url}
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

export default function Video(props) {
  const url = props.url;
  return (
    <div className="App">
      <YoutubeEmbed url={url} />
    </div>
  );
}
