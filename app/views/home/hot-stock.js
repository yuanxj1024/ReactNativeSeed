/**
 * 3个股票
 */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import BasicStyle from '../../styles/basic';
import {fetchHotStock} from '../../actions/home';

class HotStock extends React.Component {
  constructor(props) {
    super(props);
    this
      .props
      .actions
      .fetchHotStock();
  }

  render() {
    console.log(111, this);
    return (
      <View style={[BasicStyle.flexRow, styles.wraper]}>
        {this
          .props
          .homeHotStock
          .map((item) => {
            return (
              <View style={[styles.item]} key={item}>
                <View>
                  <Text>乐视网</Text>
                </View>
                <View>
                  <Text>34.52</Text>
                </View>
                <View>
                  <View>
                    <Text>+0.8%</Text>
                  </View>
                  <View>
                    <Text>+0.2%</Text>
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
    justifyContent: 'space-around'
  },
  item: {
    height: 75
  }
});

function mapStateToProps(state) {
  console.log('mapStateToProps', state);
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