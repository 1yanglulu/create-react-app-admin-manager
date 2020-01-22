import React, { PureComponent } from 'react';
// import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import { Spin, Tag, Menu, Icon, Avatar, Tooltip, message } from 'antd';
import moment from 'moment';
import groupBy from 'lodash/groupBy';
import HeaderDropdown from '../HeaderDropdown';
import './index.less';

export default class GlobalHeaderRight extends PureComponent {



  render() {
    const {
      onMenuClick,
      theme,
    } = this.props;
    const currentUser={
      name:"数据中心测试服"
    }
    const menu = (
      <Menu styleName='menu' selectedKeys={[]} onClick={onMenuClick}>
        <Menu.Item key="userCenter">
          <Icon type="user" />
          个人中心
        </Menu.Item>
        <Menu.Item key="userinfo">
          <Icon type="setting" />
          个人设置
        </Menu.Item>
        <Menu.Item key="triggerError">
          <Icon type="close-circle" />
          账户设置
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <Icon type="logout" />
          退出登录
        </Menu.Item>
      </Menu>
    );
    let className = 'right';
    if (theme === 'dark') {
      className = 'right dark';
    }
    return (
      <div styleName={className}>

        <Tooltip title='帮助'>
          <a
            target="_blank"
            href="https://pro.ant.design/docs/getting-started"
            rel="noopener noreferrer"
            styleName='action'
          >
            <Icon type="question-circle-o" />
          </a>
        </Tooltip>
        {currentUser.name ? (
          <HeaderDropdown overlay={menu}>
            <span styleName='action account'>
              <Avatar
                size="small"
                styleName='avatar'
                src={currentUser.avatar}
                alt="avatar"
              />
              <span styleName='name'>{currentUser.name}</span>
            </span>
          </HeaderDropdown>
        ) : (
          <Spin size="small" style={{ marginLeft: 8, marginRight: 8 }} />
        )}
      </div>
    );
  }
}
        // <NoticeIcon
        //   className={styles.action}
        //   count={currentUser.unreadCount}
        //   onItemClick={(item, tabProps) => {
        //     console.log(item, tabProps); // eslint-disable-line
        //     this.changeReadState(item, tabProps);
        //   }}
        //   loading={fetchingNotices}
        //   locale={{
        //     emptyText: formatMessage({ id: 'component.noticeIcon.empty' }),
        //     clear: formatMessage({ id: 'component.noticeIcon.clear' }),
        //     viewMore: formatMessage({ id: 'component.noticeIcon.view-more' }),
        //     notification: formatMessage({ id: 'component.globalHeader.notification' }),
        //     message: formatMessage({ id: 'component.globalHeader.message' }),
        //     event: formatMessage({ id: 'component.globalHeader.event' }),
        //   }}
        //   onClear={onNoticeClear}
        //   onPopupVisibleChange={onNoticeVisibleChange}
        //   onViewMore={() => message.info('Click on view more')}
        //   clearClose
        // >
        //   <NoticeIcon.Tab
        //     count={unreadMsg.notification}
        //     list={noticeData.notification}
        //     title="notification"
        //     emptyText={formatMessage({ id: 'component.globalHeader.notification.empty' })}
        //     emptyImage="https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg"
        //     showViewMore
        //   />
        //   <NoticeIcon.Tab
        //     count={unreadMsg.message}
        //     list={noticeData.message}
        //     title="message"
        //     emptyText={formatMessage({ id: 'component.globalHeader.message.empty' })}
        //     emptyImage="https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg"
        //     showViewMore
        //   />
        //   <NoticeIcon.Tab
        //     count={unreadMsg.event}
        //     list={noticeData.event}
        //     title="event"
        //     emptyText={formatMessage({ id: 'component.globalHeader.event.empty' })}
        //     emptyImage="https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg"
        //     showViewMore
        //   />
        // </NoticeIcon>
        // <HeaderSearch
        //   className={`${styles.action} ${styles.search}`}
        //   placeholder={formatMessage({ id: 'component.globalHeader.search' })}
        //   dataSource={[
        //     formatMessage({ id: 'component.globalHeader.search.example1' }),
        //     formatMessage({ id: 'component.globalHeader.search.example2' }),
        //     formatMessage({ id: 'component.globalHeader.search.example3' }),
        //   ]}
        //   onSearch={value => {
        //     console.log('input', value); // eslint-disable-line
        //   }}
        //   onPressEnter={value => {
        //     console.log('enter', value); // eslint-disable-line
        //   }}
        // />