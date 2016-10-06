'use strict';

import React, {Component} from 'React';
import Button from 'react-native-button';

import {
  StyleSheet,
  Text,
  View,
  requireNativeComponent,
  StatusBar
} from 'react-native';



class GridView extends Component{

	constructor(props){
		super(props);
	}

	render(){

		return(

		  <View style={styles.container}>
                <StatusBar barStyle="light-content"/>

        <Text>GridView</Text>      
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
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

module.exports = GridView;