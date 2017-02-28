/**
 * 最新点买
 */
import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  ListView,
  Image
} from 'react-native';

import BasicStyle from '../../styles/basic';

const SubItem = (props) => {
  return (
    <View style={[BasicStyle.flexRow, styles.itemTr]}>
      <View>
        <View>
          <Text>赵云股品牌</Text>
        </View>
        <View style={[BasicStyle.flexRow]}>
          <Text style={[BasicStyle.color999, styles.itemSubName]}>1分钟之前</Text>
          <Text style={[BasicStyle.color999, styles.itemSubName]}>发布</Text>
        </View>
      </View>
      <View>
        <View>
          <Text>荣胜超微</Text>
        </View>
        <View>
          <Text style={[BasicStyle.color999, styles.itemSubName]}>4500股</Text>
        </View>
      </View>
      <View style={[styles.itemCell3]}>
        <View>
          <Text>123.34</Text>
        </View>
        <View>
          <Text style={[BasicStyle.color999, styles.itemSubName]}>30.23止盈</Text>
        </View>
      </View>
      <View>
        <View style={[styles.itemBtn]}>
          <Text style={[styles.itemBtnTxt]}>我要发布</Text>
        </View>
      </View>
    </View>
  );
};

export default class HotBuy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }).cloneWithRows([
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ])
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
            renderRow={item => <SubItem pressed={this.publishPressed}/>}></ListView>
        </View>
      </View>
    );
  }

  publishPressed() {}

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
  itemTr: {
    justifyContent: 'space-between',
    marginTop: 7,
    marginBottom: 7
  },
  itemCell: {},
  itemSubName: {
    fontSize: 12,
    marginTop: 5
  },
  itemBtn: {
    borderWidth: 1,
    borderColor: '#3194ff',
    borderRadius: 5,
    padding: 6
  },
  itemBtnTxt: {
    fontSize: 14,
    color: '#3194ff'
  },
  itemCell3: {
    position: 'relative',
    marginTop: -3
  }
});