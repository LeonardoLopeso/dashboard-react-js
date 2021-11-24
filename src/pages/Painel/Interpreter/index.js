import { useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
const PainelInterpreter = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <>
      <div className="container">
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
        <main>
          <div className="main__container">
            <div className="main__title">
              <div className="main__greeting">
                <p>Bem vindo a área do Intérprete</p>
              </div>
            </div>
            <br />
            <div className="area__call">
              <div className="calling" onClick={() => {}}>
                {/* Utilizar o notify para exibir as chamadas */}
                <h4>Chamando...</h4>
              </div>
            </div>
            <div className="reports-area"></div>
          </div>
        </main>
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      </div>
    </>
  );
};

export default PainelInterpreter;
