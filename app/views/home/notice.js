/**
 * 最新公告
 */

import React from 'react';
import {StyleSheet, View, ListView, Text, Image} from 'react-native';

import BasicStyle from '../../styles/basic';

const NoticeItem = (props) => {
  return (
    <View style={[BasicStyle.flexRow, styles.dataItem]}>
      <View style={[BasicStyle.flexRow]}>
        <View>
          <Text style={[styles.itemFlag]}>活动</Text>
        </View>
        <View style={[styles.itemTitle]}>
          <Text style={[styles.itemTitleTxt]}>和讯宝操盘升级公告{props.item}</Text>
        </View>
      </View>
      <View>
        <Text style={[styles.itemTime]}>2016-01-23 23:31</Text>
      </View>
    </View>
  );
};

export default class Notice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }).cloneWithRows([1, 2, 3, 4])
    };
  }

  render() {
    return (
      <View style={[BasicStyle.bgWhite, BasicStyle.marginTop, styles.container]}>
        <View style={[BasicStyle.flexRow, styles.header]}>
          <View style={[styles.headerItem]}>
            <Text style={[styles.headerTitle, BasicStyle.fontWeight]}>最新公告</Text>
          </View>
          <View style={[styles.headerItem, styles.headerItemLeft]}>
            <Text style={[styles.headerMore]}>更多公告

              <Image source={require('./img/arrow-right@3x.png')}></Image>
            </Text>
          </View>
        </View>
        <View>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={item => <NoticeItem item={item}></NoticeItem>}></ListView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  },
  header: {
    justifyContent: 'space-between',
    height: 35
  },
  headerItem: {
    flex: 1,
    justifyContent: 'center'
  },
  headerItemLeft: {
    alignItems: 'flex-end'
  },
  headerTitle: {
    fontSize: 14
  },
  headerMore: {
    fontSize: 10,
    color: '#999999'
  },
  dataItem: {
    // backgroundColor: 'red',
    paddingTop: 5,
    paddingBottom: 5,
    // alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  itemFlag: {
    color: '#458cf5',
    fontSize: 10,
    borderWidth: 1,
    borderColor: '#458cf5',
    borderRadius: 3,
    paddingTop: 2,
    paddingLeft: 2

  },
  itemTitle: {
    marginLeft: 10
  },
  itemTitleTxt: {
    color: '#666666'
  },
  itemTime: {
    color: '#cecece',
    fontSize: 12
  }
});