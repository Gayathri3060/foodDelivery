import React, {useState} from 'react'
import {View,Text, TextInput,StyleSheet, Button, TouchableOpacity,ScrollView} from 'react-native'
import { AntDesign, FontAwesome5, Octicons } from '@expo/vector-icons';
import { btn, hr80 } from '../../global/Style.js'
import { Entypo, Feather } from '@expo/vector-icons'; 
import {firebase} from '../../../FireBase/FireBaseConfig.js';
//import auth from '@react-native-firebase/auth'

 
const SignupScreen = ({navigation}) => {
    const[Name, setName]=useState(false)
    const[emailFocus, setemailFocus]=useState(false)
    const[passwordFocus, setpasswordFocus]=useState(false)
    const[phone, setPhone]=useState(false)
    const[cPassword, setcPassword]=useState(false)
    const[showPassword, setshowPassword]=useState(false)
    const[showcPassword, setshowcPassword]=useState(false)

    {/* To get form data */}
    const[fullName, setfullName]=useState('')
    const[email, setEmail]=useState('')
    const[phoneNum, setphoneNum]=useState('')
    const[password, setPassword]=useState('')
    const[cpwd, setcPwd]=useState('')
    const[address, setAddress]=useState('')
    const[customError, setcustomError]=useState('')
    const[successMsg,setsuccessMsg]=useState(null)
    const handleSignUp=()=>{
        {/*
        const formData={
            fullName:fullName,
            email:email,
            password:password,
            phoneNum:phoneNum,
            address:address
        }
    console.log(formData) */}
        
        if(password!=cpwd){
            //console.log('pwd not match')
            setcustomError('Password do not match')
            //return ;
        }
        else if(phoneNum.length!=10){
            //console.log('phone num limit')
            setcustomError('Phone num must be 10 digits')
            //return ;
        }
    
        
        try {
              
              firebase.auth().createUserWithEmailAndPassword(email,password).then((userCredentials)=>{
                console.log(userCredentials?.user.uid)
                //setsuccessMsg('user creation done')
                if(userCredentials?.user.uid){
                    const userRef=firebase.firestore().collection('UserData')
                    userRef.add({
                        fullName:fullName,
                        email:email,
                        password:password,
                        phoneNum:phoneNum,
                        address:address,
                        uid:userCredentials?.user.uid
    
                    }).then(()=>{
                        console.log("data added to firestore")
                        setsuccessMsg('user creation done')
                    }).catch((error)=>{
                        console.log('firestore error',error)
                    })
                }
    
               })
            .catch((error)=>{
                console.log('signup error',error.message)
                if(error.message="Firebase: The email address is already in use by another account.(auth/email-already-in-use)."){
                    setcustomError('Email address already in use')
                }
                else if(error.message="Firebase: The email address is badly formatted.(auth/invalid-email)."){
                    setcustomError('email address not in format')
                }
                else if(error.message="Firebase: Password should be atleast 6 characters.(auth/weak-password)."){
                    setcustomError('Password should be atleast 6 characters')
                }
                else {
                    setcustomError(error.message)
                }


            })
        }
        catch(error){
            console.log(error.message)
        } 
    

    }
    
  return (
    <ScrollView >
        <View style={styles.inputStyle}>
            {successMsg==null ? 
            <View style={styles.inputStyle}>
        
        
            <Text style={styles.textSign}>Sign Up</Text>
            {customError!=='' && <Text style={styles.errormsg}>{customError}</Text>}
            
            
            <View style={styles.input}>
                <AntDesign name="user" size={24} color={Name===true?'#FF33AF': 'grey'}   />
                <TextInput style={styles.inputText} placeholder='Full Name'onFocus={()=>{ setName(true), setemailFocus(false), setPhone(false)
                    setpasswordFocus(false), setshowPassword(false), setcustomError('')}} onChangeText={(text)=>{setfullName(text)}}></TextInput>
            </View>
            <View style={styles.input}>
                 <Entypo name="email" color={emailFocus===true?'#FF33AF': 'grey'} size={24}  />
                <TextInput style={styles.inputText} placeholder='Email'onFocus={()=>{ setemailFocus(true), setName(false), setPhone(false)
                    setpasswordFocus(false), setshowPassword(false), setcustomError('')}} onChangeText={(text)=>{setEmail(text)}}></TextInput>
            </View>
            <View style={styles.input}>
                 <Feather name="smartphone" size={24} color={phone===true?'#FF33AF': 'grey'}  />
                <TextInput style={styles.inputText} placeholder='Phone Number'onFocus={()=>{ setPhone(true),setemailFocus(false), setName(false) 
                    setpasswordFocus(false), setshowPassword(false),setcustomError('')}} onChangeText={(text)=>{setphoneNum(text)}}></TextInput>
            </View>
            <View style={styles.input}>
                <AntDesign name="lock" size={24}  color={passwordFocus==true?'#FF33AF': 'grey'}  />
                <TextInput style={styles.inputText} placeholder='Password' onFocus={()=>{ setemailFocus(false),setName(false), setPhone(false),setpasswordFocus(true), setcustomError('')}} secureTextEntry={showPassword==false?true:false}  onChangeText={(text)=>setPassword(text)}></TextInput>
                <Octicons size={20} name={showPassword==false? 'eye-closed': 'eye'} onPress={()=>setshowPassword(!showPassword)}></Octicons>
            </View>
            <View style={styles.input}>
                <AntDesign name="lock" size={24}  color={cPassword==true?'#FF33AF': 'grey'}  />
                <TextInput style={styles.inputText} placeholder='Confirm Password' onFocus={()=>{ setemailFocus(false), setpasswordFocus(false), setName(false), setPhone(false),setcPassword(true), setcustomError('')}} secureTextEntry={showcPassword==false?true:false} onChangeText={(text)=>setcPwd(text)}></TextInput>
                <Octicons size={20} name={showcPassword==false? 'eye-closed': 'eye'} onPress={()=>setshowcPassword(!showcPassword)}></Octicons>
            </View>
            <View style={styles.textStyle}>
                <Text style={styles.pwdStyle}>Please Enter your Address</Text>
               
               
            </View>
            <View style={styles.input}>
                <TextInput style={styles.inputText} placeholder='Enter Your Address' onFocus={()=>{ setemailFocus(false),setName(false), setPhone(false),setpasswordFocus(true), setAddress(''), setcPassword(false),setcustomError('')}} onChangeText={(text)=>setAddress(text)}></TextInput>
    
    
            </View>
            <View style={styles.btnStyle}>
                <Button style={styles.btn} color= '#FF33AF'title='Sign Up' onPress={()=>handleSignUp()}></Button>
                
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
                <Text style={styles.txtstyle} onPress={()=>{navigation.navigate('Login')}}>Already have an account? Sign In</Text> 
                    
            </View>
            
           
    
        </View>  
              : 
              <View style={styles.container}> 
                   <Text style={styles.sucsMsg}>{successMsg} </Text> 
                   <View style={styles.btnStyle}>

                    <Button style={styles.btn} color= '#FF33AF'title='Sign In' onPress={()=>{navigation.navigate('Login')}}></Button>
                
                   </View>
                   <View style={styles.btnStyle}>
                      <Button style={styles.btn} color= '#FF33AF'title='Go to Home' onPress={()=>{setsuccessMsg(null)}}></Button>
                
                   </View>

               </View>
              }
        </View>
          


    </ScrollView>
    
  )
}
const styles=StyleSheet.create({
        container:{
            flex:1,
            width:'100%',
            alignItems:'center',
            //justifyContent:'center',
            marginTop:90
            

        },
   
        inputStyle:{
            flex:1,
            width:'100%',
            alignItems:'center',
            justifyContent:'center',
            
    
        },
        textSign:{
            color:'#FF33AF',
            textAlign:'center',
            fontSize:30,
            marginVertical:20,
            marginTop:40
            
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
            width:'100%',
            //height:'100%'
        
        
        
          },
          btnStyle:{
            flexDirection:'row',
            marginBottom:20
           
            
            
          },
          pwdStyle:{
            textAlign:'center',
            alignItems:'center',
            justifyContent:'center',
            marginTop:20,
            paddingHorizontal:20,
            color:'grey',
            marginLeft:100
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
            color:'#FF33AF'
          },
          errormsg:{
            color:'#FF33AF'

          },
          sucsMsg:{
            color: 'green',
            fontWeight:'bold'
          }
         
    
    })
export default SignupScreen
