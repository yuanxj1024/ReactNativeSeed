/**
 * banner轮播
 */
import React from 'react';
import {StyleSheet, Image, View, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';

const {width} = Dimensions.get('window');

const Slide = (props) => {
  return (
    <View style={styles.slide}>
      <Image
        resizeMode={'cover'}
        source={{
        uri: props.uri
      }}
        style={styles.image}></Image>
    </View>
  );
};

export default class Banner extends React.Component {
  constructor(arg) {
    super(arg);
    this.state = {
      imgList: [
        {
          title: '1',
          url: 'https://h5.niuguwang.com/huodong/wechat/live/img/bg_text_chat.png',
          time: ''
        }, {
          title: '2',
          url: 'https://h5.niuguwang.com/huodong/16Y12M/double12/img/bg.png'
        }
      ]
    };
  }

  render() {
    return (
      <View>
        <Swiper loadMinimal loop={false} height={158}>
          {this
            .state
            .imgList
            .map((item) => <Slide key={item.title} uri={item.url}/>)
}
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  image: {
    width,
    flex: 1,
    backgroundColor: 'transparent'
  }
});