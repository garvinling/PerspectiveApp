import React, {Component,PropTypes} from 'React';
import {

	View,
	Text,
	StyleSheet,
	StatusBar,
	TouchableHighlight
} from 'react-native';



const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken,
  Profile
} = FBSDK;




class LoginView extends Component {

  static propTypes = {
    close :  PropTypes.func.isRequired
  };

	constructor(props){

		super(props);


		this.closeModal = this.closeModal.bind(this);

	}


	closeModal(){

		this.props.close();

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

		          <View style={styles.decline}>
		            <TouchableHighlight onPress={this.closeModal}>
		          		<Text>No Thanks</Text>
		          	</TouchableHighlight>
		          </View>

	      </View>
      );



	}
}

const styles = StyleSheet.create({

	container : {
		flex:1,
		alignItems:'center',
		marginTop:200

	},
	decline:{
		marginTop:20
	}


});

module.exports = LoginView;








