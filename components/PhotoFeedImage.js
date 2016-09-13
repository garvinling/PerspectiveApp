'use strict';


import React, {Component} from 'React';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {

	StyleSheet,
	Text,
	View,
	Navigator,
	Image


} from 'react-native';



class PhotoFeedImage extends Component{

	constructor(props,context){

		super(props,context);


	}








	render(){
		return(
			<View style={styles.photo}>
				<Image style={styles.backgroundImage} source={{uri:this.props.photo.url}} resizeMode='cover'  />
				
				<View style={styles.likeBox}>
					<Icon name='favorite-border' size={15} color='#ffffff' style={styles.likeIcon}/>
					<Text style={styles.likes}>  
						{this.props.photo.likes}
					</Text>
				</View> 


				<View style={styles.userNameBox}>
					<Text style={styles.userName}>
						perspectiveUser209
					</Text>
				</View> 

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
