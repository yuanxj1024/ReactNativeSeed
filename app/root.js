import React from 'react';
import {Provider} from 'react-redux';
import {StyleSheet, Navigator, View, Text} from 'react-native';
import configureStore from './store/configureStore';

import Layout from './views/laylout/layout';

export default class App extends React.Component {

  configureScene() {
    return Object.assign({}, Navigator.SceneConfigs.HorizontalSwipeJump, {
      gestures: {
        pop: null
      }
    });
  }

  renderScene(route, navigator) {
    const Component = route.component;
    return (<Component {...route.props} navigator={navigator}/>);
  }

  render() {
    return (
      <Provider store={configureStore()}>
        <Navigator
          ref={(navigator) => {
          this.navigator = navigator
        }}
          initialRoute={{
          name: 'Layout',
          component: Layout
        }}
          renderScene={this.renderScene}></Navigator>

      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
