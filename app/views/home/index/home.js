import React from 'react';
import {
  StyleSheet,
  Navigator,
  Text,
  View,
  ScrollView,
  RefreshControl
} from 'react-native';

import BasicStyle from '../../../styles/basic';

import Top from './top';
import Notice from './notice';
import HotStock from './hot-stock';
import HotBuy from './hot-buy';
import SearchBar from './search-bar';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    };
  }
  render() {
    return (
      <View style={[BasicStyle.flex, styles.bg]}>
        <View style={[styles.headerWrap]}>
          <SearchBar/>
        </View>
        <View style={[BasicStyle.flex, styles.bg]}>
          <ScrollView style={[BasicStyle.flex, BasicStyle.bg]}>
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
      </View>
    );
  }

  refreshHandle = () => {
    // this.setState({refreshing: false});
  }
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'transparent'
  },
  headerWrap: {
    // backgroundColor: 'transparent',
    backgroundColor: '#f36369',
    // backgroundColor: 'rgba(0,0,0,0)',
    height: 60
  }
});