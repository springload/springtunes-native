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


class Springtunes extends Component {

  constructor(props) {
    super(props);

    //binding functions
    this.getTrackInfo = this.getTrackInfo.bind(this);
    this.updateTrackInfo = this.updateTrackInfo.bind(this);
    this._onPressNext = this._onPressNext.bind(this);
    this._onPressBack = this._onPressBack.bind(this);
    this._onPressPause = this._onPressPause.bind(this);

    this.state = {
      track: null
    }
  }

  _onPressNext() {
    fetch(`${config.api}playing`, {
      method: 'POST',
      headers: config.jsonHeaders,
      body: JSON.stringify({
        action: 'next'
      })
    });
  }

  _onPressBack() {
    fetch(`${config.api}playing`, {
      method: 'POST',
      headers: config.jsonHeaders,
      body: JSON.stringify({
        action: 'back'
      })
    });
  }

  _onPressPause() {
    fetch(`${config.api}playing`, {
      method: 'PUT',
      headers: config.jsonHeaders,
      body: JSON.stringify({
      })
    });
  }

  getTrackInfo() {
    fetch(`${config.api}playing`).then(this.updateTrackInfo);
  }

  updateTrackInfo(response) {
    let that = this;
    response.json().then(function(j) {
      that.setState({
        track: j.track
      });
    });
  }

  componentDidMount() {
    this.getTrackInfo();
    setInterval(this.getTrackInfo, 5000);
  }

  render() {
    let track = this.state.track;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Springtunes!
        </Text>
        {track ?
        <Text style={styles.track}>
          {track.track_resource.name} by {track.artist_resource.name}
        </Text> : null }
        <TouchableHighlight onPress={this._onPressNext}>
          <Text style={styles.button}>
            Next
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onPressBack}>
          <Text style={styles.button}>
            Back
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onPressPause}>
          <Text style={styles.button}>
            Play/Pause
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onAbout}>
          <Text style={styles.buttonSecondary}>
            About
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onScroll}>
          <Text style={styles.buttonSecondary}>
            ScrollView example
          </Text>
        </TouchableHighlight>

        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

module.exports = Springtunes
