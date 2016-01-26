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


class Scrolly extends Component {

  constructor(props) {
    super(props)

    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let data = ['row 1', 'row 2', 'row 3', 'row 4'];

    this.state = {
      data: data,
      dataSource:  ds.cloneWithRows(data),
      isRefreshing: false,
      loaded: 0,
    };

    this._onRefresh = this._onRefresh.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(rowData) {
    return (
        <TouchableOpacity onPress={this.props.onDetail}>
          <Text style={styles.listViewRow}>{rowData}</Text>
        </TouchableOpacity>
    )
  }

  render() {

    const refreshControl =  (
      <RefreshControl
        refreshing={this.state.isRefreshing}
        onRefresh={this._onRefresh}
        tintColor="#ff0000"
        title="Loading..."
        colors={['#ff0000', '#00ff00', '#0000ff']}
        progressBackgroundColor="#ffff00"
      />
    );

    return (
      <View style={styles.viewContainer}>
        <View style={styles.toolbar}>
          <TouchableOpacity onPress={this.props.onBack}>
            <Text style={styles.toolbarButton}>
              Back
            </Text>
          </TouchableOpacity>
          <Text style={styles.toolbarTitle}>
            ScrollView
          </Text>
          <Text style={styles.toolbarButton}>
          </Text>
        </View>
        <View style={styles.listView}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            style={styles.listViewElement}
            refreshControl={refreshControl}
          />
        </View>
      </View>
    );
  }

  _onRefresh() {
    this.setState({isRefreshing: true});
    setTimeout(() => {

      let currentRows = this.state.data;
      const newRows = Array.from(new Array(10))
        .map((val, i) => {
          return 'Loaded row' + (+this.state.loaded + i)
        })
        .concat(currentRows);

      this.setState({
        data: newRows,
        dataSource: this.state.dataSource.cloneWithRows(newRows),
        loaded: this.state.loaded + 10,
        isRefreshing: false,
      });

    }, 2000);
  }
}


module.exports = Scrolly;
