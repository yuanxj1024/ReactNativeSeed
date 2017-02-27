import React from 'react';
import {StyleSheet, Navigator, Text, View, ScrollView} from 'react-native';

import BasicStyle from '../../styles/basic';

import Top from './top';

export default class Home extends React.Component {
  render() {
    return (
      <View style={[BasicStyle.flex, BasicStyle.content]}>
        <ScrollView style={[BasicStyle.flex]}>
          <Top/>
        </ScrollView>
      </View>
    );
  }
}
