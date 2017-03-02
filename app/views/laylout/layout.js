import React from 'react';
import {StyleSheet, Navigator, View, Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import HomeView from '../home/index/home';
import StrategyView from '../strategy/index/strategy';
import MineView from '../mine/mine';

export default class Layout extends React.Component {
  constructor(arg) {
    super(arg);
    this.state = {
      currentTab: 'home'
    };
  }
  render() {
    console.log(1);
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.setSelected('home')}
          title="首页"
          renderIcon={() => <Image source={require('./img/home_gray@3x.png')}/>}
          renderSelectedIcon={() => <Image source={require('./img/home@3x.png')}/>}
          onPress={() => this.switchTab('home')}>
          <HomeView/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.setSelected('strategy')}
          title="策略"
          renderIcon={() => <Image source={require('./img/strategy_gray@3x.png')}/>}
          renderSelectedIcon={() => <Image source={require('./img/strategy@3x.png')}/>}
          onPress={() => this.switchTab('strategy')}>
          <StrategyView/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.setSelected('mine')}
          title="我的"
          renderIcon={() => <Image source={require('./img/mine_gray@3x.png')}/>}
          renderSelectedIcon={() => <Image source={require('./img/mine@3x.png')}/>}
          onPress={() => this.switchTab('mine')}>
          <MineView/>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }

  setSelected = (name) => {
    return this.state.currentTab === name;
  }

  switchTab = (currentTab = '') => {
    this.setState({currentTab});
  }

}