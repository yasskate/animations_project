import React, { Component } from 'react';
import { View, Image, Easing, Animated } from 'react-native';

export default class SpinImage extends Component {
  constructor(props) {
    super(props);

    this.spinValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.spin();
  }

  spin = () => {
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 4000,
      easing: Easing.linear
    }).start(() => this.spin());
  };

  getSpinValue = () =>
    this.spinValue.interpolate({
      inputRange: [0, 0.5],
      outputRange: ['0deg', '360deg']
    });

  render = () => {
    const spin = this.getSpinValue();

    return (
      <View>
        <Animated.Image
          style={{
            width: 227,
            height: 200,
            transform: [{ rotate: spin }]
          }}
          source={{
            uri:
              'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'
          }}
        />
      </View>
    );
  };
}
