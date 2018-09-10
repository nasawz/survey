import * as React from 'react';

export interface ClubAuthProps {
  clubAuthFn: any;
  auth_result: any;
}

export interface ClubAuthState {}

const activityId = 1;
/**
 * 访问控制器
 */
class ClubAuth extends React.Component<ClubAuthProps, ClubAuthState> {
  constructor(props: ClubAuthProps) {
    super(props);

    this.state = {};
  }

  /**
   * 登录
   */
  goLogin = () => {
    let url = window.location.href.split('/')[0] + '//' + window.location.href.split('/')[2];
    let port = window.location.port;
    let backUrl = window.location.href;
    if (port == '9098') {
      window.location.href = 'https://actest.10086.cn/?channelID=12011&backUrl=' + backUrl;
    } else if (url == 'http://club.10086.cn') {
      window.location.href = 'http://login.10086.cn/?channelID=12011&backUrl=' + backUrl;
    } else {
      window.location.href = `/front/web/login.html`;
    }
  };

  componentWillMount() {
    //请求接口
    this.props.clubAuthFn(activityId);
  }
  public render() {
    let { auth_result, children } = this.props;
    console.log('------', auth_result);
    if (!auth_result) return <div />;
    switch (auth_result.code) {
      case '00':
        //未填写过问卷
        return <div>{children}</div>;
      case '01':
        //您已经填写过问卷
        console.log('您已经填写过问卷');
        return <div>您已经填写过问卷</div>;
      case '02':
        //未登陆
        console.log('未登陆');
        this.goLogin();
        return <div>未登陆</div>;
      case '03':
        //活动已结束
        console.log('活动已结束');
        return <div>活动已结束</div>;
    }
  }
}

import { connect } from 'react-redux';

const mapState = (state) => ({
  auth_result: state.authModel.auth_result
});
const mapDispatch = ({ authModel: { clubAuth } }) => ({
  clubAuthFn: (activityId) => {
    clubAuth(activityId);
  }
});

export default connect(
  mapState,
  mapDispatch
)(ClubAuth);
