import "./Main.css";
import Chart from "../charts/Chart";
import { RiUserVoiceLine, RiTimer2Line } from "react-icons/ri";
import { BsCalendar2Month } from "react-icons/bs";
import { CgScreen } from "react-icons/cg";
import { DataGrid } from "devextreme-react";
import { Column } from "devextreme-react/data-grid";
// import { useEffect, useMemo, useState } from "react";

const Main = () => {
  return (
    <main>
      <div className="main__container">
        {/* <div className="main__title">
          <div className="main__greeting">
            <h1>Olá</h1>
            <p> Bem vindo ao seu painel</p>
          </div>
        </div> */}

        <div className="main__cards">
          <div className="card">
            <RiUserVoiceLine size="32" />
            <div className="card_inner">
              <p className="text-primary-p">Total de atendimentos</p>
              <span className="font-bold text-title">2</span>
            </div>
          </div>

          <div className="card">
            <BsCalendar2Month size="32" />
            <div className="card_inner">
              <p className="text-primary-p">Atendimentos do mês</p>
              <span className="font-bold text-title">3</span>
            </div>
          </div>

          <div className="card">
            <RiTimer2Line size="32" />
            <div className="card_inner">
              <p className="text-primary-p">Tempo médio de atendimento</p>
              <span className="font-bold text-title">25.5</span>
            </div>
          </div>

          <div className="card">
            <CgScreen size="32" />
            <div className="card_inner">
              <p className="text-primary-p">Qtd De Totens</p>
              <span className="font-bold text-title">1</span>
            </div>
          </div>
        </div>

        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Gráfico Mensal</h1>
                <p>Natal, RN</p>
              </div>
              {/* <i className="fa fa-usd"></i> */}
            </div>
            <Chart />
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Relatório</h1>
                <p>Natal, RN</p>
              </div>
              {/* <i className="fa fa-area-chart"></i> */}
            </div>
            <DataGrid allowColumnReordering={true} key="id">
              <Column
                dataField="id"
                caption={"ID"}
                dataType="number"
                alignment={"left"}
              />
              <Column
                alignment={"center"}
                dataField="id"
                caption={"Duração"}
                dataType="number"
              ></Column>
              <Column
                dataField="clerk.name"
                caption={"Atendente"}
                dataType="string"
                alignment={"center"}
              />
              <Column
                dataField="totem.name"
                caption={"Totem"}
                dataType="string"
                alignment={"center"}
              />
              <Column
                dataField="createdAt"
                alignment={"right"}
                caption={"Data"}
                dataType="date"
              />
            </DataGrid>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
