/**
 * 热门股票
 */
import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

import BasicStyle from '../../styles/basic';

export default class HotStock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        1,
        2,
        3,
        4,
        5,
        6,
        7
      ]
    };
  }

  render() {
    return (
      <View style={[styles.container]}>
        <View style={[styles.title]}>
          <Text>热门股票</Text>
        </View>
        <View style={[styles.scrollWrap]}>
          <ScrollView horizontal={true} style={BasicStyle.flex}>
            <View style={[BasicStyle.flexRow, styles.itemWrap]}>
              {this
                .state
                .list
                .map((item) => {
                  return (
                    <View style={[styles.item, BasicStyle.flex, BasicStyle.center]} key={item}>
                      <View>
                        <Text style={[styles.stockName]}>贵州茅台{item}</Text>
                      </View>
                      <View>
                        <Text style={[styles.stockNum, styles.green]}>234.43</Text>
                      </View>
                      <View style={[styles.stockSub]}>
                        <View style={[styles.marginRight]}>
                          <Text style={[styles.red, BasicStyle.fontSize10]}>-12.03</Text>
                        </View>
                        <View>
                          <Text style={[styles.red, BasicStyle.fontSize10]}>-12.03</Text>
                        </View>
                      </View>
                    </View>
                  );
                })
}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  title: {
    // marginTop: 10,
    marginBottom: 10
  },
  scrollWrap: {
    height: 105
  },
  itemWrap: {
    // justifyContent: 'space-between', justifyContent: 'space-between'
  },
  item: {
    borderWidth: 1,
    borderColor: '#f1f3f4',
    borderRadius: 8,
    marginRight: 10,
    width: 115
  },
  stockName: {
    color: '#999999'
  },
  stockNum: {
    fontSize: 25,
    marginTop: 8,
    marginBottom: 8
  },
  stockSub: {
    flexDirection: 'row',
    // fontSize: 10
  },
  marginRight: {
    marginRight: 10
  },
  red: {
    color: '#f36369'
  },
  green: {
    color: '#16ab16'
  }
});