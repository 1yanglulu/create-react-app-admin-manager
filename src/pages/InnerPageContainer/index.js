import React from 'react';
import {PageHeader } from 'antd';
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import * as pageRoute from '@/pageRouter'
import GlobalFooter from '@/layouts/Footer';
import TitleContext from './titleContenxt';
import './index.less'



class PageWapper extends React.Component{

  state = {
    title: '默认标题',
  }
  getContext2(){
    return{
      updateTitle:this.updateTitle,
      isMobile:this.props.isMobile
    }
  }
  updateTitle = (title) => {
    this.setState({
      title,
    })
  }

  renderPage=()=>{
    return(
      <Switch>
        <Route path={`/data${pageRoute.RouteMap.首页.path}`} component={pageRoute.RouteMap.首页.component} exact/>
        <Route path={`/data${pageRoute.RouteMap.饼图页.path}`} component={pageRoute.RouteMap.饼图页.component} />
        <Route path={`/data${pageRoute.RouteMap.柱状图页.path}`} component={pageRoute.RouteMap.柱状图页.component} />
        <Route path={`/data${pageRoute.RouteMap.折线图页.path}`} component={pageRoute.RouteMap.折线图页.component} />
        <Route path={`/data${pageRoute.RouteMap.多折线图页.path}`} component={pageRoute.RouteMap.多折线图页.component} />
        <Redirect to={`/data${pageRoute.RouteMap.首页.path}`}/>
      </Switch>
    )
  }
  render(){
    // const {props}=this
    console.log("this.props.isMobile",this.props.isMobile)
    return(
      <TitleContext.Provider value={this.getContext2()}>
        <div styleName='page-container-outer-scroll'>
          <PageHeader
            style={{background: '#fff',padding:'12px 20px',}}
            styleName='page-header'
            title={this.state.title}
          />
          <div styleName='page-container'>
            {this.renderPage()}
          </div>
          <GlobalFooter />
        </div>
      </TitleContext.Provider>
    )
  }
}
export default PageWapper