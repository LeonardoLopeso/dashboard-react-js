import React, { useContext } from 'react';
import './index.css';

import { SocketContext } from '../../Context';

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  // const classes = useStyles();

  return (
    <div className="video__container">
      {stream && (
        <div className="video__wrapper">
          <div className="video__input1">
            <video muted ref={myVideo} autoPlay />
          </div>
        </div>
      )}
      {stream && (
        <div className="video__wrapper">
          <div className="video__input2">
            <video muted ref={myVideo} autoPlay />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
