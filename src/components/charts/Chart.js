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
  Format,
} from 'devextreme-react/chart';

export const continentSources = [
  { value: 'TmpChamada', name: 'Tempo Chamada' },
  { value: 'QtdAtend', name: 'Quantidade Atendimento' },
];

export const populationData = [{
  time: '1',
  TmpChamada: 15,
  QtdAtend: 43,
}, {
  time: '2',
  TmpChamada: 5,
  QtdAtend: 50,
}, {
  time: '3',
  TmpChamada: 8,
  QtdAtend: 32,
  
}, {
  time: '4',
  TmpChamada: 16,
  QtdAtend: 55,
}, {
  time: '5',
  TmpChamada: 4,
  QtdAtend: 32,
}, {
  time: '6',
  TmpChamada: 15,
  QtdAtend: 28,
}, {
  time: '7',
  TmpChamada: 22,
  QtdAtend: 27,
}];


const Graphic = () => {  
  return (
    <Chart
      id="chart"
      palette="Vintage"
      dataSource={populationData}
    >
      <CommonSeriesSettings
        argumentField="time"
        type="fullstackedbar"
      />
      {
        continentSources.map((item) => <Series
          key={item.value}
          valueField={item.value}
          name={item.name} />)
      }
      <Series
        axis="TmpChamada"
        type="spline"
        valueField="TmpChamada"
        name="Variação"
        color="#008fd8"
      />

      <ValueAxis>
        <Grid visible={true} />
      </ValueAxis>
      <ValueAxis
        name="TmpChamada"
        position="right"
        title="Tempo Chamadas"
      >
        <Grid visible={true} />
      </ValueAxis>

      <Legend
        verticalAlignment="bottom"
        horizontalAlignment="center"
      />
      <Export enabled={true} />
      <Tooltip
        enabled={true}
        shared={true}
        customizeTooltip={customizeTooltip}
      >
        <Format
          type="largeNumber"
          precision={1}
        />
      </Tooltip>
      <Title text="" />
    </Chart>
  );
}

function customizeTooltip(pointInfo) {
  const items = pointInfo.valueText.split('\n');
  const color = pointInfo.point.getColor();

  items.forEach((item, index) => {
    if (item.indexOf(pointInfo.seriesName) === 0) {
      const element = document.createElement('span');

      element.textContent = item;
      element.style.color = color;
      element.className = 'active';

      items[index] = element.outerHTML;
    }
  });

  return { text: items.join('\n') };
}

export default Graphic;