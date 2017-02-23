import React from 'react';
import {StyleSheet, Navigator, View} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import HomeView from '../home';
import StrategyView from '../strategy';
import MineView from '../Mine';

export default class Layout extends React.Component {
  constructor(arg) {
    super(arg);
    this.state = {
      currentTab: 'home'
    };
  }
  render() {
    reutrn(
      <TabNavigator>
        <TabNavigator.Item
          selected={this.setSelected('home')}
          title="首页"
          onPress={() => this.switchTab('home')}>
          <HomeView/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.setSelected('strategy')}
          title="策略"
          onPress={() => this.switchTab('strategy')}>
          <StrategyView/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.setSelected('mine')}
          title="我的"
          onPress={() => this.switchTab('mine')}>
          <MineView/>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }

  setSelected = (name) => {
    reutrn this.state.currentTab === name;
  }

  switchTab = (currentTab = '') {
    this.setState({currentTab});
  }

}