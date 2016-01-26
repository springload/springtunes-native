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


class About extends Component {
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
            About the app
          </Text>
          <TouchableOpacity onPress={this.props.onMap}>
            <Text style={styles.toolbarButtonRight}>
              Map
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contentView}>
           <Text style={{lineHeight: 21, fontSize: 15, color: '#222'}}>
            <Text style={{fontWeight: 'bold'}}>Springtunes</Text> was developed
            by <Text style={{color: '#666'}}>Vincent</Text> and <Text style={{color: '#666'}}>Katie</Text> in Jan 2016.{'\n'}{'\n'}
            It's a Spotify client that runs on our music server and
            lets everyone in the office change the music that's playing.{'\n'}{'\n'}
            We built this iOS client as a proof-of-concept in React Native.
            The app doesn't really do very much. But we're pretty chuffed with
            how a JS-based app can drive a native UI.
          </Text>
        </View>
        <View style={styles.springtunesFooter}>
          <TouchableOpacity onPress={this.props.onScroll}>
            <Text style={styles.buttonSecondary}>
              ScrollView example
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

module.exports = About;
