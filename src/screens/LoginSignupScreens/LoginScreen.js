import React, { useState } from 'react'
import {View,Text, TextInput,StyleSheet, Button, TouchableOpacity} from 'react-native'
import { AntDesign, FontAwesome5, Octicons } from '@expo/vector-icons';
import { btn, hr80 } from '../../global/Style.js'
import {firebase} from '../../../FireBase/FireBaseConfig.js';
const LoginScreen = ({navigation}) => {
    const[emailFocus, setemailFocus]=useState(false)
    const[passwordFocus, setpasswordFocus]=useState(false)
    const[showPassword, setshowPassword]=useState(false)
    


    {/* To validate form data*/}
    const[email, setEmail]=useState('')
    const[password, setPassword]=useState('')
    const[customError, setcustomError]=useState('')
    const handleLogin=() =>{
      firebase.auth().signInWithEmailAndPassword(email,password).then((userCredentials)=>{
        var user=userCredentials.user
        console.log('Logged in successfully')
        //console.log(user)
        navigation.navigate("Welcome")

      })
      .catch((error)=>{
         var errorMesssage=error.message;
         console.log(errorMesssage)
         if(errorMesssage=="Firebase: The email address is badly formatted.(auth/invalid-email)."){
          setcustomError("enter a valid email address")
         }
         else {
          setcustomError('incorrect email or password')

         }
      })

    }
  return (
    <View style={styles.inputStyle}>
        <Text style={styles.textSign}>Sign In</Text>
        <View style={styles.input}>
            <AntDesign name="user" size={24} color={emailFocus===true?'#FF33AF': 'grey'}   />
            <TextInput style={styles.inputText} placeholder='Email'onFocus={()=>{ setemailFocus(true)  
                setpasswordFocus(false), setshowPassword(false)}} onChangeText={(text)=>{setEmail(text)}}></TextInput>
        </View>
        <View style={styles.input}>
            <AntDesign name="lock" size={24}  color={passwordFocus==true?'#FF33AF': 'grey'}  />
            <TextInput style={styles.inputText} placeholder='Password' onFocus={()=>{ setemailFocus(false), setpasswordFocus(true)}} onChangeText={(text)=>{setPassword(text)}} secureTextEntry={showPassword==false?true:false}></TextInput>
            <Octicons name={showPassword==false? 'eye-closed': 'eye'} onPress={()=>setshowPassword(!showPassword)}></Octicons>
        </View>
        <View style={styles.btnStyle}>
            <Button style={styles.btn} color= '#FF33AF'title='Sign In' onPress={()=>handleLogin()}></Button>
            
        </View>
        <View style={styles.textStyle}>
            <Text style={styles.pwdStyle}>Forgot Password?</Text>
            
           
        </View>
        <View>
            <Text style={styles.or}>OR</Text>
        </View>
        <View>
            <Text style={styles.signIn}>Sign in With</Text>
        </View>
        <View style={styles.gf}>
            <TouchableOpacity>
                <View style={styles.gfIcon}>
                    <AntDesign name="google" size={24} color='#EA4335'></AntDesign>

                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.gfIcon}>
                    <FontAwesome5 name="facebook-f" size={24} color='#4267B2'></FontAwesome5>

                </View>
            </TouchableOpacity>

        </View>
        <View style={hr80}>
            <Text style={styles.txtstyle} onPress={()=>{navigation.navigate('SignUp')}}>Don't have an account?Sign Up</Text>
        </View>
        
       

    </View>
  )
}
const styles=StyleSheet.create({
    inputStyle:{
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent:'center'

    },
    textSign:{
        color:'#FF33AF',
        textAlign:'center',
        fontSize:30,
        marginVertical:10
        
    },
    input:{
        flexDirection:'row',
        width:'80%',
        backgroundColor:'#FFFFFF',
        marginVertical:10,
        borderRadius:10,
        paddingHorizontal:10,
        paddingVertical:10,
        elevation:20

    },
    inputText:{
        width:'80%',
        marginLeft:10,
        fontSize:18

    },
    btn:{
    
        fontSize:20,
        textAlign:'center',
        padding:10,
        paddingHorizontal:20,
        marginVertical:30,
        marginHorizontal:10,
        width:'100%'
    
    
    
      },
      btnStyle:{
        flexDirection:'row',
       
        
        
      },
      pwdStyle:{
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
        paddingHorizontal:20,
        color:'grey',
        marginLeft:120
      },
      textStyle:{
        flexDirection:'row',
        width:'100%'
      },
      or:{
        marginTop:10,
        paddingHorizontal:20,
        color:'#FF33AF',
        fontWeight:'bold',
        fontSize:15

      },
      signIn:{
        marginTop:20,
        fontSize:25,
        color:'grey'
      },
      gf:{
        flexDirection:'row',
        marginTop:20
        
      },
      gfIcon:{
       width:50,
       margin:10,
       padding:10,
       alignItems:'center',
       elevation:20,
       backgroundColor:'white'


      },
      txtstyle:{
        textAlign:'center',
        color:'grey'
      }
     

})
export default LoginScreen
