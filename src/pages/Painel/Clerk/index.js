import { useEffect, useState } from "react";
import { DataGrid } from "devextreme-react/data-grid";

import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import api from "../../../services/api";

import "./index.css";

const PainelClerk = () => {
  const [, setAccept] = useState(false);
  const [haveCall] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dataSource, setDataSource] = useState(null);

  useEffect(() => {
    const getDataApi = async () => {
      const aa = await JSON.parse(localStorage.getItem("FLY@User"));
      const resp = await api.get(`/rooms/my/${aa.clerk.id}`);
      if (resp.status === 200) {
        // console.log("aaaaaaa");
        setDataSource(resp.data);
      }
    };
    getDataApi();
  }, []);

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
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <main>
        <div className="main__container">
          <div className="main__title">
            <div className="main__greeting">
              <p>Bem vindo a área do Atendente</p>
            </div>
          </div>
          <br />
          {haveCall && (
            <div className="area__call">
              <div
                className="calling"
                onClick={() => {
                  answerCall();
                }}
              >
                <h4>Chamando...</h4>
              </div>
            </div>
          )}
          <div className="reports-area">
            <DataGrid id="dataGrid" dataSource={dataSource}></DataGrid>
          </div>
        </div>
      </main>
      <Sidebar sidebarOpen={sidebarOpen} key="id" closeSidebar={closeSidebar} />
    </div>
  );
};
export default PainelClerk;
