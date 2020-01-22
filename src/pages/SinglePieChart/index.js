import React from 'react'
// import ReactDOM from 'react-dom';
// import moment, { Moment } from 'moment';
import './index.less'
import {
  // G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  // View,
  // Guide,
  // Shape,
  // Facet,
  // Util
} from "bizcharts";
import DataSet from "@antv/data-set";
import TitleContext from '../InnerPageContainer/titleContenxt';
import apiClient from '@/apiConfig/api'
const { DataView } = DataSet;
const data = [
  { item: '事例一', count: 40 },
  { item: '事例二', count: 21 },
  { item: '事例三', count: 17 },
  { item: '事例四', count: 13 },
  { item: '事例五', count: 9 }
];

class SinglePieChart extends React.Component{
  state = {}

  componentDidMount(){
    console.log("innerHeight",window.innerHeight)
    apiClient('get','http://localhost:3000/list.json').then(res=>{
      console.log("pieres",res)
    })
    this.context.updateTitle("单个饼图页")
  }
  render() {
    // const {state,props} = this;
    const dv = new DataView();
    dv.source(data).transform({
      type: 'percent',
      field: 'count',
      dimension: 'item',
      as: 'percent'
    });
    const cols = {
      percent: {
        formatter: val => {
          val = (val * 100) + '%';
          return val;
        }
      }
    }
    return (
      // <PageWrapper title={'单饼图页'}>
        <div className='outer-home-page-container'>
          <Chart height={500} data={dv} scale={cols} padding={[ 80, 80, 80, 80 ]} forceFit>
            <Coord type='theta' radius={0.75} />
            <Axis name="percent" />
            <Legend position='bottom-center' offsetY={0} offsetX={0} />
            <Tooltip
              showTitle={false}
              itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
              />
            <Geom
              type="intervalStack"
              position="percent"
              color='item'
              tooltip={['item*percent',(item, percent) => {
                percent = percent * 100 + '%';
                return {
                  name: item,
                  value: percent
                };
              }]}
              style={{lineWidth: 1,stroke: '#fff'}}
              >
              <Label content='percent' formatter={(val, item) => {
                  return item.point.item + ': ' + val;}} />
            </Geom>
          </Chart>
        </div>
      // </PageWrapper>
    )
  }
}
SinglePieChart.contextType=TitleContext
export default SinglePieChart
