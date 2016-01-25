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

class Detail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Detail about this list item
        </Text>
        <Text>
          Bla bla bla...
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

module.exports = Detail
