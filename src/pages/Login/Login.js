import React from 'react';
import { Checkbox, Alert, Modal, Icon } from 'antd';
import _ from 'lodash';
import Login from '@/components/Login';
import './Login.less';

const { Tab, UserName, Password, Submit } = Login;

// @connect(({ login, loading }) => ({
//   login,
//   submitting: loading.effects['login/login'],
// }))
class LoginPage extends React.Component {
  state = {
    type: 'account',
    autoLogin: true,
  };

  onTabChange = type => {
    this.setState({ type });
  };
  handleSubmit = (err, values) => {
    const { type } = this.state;
    // if (!err) {
    //   const { dispatch } = this.props;
    //   dispatch({
    //     type: 'login/login',
    //     payload: {
    //       ...values,
    //       type,
    //     },
    //   });
    // }
  };

  changeAutoLogin = e => {
    this.setState({
      autoLogin: e.target.checked,
    });
  };

  renderMessage = content => (
    <Alert style={{ marginBottom: 24 }} message={content} type="error" showIcon />
  );

  render() {
    // const { login, submitting } = this.props;
    const login={
      status:'success',
      type:'account'
    }
    const submitting=false
    const { type, autoLogin } = this.state;
    return (
      <div styleName='main'>
        <Login
          defaultActiveKey={type}
          onTabChange={this.onTabChange}
          onSubmit={this.handleSubmit}
          ref={form => {
            this.loginForm = form;
          }}
        >

            {login.status === 'error' &&
              login.type === 'account' &&
              !submitting &&
              this.renderMessage('账户或密码错误（admin/ant.design）')}
            <UserName
              name="userName"
              placeholder='请输入用户名'
              rules={[
                {
                  required: true,
                  message:'用户名不能为空',
                },
              ]}
            />
            <Password
              name="password"
              placeholder='请输入密码'
              rules={[
                {
                  required: true,
                  message:'密码不能为空',
                },
              ]}
              onPressEnter={e => {
                e.preventDefault();
                this.loginForm.validateFields(this.handleSubmit);
              }}
            />
          <div>
            <Checkbox checked={autoLogin} onChange={this.changeAutoLogin}>
              记住登录状态
            </Checkbox>
          </div>
          <Submit loading={submitting}>
            登录
          </Submit>
        </Login>
      </div>
    );
  }
}

export default LoginPage;
// <Tab key="account" tab='账户密码登录'></Tab>
