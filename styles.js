import React, {
  AppRegistry,
  Component,
  StyleSheet
} from 'react-native';


module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  track: {
    fontSize: 14,
    textAlign: 'center',
    margin: 10,
    color: '#888'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#98c365',
    color: '#fff',
    marginBottom: 10,
    borderRadius: 5
  },
  buttonSecondary: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#ccc',
    color: '#fff',
    marginBottom: 10,
    borderRadius: 5
  },
  instructions: {
    textAlign: 'center',
    color: '#888',
    marginBottom: 5,
    fontSize: 10
  },
  listView: {
    padding: 10,
    backgroundColor: '#fff'
  },
  listViewElement: {
    marginTop: 20,
    height: 350
  },
  listViewRow: {
      color: '#333',
      padding: 10,
      backgroundColor: '#f3f3f3',
      marginBottom: 2
  }
});
