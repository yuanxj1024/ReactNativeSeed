import React from 'react';
import {StyleSheet, Navigator, View, Text, ScrollView} from 'react-native';

import BasicStyle from '../../styles/basic';
import Tab from './strategy-tab';

export default class Strategy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabNames: [
        {
          title: '点买',
          value: '1'
        }, {
          title: '进行中',
          value: '2'
        }
      ]
    };
  }

  render() {
    return (
      <View style={[BasicStyle.flex]}>
        <View style={[styles.tab]}>
          <Tab/>
        </View>
        <View></View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  tab: {
    height: 60,
    backgroundColor: '#f36369'

  }
});