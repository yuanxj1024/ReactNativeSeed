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

import Banner from './banner';

class Home extends React.Component {
  render() {
    const styles = this.props.style;
    return (
      <View style={[BasicStyle.content]}>
        <Banner></Banner>
      </View>
    );
  }
}

const styles = {
  bg1: {
    backgroundColor: 'red'
  },
  bg2: {
    backgroundColor: 'blue'
  }
};

export default connectStyle('home.styles', styles)(Home);