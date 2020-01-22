import React from 'react';
import { Dropdown } from 'antd';
import classNames from 'classnames';
import  './index.less';

export default class HeaderDropdown extends React.PureComponent {
  render() {
    const { overlayClassName, ...props } = this.props;
    return (
      <Dropdown overlayClassName={classNames('container', overlayClassName)} {...props} />
    );
  }
}
