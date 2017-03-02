/**
 * 搜索框
 */

import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <View></View>
        <View>
          <Text>搜索股票代码/全拼/首字母</Text>
        </View>
      </View>
    );
  }
}
