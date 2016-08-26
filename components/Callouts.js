'use strict';

import React, {Component} from 'React';
import Button from 'react-native-button';

import {
  StyleSheet,
  Text,
  View,
  requireNativeComponent,
  TouchableHighlight
} from 'react-native';



class Callouts extends Component{

	constructor(props){
		super(props);
	}

  _test(){
    console.log('LOL');
  }

	render(){
    console.log(this.props);

		return(
      <TouchableHighlight underlayColor="transparent" onPress={this.props.onPress} style={styles.clickArea}>
  		  <View style={styles.container}>
          <Text>{this.props.landmarkObject.name}</Text>      
          <Text>Lorem ipsum kali lo well tia.</Text>
        </View>
      </TouchableHighlight>

		);
	}
}

const styles = StyleSheet.create({
  clickArea:{
    flex:1
  },
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

  }
});

module.exports = Callouts;