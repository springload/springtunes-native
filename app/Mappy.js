import React, {
  MapView,
  Component,
  Text,
  View,
  TouchableOpacity,
  Navigator,
  ListView,
  ScrollView,
  RefreshControl,
  TouchableWithoutFeedback,
  Image
} from 'react-native';

import styles from '../styles';
import config from '../config';


const LAT = -41.2924440;
const LNG = 174.7783660;

class Mappy extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFirstLoad: true,
            mapRegion: {
                latitude: LAT,
                longitude: LNG,
                latitudeDelta: 0.003864,
                longitudeDelta: 0.0054502,
            },
            mapRegionInput: undefined,
            annotations: [
                {
                    title: 'Springtunes Jukebox',
                    latitude: LAT,
                    longitude: LNG,
                    rightCalloutView: (
                      <TouchableOpacity
                        onPress={() => {
                          alert('You Are Here');
                        }}>
                        <Image
                          style={{width:30, height:30}}
                          source={require('../pin.png')}
                        />
                      </TouchableOpacity>
                    )
                }
            ],
        }
    }

    _onRegionChange() {

    }

    _onRegionChangeComplete() {

    }

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
                Map
              </Text>
              <Text style={styles.toolbarButton}>
              </Text>
            </View>
            <View style={styles.fullView}>
                <MapView
                  style={styles.map}
                  onRegionChange={this._onRegionChange}
                  onRegionChangeComplete={this._onRegionChangeComplete}
                  region={this.state.mapRegion}
                  annotations={this.state.annotations}
                />
            </View>
          </View>
        );
    }
}


module.exports = Mappy
