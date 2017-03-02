/**
 * 3个股票
 */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import BasicStyle from '../../../styles/basic';
import {fetchHotStock} from '../../../actions/home';

class HotStock extends React.Component {
  constructor(props) {
    super(props);
    this
      .props
      .actions
      .fetchHotStock();
  }

  render() {
    return (
      <View style={[BasicStyle.flexRow, BasicStyle.marginTop, BasicStyle.bgWhite]}>
        {this
          .props
          .homeHotStock
          .map((item) => {
            return (
              <View style={[styles.item, BasicStyle.flex, BasicStyle.center]} key={item}>
                <View>
                  <Text>乐视网{item}</Text>
                </View>
                <View style={[styles.stockPercent]}>
                  <Text style={[styles.redColor, BasicStyle.fontWeight]}>34.52</Text>
                </View>
                <View style={[BasicStyle.flex, BasicStyle.flexRow]}>
                  <View>
                    <Text style={[styles.greenColor]}>-0.8%</Text>
                  </View>
                  <View style={[styles.stockSubPercent]}>
                    <Text style={[styles.redColor]}>+0.2%</Text>
                  </View>
                </View>
              </View>

            );
          })
}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wraper: {
    justifyContent: 'space-around',
    paddingTop: 10
  },
  item: {
    // height: 75, backgroundColor: 'red',
    paddingTop: 10,
    paddingBottom: 10
  },
  itemSub: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  stockName: {
    fontSize: 30,
    color: '#000000'
  },
  stockPercent: {
    marginTop: 12,
    marginBottom: 5
  },
  stockSubPercent: {
    marginLeft: 7
  },
  redColor: {
    color: '#f36369'
  },
  greenColor: {
    color: '#16ab16'
  }

});

function mapStateToProps(state) {
  return {homeHotStock: state.homePage.homeHotStock};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      fetchHotStock
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HotStock);