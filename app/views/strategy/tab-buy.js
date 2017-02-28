/**
 * 点买 Tab
 */

import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import BasicStyle from '../../styles/basic';

class TabBuy extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <View>
          <Text>11111111111</Text>
        </View>
      </ScrollView>
    );
  }
}

export default connect()(TabBuy);