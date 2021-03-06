'use strict';

import React, { Component } from 'react';
import PerspectiveMap from './components/PerspectiveMap';
import GridView from './components/GridView';
import UserSettings from './components/UserSettings';
import Icon from 'react-native-vector-icons/MaterialIcons';


import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AlertIOS,
  requireNativeComponent,
  NavigatorIOS,
  TabBarIOS,
  StatusBar

} from 'react-native';

import MapView from 'react-native-maps';

// var MapView = require('react-native-maps');

class PerspectiveApp extends Component {


 constructor(props){

    super(props);

    const DEFAULT_LATITUDE  = 34.104581;
    const DEFAULT_LONGITUDE = -118.145595;

    this.state = {

        user_latitude  : DEFAULT_LATITUDE,
        user_longitude : DEFAULT_LONGITUDE,
        landmarks      : [],
        selectedTab    : 'map'
    }

    this.getUserLocation();
    this.getMarkersWithinArea();
 }



 getUserLocation() {

    navigator.geolocation.getCurrentPosition(
      (position) => {

        this.setState({user_latitude : position.coords.latitude , user_longitude : position.coords.longitude});
      },
      (error) => {console.log(error)},
    );

 }
 


 getMarkersWithinArea() {

    fetch('http://localhost:3000/api/landmarks',{method:'GET'})
      .then((response) => response.json())  
        .then( (responseData) => 
              { 
                this.setState({landmarks:responseData});
              }
        )
 }


  render() {

    return (

      <TabBarIOS
        unselectedTintColor="slategray"
        tintColor="rebeccapurple"
        barTintColor="snow"
        selectedTab = {this.state.selectedTab}
        >
          <Icon.TabBarItem
                title="Map"
                iconName="map"
                selectedIconName="map"
                selected={this.state.selectedTab === 'map'}
                onPress= {() => {this.setState({selectedTab:'map'});}}
            >
            <PerspectiveMap UserPosition={{lat:this.state.user_latitude,lng:this.state.user_longitude}} Landmarks={this.state.landmarks}/>
          </Icon.TabBarItem>
         
            <Icon.TabBarItem
                title="Browse"
                iconName="whatshot"
                selectedIconName="whatshot"
                selected={this.state.selectedTab === 'grid'}
                onPress= {() => {this.setState({selectedTab:'grid'});}}
            >

            <GridView />            
          </Icon.TabBarItem>
                 <Icon.TabBarItem
                title="More"
                iconName="menu"
                selectedIconName="menu"
                selected={this.state.selectedTab === 'more'}
                onPress= {() => {this.setState({selectedTab:'more'});}}
            >

            <UserSettings />            
          </Icon.TabBarItem>

      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  test:{
     borderColor:'blue',
     borderStyle:'solid'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

AppRegistry.registerComponent('PerspectiveApp', () => PerspectiveApp);
