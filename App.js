import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import SpinImage from './src/SpinImage';
import TimingViews from './src/TimingViews';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentComponent: 'spin',
      componentsObject: {
        spin: this.renderSpinAnimation,
        timingViews: this.renderTimingViews,
        default: this.renderSpinAnimation
      }
    };
  }

  renderSpinAnimation = () => <SpinImage />;
  renderTimingViews = () => <TimingViews />

  handlerAnimatedComponents = component => {
    const { componentsObject } = this.state;
    return (componentsObject[component] || componentsObject.default)();
  };

  updateRenderComponentState = component => {
    this.setState({ currentComponent: component });
  };

  renderSpinButton = () => (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => this.updateRenderComponentState('spin')}
    >
      <View style={styles.buttonViewContainer}>
        <Text style={styles.textButton}>Spin Animation</Text>
      </View>
    </TouchableOpacity>
  );

  renderTimingViewsButton = () => (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => this.updateRenderComponentState('timingViews')}
    >
      <View style={styles.buttonViewContainer}>
        <Text style={styles.textButton}>Timing Views</Text>
      </View>
    </TouchableOpacity>
  );

  renderButtons = () => (
    <View>
      {this.renderSpinButton()}
      {this.renderTimingViewsButton()}
    </View>
  );

  render() {
    const { currentComponent } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 }}>
          <View style={styles.animationContainer}>
            {this.handlerAnimatedComponents(currentComponent)}
          </View>
          <ScrollView style={{ flex: 1, backgroundColor: '#e0e0e0' }}>
            <View style={styles.buttonsContainer}>{this.renderButtons()}</View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  buttonContainer: {
    backgroundColor: 'orange',
    borderRadius: 8,
    marginTop: 20,
    height: 55,
    width: 260
  },
  buttonViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  animationContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonsContainer: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'flex-end',
    alignItems: 'center'
    // backgroundColor: ''
  }
});
