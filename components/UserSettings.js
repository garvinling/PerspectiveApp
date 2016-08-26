'use strict';


import React, {Component} from 'React';
import {

	View,
	Text,
	StyleSheet
} from 'react-native';




class UserSettings extends Component{

	constructor(props){

		super(props);

	}



	render(){

		return(

			<View style={styles.container}>
				<Text>SETTINGS</Text>
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



module.exports = UserSettings;