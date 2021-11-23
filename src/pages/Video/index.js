import { ContextProvider } from "../../Context";
import VideoPlayer from "../VideoPlayer";
import "./index.css";

const Video = () => {
  return (
    <ContextProvider>
      <div className="container__video">
        <div className="video__wrapper">
          <div className="video__input1">
            <VideoPlayer />
          </div>
        </div>
      </div>
    </ContextProvider>
  );
};

export default Video;
