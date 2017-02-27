/**
 * 最新公告
 */

import React from 'react';
import {StyleSheet, View, LiveView, Text, Image} from 'react-native';

import BasicStyle from '../../styles/basic';

const NoticeItem = (props) => {
  return (
    <View>
      <View>
        <View>
          <Text>活动</Text>
        </View>
      </View>
      <View>
        <Text>和讯宝操盘升级公告</Text>
      </View>
      <View>
        <Text>2016-01-23 23:31</Text>
      </View>
    </View>
  );
};

export default class Notice extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <View>
          <View>
            <Text>最新公告</Text>
          </View>
          <View>
            <Text>更多公告</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({container: {}, header: {}}});