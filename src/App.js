import React from 'react';
import LoginDemo from './layouts/UserLayout'
// import MainDemo from './layouts/BasicLayout'
import {HashRouter as Router,Route,Switch,withRouter,Redirect} from 'react-router-dom'
// import { Switch } from 'antd';
// import NotFound from './NotFound'
// import axios from 'axios'
import Media from 'react-media';
import * as api from './apiConfig/api'
// import Login from './pages/Login/Login'
import MainDemo from './pages/Main'
import './App.less';
React.api=api
class App extends React.Component {
  state={
    loggedIn:false,
  }
  getAuth=()=>{
    if(localStorage.getItem("isLogin")){
      const obj=JSON.stringify(localStorage.getItem("isLogin"))
      this.setState({
        loggedIn:obj.islogin
      })
    }else{
      this.setState({
        loggedIn:true
      },
      ()=>{
        const obj={}
        obj['islogin']=this.state.loggedIn
        localStorage.setItem("isLogin",JSON.stringify(obj))
      })
    }
  }
  componentDidMount(){
    // React.$axios('get','http://localhost:3000/list.json').then(res=>{
    //   console.log("res",res)
    // })
    this.getAuth()

  }
  unauth() {
    return <LoginDemo/>
  }
  authed() {

    return (
      <Router>
        <div styleName="App">
        <Switch>
          <Route path='/' render={()=>(
            <Media query="(max-width: 599px)">
              {isMobile => <MainDemo isMobile={isMobile} />}
            </Media>
          )}/>
        </Switch>
        </div>
      </Router>
    );
  }
  render() {
    const {state,props}=this
    console.log('props',props)
    console.log('process.env.NODE_ENV',process.env.NODE_ENV)
    return state.loggedIn ? this.authed():this.unauth()
  }
}

export default  withRouter(App)