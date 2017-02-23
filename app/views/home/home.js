import React from 'react';
import {StyleSheet, Navigator, Text, View} from 'react-native';

import BasicStyle from '../../styles/basic';

export default class Home extends React.Component {
  render() {
    return (
      <View style={BasicStyle.container}>
        <Text>
          Home page
        </Text>
      </View>
    );
  }
}
