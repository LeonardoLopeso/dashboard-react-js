import "./Sidebar.css";
import logo from "../../assets/avatar.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  // const [isActive, setActive] = useState(false);

  const navigate = useNavigate();

  const [, setDataPermissionUser] = useState(false);
  const [userInfo, setUserInfo] = useState("");

  useMemo(() => {
    setDataPermissionUser(JSON.parse(localStorage.getItem("FLY@User")));
  }, []);

  useEffect(() => {
    const arr = JSON.parse(localStorage.getItem("FLY@User"));
    if (!arr) {
      navigate("/");
    } else {
      setUserInfo(arr.user.name);
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
  const areaClerk = () => {
    navigate("/pclerk");
  };

  const areaInterprete = () => {
    navigate("/pinterpreter");
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
            <h1>{userInfo}</h1>
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
            <span>Home</span>
          </div>
          <h2>ADMIN</h2>
          <div className="sidebar__link" onClick={() => painel()}>
            <i className="fa fa-tachometer"></i>
            <span href="#">Painel Geral</span>
          </div>
          <div className="sidebar__link" onClick={() => areaClerk()}>
            <i className="fa fa-tachometer"></i>
            <span href="#">Painel Atendente</span>
          </div>
          <div className="sidebar__link" onClick={() => areaInterprete()}>
            <i className="fa fa-tachometer"></i>
            <span href="#">Painel Interprete</span>
          </div>
          <h2>CADASTROS</h2>
          {/* <div className="sidebar__link">
            <i className="fa fa-male"></i>
            <span href="#">Administradores</span>
          </div> */}
          <div className="sidebar__link">
            <i className="fa fa-user-circle"></i>
            <span href="#" onClick={() => usersRouter()}>
              Usuários
            </span>
          </div>
          <div className="sidebar__link">
            <i class="fa fa-window-maximize"></i>
            <span href="#" onClick={() => navigate("/totems")}>
              Totems
            </span>
          </div>
          <h2>RELATÓRIOS</h2>
          {/* <div className="sidebar__link">
            <i className="fa fa-users"></i>
            <span href="#">Atendimentos</span>
          </div> */}
          <div className="sidebar__link">
            <i className="fa fa-user-circle"></i>
            <span href="#">Atendimentos</span>
          </div>
          <div className="sidebar__logout" onClick={() => logoff()}>
            <br />
            <i className="fa fa-power-off"></i>
            <span href="#">Log out</span>
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
