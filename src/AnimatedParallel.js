import React, { Component } from 'react';
import { View, Animated, Text, Easing } from 'react-native';

export default class AnimatedParallel extends Component {
  constructor() {
    super();

    this.animatedValue1 = new Animated.Value(0);
    this.animatedValue2 = new Animated.Value(0);
    this.animatedValue3 = new Animated.Value(0);
  }

  componentDidMount() {
    this.amimate();
  }

  animate = () => {
    this.animatedValue1.setValue(0);
    this.animatedValue2.setValue(0);
    this.animatedValue3.setValue(0);

    Animated.parallel([
      this.createAnimation(this.animatedValue1, 2000, Easing.ease),
      this.createAnimation(this.animatedValue2, 1000, Easing.ease, 1000),
      this.createAnimation(this.animatedValue3, 1000, Easing.ease, 2000)
    ]).start();
  };

  createAnimation = (value, duration, easing, delay = 0) => {
    return Animated.timing(value, {
      toValue: 1,
      duration,
      easing,
      delay
    });
  };

  render = () => {
    return (
      <View>
        <Text>akshjbd </Text>
      </View>
    );
  };
}
