/**
 * Springtunes React Native App
 */
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

import styles      from './styles';
import config      from './config';
import utils       from './app/utils';

import Springtunes from './app/Springtunes';
import Scrolly     from './app/Scrolly';
import Detail      from './app/Detail';
import About       from './app/About';


class SpringtunesStage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  renderScene(route, navigator) {
    if (route.name === 'home') {
      return(
        <Springtunes
          name={route.name}
          onAbout={() => { utils._push('about', route, navigator) }}
          onScroll={() => { utils._push('scroll', route, navigator) }}
        />
      );
    }

    if (route.name === 'about') {
      return (
        <About
          name={route.name}
          onBack={() => { utils._pop(route, navigator) }} />
      );
    }

    if (route.name === 'detail') {
      return (
        <Detail
          name={route.name}
          onBack={() => { utils._pop(route, navigator) }}  />
      )
    }

    if (route.name === 'scroll') {
      return (
        <Scrolly
          name={route.name}
          onDetail={() => { utils._push('detail', route, navigator)  }}
          onBack={() => { utils._pop(route, navigator) }} />
      )
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{name: 'home', index: 0}}
        renderScene={this.renderScene}
      />
    )
  }
}


AppRegistry.registerComponent('Springtunes', () => SpringtunesStage);
