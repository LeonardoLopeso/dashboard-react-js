import './index.css';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { useEffect, useState } from 'react';
import Reports from '../../components/reports';
import api from '../../services/api';

const Users = () => {

    const [userList, setUserList] = useState(null);

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const openSidebar = () => {
        setSidebarOpen(true);
    };
    const closeSidebar = () => {
        setSidebarOpen(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( async () => {
        const users = await api.get("/users");
        console.log("---",users.data)
        setUserList(users.data.filter((item) => item.active === 1));
        // console.log(userList);
    },[]);

    return (
        <div className="container">
            <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
            <main>
                <div className="main__container">
                    <div className="main__title">
                        <div className="main__greeting">
                            <h1>Olá Corpstek</h1>
                            <p>Bem vindo a área do usuário</p>
                        </div>
                    </div>
                    <br/>
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
}

export default Users;