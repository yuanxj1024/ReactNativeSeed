import React from 'react';
import {
  StyleSheet,
  Navigator,
  Text,
  View,
  ScrollView,
  RefreshControl
} from 'react-native';

import BasicStyle from '../../styles/basic';

import Top from './top';
import Notice from './notice';
import HotStock from './hot-stock';
import HotBuy from './hot-buy';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    };
  }
  render() {
    return (
      <View style={[BasicStyle.flex, BasicStyle.content, styles.bg]}>
        <ScrollView style={[BasicStyle.flex]}>
          <RefreshControl
            onRefresh={() => this.refreshHandle()}
            refreshing={this.state.refreshing}
            title="正在刷新..."/>
          <Top/>
          <HotStock/>
          <Notice/>
          <HotBuy/>
        </ScrollView>
      </View>
    );
  }

  refreshHandle = () => {
    // this.setState({refreshing: false});
  }
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#f1f3f4'
  }
});