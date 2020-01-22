import React from "react";
import {
  // G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  // Coord,
  // Label,
  Legend,
  // View,
  // Guide,
  // Shape,
  // Facet,
  // Util
} from "bizcharts";
import TitleContext from '../InnerPageContainer/titleContenxt';
import DataSet from "@antv/data-set";
import './index.less'
class Basic extends React.Component {
  static contextType=TitleContext
  componentDidMount(){
    this.context.updateTitle("单折线图页")
  }
  render() {
    const data = [
      {
        date: '2019-12-11',
        shareUser: 400,
        shareTimes: 300,
        register: 150,
        loginUser: 100,
        viUser: 100,
        buyer: 100,
        paymentamount: 3000,
      },
      {
        date: '2019-12-12',
        shareUser: 500,
        shareTimes: 400,
        register: 350,
        loginUser: 300,
        viUser: 200,
        buyer: 200,
        paymentamount: 5000,
      },
      {
        date: '2019-12-13',
        shareUser: 600,
        shareTimes: 400,
        register: 350,
        loginUser: 300,
        viUser: 200,
        buyer: 200,
        paymentamount: 5000,
      },
      {
        date: '2019-12-14',
        shareUser: 300,
        shareTimes: 200,
        register: 150,
        loginUser: 100,
        viUser: 100,
        buyer: 100,
        paymentamount: 2000,
      }
    ];
    const chartFilterConfigs = {
      shareUser:{
        text:'分享人数',
      },
      shareTimes:{
        text:'分享次数',
      },
      register:{
        text:'被邀请人注册数',
      },
      loginUser:{
        text:'被邀请人登录数',
      },
      viUser:{
        text:'有效行为人数',
      },
      buyer:{
        text:'购买人数',
      },
      paymentamount:{
        text:'销售额',
      }
    };
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: "fold",
      fields:Object.keys(chartFilterConfigs),
      // 展开字段集
      key: "item",
      // key字段
      value: "value" // value字段
    });
    const cols = {
      date:{
        alias:'日期',
        type:'timeCat',
        tickCount: Math.min(14, data.length + 2),
      },
      value:{
        nice: true,
        min: dv.rows.some(v => v.value < 0) ? undefined : 0,
      },
      item:{
        formatter(val) {
          let arr=Object.keys(chartFilterConfigs);
          for(let i=0;i<arr.length;i++){
            if(arr[i]===val){
              return chartFilterConfigs[arr[i]].text;
            }
          }
        }
      }
    };
    return (
      <div>
        <Chart height={400} data={dv} scale={cols} forceFit filter={[['item',val=>{return val!=='paymentamount'}]]}>
          <Axis name="date" />
          <Axis name="value" />
          <Legend/>
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom type="line" position="date*value" size={2} color='item' shape={"smooth"}/>
          <Geom
            type="point"
            position="date*value"
            size={4}
            shape={"circle"}
            style={{
              stroke: "#fff",
              lineWidth: 1
            }}
            color='item'
          />
        </Chart>
      </div>
    );
  }
}
export default Basic
