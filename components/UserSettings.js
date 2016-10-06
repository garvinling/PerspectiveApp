'use strict';


import React, {Component} from 'React';
import LoginView from './LoginView';
import {

  StyleSheet,
  Text,
  View,
  requireNativeComponent,
  StatusBar,
  TouchableHighlight,
  Navigator,
} from 'react-native';








class UserSettings extends Component{

	constructor(props){

		super(props);

	}

	 _renderScene(route,navigator){
    
	    if(route.id === 'Settings') {
	    	console.log('lol');
	      return(

	      	<Text>TODO: user setting views</Text>
	      );
	    
	    } 
  }


	render(){

		return(
			<View style={{flex:1}}>			      
				  <StatusBar barStyle="light-content"/>
			      <Navigator 
			          initialRoute={{id:'Settings'}} 
			          renderScene={(route,nav) => {return this._renderScene(route,nav)}} 
			          navigationBar={<Navigator.NavigationBar style={{backgroundColor: '#5B3B81'}}     
			          routeMapper={NavigationBarHeader}     />}     />
			</View>
		);
	}

}

const styles = StyleSheet.create({

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
  }
});

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


module.exports = UserSettings;