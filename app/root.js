import React from 'react';
import {Provider} from 'react-native';
import {StyleSheet, View, Text} from 'react-native';
import configureStore from "./store/configureStore";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <View style={styles.container}>
          <Text>Hello World!</Text>
          <Text>123123</Text>
        </View>
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
