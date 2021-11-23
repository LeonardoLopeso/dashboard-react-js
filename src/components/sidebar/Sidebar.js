import "./Sidebar.css";
import logo from "../../assets/avatar.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  // const [isActive, setActive] = useState(false);

  const navigate = useNavigate();

  const [, setDataPermissionUser] = useState(false);

  useMemo(() => {
    setDataPermissionUser(JSON.parse(localStorage.getItem("FLY@User")));
  }, []);

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("FLY@User"))) {
      navigate("/");
    }
  }, [navigate]);

  const logoff = () => {
    localStorage.clear();
    navigate("/");
  };

  const dashboard = () => {
    navigate("/dashboard");
  };

  const painel = () => {
    navigate("/dashboard");
  };

  const areaInterprete = () => {
    navigate("/interpreter");
  };

  const usersRouter = () => {
    navigate("/users");
  };

  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div>
        <div className="sidebar__title">
          <div className="sidebar__img">
            <img src={logo} alt="logo" />
            <h1>Corpstek</h1>
          </div>

          <i
            onClick={() => closeSidebar()}
            className="fa fa-times"
            id="sidebarIcon"
            aria-hidden="true"
          ></i>
        </div>
        <div className="sidebar__menu">
          <div className="sidebar__link" onClick={() => dashboard()}>
            <i className="fa fa-minus-square"></i>
            <spam>Home</spam>
          </div>
          <h2>ADMIN</h2>
          <div className="sidebar__link" onClick={() => painel()}>
            <i className="fa fa-tachometer"></i>
            <spam href="#">Painel geral</spam>
          </div>
          <div className="sidebar__link" onClick={() => painel()}>
            <i className="fa fa-tachometer"></i>
            <spam href="#">Painel Atendente</spam>
          </div>
          <div className="sidebar__link" onClick={() => areaInterprete()}>
            <i className="fa fa-tachometer"></i>
            <spam href="#">Painel Interprete</spam>
          </div>
          <h2>PESSOAS</h2>
          <div className="sidebar__link">
            <i className="fa fa-male"></i>
            <spam href="#">Administradores</spam>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-user-circle"></i>
            <spam href="#" onClick={() => usersRouter()}>
              Usuários
            </spam>
          </div>
          <h2>RELATÓRIOS</h2>
          <div className="sidebar__link">
            <i className="fa fa-users"></i>
            <spam href="#">Atendimentos</spam>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-user-circle"></i>
            <spam href="#">Atendimentos</spam>
          </div>
          <div className="sidebar__logout" onClick={() => logoff()}>
            <i className="fa fa-power-off"></i>
            <spam href="#">Log out</spam>
          </div>
        </div>
      </div>
      <div className="copy__right" style={{ color: "#FFF" }}>
        © Desenvolvido por Corps Teknologi {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Sidebar;
