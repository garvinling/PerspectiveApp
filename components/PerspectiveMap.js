'use strict';

import React, {Component} from 'React';
import Button from 'react-native-button';
import Callout from './Callouts';
import Modal from 'react-native-modalbox';
import {
  StyleSheet,
  Text,
  View,
  requireNativeComponent,
  StatusBar,
  TouchableHighlight
} from 'react-native';

import MapView from 'react-native-maps';


class PerspectiveMap extends Component{

	constructor(props){
		super(props);

    this.state = {

        isOpen:false,
        isDisabled:false,
        swipeToClose:true,
        sliderValue:0.3


    }
	}

  onRegionChange(region){
    // console.log(region);
  }

  _openLandMark(){
    console.log('marker clicked');
        this.refs.modal4.open();

  }

  onPress(){

    console.log('Marker Pressed');
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
              onPress={() => this._openLandMark()}
              style={{width:10,height:10}}
              image={require('../assets/icons/ic_place_2x.png')}

	      		>
              {/* <View style={{position:'absolute', height:40, width:40, backgroundColor:'red'}} />*/}  

            {/*               <MapView.Callout onPress={() => this._openLandMark()} style={styles.callout}>
                <Callout onPress={() => this._openLandMark()} landmarkObject={landmark}/>
              </MapView.Callout>
              */
            }

            </MapView.Marker>
	      	))}
          </MapView>
        <Modal style={[styles.modal, styles.modal4]} position={"bottom"} ref={"modal4"}>
          <Text style={styles.text}>Modal on bottom with backdrop</Text>
        </Modal>
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
  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal4:{
    height:300
  },
  text: {
    color: "black",
    fontSize: 22
  }

});


module.exports = PerspectiveMap;





