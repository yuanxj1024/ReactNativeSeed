/**
 * 3个股票
 */

import React * from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

import BasicStyle from '../../styles/basic';

class HotStock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View></View>
    );
  }

}

function mapStateToProps({homeHotStock}) {
  return {homeHotStock};
}

export default connect(mapStateToProps)(HotStock);