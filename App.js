import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 37.5326,
        longitude: 127.024612,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} region={this.state.region} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
