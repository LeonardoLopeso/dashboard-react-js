import { useState } from 'react/cjs/react.development';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import './index.css';

const ReportCallVideo = () => {
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

    return (
        <div className="container">
            <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
            <main>
                <div className="report__wrapper">
                    <h3>Relatório do atendimento</h3>
                    {/* <h5>Descrição do atendimento</h5> */}
                    {/* <h4>Informe o atendimento</h4> */}
                    <div className="report__content">
                        <textarea placeholder="Informe como foi o atendimento..."></textarea>
                        <div className="report__align__button">
                            <button>Concluir</button>
                        </div>
                    </div>
                </div>
            </main>
            <Sidebar sidebarOpen={sidebarOpen} key="id" closeSidebar={closeSidebar} />
        </div>
    );
}

export default ReportCallVideo;