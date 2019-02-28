import React, { Component } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

export default class AnimatedSpring extends Component {
  constructor() {
    super();

    this.springValue = new Animated.Value(0.5);
  }

  spring = () => {
    this.springValue.setValue(0.5);
    Animated.spring(this.springValue, {
      toValue: 1,
      friction: 1
    }).start();
  };

  render = () => {
    return (
      <View style={styles.container}>
        <Animated.Image
          style={{
            width: 227,
            height: 200,
            transform: [{ scale: this.springValue }]
          }}
          onPress={this.spring()}
          source={{
            uri:
              'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'
          }}
        />
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
