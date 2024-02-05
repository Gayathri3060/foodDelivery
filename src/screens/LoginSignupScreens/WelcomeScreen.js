import React, { useEffect, useState } from 'react'
import logo from '../../../assets/logo.jpg'
import {View,Text, Button, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { btn, hr80 } from '../../global/Style.js'
import { firebase } from '../../../FireBase/FireBaseConfig.js'

const WelcomeScreen = ({navigation}) => {
  const[loggedIn, setloggedIn]=useState(null);
  useEffect(()=>{
    const checkLogin=()=>{
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){
          //console.log(user)
          setloggedIn(user)
        }
        else {
          setloggedIn(null);
          console.log('no user logged in')
        }

      })
    }
    checkLogin()

  },[])
  const handleLogout=()=>{
    firebase.auth().signOut().then(()=>{
      setloggedIn(null);
      console.log('user logged out')
    })
    .catch((error)=>{
      console.log(error)

    })
  }
  return (
    
    <View style={styles.container}>
        <Text style={styles.title}>Welcome to Foodie</Text>
        <View style={styles.image}>
            <Image source={logo} style={styles.logo}></Image>
        </View>
        <View style={hr80} />
           <Text style={styles.textStyle}>Find the best food around you at the lowest price</Text>

        <View style={hr80}/>

        {loggedIn==null ? 
        <View style={styles.btnStyle}>
           <Button style={styles.btn} color= '#FF33AF'title='SignUp' onPress={()=>navigation.navigate('SignUp')} ></Button>
           <Button style={styles.btn}  color='#FF33AF' title='LogIn' onPress={()=>navigation.navigate('Login')} ></Button>

        </View>: <View style={styles.logged}>
          <Text style={styles.txtLog}>Signed in as <Text style={styles.txtLogin}>{loggedIn.email}</Text></Text>
             <View style={styles.btnStyle}>
               <Button style={styles.btn} color= '#FF33AF'title='Go to Home' onPress={()=>navigation.navigate('Home')} ></Button>
               <Button style={styles.btn}  color='#FF33AF' title='Log Out' onPress={()=>handleLogout()} ></Button>
                
             </View>
        </View>
         }
      

     

        
    </View>
    
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FF33AF',
    alignItems:'center',
    width:'100%',
    justifyContent:'center'
  },
  title:{
    fontSize:50,
    color:'#FFFFFF',
    textAlign:'center',
    marginVertical:10

  },
  image :{
    width:'80%',
    height:'30%',
    alignItems:'center'
  },
  logo:{
    width:'100%',
    height:'100%'

  },
  textStyle:{
    fontSize:18,
    color: 'white',
    width:'80%',
    textAlign:'center'
  },
  btnStyle:{
    flexDirection:'row',
    justifyContent: 'space-between'
    
    
  },
  btn:{
    
    fontSize:20,
    textAlign:'center',
    padding:10,
    paddingHorizontal:20,
    marginVertical:30,
    marginHorizontal:10


  },
  logged:{
    alignItems:'center'
  },
  txtLog:{
    fontSize:18,
    color:'white'
  },
  txtLogin:{
    fontSize:19,
    color:'white',
    fontWeight:'bold'
  }

})
export default WelcomeScreen
