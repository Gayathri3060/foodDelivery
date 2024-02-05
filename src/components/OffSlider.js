import React from 'react'
import {View,Text, StyleSheet, Image, useState} from 'react-native'
import Swiper from 'react-native-swiper';



const OffSlider = () => {
  
  return (
    <View>
      <View style={styles.OffSlider}>
        <Swiper autoplay={true} autoplayTimeout={5} showsButtons={true} dotColor='grey' activeDotColor='#FF33AF' nextButton={<Text style={styles.buttonText}></Text>} prevButton={<Text style={styles.buttonText}></Text>}> 
          <View style={styles.slide}>
            <Image source={require('../../assets/burger.jpg')} style={styles.image}></Image>
            
          </View>
          <View style={styles.slide}>
            <Image source={require('../../assets/food.jpg')} style={styles.image}></Image>
            
          </View>
          <View style={styles.slide}>
            <Image source={require('../../assets/food1.jpg')} style={styles.image}></Image>
            
          </View>

        </Swiper>

      </View>
       
    </View>
  )
}
const styles=StyleSheet.create({
  OffSlider:{
    width:'100%',
    height:200,
    paddingHorizontal:10,
    //backgroundColor:'black',
    justifyContent:'center',
    alignItems:'center',
    marginVertical:10
  },
  slide:{
    width:'100%',
    height:200,
    backgroundColor:'white',
    justifyContent: 'center',
    alignItems:'center'
  },
  image:{
    width:'100%',
    height:'100%',
    borderRadius:20

  },
  buttonText:{
    color: '#FF33AF',
    fontSize:40,
    fontWeight:'500',
    backgroundColor:'white',
    borderRadius:20,
    width:40,
    height:40,
    textAlign:'center',
    lineHeight:40

  }
})
export default OffSlider
