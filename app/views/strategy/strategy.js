import React from 'react';
import {StyleSheet, Navigator, View, Text} from 'react-native';

import BasicStyle from '../../styles/basic';

export default class Strategy extends React.Component {
  render() {
    return (
      <View style={BasicStyle.container}>
        <Text>
          Strategy page
        </Text>
      </View>
    );
  }
}
