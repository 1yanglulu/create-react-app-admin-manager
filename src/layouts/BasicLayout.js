import React, { Suspense } from 'react';
import { Layout } from 'antd';
import DocumentTitle from 'react-document-title';
// import { connect } from 'dva';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import * as defaultSet from '@/defaultSettings'
import Media from 'react-media';
import logo from '@/assets/favicon.ico';
import Footer from './Footer';
import Header from './Header';
import Context from './MenuContext';
import SiderMenu from '@/components/SiderMenu';
import getPageTitle from '@/utils/getPageTitle';
import styles from './BasicLayout.less';

// lazy load SettingDrawer
// const SettingDrawer = React.lazy(() => import('@/components/SettingDrawer'));

const { Content } = Layout;

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

class BasicLayout extends React.Component {
  componentDidMount() {
    console.log(this.props)
    // const {
    //   dispatch,
    //   route: { routes, path, authority },
    // } = this.props;
    // dispatch({
    //   type: 'user/fetchCurrent',
    // });
    // dispatch({
    //   type: 'setting/getSetting',
    // });
    // dispatch({
    //   type: 'menu/getMenuData',
    //   payload: { routes, path, authority },
    // });
  }

  getContext() {
    const { location, breadcrumbNameMap } = this.props;
    return {
      location,
      breadcrumbNameMap,
    };
  }

  getLayoutStyle = () => {
    const { fixSiderbar, isMobile, collapsed, layout } = this.props;
    if (fixSiderbar && layout !== 'topmenu' && !isMobile) {
      return {
        paddingLeft: collapsed ? '80px' : '256px',
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
    this.toggle()
  };
  // handleMenuCollapse = collapsed => {
  //   const { dispatch } = this.props;
  //   dispatch({
  //     type: 'global/changeLayoutCollapsed',
  //     payload: collapsed,
  //   });
  // };

  // renderSettingDrawer = () => {
  //   // Do not render SettingDrawer in production
  //   // unless it is deployed in preview.pro.ant.design as demo
  //   // preview.pro.ant.design only do not use in your production ; preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
  //   if (
  //     process.env.NODE_ENV === 'production' &&
  //     ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION !== 'site'
  //   ) {
  //     return null;
  //   }
  //   return <SettingDrawer />;
  // };

  render() {
    const {
      navTheme,
      layout: PropsLayout,
      children,
      location: { pathname },
      isMobile,
      menuData,
      breadcrumbNameMap,
      fixedHeader,
    } = this.props;
    const isTop = PropsLayout === 'topmenu';
    const contentStyle = !fixedHeader ? { paddingTop: 0 } : {};
    const layout = (
      <Layout>
        {isTop && !isMobile ? null : (
          <SiderMenu
            logo={logo}
            theme={navTheme}
            onCollapse={this.handleMenuCollapse}
            menuData={menuData}
            isMobile={isMobile}
            {...this.props}
          />
        )}
        <Layout
          style={{
            ...this.getLayoutStyle(),
            minHeight: '100vh',
          }}
        >
          <Header
            menuData={menuData}
            handleMenuCollapse={this.handleMenuCollapse}
            logo={logo}
            isMobile={isMobile}
            {...this.props}
          />
          <Content className={styles.content} style={contentStyle}>
            {children}
          </Content>
          <Footer />
        </Layout>
      </Layout>
    );
    return (
      <React.Fragment>
        <DocumentTitle title={getPageTitle(pathname, breadcrumbNameMap)}>
          <ContainerQuery query={query}>
            {params => (
              <Context.Provider value={this.getContext()}>
                <div className={classNames(params)}>{layout}</div>
              </Context.Provider>
            )}
          </ContainerQuery>
        </DocumentTitle>
      </React.Fragment>
    );
  }
}
const propty={
menuData:[{path: "/dashboard", name: "Dashboard", icon: "dashboard", locale: "menu.dashboard", authority: undefined},
{path: "/form", icon: "form", name: "表单页", locale: "menu.form", authority: undefined},
{path: "/list", icon: "table", name: "列表页", locale: "menu.list", authority: undefined},
{path: "/profile", name: "详情页", icon: "profile", locale: "menu.profile", authority: undefined},
{name: "结果页", icon: "check-circle-o", path: "/result", locale: "menu.result", authority: undefined},
{name: "异常页", icon: "warning", path: "/exception", locale: "menu.exception", authority: undefined},
{name: "个人页", icon: "user", path: "/account", locale: "menu.account", authority: undefined},
{name: "图形编辑器", icon: "highlight", path: "/editor", locale: "menu.editor", authority: undefined}],
  ...defaultSet
}
export default (propty => (
  <Media query="(max-width: 599px)">
    {isMobile => <BasicLayout {...propty} isMobile={isMobile} />}
  </Media>
))
// export default connect(({ global, setting, menu: menuModel }) => ({
//   collapsed: global.collapsed,
//   layout: setting.layout,
//   menuData: menuModel.menuData,
//   breadcrumbNameMap: menuModel.breadcrumbNameMap,
//   ...setting,
// }))(props => (
//   <Media query="(max-width: 599px)">
//     {isMobile => <BasicLayout {...props} isMobile={isMobile} />}
//   </Media>
// ));
        // <Suspense fallback={null}>{this.renderSettingDrawer()}</Suspense>