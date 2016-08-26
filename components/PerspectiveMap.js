'use strict';

import React, {Component} from 'React';
import Button from 'react-native-button';
import Callout from './Callouts';

import {
  StyleSheet,
  Text,
  View,
  requireNativeComponent,
  StatusBar
} from 'react-native';

import MapView from 'react-native-maps';


class PerspectiveMap extends Component{

	constructor(props){
		super(props);
		console.log(props);
	}

  onRegionChange(region){
    // console.log(region);
  }

  _handleIt(){
    console.log('marker clicked');
  }

	render(){

		return(

		  <View style={styles.container}>

          <MapView style={styles.map}     
                   initialRegion={{
                    latitude: this.props.UserPosition.lat,
                    longitude: this.props.UserPosition.lng,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                  onRegionChange={this.onRegionChange}
                  showsUserLocation={true}
          >

	      	{this.props.LandMarks.map(landmark => (

	      		<MapView.Marker
	      			key={landmark._id}
	      			coordinate={{latitude:landmark.coordinates[0],longitude:landmark.coordinates[1]}}
	      		>
              <MapView.Callout onPress={() => this._handleIt('123')} style={styles.callout}>
                <Callout onPress={() => this._handleIt('123')} landmarkObject={landmark}/>
              </MapView.Callout>
            </MapView.Marker>
	      	))}
          </MapView>
      </View>

		);
	}
}

const styles = StyleSheet.create({
  callout:{
    height:50,
    width:200,
    padding:0
  },
  container: {
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
});


module.exports = PerspectiveMap;





