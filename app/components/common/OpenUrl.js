import React, { Component } from 'react';
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

const propTypes = {
    url: React.PropTypes.string,
};

class OpenURL extends Component {
  handleClick = () => {
    Linking.canOpenURL(this.props.url).then(supported => {
      if (supported) {
        Linking.openURL(this.props.url);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url);
      }
    });
  };

  render() {
    return (
      <TouchableOpacity
        onPress={this.handleClick}>
          <Text>{this.props.urlLabel}</Text>
      </TouchableOpacity>
    );
  }
}

OpenURL.propTypes = propTypes;

export default OpenURL;

