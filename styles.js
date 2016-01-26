import React, {
  AppRegistry,
  Component,
  StyleSheet
} from 'react-native';


module.exports = StyleSheet.create({
  viewContainer: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  track: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: '#555',
    marginBottom: 0
  },
  artist: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 4,
    color: '#888',
    marginBottom: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  toolbarButton: {
    width: 60,
    color: '#fff',
    height: 14
  },
  toolbar: {
    paddingTop: 32,
    backgroundColor: '#98c365',
    flexDirection: 'row',
    paddingBottom: 12,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center'
  },
  toolbarTitle: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginLeft: 10,
    flex: 1,
  },
  button: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#98c365',
    color: '#fff',
    marginBottom: 10,
    borderRadius: 5
  },
  flexButton: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#98c365',
    color: '#fff',
    marginBottom: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10
  },
  buttonSecondary: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#a9a9a9',
    color: '#fff',
    // marginBottom: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    fontSize: 12
  },
  instructions: {
    textAlign: 'center',
    color: '#888',
    marginBottom: 5,
    fontSize: 10
  },
  listView: {
    padding: 10,
    paddingTop: 16,
    backgroundColor: '#fff',
    flex: 1
  },
  listViewElement: {
    marginBottom: 20,
    height: 350
  },
  listViewRow: {
      color: '#333',
      padding: 10,
      backgroundColor: '#f3f3f3',
      marginBottom: 2
  },
  slider: {
    height: 10,
    margin: 10,
    width: 250,
    marginBottom: 30,
    marginTop: 30

  },
  logo: {
    width: 150,
    height: 40,

  },
  contentView: {flex: 1, backgroundColor: '#f3f3f3', padding: 20}
});
