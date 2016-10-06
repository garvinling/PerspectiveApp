'use strict';

import React, {Component,PropTypes} from 'React';
import Button from 'react-native-button';
import Callout from './Callouts';
import LandmarkView from './LandmarkView';
import PerspectiveMapView from './PerspectiveMapView';
import LandmarkModal from 'react-native-modalbox';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LoginView from './LoginView';
import {
  StyleSheet,
  Text,
  View,
  requireNativeComponent,
  StatusBar,
  TouchableHighlight,
  Navigator,
  Image,
  Modal
} from 'react-native';

import MapView from 'react-native-maps';


class PerspectiveMapNavigator extends Component{

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
      
      const url = 'http://localhost:3000/api/photos/' + landmark.leader_image;  

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
  
    if(route.id === 'MapView') {

      return(
        <PerspectiveMapView user={this.props.user} lat={this.props.UserPosition.lat} lng={this.props.UserPosition.lng} landmarks={this.props.Landmarks} navigator={navigator}/>
      );
    
    } else if(route.id === 'LandmarkView'){

      return (
        
        <LandmarkView user={this.props.user} navigator={navigator} landmark_id={route.landmark_id}/>

      );

    }
  }


	render(){
		return(
      <View style={{flex:1}}>
      <StatusBar barStyle="light-content"/>
      <Navigator 
          initialRoute={{id:'MapView'}} 
          renderScene={(route,nav) => {return this._renderScene(route,nav)}} 
          navigationBar={<Navigator.NavigationBar style={{backgroundColor: '#5B3B81'}}     
          routeMapper={NavigationBarHeader}     />}     />

      </View>
		);
	}
}






const NavigationBarHeader = {

    LeftButton: (route, navigator, index, navState) =>
          { 
            if(route.id === 'LandmarkView'){
              return (
                <TouchableHighlight underlayColor='rgba(91,59,129,0.5)' onPress={navigator.pop}>
                 <View style={styles.backButton}>
                    <Icon name='chevron-left' size={25} color='#ffffff' style={styles.landmarkIcon} />
                 </View>
                </TouchableHighlight>
              );
            } else {

               return (<Text></Text>);

            }
          },
    RightButton: (route, navigator, index, navState) =>
           { 
            return (<Text></Text>); 
           },
    Title: (route, navigator, index, navState) =>
           { 
            return (<Text style={styles.headerBarTitle}>{route.id}</Text>); 
           }
};




const styles = StyleSheet.create({
  backButton:{

    marginTop:10

  },
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

module.exports = PerspectiveMapNavigator;














