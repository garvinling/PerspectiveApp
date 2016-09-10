'use strict';


import React, {Component} from 'React';

import {

	Stylesheet,
	Text,
	View

} from 'react-native';



class LandmarkView extends Component{

	constructor(props){

		super(props);

	}


	render(){
		console.log('LANDMARK LOADED');
		return(

			<View>

				<Text>Modal</Text>

			</View>

		);
	}


}




module.exports = LandmarkView;
