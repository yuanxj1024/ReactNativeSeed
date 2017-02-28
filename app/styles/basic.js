import {StyleSheet} from 'react-native';

const Basic = StyleSheet.create({
  container: {
    paddingTop: 10,
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
  bgWhite: {
    backgroundColor: '#fff'
  },
  bg: {
    backgroundColor: '#f1f3f4'
  },
  marginTop: {
    marginTop: 10
  },
  fontWeight: {
    fontWeight: 'bold'
  }
});

export default Basic;