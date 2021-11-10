import { useState } from 'react';

import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';

import './App.css';

// Link do vídeo base: https://youtu.be/g6YExOi0-Fc
// Vídeo parado em 1:02:53/1:45:11

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
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
}

export default App;
