// import React from 'react'
import Loadable from 'react-loadable'
// const LoadingRouterTest = Loadable({
// 	loader:() => import('./RouterTest.js'),
// 	loading () {return <div>正在加载</div>}
// })

function NullComponent() {
  return null;
}

// function NestComponent(props) {
//   return renderRoutes(props && props.route && props.route.routes || []);
// }

export const MenuType = {
  // 首页
  首页: 57,
  饼图页: 58,
  柱状图页: 59,
  折线图页: 60,
  多折线图页: 151,
  // 柱折混合页: 152
}
export const RouteMap = {
  '首页': {
    path: '/home',
    component: Loadable({
      loader: () => import( /* webpackChunkName: "test-home" */ './pages/Home'),
      loading: NullComponent
    }),
    requiresAuth: true,
  },
  // '登录':{
  //   path: '/login',
  //   component: Loadable({
  //     loader: () => import( /* webpackChunkName: "login" */ './Login'),
  //     loading: NullComponent
  //   }),
  //   requiresAuth: false,
  // },
  '饼图页': {
    path: '/singlepiechart',
    component: Loadable({
      loader: () => import( /* webpackChunkName: "test-singlePieChart" */ './pages/SinglePieChart'),
      loading: NullComponent
    }),
    requiresAuth: true, //需要登陆后才能跳转的页面
  },
  '柱状图页': {
    path: '/singlehistogram',
    component: Loadable({
      loader: () => import( /* webpackChunkName: "test-singleHistogram" */ './pages/SingleHistogram'),
      loading: NullComponent
    }),
    requiresAuth: true, //需要登陆后才能跳转的页面
  },
  '折线图页': {
    path: '/singlebrokenLinediagrom',
    component: Loadable({
      loader: () => import( /* webpackChunkName: "test-singleBrokenLineDiagrom" */ './pages/SingleBrokenLineDiagrom'),
      loading: NullComponent
    }),
    requiresAuth: true, //需要登陆后才能跳转的页面
  },
    '多折线图页': {
    path: '/mountbrokenLinediagrom',
    component: Loadable({
      loader: () => import( /* webpackChunkName: "test-singleBrokenLineDiagrom" */ './pages/SingleBrokenLineDiagrom'),
      loading: NullComponent
    }),
    requiresAuth: true, //需要登陆后才能跳转的页面
  },
    '折柱混合图页': {
    path: '/LineHistogram',
    component: Loadable({
      loader: () => import( /* webpackChunkName: "test-singleBrokenLineDiagrom" */ './pages/SingleBrokenLineDiagrom'),
      loading: NullComponent
    }),
    requiresAuth: true, //需要登陆后才能跳转的页面
  },
  "404":{
    path: '*',
    component: Loadable({
      loader: () => import( /* webpackChunkName: "not-found" */ './pages/NotFound'),
      loading: NullComponent
    }),
    requiresAuth: true,
  }

}
// export function matchRoutesEx(routeConfigs, pathname) {
//   try {
//     return matchRoutes(routeConfigs, pathname);
//   } catch (err) {
//     // __CTC__.IS_DEV && console.warn('[@matchRoutesEx Error]:', err);
//   }
//   return [];
// }