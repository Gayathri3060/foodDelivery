//import { firebase } from '@react-native-firebase/auth'
import React, { useEffect, useState } from 'react'
import { View,Text, StyleSheet, TouchableOpacity } from 'react-native'
import {firebase} from '../../../FireBase/FireBaseConfig.js';
import {navbtn, navbtnin,navbtnout} from '../../global/Style.js'
import { AntDesign } from '@expo/vector-icons';
const UserProfile = ({navigation}) => {
  const[userLoggeduid,setUserloggedUid ]=useState(null)
  const[userData, setuserData]=useState(null)
  useEffect(()=>{
    const checkLogin=()=>{
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){
          setUserloggedUid(user.uid)
        }
        else {
          setUserloggedUid(null)
          navigation.navigate('Login')
        }
      })
    }
    checkLogin()
  ,[]})
  //console.log(userLoggeduid)

  useEffect(()=>{
    const getUserdata=async()=>{
      const docRef=firebase.firestore().collection('UserData').where('uid','==',userLoggeduid);
      const doc=await docRef.get();
      if(!doc.empty){
        doc.forEach((doc)=>{
          setuserData(doc.data())
        })
      }
      else {
        console.log("no such document")
      }
    }
    getUserdata()
  },[userLoggeduid])
  console.log(userData)

  return (
    <View style={styles.containerOut}>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
          <View style={navbtn}>
            <AntDesign name="back" size={24} color="black" style={navbtnin}></AntDesign>

          </View>

        </TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.head1}>Your Profile</Text>
          <View style={styles.containerIn}>
            <Text style={styles.head2}>Name: {userData ? <Text style={styles.head2In}>{userData.fullName}</Text> :"loading" }</Text>
            <Text style={styles.head2}>Email: {userData ? <Text style={styles.head2In}>{userData.email}</Text> :"loading" }</Text>
            <Text style={styles.head2}>Phone: {userData ? <Text style={styles.head2In}>{userData.phoneNum}</Text> :"loading" }</Text>
            <Text style={styles.head2}>Address: {userData ? <Text style={styles.head2In}>{userData.address}</Text> :"loading" }</Text>
          </View>
        </View>

    </View>
  )
}
const styles=StyleSheet.create({
  containerOut:{
    flex:1,
    backgroundColor:'white',
    width:'100%'
  },
  container:{
    flex:1,
    backgroundColor:'white',
    alignItems:'center',
    width:'100%'
  },
  head1:{
    fontSize:40,
    fontWeight:'200',
    marginVertical:20,
    color:"#FF33AF"


  },
  containerIn:{
    width:'90%',
    alignItems:'center',
    borderWidth:1,
    borderColor:"#FF33AF",
    borderRadius:10,
    padding:20,
    marginTop:20
  },
  head2:{
    fontSize:20,
    fontWeight:'200',
    marginTop:20


  },
  head2In:{
    fontSize:20,
    fontWeight:'300'
  }

})

export default UserProfile
