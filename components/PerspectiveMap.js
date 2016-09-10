'use strict';

import React, {Component,PropTypes} from 'React';
import Button from 'react-native-button';
import Callout from './Callouts';
import LandmarkView from './LandmarkView';
import Modal from 'react-native-modalbox';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  StyleSheet,
  Text,
  View,
  requireNativeComponent,
  StatusBar,
  TouchableHighlight,
  Navigator,
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
        landmarkLeader: 'garvinling',
        landmarkLeaderImage : 'https://hd.unsplash.com/photo-1446226760091-cc85becf39b4'  //default image


    }
	}

  onRegionChange(region){
    // console.log(region);
  }

  _openLandMark(landmark){
      
      var url = 'http://localhost:3000/api/photos/' + landmark.leader_image;  

      fetch(url,{method:'GET'})
        .then((response) => response.json())  
          .then( (responseData) => 
                { 
    
                    this.setState({

                      landmarkName:landmark.name,
                      landmarkPhotoCount:landmark.photo_count,
                      landmarkLeaderImage:responseData.url 


                    });
                }
          )

      this.refs.landmarkModal.open();

  }



  _renderScene(route,navigator){
    
    const MAP_VIEW      = 1;
    const LANDMARK_VIEW = 2;

    if(route.id === MAP_VIEW) {

      return(
        <PerspectiveMapView lat={this.props.UserPosition.lat} lng={this.props.UserPosition.lng} landmarks={this.props.Landmarks} navigator={navigator}/>
      );
    
    } else if(route.id === LANDMARK_VIEW){

      return (
        
        <LandmarkView navigator={navigator}/>

      );

    }
  }





	render(){
		return(
      <View style={{flex:1}}>
      <StatusBar barStyle="light-content"/>
      <Navigator 
          initialRoute={{id:1}} 
          renderScene={(route,nav) => {return this._renderScene(route,nav)}} 
          navigationBar={<Navigator.NavigationBar style={{backgroundColor: '#5B3B81'}}     
          routeMapper={NavigationBarHeader}     />}     />

      </View>
		);
	}
}





class PerspectiveMapView extends Component{

  static propTypes = {
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    landmarks:PropTypes.array.isRequired
  }

  constructor(props,context){

    super(props,context);
    this._onPressLandmark = this._onPressLandmark.bind(this);
    // this._onBack    = this._onBack.bind(this);
    this.state = {

        isOpen:false,
        isDisabled:false,
        swipeToClose:true,
        sliderValue:0.3,
        landmarkName: 'Pasadena Coffee House',
        landmarkPhotoCount: 0,
        landmarkLeader: 'garvinling',
        landmarkLeaderImage : 'https://hd.unsplash.com/photo-1446226760091-cc85becf39b4'  //default image

    }

  }

  onRegionChange(region){
    // console.log(region);
  }

  _onPressLandmark(){

    this.props.navigator.push({

      id : 2

    });
  }

  _openLandMark(landmark){
      
      var url = 'http://localhost:3000/api/photos/' + landmark.leader_image;  

      fetch(url,{method:'GET'})
        .then((response) => response.json())  
          .then( (responseData) => 
                { 
    
                    this.setState({

                      landmarkName:landmark.name,
                      landmarkPhotoCount:landmark.photo_count,
                      landmarkLeaderImage:responseData.url 


                    });
                }
          )

      this.refs.landmarkModal.open();

  }
  // _onForward(){
  //   this.props.navigator.push({
  //     title:'Scene' + nextIndex,
  //   })
  // }

  render(){

    return(

     <View style={styles.container}>
          <MapView style={styles.map}     
                   initialRegion={{
                    latitude: this.props.lat,
                    longitude: this.props.lng,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                  onRegionChange={this.onRegionChange}
                  showsUserLocation={true}>

          {this.props.landmarks.map(landmark => (
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


        <Modal style={[styles.modal, styles.landmarkModal]} position={"bottom"} ref={"landmarkModal"}>
          <Image style={styles.backgroundImage} source={{uri:this.state.landmarkLeaderImage}} resizeMode='cover' >
              <View style={styles.landmarkOverlay}/>
               <TouchableHighlight onPress={this._onPressLandmark} style={{flex:1}} underlayColor='rgba(0,0,0,0.2)'>
                <View style={styles.landmarkData}>
                   <Text style={styles.landmarkName} onPress={this._onPressLandmark}>{this.state.landmarkName}</Text>
                   <View style={styles.countContainer}>
                    <Icon name='camera-alt' size={25} color='#ffffff' style={styles.landmarkIcon} />
                    <Text style={styles.landmarkInfo}>{this.state.landmarkPhotoCount}</Text>
                   </View> 

                   <View style={styles.leaderContainer}>
                    <Icon name='directions-walk' size={25} color='#ffffff' style={styles.landmarkIcon} />
                    <Text style={styles.landmarkInfo}>{this.state.landmarkPhotoCount}</Text>
                   </View>
                </View>                  
              </TouchableHighlight>
          </Image>
        </Modal>
      </View>

    );
  }


}


const NavigationBarHeader = {

    LeftButton: (route, navigator, index, navState) =>
          { 
            return (<Text></Text>);
          },
    RightButton: (route, navigator, index, navState) =>
           { 
            return (<Text></Text>); 
           },
    Title: (route, navigator, index, navState) =>
           { 
            return (<Text style={styles.headerBarTitle}>Awesome Nav Bar</Text>); 
           }
};




const styles = StyleSheet.create({

  headerBarTitle:{

    color:'white',
    alignItems:'center',
    marginTop:10

  },
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
  landmarkModal:{
    height:300
  },
  text: {
    color: "black",
    fontSize: 22
  },
  backgroundImage: {

    position:'absolute',
    top: 0,
    bottom:0,
    left:0,
    right:0
  },
  landmarkData:{

    position:'absolute',
    backgroundColor:'transparent',
    top:125,
    left:25,
    bottom:0,
    right:0
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
    color:'white',
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:15,
    fontSize:24
  },
  landmarkIcon:{

    paddingLeft:10,
    paddingRight:10

  },
  landmarkInfo:{

    color:'white',
    height:25,
    width:100,
    paddingTop:2

  },
  countContainer:{
    flex:1,
    flexDirection:'row'

  },
  leaderContainer:{
    flex:3,
    flexDirection:'row'
  }

});

module.exports = PerspectiveMap;














