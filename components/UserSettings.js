'use strict';


import React, {Component} from 'React';
import {

	View,
	Text,
	StyleSheet
} from 'react-native';




const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken
} = FBSDK;

var Login = React.createClass({
  render: function() {
    return (
      <View>
        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    alert(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => alert("logout.")}/>
      </View>
    );
  }
});



class UserSettings extends Component{

	constructor(props){

		super(props);

	}

	render(){

		return(
			<View>
			<Text>lo33l</Text>
			<Login/>
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