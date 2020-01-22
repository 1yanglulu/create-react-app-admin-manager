import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom'
import App from './App';
import * as _ from 'lodash'
import {ConfigProvider } from 'antd';
import * as serviceWorker from './serviceWorker';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.less';
import 'ant-design-pro/dist/ant-design-pro.css'
import './styles/common.less'
import './index.css';
moment.locale('zhCN');
ReactDOM.render(
    <ConfigProvider locale={zhCN}>
        <Router>
            < App / >
        </Router>
    </ConfigProvider>
     , document.getElementById('root')
     );
if (module.hot) {
    module.hot.accept()
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();