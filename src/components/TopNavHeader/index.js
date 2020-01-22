import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';
import RightContent from '../GlobalHeader/RightContent';
import BaseMenu from '../SiderMenu/BaseMenu';
import { getFlatMenuKeys } from '../SiderMenu/SiderMenuUtils';
import './index.less';
import { title } from '@/defaultSettings';

export default class TopNavHeader extends PureComponent {
  state = {
    maxWidth: undefined,
  };

  static getDerivedStateFromProps(props) {
    return {
      maxWidth:
        (props.contentWidth === 'Fixed' && window.innerWidth > 1200 ? 1200 : window.innerWidth) -
        280 -
        120 -
        40,
    };
  }

  render() {
    const { theme, contentWidth, menuData, logo } = this.props;
    const { maxWidth } = this.state;
    const flatMenuKeys = getFlatMenuKeys(menuData);
    return (
      <div styleName={`head ${theme === 'light' ? 'light' : ''}`}>
        <div
          ref={ref => {
            this.maim = ref;
          }}
          styleName={`main ${contentWidth === 'Fixed' ?'wide' : ''}`}
        >
          <div styleName='left'>
            <div styleName='logo' key="logo" id="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
                <h1>{title}</h1>
              </Link>
            </div>
            <div
              style={{
                maxWidth,
              }}
            >
              <BaseMenu {...this.props} flatMenuKeys={flatMenuKeys} styleName='menu' />
            </div>
          </div>
          <RightContent {...this.props} />
        </div>
      </div>
    );
  }
}
