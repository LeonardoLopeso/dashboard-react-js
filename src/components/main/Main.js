import './Main.css';
import Chart from '../charts/Chart';

const Main = () => {
    return (
        <main>
            <div className="main__container">
                <div className="main__title">
                    <div className="main__greeting">
                        <h1>Olá Leoanrdo Lopes</h1>
                        <p>Bem vindo ao seu painel</p>
                    </div>
                </div>

                <div className="main__cards">
                    <div className="card">
                        <i className="fa fa-file-text fa-2x text-lightblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Métrica 01</p>
                            <span className="font-bold text-title">578</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-money fa-2x text-red"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Métrica 02</p>
                            <span className="font-bold text-title">25</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-archive fa-2x text-yellow"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Métrica 03</p>
                            <span className="font-bold text-title">150</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-bars fa-2x text-green"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Métrica 04</p>
                            <span className="font-bold text-title">55</span>
                        </div>
                    </div>                    
                </div>

                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Daily Reports</h1>
                                <p>Natal, RN</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>
                        <Chart />
                    </div>

                    <div className="charts__right">

                        <div className="charts__right__title">
                            <div>
                                <h1>Daily Reports</h1>
                                <p>Natal, RN</p>
                            </div>
                            <i className="fa fa-area-chart"></i>
                        </div>
                        
                        <div className="charts__right__cards">
                            <div className="card1">
                                <h1>Lucro</h1>
                                <p>R$ 2500,00</p>
                            </div>
                            <div className="card2">
                                <h1>Pagamentos</h1>
                                <p>R$ 250,00</p>
                            </div>
                            <div className="card3">
                                <h1>Custo de Hospedagem</h1>
                                <p>R$ 150,00</p>
                            </div>
                            <div className="card4">
                                <h1>Banco de Dados</h1>
                                <p>R$ 190,00</p>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </main>
    );
};

export default Main;