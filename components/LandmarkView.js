'use strict';


import React, {Component} from 'React';

import {

	Stylesheet,
	Text,
	View,
	Navigator


} from 'react-native';



class LandmarkView extends Component{

	constructor(props,context){

		super(props,context);
    	this._goBack = this._goBack.bind(this);

	}

	_goBack(){

		this.props.navigator.pop();

	}

	render(){
		return(

			<View>

				<Text>Modal</Text>

			</View>

		);
	}


}




module.exports = LandmarkView;
