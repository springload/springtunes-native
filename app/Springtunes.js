'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Navigator,
  ListView,
  ScrollView,
  RefreshControl,
  TouchableWithoutFeedback,
  SliderIOS,
  Image
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
    this.setVolume = this.setVolume.bind(this);
    this.sendVolume = this.sendVolume.bind(this);

    this.state = {
      track: null,
      volume: null,
      playing: null
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
    let that = this;

    fetch(`${config.api}playing`, {
      method: 'PUT',
      headers: config.jsonHeaders,
      body: JSON.stringify({
      })
    })
    .then(response => { return response.json() })
    .then(json => {
      that.setState({
        playing: json.playing
      });
    });

    that.setState({
      playing: !this.state.playing
    })
  }

  getTrackInfo() {
    fetch(`${config.api}playing`).then(this.updateTrackInfo);
  }

  updateTrackInfo(response) {
    let that = this;
    response.json().then(function(json) {
      that.setState({
        track: json.track,
        volume: Math.floor(json.volume * 100),
        playing: json.playing
      });
    });
  }

  componentDidMount() {
    this.getTrackInfo();
    setInterval(this.getTrackInfo, 5000);
  }

  setVolume(value) {
    this.setState({
      volume: value
    })
  }

  sendVolume(value) {
    let that = this;

    fetch(`${config.api}volume`, {
      method: 'PUT',
      headers: config.jsonHeaders,
      body: JSON.stringify({
        volume: value
      })
    })
    .then(response => { return response.json() })
    .then(json => {
      that.setState({
        volume: Math.floor(json.volume * 100)
      })
    })
  }

  render() {
    let track = this.state.track;

    return (
      <View  style={{backgroundColor: '#fff',  marginTop: 22,   flex: 1, flexDirection: 'column' }}>
        <View style={{backgroundColor: '#fff', justifyContent: 'center', flexDirection: 'row', marginTop: 20, marginBottom: 10}}>
          <Image
            style={styles.logo}
            resizeMode='contain'
            source={require('../springtunes.png')}
          />
        </View>
        <View style={{ alignItems: 'center', height: 300, flex: 1, backgroundColor: '#eee'}}>
          {track ?
          <Text style={styles.track}>
            {track.track_resource.name}
          </Text> : <Text style={styles.track}>Loading...</Text> }
          <Text style={styles.artist}>
          {track ? track.artist_resource.name : null }
          </Text>

          <View style={{ flexDirection:'row'  }}>
            <TouchableOpacity onPress={this._onPressPause}>
              <Text style={styles.flexButton}>
                {this.state.playing ? 'Pause' : 'Play'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPressNext}>
              <Text style={styles.flexButton}>
                Next
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPressBack}>
              <Text style={styles.flexButton}>
                Back
              </Text>
            </TouchableOpacity>
          </View>
          {this.state.volume === null ? null :
          <Text>
            Volume:
          </Text> }

          {this.state.volume === null ? null :
          <SliderIOS
            value={this.state.volume}
            style={styles.slider}
            step={2}
            minimumValue={0}
            maximumValue={100}
            onValueChange={this.setVolume}
            onSlidingComplete={this.sendVolume} /> }
        </View>
        <View style={{padding: 0, flexDirection:'row', alignItems: 'center', backgroundColor: '#ddd', height: 55, justifyContent:'center'   }}>
          <TouchableOpacity onPress={this.props.onAbout}>
            <Text style={styles.buttonSecondary}>
              About
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.onScroll}>
            <Text style={styles.buttonSecondary}>
              ScrollView example
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

module.exports = Springtunes
