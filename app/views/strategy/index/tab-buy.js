/**
 * 点买 Tab
 */

import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import BasicStyle from '../../../styles/basic';
import SearchBar from './search-bar';
import HotStock from './hot-stock';
import OptionalList from './optional-list';

class TabBuy extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <View style={[BasicStyle.flex, styles.scroll]}>
          <HotStock/>
          <OptionalList/>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    marginBottom: 60
  }
});

export default connect()(TabBuy);