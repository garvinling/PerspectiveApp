'use strict';

import React, {Component} from 'React';
import Button from 'react-native-button';
import Callout from './Callouts';
import LandmarkModal from './LandmarkModal';
import Modal from 'react-native-modalbox';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  StyleSheet,
  Text,
  View,
  requireNativeComponent,
  StatusBar,
  TouchableHighlight,
  Image
} from 'react-native';

import MapView from 'react-native-maps';


class PerspectiveMap extends Component{

	constructor(props){
		super(props);

    this.state = {

        isOpen:false,
        isDisabled:false,
        swipeToClose:true,
        sliderValue:0.3,
        landmarkName: 'Pasadena Coffee House',
        landmarkPhotoCount: 0,
        landmarkLeader: 'garvinling'


    }
	}

  onRegionChange(region){
    // console.log(region);
  }

  _openLandMark(landmark){
      
      console.log(landmark);
      // this.setState({landmarkName:'lol'})
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
                  showsUserLocation={false}>

	      	{this.props.LandMarks.map(landmark => (

            <MapView.Marker
	      			key={landmark._id}
	      			coordinate={{latitude:landmark.coordinates[0],longitude:landmark.coordinates[1]}}
              onPress={() => this._openLandMark(landmark)}
              style={{width:10,height:10}}
              image={require('../assets/icons/ic_place_2x.png')}

	      		>
            </MapView.Marker>
	      	))}
          </MapView>


        <Modal style={[styles.modal, styles.modal4]} position={"bottom"} ref={"modal4"}>
          
      
          <Image style={styles.backgroundImage} source={{uri:'https://hd.unsplash.com/photo-1446226760091-cc85becf39b4'}} resizeMode={Image.resizeMode.contain}>
            <View style={styles.landmarkOverlay}/>
            <View style={styles.landmarkData}>
             <Text style={styles.landmarkName}>{this.state.landmarkName}</Text>
<Icon
  name='camera-alt'
  size={30}
  color='#ffffff'
  style={styles.landmarkIcon}
/>
             <Text style={styles.landmarkInfo}>{this.state.landmarkPhotoCount}</Text>

            </View>
          </Image>

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
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    width:400,
    height:200
  },
  landmarkData:{

    position:'absolute',
    backgroundColor:'transparent',
    top:175,
    left:25,
    bottom:0,
    right:0,
    // borderRadius: 4,
    // borderWidth: 0.5,
    // borderColor: 'red'


  },
  landmarkOverlay:{
    position:'absolute',
    backgroundColor:'rgba(0,0,0,0.6)',
    top:0,
    left:0,
    bottom:0,
    right:0,
    width:400,
    height:400
  },
  landmarkName:{
    color:'white'
  },
  landmarkIcon:{

  },
  landmarkInfo:{
    color:'white'
  }

});


module.exports = PerspectiveMap;





