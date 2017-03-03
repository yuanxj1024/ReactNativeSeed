/**
 * 自选股列表
 */

import React from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';

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
        9
      ]
    };
  }

  render() {
    return (
      <View>
        <View>
          <Text>自选股</Text>
        </View>
        <View>
          <View>
            <View>
              <View>
                <Text>贵州茅台</Text>
              </View>
              <View>
                <Text>234204</Text>
              </View>
            </View>
            <View>
              <Text>234.23</Text>
            </View>
            <View>
              <Button title='-023'></Button>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});