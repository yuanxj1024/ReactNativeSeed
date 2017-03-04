/**
 * 自选股列表
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';

import BasicStyle from '../../../styles/basic';

export default class OptionalList extends React.Component {
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
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14
      ]
    };
  }

  render() {
    return (
      <View style={[styles.container, BasicStyle.bgWhite]}>
        <View style={[styles.header]}>
          <Text>自选股</Text>
        </View>
        <View>
          {this
            .state
            .list
            .map((item) => {
              return (
                <View style={[BasicStyle.flexRow, styles.item]} key={item}>
                  <View>
                    <View>
                      <Text>贵州茅台{item}</Text>
                    </View>
                    <View>
                      <Text style={[styles.code]}>234204</Text>
                    </View>
                  </View>
                  <View>
                    {this.renderColorNum(item)}
                  </View>
                  <View>
                    <TouchableOpacity>
                      {this.renderButton(item)}
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
        </View>
      </View>
    );
  }

  renderColorNum(item) {
    const style = item % 2
      ? BasicStyle.colorRed
      : BasicStyle.colorGreen;
    return (
      <Text style={[style, BasicStyle.fontSize16]}>
        234.23
      </Text>
    );
  }

  renderButton(item) {
    const style = item % 2
      ? styles.redBtn
      : styles.greenBtn;
    return (
      <View style={[style, styles.btn]}>
        <Text style={[BasicStyle.white, BasicStyle.fontSize16]}>-0.12</Text>
      </View>
    );
  }

  btnPressed() {}
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingLeft: 15
  },
  header: {
    paddingTop: 15,
    borderBottomWidth: 1,
    borderColor: '#d3d3d3',
    paddingBottom: 15
  },
  wrap: {},
  item: {
    marginTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#d3d3d3',
    justifyContent: 'space-between',
    alignItems: 'center',
    // height: 80
  },
  code: {
    fontSize: 10,
    color: '#999999',
    marginTop: 5
  },
  redBtn: {
    backgroundColor: '#f36369'
  },
  greenBtn: {
    backgroundColor: '#16ab16'
  },
  btnWrap: {
    // marginRight: 15, borderRadius: 10, paddingRight: 15, height: 35
  },
  btn: {
    // marginTop: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 85,
    height: 35,
    borderRadius: 5,
    marginRight: 15
  },
  bg: {
    // backgroundColor: 'red', padding: 5, height: 50
  }
});