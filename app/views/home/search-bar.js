/**
 * 搜索条
 */

import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import BasicStyle from '../../styles/basic';

export default class SearchBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <View style={[styles.search]}>
          <Image style={styles.searchBg} source={require('./img/searchbg@3x.png')}></Image>
          <View style={[BasicStyle.flexRow, styles.searchBar]}>
            <View style={[styles.searchIcon]}>
              <Image source={require('./img/icon-search@3x.png')}></Image>
            </View>
            <View>
              <Text style={[BasicStyle.white, styles.searchInput]}>搜索股票、基金、牛人</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  search: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: 10,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    // backgroundColor: 'transparent',
    height: 30,
    // backgroundColor: 'green'
  },
  searchInput: {
    backgroundColor: 'transparent'
  },
  searchBg: {
    position: 'absolute',
    resizeMode: 'stretch',
    flex: 1,
    height: 30,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    // marginLeft: 15, marginRight: 15
  },
  searchBar: {
    justifyContent: 'flex-start'
  },
  searchIcon: {
    width: 20
  }
});