import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen'
import { Text, View, Linking, TouchableHighlight, PermissionsAndroid, Platform, StyleSheet} from 'react-native';
import { CameraKitCameraScreen, } from 'react-native-camera-kit';
import RouterConfig from './src/router';
export default class App extends Component {
  componentDidMount() {
      SplashScreen.hide();
  }
  constructor() {
    super();
    this.state = {
      qrvalue: '',
      opneScanner: false,
    };
  }
  render(){
    return(
      <RouterConfig/>
    )
  }
 
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2c3539',
    padding: 10,
    width:300,
    marginTop:16
  },
  heading: { 
    color: 'black', 
    fontSize: 24, 
    alignSelf: 'center', 
    padding: 10, 
    marginTop: 30 
  },
  simpleText: { 
    color: 'black', 
    fontSize: 20, 
    alignSelf: 'center', 
    padding: 10, 
    marginTop: 16
  }
});