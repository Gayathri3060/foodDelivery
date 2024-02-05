import { FontAwesome5, MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons'
import React from 'react'
import {View,Text, ScrollView, StyleSheet} from 'react-native'

const Categories = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.head}>Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.iconStyle}>
            <MaterialCommunityIcons name="food-apple-outline" size={24} color='black' style={styles.Icon}></MaterialCommunityIcons>
            <Text style={styles.Icon}>Starters</Text>
          </View>
          <View style={styles.iconStyle}>
            <MaterialIcons name="dinner-dining" size={24} color='black' style={styles.Icon}></MaterialIcons>
            <Text style={styles.Icon}>Dinner</Text>
          </View>
          <View style={styles.iconStyle}>
            <MaterialCommunityIcons name="noodles" size={24} color='black' style={styles.Icon}></MaterialCommunityIcons>
            <Text style={styles.Icon}>Breakfast</Text>
          </View>
          <View style={styles.iconStyle}>
            <MaterialCommunityIcons name="cupcake" size={24} color='black' style={styles.Icon}></MaterialCommunityIcons>
            <Text  style={styles.Icon}>Desserts</Text>
          </View>
          {/*
          <View style={styles.iconStyle}>
            <FontAwesome5 name="hamburger" size={24} color='black' style={styles.Icon}></FontAwesome5>
            <Text style={styles.Icon}>Burger</Text>
          </View>
          <View style={styles.iconStyle}>
            <FontAwesome5 name="hamburger" size={24} color='black' style={styles.Icon}></FontAwesome5>
            <Text style={styles.Icon}>Burger</Text>
          </View>
  */}
        </ScrollView>
        

    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    width:'100%',
    elevation:10,
    borderRadius:10,
    backgroundColor:'white'

  },
  head:{
    flexDirection:'row',
    textAlign:'center',
    alignItems:'center',
    fontSize:25,
    fontWeight:'300',
    margin:10,
    paddingBottom:10,
    color:'#FF33AF'

  },
  iconStyle:{
    margin:10,
    elevation:20,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    padding:10,
    flexDirection:'row'



  },
  Icon:{
    marginRight:10,
    color:'black'

  }
  
})
export default Categories
