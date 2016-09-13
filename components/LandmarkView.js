'use strict';


import React, {Component} from 'React';
import PhotoFeedImage from './PhotoFeedImage';
import {

	StyleSheet,
	Text,
	View,
	Navigator,
	ScrollView


} from 'react-native';



class LandmarkView extends Component{

	constructor(props,context){

		super(props,context);
    	this._goBack = this._goBack.bind(this);

    	this.state = {

    		photoFeed : []

    	};

    	this.loadPhotoFeed();
	}

	_goBack(){

		this.props.navigator.pop();

	}

	loadPhotoFeed(){
       
       const url = 'http://localhost:3000/api/photos/feed/' + this.props.landmark_id;
       fetch(url,{method:'GET'})
        .then((response) => response.json())  
          .then( (responseData) => 
                { 


    					this.setState({photoFeed:responseData});
    		
  
                }
          )

	}




	render(){


		return(

			<View>
				<ScrollView style={styles.scrollView}  automaticallyAdjustContentInsets={true}>

				 {this.state.photoFeed.map(photo => (

				 	<PhotoFeedImage key={photo._id} photo={photo} />

				 ))}

				</ScrollView>
			</View>

		);
	}


}

const styles = StyleSheet.create({

	scrollView : {

		marginTop:63,
    	backgroundColor: '#6A85B1',
		height:600,

	}


});


module.exports = LandmarkView;
