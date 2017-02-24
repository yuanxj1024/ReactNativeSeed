import React from 'react';
import {StyleSheet, Navigator, Text, View} from 'react-native';
import {
  Container,
  Content,
  Header,
  StyleProvider,
  Button,
  connectStyle
} from 'native-base';

import BasicStyle from '../../styles/basic';

export default class Mine extends React.Component {
  render() {
    const styles = this.props.style;
    return (
      <View style={BasicStyle.container}>
        <Text>22222</Text>
        <Text>
          Mine page
        </Text>
      </View>
    );
  }
}