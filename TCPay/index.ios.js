'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

// 注意: import时不要在最后加分号(;), 导入React库除外
import Hello from './jscore/Hello'
import TCListView from './jscore/TCListView.js'

class TCPay extends Component {
  render() {
    return (
      <TCListView />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('TCPay', () => TCPay);
