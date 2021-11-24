import { useEffect, useState } from "react";

import Navbar from "../../../../components/navbar/Navbar";
import Sidebar from "../../../../components/sidebar/Sidebar";
import { ContextProvider } from "../../../../Context";
import api from "../../../../services/api";
import VideoPlayer from "../../../VideoPlayer";

import "./index.css";

const VideoCallClerk = () => {
  const [, setAccept] = useState(false);
  const [haveCall] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dataSource, setDataSource] = useState(null);

  const [aaa, setAaa] = useState(true);

  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  const answerCall = () => {
    // notify({
    //   message: "Chamando...",
    //   type: "success",
    //   delayTime: 1500,
    //   width: 500,
    //   shading: true,
    //   animation: {
    //     hide: { type: "fade", duration: 40, to: 0 },
    //     show: { type: "fade", duration: 400, to: 1, from: 0 },
    //   },
    // });
    setAccept(true);
  };

  return (
    <ContextProvider>
       <div className={aaa ? "container" : ""}>
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
        <main>
          <div className="container__video">
            <div className="video__wrapper">
              <div className="video__input1">
                <VideoPlayer />
              </div>
            </div>
          </div>
        </main>
        {aaa && (<Sidebar sidebarOpen={sidebarOpen} key="id" closeSidebar={closeSidebar} />)}
      </div>
    </ContextProvider>
  );
};
export default VideoCallClerk;
