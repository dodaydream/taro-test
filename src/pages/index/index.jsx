import {Component} from 'react';
import {View, Text, Swiper, SwiperItem} from '@tarojs/components';
import Taro from '@tarojs/taro';
import {AtButton, AtCountdown, AtCurtain, AtNoticebar } from 'taro-ui';
import './index.less';

export default class Index extends Component {
  constructor () {
    super();
    this.state = {
      isOpened: true,
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onClose() {
    this.setState({
      isOpened: false,
    });
  }

  onTimeUp() {
    Taro.showToast({
      title: '倒计时结束',
      icon: 'success',
      duration: 2000,
    });
  }

  render() {
    return (
      <View className="index">
        <AtCurtain
          isOpened={this.state.isOpened}
          onClose={this.onClose.bind(this)}>
          <View>这是一个 Curtain</View>
        </AtCurtain>

              <Swiper
        className='test-h'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        vertical
        circular
        indicatorDots
        autoplay>
        <SwiperItem>
          <View className='demo-text-1'>1</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-2'>2</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-3'>3</View>
        </SwiperItem>
      </Swiper>

        <AtNoticebar marquee>
  这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏
</AtNoticebar>
        <AtButton type="primary">test</AtButton>

        <AtCountdown
          format={{hours: ':', minutes: ':', seconds: ':'}}
          seconds={10}
          onTimeUp={this.onTimeUp.bind(this)}></AtCountdown>
      </View>
    );
  }
}
