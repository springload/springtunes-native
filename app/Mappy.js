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
  Image,
  InteractionManager
} from 'react-native';

import styles from '../styles';
import config from '../config';


class Mappy extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderPlaceholderOnly: true,
            isFirstLoad: true,
            mapRegion: {
                latitude: config.springload.LAT,
                longitude: config.springload.LNG,
                latitudeDelta: config.springload.deltaLat,
                longitudeDelta: config.springload.deltaLong,
            },
            mapRegionInput: undefined,
            annotations: [
                {
                    title: 'Springtunes Jukebox',
                    latitude: config.springload.LAT,
                    longitude: config.springload.LNG,
                    rightCalloutView: (
                      <TouchableOpacity
                        onPress={() => {
                          alert('You Are Here');
                        }}>
                        <Image
                          style={{ width:30, height:30 }}
                          source={require('../pin.png')}
                        />
                      </TouchableOpacity>
                    )
                }
            ],
        }

        this._onBack = this._onBack.bind(this);
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
          this.setState({renderPlaceholderOnly: false});
        });
    }

    _onRegionChange() {

    }

    _onRegionChangeComplete() {

    }

    _renderPlaceholderView() {

    }

    _onBack() {
      this.setState({
        renderPlaceholderOnly: true
      });

      this.props.onBack();
    }

    render() {
        return (
            <View style={styles.viewContainer}>
                <View style={styles.toolbar}>
                  <TouchableOpacity onPress={this._onBack}>
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
                    {this.state.renderPlaceholderOnly ? null :
                    <MapView
                      style={styles.map}
                      onRegionChange={this._onRegionChange}
                      onRegionChangeComplete={this._onRegionChangeComplete}
                      region={this.state.mapRegion}
                      annotations={this.state.annotations}
                    />}
                </View>
            </View>
        );
    }
}


module.exports = Mappy
