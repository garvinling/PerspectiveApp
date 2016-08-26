'use strict';

import React, {Component} from 'React';


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
          >

	      	{this.props.LandMarks.map(landmark => (

	      		<MapView.Marker
	      			key={landmark._id}
	      			coordinate={{latitude:landmark.coordinates[0],longitude:landmark.coordinates[1]}}
	      			title={landmark.name}
	      			description={landmark.name}
	      		/>

	      	))}
	    	
          </MapView>
      </View>

		);
	}
}

const styles = StyleSheet.create({

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