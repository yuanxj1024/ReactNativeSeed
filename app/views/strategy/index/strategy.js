import React from 'react';
import {StyleSheet, Navigator, View, Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import BasicStyle from '../../../styles/basic';
import Tab from './strategy-tab';
import TabBuy from './tab-buy';

class Strategy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabNames: [
        {
          title: '点买',
          value: '1'
        }, {
          title: '进行中',
          value: '2'
        }
      ]
    };
  }

  render() {
    return (
      <View style={[BasicStyle.flex, BasicStyle.bg]}>
        <View style={[styles.tab]}>
          <Tab/>
        </View>
        <View>
          {this.renderTabContent()
}
        </View>
      </View>
    );
  }

  renderTabContent = () => {
    if (this.props.strategyPage.selectedTab === 1) {
      return (<TabBuy/>);
    } else {
      return (
        <View>
          <Text>进行中</Text>
        </View>
      );
    }
  }

}

const styles = StyleSheet.create({
  tab: {
    height: 60,
    backgroundColor: '#f36369'

  }
});

function mapStateToProps(state) {
  return {strategyPage: state.strategyPage};
}

export default connect(mapStateToProps)(Strategy);