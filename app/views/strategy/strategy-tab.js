/**
 * tab 菜单
 */

import React from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';

import BasicStyle from '../../styles/basic';

export default class StrategyTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 1
    };
  }

  render() {
    return (
      <View style={[BasicStyle.flexRow, styles.container]}>
        <View style={[BasicStyle.flex, BasicStyle.center]}>
          <TouchableWithoutFeedback onPress={() => this.tabSelected(1)}>
            <View>
              <Text style={[BasicStyle.white]}>点买</Text>
              {this.renderSelectedTabFlag(1)
}
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={[BasicStyle.flex, BasicStyle.center]}>
          <TouchableWithoutFeedback onPress={() => this.tabSelected(2)}>
            <View>
              <Text style={[BasicStyle.white]}>进行中</Text>
              {this.renderSelectedTabFlag(2)
}

            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }

  renderSelectedTabFlag(flag) {
    if (flag === this.state.currentTab) {
      return (
        <View style={[styles.flag, styles.flagSelected]}></View>
      );
    }
    return (
      <View style={[styles.flag]}></View>
    );
  }

  tabSelected(index) {
    this.setState({currentTab: index});
  }
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    marginTop: 15
  },
  cell: {},
  flag: {
    // flex: 1,
    marginTop: 5,
    height: 5,
    // width: 30,
  },
  flagSelected: {
    backgroundColor: '#ffffff'
  }

});
