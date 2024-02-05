import React from 'react'
import { View,Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome5, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons'

const HomeHeaderNav = ({navigation}) => {
  return (
    <View style={styles.containers}>
        <Fontisto name="nav-icon-list-a" size={20} style={styles.myIcon}></Fontisto>
        <View style={styles.containerIn}>
            <Text style={styles.myIcon}>Foodie</Text>
            <MaterialCommunityIcons name="food-outline" size={26} style={styles.myIcon} ></MaterialCommunityIcons>

        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('User')}>
          <FontAwesome5 name="user-circle" size={26} style={styles.myIcon} ></FontAwesome5>

        </TouchableOpacity>
        
       
    </View>
  )
}
const styles=StyleSheet.create({
    containers:{
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'white',
        elevation:20,
        padding:10


    },
    myIcon:{
      color:'#FF33AF'

    },
    containerIn:{
      flexDirection:'row',
      alignItems:'center'
    }
})

export default HomeHeaderNav
