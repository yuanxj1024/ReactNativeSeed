/**
 * 首页顶部  banner + 帮助区域
 */
import React from 'react';
import {StyleSheet, Image, View, Text, TextInput} from 'react-native';

import BasicStyle from '../../styles/basic';

import Banner from './banner';

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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    position: 'relative',
    // marginTop: -45 backgroundColor: 'blue'
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