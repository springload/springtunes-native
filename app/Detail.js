'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
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
      <View style={styles.viewContainer}>
        <View style={styles.toolbar}>
          <TouchableOpacity onPress={this.props.onBack}>
            <Text style={styles.toolbarButton}>
              Back
            </Text>
          </TouchableOpacity>
          <Text style={styles.toolbarTitle}>
            Detail
          </Text>
          <Text style={styles.toolbarButton}>
          </Text>
        </View>
        <View style={styles.contentView}>
           <Text>
            Some info about the item...
          </Text>
        </View>
      </View>
    )
  }
}

module.exports = Detail
