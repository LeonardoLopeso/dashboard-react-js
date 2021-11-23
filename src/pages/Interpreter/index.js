import "./index.css";
import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Reports from "../../components/reports";
import api from "../../services/api";
import Sidebar from "../../components/sidebar/Sidebar";
import notify from "devextreme/ui/notify";
import { Position, ToolbarItem } from "devextreme-react/data-grid";
import { Popup } from "devextreme-react";
import { FaPhoneAlt } from "react-icons/fa";

const AreaInterpreter = () => {
  const [userList, setUserList] = useState(null);
  const [user, setUser] = useState({
    user: {
      name: "",
    },
  });
  const [accept, setAccept] = useState(false);

  const [sidebarOpen, setSidebarOpen] = useState(false);
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const users = await api.get("/users");
    setUserList(users.data.filter((item) => item.active === 1));
    if (JSON.parse(localStorage.getItem("FLY@User"))) {
      setUser(JSON.parse(localStorage.getItem("FLY@User")));
    }
  }, []);

  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <main>
        <Popup
          visible={accept}
          onHiding={false}
          dragEnabled={false}
          closeOnOutsideClick={false}
          showCloseButton={false}
          showTitle={true}
          title="Nova Chamada"
          container=".dx-viewport"
          width={300}
          height={280}
        >
          <ToolbarItem
            widget="dxButton"
            toolbar="bottom"
            location="before"
            options={{ icon: "check", text: "Aceitar" }}
            onClick={() => {
              alert("Aceitou");
              setAccept(false);
            }}
          />
          <ToolbarItem
            widget="dxButton"
            toolbar="bottom"
            location="after"
            options={{ icon: "close", text: "Recusar" }}
            onClick={() => {
              alert("Recusou");
              setAccept(false);
            }}
          />
          <FaPhoneAlt size={128} />
        </Popup>
        <div className="main__container">
          <div className="main__title">
            <div className="main__greeting">
              <h1>Olá {user.user.name}</h1>
              <p>Bem vindo a área do Intérprete</p>
            </div>
          </div>
          <br />
          <div className="area__call">
            <div
              className="calling"
              onClick={() => {
                answerCall();
              }}
            >
              {/* Utilizar o notify para exibir as chamadas */}
              <h4>Chamando...</h4>
            </div>
          </div>
          <div className="reports-area">
            <Reports
              size={10}
              edit={true}
              destroy={true}
              source={userList}
              endpoint="users"
            />
          </div>
        </div>
      </main>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default AreaInterpreter;
