import React, {Component} from 'React';
import {

	View,
	Text,
	StyleSheet,
	StatusBar
} from 'react-native';



const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken,
  Profile
} = FBSDK;




class LoginView extends Component {


	constructor(props){

		super(props);

	}



	render() {

		return(

			<View style={styles.container}>
		        <LoginButton
		          readPermissions={["public_profile"]}
		          onLoginFinished={
		            (error, result) => {
		              if (error) {
		                alert("login has error: " + result.error);
		              } else if (result.isCancelled) {
		                alert("login is cancelled.");
		              } else {

		                AccessToken.getCurrentAccessToken().then(
		                  (data) => {
		                    console.log(data);
		                    //Send the user login data to the database and save if necessary.
		                  }
		                )
		              }
		            }
		          }
		          onLogoutFinished={() => alert("logout.")}/>
	      </View>
      );



	}
}

const styles = StyleSheet.create({

	container : {
		flex:1,
		alignItems:'center',
		marginTop:200

	}


});

module.exports = LoginView;








