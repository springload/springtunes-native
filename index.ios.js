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
import Mappy       from './app/Mappy';


class SpringtunesStage extends Component {

  constructor(props) {
    super(props)
    this.state = {}
    this._navigatorDidFocus = this._navigatorDidFocus.bind(this);
  }


  /**
   * Called after initial render and any successful transitions
   */
  _navigatorDidFocus(e) {
    let route = e.data.route;

  }

  renderScene(route, navigator) {

    if (route.name === 'home') {
      return(
        <Springtunes
          name={route.name}
          onAbout={() => { utils._push('about', route, navigator) }}
        />
      );
    }

    if (route.name === 'map') {
      return (
        <Mappy
          name={route.name}
          onBack={() => { utils._pop(route, navigator) }} />
      )
    }

    if (route.name === 'about') {
      return (
        <About
          name={route.name}
          onMap={() => { utils._push('map', route, navigator, Navigator.SceneConfigs.FloatFromBottom )}}
          onScroll={() => { utils._push('scroll', route, navigator) }}
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

  configureScene(route) {
      if (route.sceneConfig) {
        return route.sceneConfig;
      }

      return Navigator.SceneConfigs.FloatFromRight;
  }

  render() {
    return (
      <Navigator
        initialRoute={{name: 'home', index: 0}}
        configureScene={this.configureScene}
        renderScene={this.renderScene}
        ref={navigator => { navigator && navigator.navigationContext.addListener('didfocus', this._navigatorDidFocus); }}
      />
    )
  }
}


AppRegistry.registerComponent('Springtunes', () => SpringtunesStage);
