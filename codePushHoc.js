import CodePush from 'react-native-code-push';
import React, {Component} from 'react';

const CODE_PUSH_OPTIONS = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
};

const CodePushHoc = WrappedComponent => {
  class WrappedApp extends Component {
    componentDidMount() {
      CodePush.sync({installMode: CodePush.InstallMode.IMMEDIATE});
    }
    render() {
      return <WrappedComponent />;
    }
  }
  return CodePush(CODE_PUSH_OPTIONS)(WrappedApp);
};
export default CodePushHoc;
