'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator,
  ListView,
  ScrollView,
  RefreshControl,
  TouchableWithoutFeedback
} from 'react-native';

import styles from '../styles';
import config from '../config';


class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          About the app
        </Text>
        <Text>
          Some info about the app...
        </Text>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text style={styles.button}>
            Back
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

module.exports = About;
