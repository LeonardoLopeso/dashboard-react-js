import { useState } from 'react';

import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';

import './App.css';

// Link do vídeo base: https://youtu.be/g6YExOi0-Fc
// react-vis is library to graphics

const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  }

  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Main />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
}

export default App;
