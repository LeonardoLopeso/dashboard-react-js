import Chart, {
    CommonSeriesSettings,
    Series,
    Aggregation,
    Point,
    ArgumentAxis,
    ValueAxis,
    Title,
    Font,
    Legend,
    Label,
    Tooltip,
    Grid,
    Export,
    ValueErrorBar,
    Pane,
  } from 'devextreme-react/chart';

  export const weatherData = [{
    month: 'Janeiro',
    avgT: 14.1,
    avgLowT: 9.1,
    avgHighT: 19.1,
    avgH: 70,
  }, {
    month: 'Fevereiro',
    avgT: 14.7,
    avgLowT: 9.8,
    avgHighT: 19.6,
    avgH: 74,
  }, {
    month: 'Março',
    avgT: 15.6,
    avgLowT: 10.6,
    avgHighT: 20.4,
    avgH: 79,
  }, {
    month: 'Abril',
    avgT: 16.8,
    avgLowT: 11.9,
    avgHighT: 21.7,
    avgH: 80,
  }, {
    month: 'Maio',
    avgT: 18.2,
    avgLowT: 13.6,
    avgHighT: 22.7,
    avgH: 83,
  }, {
    month: 'Junho',
    avgT: 20.2,
    avgLowT: 15.4,
    avgHighT: 25,
    avgH: 85,
  }, {
    month: 'Julho',
    avgT: 22.6,
    avgLowT: 17.3,
    avgHighT: 27.9,
    avgH: 86,
  }, {
    month: 'Agosto',
    avgT: 23,
    avgLowT: 17.7,
    avgHighT: 28.4,
    avgH: 86,
  }, {
    month: 'Semtembro',
    avgT: 22.3,
    avgLowT: 17,
    avgHighT: 27.7,
    avgH: 83,
  }, {
    month: 'Outubro',
    avgT: 20.1,
    avgLowT: 14.8,
    avgHighT: 25.3,
    avgH: 79,
  }, {
    month: 'Novembro',
    avgT: 17.2,
    avgLowT: 11.8,
    avgHighT: 22.7,
    avgH: 72,
  }, {
    month: 'Dezembro',
    avgT: 14.6,
    avgLowT: 9.5,
    avgHighT: 19.7,
    avgH: 68,
  }];

const Graphic = () => {

    function customizeTooltip(pointInfo) {
        return {
          text: `${pointInfo.seriesName}: ${pointInfo.value
          } (tempo: ${pointInfo.lowErrorValue
          } - ${pointInfo.highErrorValue})`,
        };
    }
    
    return (

        <Chart
            id="chart"
            dataSource={weatherData}
            defaultPane="bottom"
        >
        <CommonSeriesSettings argumentField="month" />
        <Series
          pane="top"
          valueField="avgT"
          name="Tempo médio da chamada, min"
        >
          <ValueErrorBar
            lowValueField="avgLowT"
            highValueField="avgHighT"
            lineWidth={1}
            opacity={0.8}
          />
        </Series>
        <Series
          pane="bottom"
          valueField="avgH"
          type="bar"
          name="Qtd. de chamadas, Uni."
        >
          <ValueErrorBar
            type="fixed"
            value={3}
            lineWidth={1}
          />
        </Series>

        <Pane name="top" />
        <Pane name="bottom" />

        <ArgumentAxis>
          <Label displayMode="stagger" />
        </ArgumentAxis>
        <ValueAxis pane="top">
          <Grid visible={true} />
          <Title text="Tempo Chamadas" />
        </ValueAxis>
        <ValueAxis
          tickInterval={50}
          pane="bottom"
        >
          <Grid visible={true} />
          <Title text="Qtd. Atend." />
        </ValueAxis>

        <Legend
          verticalAlignment="bottom"
          horizontalAlignment="center"
        />
        <Export enabled={true} />
        <Tooltip
          enabled={true}
          customizeTooltip={customizeTooltip}
        />
        {/* <Title text="" /> */}
      </Chart>
    )
}

export default Graphic;