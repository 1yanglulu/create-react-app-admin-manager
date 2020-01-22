import React from 'react';
// import { renderRoutes } from 'react-router-config'
// import { matchRoutes, renderRoutes, RouteConfig } from 'react-router-config';
import { Layout, Menu, Icon,Drawer,Avatar ,Spin} from 'antd';
import {
  Link,
} from "react-router-dom";

import classNames from 'classnames';
import { ContainerQuery } from 'react-container-query';
import Context from '@/layouts/MenuContext';
import * as pageRoute from '@/pageRouter'
// <Route component={ErrorPage}/>

// import GolbalHeader from '@/layouts/Header';
// import GlobalHeader from '@/components/GlobalHeader'
import PageWrapper from '../InnerPageContainer'
import HeaderDropdown from '@/components/HeaderDropdown'
import logo from '@/assets/favicon.ico'
import * as utils from '../../utils/utils'
import './index.less';
import { hidden } from 'ansi-colors';
// import renderRoutes from '../utils/renderRoutes'
const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;
// const authed = false // 如果登陆之后可以利用redux修改该值(关于redux不在我们这篇文章的讨论范围之内）
// const authPath = '/login'
class SiderDemo extends React.Component {
  state = {
    collapsed: false,
    navTheme: "dark",
    menuData:[],
  };
  // {renderRoutes(routes)}

          //登陆之后返回原先要去的页面login函数
// login(){
//     const { from } = this.props.location.state || { from: { pathname: '/' } }
//      // authed = true // 这部分逻辑自己写吧。。。
//     this.props.history.push(from.pathname)
// }
getLayoutStyle = () => {
    // const { fixSiderbar, isMobile, collapsed, layout } = this.props;
    const fixSiderbar=false;
    const layout="sidemenu";
    const {isMobile}=this.props;
    if (fixSiderbar && layout !== 'topmenu' && !isMobile) {
      return {
        paddingLeft: this.state.collapsed ? '80px' : '256px',
      };
    }
    return null;
};
toggle = () => {
  this.setState({
    collapsed: !this.state.collapsed,
  });
};
handleMenuCollapse = collapsed => {
  this.setState({
    collapsed:!collapsed
  })
};
// handleMenuClick = ({ key }) => {
//     // const { dispatch } = this.props;
//     // if (key === 'userCenter') {
//     //   router.push('/account/center');
//     //   return;
//     // }
//     // if (key === 'triggerError') {
//     //   router.push('/exception/trigger');
//     //   return;
//     // }
//     // if (key === 'userinfo') {
//     //   router.push('/account/settings/base');
//     //   return;
//     // }
//     // if (key === 'logout') {
//     //   dispatch({
//     //     type: 'login/logout',
//     //   });
//     // }
//   };
getContext() {
  return {
    // isMobile:this.props.isMobile
  }
}

handleMenuClick = ({key})=> {
  // const { dispatch } = this.props;
  // if (key === 'userCenter') {
  //   router.push('/account/center');
  //   return;
  // }
  // if (key === 'triggerError') {
  //   router.push('/exception/trigger');
  //   return;
  // }
  // if (key === 'userinfo') {
  //   router.push('/account/settings/base');
  //   return;
  // }
  console.log(key)
  if (key === 'logout') {
  let obj=localStorage.getItem("isLogin");
  console.log(obj)
  obj['islogin']=false
  localStorage.setItem("isLogin",JSON.stringify(obj))
  }
};
componentDidMount(){
  console.log(this.props);
  try{
    // React.api.apiClient('get','/user/center',{
    // 			headers:{
    // 					Authorization: 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1MywidXNlcm5hbWUiOiJ0ZXN0IiwiZXhwIjoxNTc4Nzk2OTY4LCJlbWFpbCI6bnVsbH0.c_eEzEHEF9i3kzMPKKKzrBVUNj-5ZqMkUcPaZUsMwUY'
    // 			}
    // 	}).then(res=>{
    // 			console.log('请求权限',res)
    //       this.setState({
    //         menuData:res.message
    //       })
    // 	})

  }catch(err){

  }
}
  render() {
    // const {state,props}=this;
    const query = {
      'screen-xs': {
        maxWidth: 575,
      },
      'screen-sm': {
        minWidth: 576,
        maxWidth: 767,
      },
      'screen-md': {
        minWidth: 768,
        maxWidth: 991,
      },
      'screen-lg': {
        minWidth: 992,
        maxWidth: 1199,
      },
      'screen-xl': {
        minWidth: 1200,
        maxWidth: 1599,
      },
      'screen-xxl': {
        minWidth: 1600,
      },
    };

    const currentUser={
      name:'对庄测试账号'
    };
  const menu=(
      <Menu styleName='menu' selectedKeys={[]} onClick={this.handleMenuClick}>
        <Menu.Item key="userinfo">
          <Icon type="setting" />
          修改密码
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <Icon type="logout" />
          退出登录
        </Menu.Item>
      </Menu>
    );
    return (
        <ContainerQuery query={query}>
        {params => (
          <Context.Provider value={this.getContext()}>
            <div className={classNames(params)}>
            <Layout styleName='components-layout-demo-custom-trigger'>
            {
              this.props.isMobile?(
              <Drawer
                visible={!this.state.collapsed}
                placement="left"
                onClose={()=>this.handleMenuCollapse(false)}
                style={{
                  padding: 0,
                  height: '100vh',
                }}
              >
                <Sider
                 trigger={null}
                 collapsible
                 collapsed={this.props.isMobile?false:this.state.collapsed}
                 style={{flex: '0 0 256px', maxWidth: '256px', minWidth: '256px', width: '256px'}}
                 styleName='antd-pro-components-sider-menu-index-sider ant-layout-sider-below'
                >
                  <div styleName='logo' id="logo">
                    <Link to="/">
                      <img src={logo} alt="logo" />
                      <h1>数据中心</h1>
                    </Link>
                  </div>
                  <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" onClick={this.toggle}>
                    <Link to={'/data'+pageRoute.RouteMap.首页.path}>
                      <Icon type="home" />
                      <span>首页</span>
                    </Link>
                    </Menu.Item>
                    <SubMenu
                      key="sub1"
                      title={
                        <span>
                          <Icon type="area-chart" />
                          <span>图表</span>
                        </span>
                      }
                    >
                      <Menu.Item key="2"  onClick={this.toggle}>
                        <Link to={'/data'+pageRoute.RouteMap.饼图页.path}>
                          <Icon type="pie-chart" />
                          <span>单饼图页</span>
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="3"  onClick={this.toggle}>
                        <Link to={'/data'+pageRoute.RouteMap.柱状图页.path}>
                          <Icon type="bar-chart" />
                          <span>单柱图页</span>
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="4" onClick={this.toggle}>
                        <Link to={'/data'+pageRoute.RouteMap.折线图页.path}>
                          <Icon type="line-chart" />
                          <span>折线图页</span>
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="5" onClick={this.toggle}>
                        <Link to={'/data'+pageRoute.RouteMap.多折线图页.path}>
                          <Icon type="line-chart" />
                          <span>多折线图页</span>
                        </Link>
                      </Menu.Item>
                    </SubMenu>
                  </Menu>
                </Sider>
              </Drawer>
              ):(
              <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                <div styleName='logo' id="logo">
                  <Link to="/">
                    <img src={logo} alt="logo" />
                    <h1>数据中心</h1>
                  </Link>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                  <Menu.Item key="1">
                  <Link to={'/data'+pageRoute.RouteMap.首页.path}>
                    <Icon type="home" />
                    <span>首页</span>
                  </Link>
                  </Menu.Item>
                  <SubMenu
                    key="sub1"
                    title={
                      <span>
                        <Icon type="area-chart" />
                        <span>图表</span>
                      </span>
                    }
                  >
                    <Menu.Item key="2" >
                      <Link to={'/data'+pageRoute.RouteMap.饼图页.path}>
                        <Icon type="pie-chart" />
                        <span>单饼图页</span>
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="3" >
                      <Link to={'/data'+pageRoute.RouteMap.柱状图页.path}>
                        <Icon type="bar-chart" />
                        <span>单柱图页</span>
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                      <Link to={'/data'+pageRoute.RouteMap.折线图页.path}>
                        <Icon type="line-chart" />
                        <span>折线图页</span>
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                      <Link to={'/data'+pageRoute.RouteMap.多折线图页.path}>
                        <Icon type="line-chart" />
                        <span>多折线图页</span>
                      </Link>
                    </Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              )
            }
              <Layout
                style={{
                  ...this.getLayoutStyle(),
                  maxHeight: '100vh',
                  overflow:'hidden'
                }}
              >
                <Header style={{ background: '#fff', padding: 0 ,borderBottom:'1px solid #DCDCDC'}} className='clearfix'>
                  <Icon
                    styleName="trigger"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                  />
                  <div styleName='right'>
                    {currentUser.name ? (
                      <HeaderDropdown overlay={menu}>
                        <span styleName='action account'>
                          <Avatar
                            size="small"
                            styleName='avatar'
                            src={logo}
                            alt="avatar"
                          />
                          <span styleName='name'>{currentUser.name}</span>
                        </span>
                      </HeaderDropdown>
                    ) : (
                      <Spin size="small" style={{ marginLeft: 8, marginRight: 8 }} />
                    )}
                  </div>
                </Header>
                <Content
                  style={{
                    background: '#f0f2f5',
                    minHeight: 0,
                  }}
                  styleName='main-layout-content'
                >
                  <PageWrapper isMobile={this.props.isMobile}/>
                </Content>
              </Layout>
            </Layout>
          </div>
        </Context.Provider>
      )}
      </ContainerQuery>
    );
  }
}
export default SiderDemo
      // <SiderMenu {...props} flatMenuKeys={flatMenuKeys} collapsed={isMobile ? false : collapsed} />