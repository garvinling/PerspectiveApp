import React , {Component} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AlertIOS,
  requireNativeComponent,
  NavigatorIOS,
  TabBarIOS,
  StatusBar,
  Modal


} from 'react-native';


/*

	This class is responsible for displaying a full-screen modal and populating it with a selected view. 

*/
class ModalManager extends Component{



	constructor(props){

		super(props);

		this.state = {

			modalVisible : true

		};

	}







	render() {

		return (

			<View style={{flex:1}}>

				<Modal
					animationType={"slide"}
					transparent={false}
					visible={this.state.modalVisible}
					onRequestClose={() => {alert('DONE')}}
				>
					<View>

						<Text>Hi, Modal</Text>

					</View>

				</Modal>

			</View>




		);

	}


}




module.exports = ModalManager;











