import React, { Component } from 'react';
import { View, Text, Animated, Easing, StyleSheet } from 'react-native';

export default class TimingViews extends Component {
  constructor(props) {
    super(props);

    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.animate();
  }

  animate = () => {
    this.animatedValue.setValue(0);
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear
    }).start(() => this.animate());
  };

  getMarginLeft = () =>
    this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 300]
    });

  getOpacity = () =>
    this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0]
    });

  getMovingMargin = () =>
    this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 300, 0]
    });

  getTextSize = () =>
    this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [18, 32, 18]
    });

  getRotateX = () =>
    this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '180deg', '0deg']
    });

  render = () => {
    const marginLeft = this.getMarginLeft();
    const opacity = this.getOpacity();
    const movingMargin = this.getMovingMargin();
    const textSize = this.getTextSize();
    const rotateX = this.getRotateX();

    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            marginLeft,
            height: 30,
            width: 40,
            backgroundColor: 'green'
          }}
        />
        <Animated.View
          style={{
            opacity,
            marginTop: 10,
            height: 30,
            width: 40,
            backgroundColor: 'cyan'
          }}
        />
        <Animated.View
          style={{
            marginLeft: movingMargin,
            marginTop: 10,
            height: 30,
            width: 40,
            backgroundColor: 'red'
          }}
        />
        <Animated.Text
          style={{
            fontSize: textSize,
            marginTop: 10,
            color: 'red'
          }}
        >
          Animated Text!
        </Animated.Text>
        <Animated.View
          style={{
            transform: [{ rotateX }],
            marginTop: 50,
            height: 30,
            width: 150,
            backgroundColor: 'purple'
          }}
        >
          <Text style={{ color: 'white' }}>Hello from TransformX</Text>
        </Animated.View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150
  }
});
