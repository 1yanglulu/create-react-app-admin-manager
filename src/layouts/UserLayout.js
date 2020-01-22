import React, { Component, Fragment } from 'react';
import {Route,Switch,Link,Redirect} from 'react-router-dom'
import { Icon } from 'antd';
import DocumentTitle from 'react-document-title';
import GlobalFooter from '../components/GlobalFooter';
import './UserLayout.less';
import logo from '../assets/favicon.ico';
import Login from '../pages/Login/Login'
const copyright = (
  <Fragment>
    Copyright <Icon type="copyright" />2020 对庄数据中心
  </Fragment>
);

class UserLayout extends Component {
  componentDidMount() {
    // const {
    //   dispatch,
    //   route: { routes, authority },
    // } = this.props;
    // dispatch({
    //   type: 'menu/getMenuData',
    //   payload: { routes, authority },
    // });
  }

  render() {
    return (
      <DocumentTitle title='登录'>
        <div styleName='desc container'>
          <div styleName='login-top'>
            <div styleName='content'>
              <div styleName='top'>
                <div styleName='header'>
                  <Link to="/">
                    <img alt="logo" styleName='logo' src={logo} />
                    <span styleName='title'>对庄数据中心</span>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <Switch>
                <Route to='/login' render={()=>(<Login/>)}></Route>
              </Switch>
            </div>
          </div>
          <GlobalFooter  copyright={copyright} />
        </div>
      </DocumentTitle>
    );
  }
}

export default UserLayout
