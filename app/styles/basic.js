import {StyleSheet} from 'react-native';

const Basic = StyleSheet.create({
  container: {
    // paddingTop: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    paddingTop: 15
  },
  radius15: {
    borderRadius: 15
  },
  flex: {
    flex: 1
  },
  flexRow: {
    flex: 1,
    flexDirection: 'row'
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  flexRight: {
    alignItems: 'flex-end'
  },
  white: {
    color: '#fff'
  },
  color999: {
    color: '#999999'
  },
  color666: {
    color: '#666666'
  },
  colorRed: {
    color: '#f36369'
  },
  colorGreen: {
    color: '#1aac1a'
  },
  bgWhite: {
    backgroundColor: '#fff'
  },
  bg: {
    backgroundColor: '#f1f3f4'
  },
  bgHeader: {
    backgroundColor: '#f36369'
  },
  marginTop: {
    marginTop: 10
  },
  fontWeight: {
    fontWeight: 'bold'
  },
  fontSize10: {
    fontSize: 10
  },
  fontSize16: {
    fontSize: 16
  }
});

export default Basic;