'use strict';


import React, {Component} from 'React';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LoginView from './LoginView';
import {

	StyleSheet,
	Text,
	View,
	Navigator,
	Image,
	TouchableHighlight,
	Modal


} from 'react-native';



class PhotoFeedImage extends Component{

	constructor(props,context){

		super(props,context);

    	this._favoriteImage = this._favoriteImage.bind(this);
    	this.closeModal     = this.closeModal.bind(this);

		//load user likes for the chosen landmark 
		this.state = {

			modalVisible : false

		};

	}




	_favoriteImage(){

		if(Object.keys(this.props.user).length === 0){
			
			//Prompt user the login with modal 

			this.setState({modalVisible:true});
		
		} else {

			alert('IMAGE FAVORITED');


		}

	}


	closeModal(){

		this.setState({modalVisible:false});


	}



	render(){
		return(
			<View style={styles.photo}>
				<Image style={styles.backgroundImage} source={{uri:this.props.photo.url}} resizeMode='cover'  />
				
				<View style={styles.likeBox}>
					<TouchableHighlight onPress={this._favoriteImage}>
						<Icon name='favorite-border' size={15} color='#ffffff' style={styles.likeIcon}/>
					</TouchableHighlight>

					<Text style={styles.likes}>  
						{this.props.photo.likes}
					</Text>
				</View> 

				<View style={styles.userNameBox}>
					<Text style={styles.userName}>
						perspectiveUser209
					</Text>
				</View> 



				<Modal
					animationType={"slide"}
					transparent={false}
					visible={this.state.modalVisible}
					onRequestClose={() => {alert('DONE')}}
				>
					<View>

						<LoginView close={this.closeModal}/>

					</View>

				</Modal>


			</View>

		);
	}


}


const styles = StyleSheet.create({

	photo : {

		height:300,
		backgroundColor:'#5B3B81',
		alignItems:'flex-end'

	},
	userNameBox:{
		width:165,
		height:30,
		backgroundColor:'rgba(0,0,0,0.7)',
		position:'absolute',
		top:210,
		paddingTop:6,
		paddingLeft:25
	},
	userName:{
		color:'white',
		fontSize:12

	},
	likeBox: {
		width:70,
		height:30,
		backgroundColor:'rgba(0,0,0,0.7)',
		marginTop:30,
		flexDirection:'row',
		paddingTop:5,
		paddingLeft:10
	},
	likeIcon:{
		flex:1

	},
	likes: {
		flex:2,
		color:'white'

	},
	backgroundImage: {

	    position:'absolute',
	    top: 0,
	    bottom:0,
	    left:0,
	    right:0
  	},



});

module.exports = PhotoFeedImage;
