import './Sidebar.css';
import logo from '../../assets/avatar.jpg';
import { useNavigate } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  const [isActive, setActive] = useState(false);
  
  const navigate = useNavigate();

  const [dataPermissionUser, setDataPermissionUser] = useState(false);

  useMemo(() => {
    setDataPermissionUser(JSON.parse(localStorage.getItem('user')));
    console.log(JSON.parse(localStorage.getItem('user')));
  },[]);

  const logoff = () => {
    localStorage.clear();
    navigate('/');
  }

  const painel = () => {
    navigate('/dashboard');
  }

  const usersRouter = () => {
    navigate('/users');
  }

  return (
    <div className={sidebarOpen ? 'sidebar-responsive' : ''} id="sidebar">
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
          <div className="sidebar__link">
            <i className="fa fa-minus-square"></i>
            <a href="#">Home</a>
          </div>
          <h2>ADMIN</h2>
          <div className="sidebar__link">
            <i className="fa fa-tachometer"></i>
            <a href="#" onClick={() => painel()}>Painel geral</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-tachometer"></i>
            <a href="#" onClick={() => painel()}>Painel Atendente</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-tachometer"></i>
            <a href="#" onClick={() => painel()}>Painel Interprete</a>
          </div>
          <h2>PESSOAS</h2>
          <div className="sidebar__link">
            <i className="fa fa-male"></i>
            <a href="#">Administradores</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-user-circle"></i>
            <a href="#" onClick={() => usersRouter()}>Usuários</a>
          </div>
          <h2>RELATÓRIOS</h2>
          <div className="sidebar__link">
            <i className="fa fa-users"></i>
            <a href="#">Atendimentos</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-user-circle"></i>
            <a href="#">Atendimentos</a>
          </div>
          <div className="sidebar__logout" onClick={() => logoff()}>
            <i className="fa fa-power-off"></i>
            <a href="#">Log out</a>
          </div>
        </div>
      </div>
      <div className="copy__right" style={{color:"#FFF"}}>
        © Desenvolvido por Corps Teknologi {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Sidebar;
