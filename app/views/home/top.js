/**
 * 首页顶部  banner + 帮助区域
 */
import React from 'react';
import {StyleSheet, Image, View, Text, TextInput} from 'react-native';

import BasicStyle from '../../styles/basic';

import Banner from './banner';
import HotStock from './hot-stock';

export default class Top extends React.Component {
  constructor(arg) {
    super(arg);
  }

  render() {
    return (
      <View style={[styles.content]}>
        <View style={[BasicStyle.bgWhite]}>
          <Banner></Banner>
          <View style={[styles.bannerTab, styles.helpItem]}>
            <View style={[BasicStyle.flex, BasicStyle.center]}>
              <View style={[BasicStyle.flexRow, BasicStyle.center]}>
                <Image style={styles.helpIcon} source={require('./img/kefu@3x.png')}></Image>
                <Text>在线客服</Text>
              </View>
            </View>
            <View style={[BasicStyle.flex, BasicStyle.center]}>
              <View style={[BasicStyle.flexRow, BasicStyle.center]}>
                <Image style={styles.helpIcon} source={require('./img/wenti2@3x.png')}></Image>
                <Text>常见问题</Text>
              </View>
            </View>
          </View>
        </View>

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
        {/**/}
        <HotStock/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    // backgroundColor: 'blue'
  },
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
  },
  bannerTab: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  helpItem: {
    height: 45
  },
  helpIcon: {
    marginRight: 10
  }
});