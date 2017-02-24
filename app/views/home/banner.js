import React from 'react';
import {StyleSheet, Image, View, Text, TextInput} from 'react-native';

import BasicStyle from '../../styles/basic';

export default class Banner extends React.Component {
  constructor(arg) {
    super(arg);
    this.state = {
      ads: [
        {
          title: '',
          url: '',
          time: ''
        }
      ]
    };
  }

  render() {
    return (
      <View style={styles.content}>
        <View style={[styles.search]}>
          <Image style={styles.searchBg} source={require('./img/searchbg@3x.png')}></Image>
          <View style={[BasicStyle.flexRow, styles.searchBar]}>
            <View style={[styles.searchIcon]}>
              <Image source={require('./img/icon-search@3x.png')}></Image>
            </View>
            <View>
              <Text style={BasicStyle.white}>搜索股票、基金、牛人</Text>
            </View>
          </View>
        </View>
        <View>
          <View></View>
          <View style={[styles.bannerTab]}>
            <View>
              <Image source={require('./img/kefu@3x.png')}></Image>
              <Text>在线客服</Text>
            </View>
            <View>
              <Image source={require('./img/kefu@3x.png')}></Image>
              <Text>在线客服</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'gray'
  },
  search: {
    // flex: 1, flexDirection: 'row',
    padding: 10,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    height: 30,
    // backgroundColor: 'red' lineHeight: 30
  },
  searchBg: {
    position: 'absolute',
    resizeMode: 'stretch',
    flex: 1,
    height: 30,
    left: 0,
    right: 0,
    // marginLeft: 15, marginRight: 15
  },
  searchBar: {
    justifyContent: 'flex-start'
  },
  searchIcon: {
    width: 20
  },
  bannerTab: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bannerTabItem: {}
});