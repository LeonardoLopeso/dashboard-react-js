import React, { useContext, useState } from "react";
import { SocketContext } from "../../Context";
import {
  FaMicrophoneSlash,
  FaPhoneAlt,
  FaPhoneSlash,
  FaMicrophone,
} from "react-icons/fa";

import "./index.css";
const VideoPlayer = () => {
  // eslint-disable-next-line no-unused-vars
  const { callAccepted, myVideo, userVideo, callEnded, stream, call, callEnd } =
    useContext(SocketContext);

  const [muted, setMuted] = useState(false);

  return (
    <>
      <div className="video__container">
        <div className="video__wrapper">
          {stream && (
            <div className="video__wrapper">
              <div className="video__input1">
                <video muted={muted} ref={myVideo} autoPlay />
              </div>
            </div>
          )}
          {callAccepted && callEnded ? (
            <div className="video__wrapper">
              <div className="video__input2">
                <video muted ref={userVideo} controls autoPlay />
              </div>
            </div>
          ) : (
            <h1 style={{ color: "#999", width: "400px" }}>
              <FaPhoneAlt /> &nbsp; Chamando...
            </h1>
          )}
        </div>
        <div className="video__bottoms">
          <div className="btn__video">
            {muted ? (
              <FaMicrophoneSlash
                id="muteTwo"
                onClick={() => {
                  setMuted(!muted);
                }}
              />
            ) : (
              <FaMicrophone
                id="mute"
                onClick={() => {
                  setMuted(!muted);
                }}
              />
            )}
            <FaPhoneSlash id="closeTwo" onClick={callEnd} />
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
