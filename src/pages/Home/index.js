import React from 'react';
// import { Layout, Menu, Icon,Radio } from 'antd';
// import moment, { Moment } from 'moment';
// import UintRange from '../RangePicker'
import './index.less'
// const { Header, Sider, Content } = Layout;
import PageWrapper from '../InnerPageContainer';

import TitleContext from '../InnerPageContainer/titleContenxt';

const  formatItem=[
  {dataType:'d',mode:['date','date'],format:'YYYY-MM-DD'},
  {dataType:'w',mode:['date','date'],format:'YYYY-W周'},
  {dataType:'m',mode:['month','month'],format:'YYYY-MM'},
  {dataType:'y',mode:['year','year'],format:'YYYY'},
]
class HomeDemo extends React.Component {
  static contextType = TitleContext;
  state = {
    collapsed: false,
    selectValue: [],
    rangeParm:{
      mode:['date','date'],
      dataType:'d'
    }
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleTypeChange = e => {
    console.log("e",e);
    for(let i=0;i<formatItem.length;i++){
      if(e.target.value===formatItem[i].dataType){
        this.setState({
          rangeParm:formatItem[i]
        });
      }
    }
  };

  handleChange = value => {
    console.log('handleChange', value)
    this.setState({ selectValue:value })
  }
  componentDidMount(){
    // React.$axios('get','http://localhost:3000/list.json').then(res=>{
    //   console.log("homeres",res)
    // })
    // this.context('首页标题33333');
    this.context.updateTitle('首页标题33333')
  }




  render() {
    const {state,props} = this
    return (

      <div styleName='home-page-container'>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页</h1>
        <h1>我是home页{this.context.isMobile?"我是手机端":"我是PC端"}</h1>
      </div>
    );
  }
}

export default HomeDemo;