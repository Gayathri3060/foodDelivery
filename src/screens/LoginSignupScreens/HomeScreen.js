import React, { useEffect,useState} from 'react'
import {View,Text, TextInput, StyleSheet, ScrollView, FlatList} from 'react-native'
import HomeHeaderNav from '../../components/HomeHeaderNav'
import Categories from '../../components/Categories'
import { StatusBar } from 'expo-status-bar'
import OffSlider from '../../components/OffSlider'
import { AntDesign } from '@expo/vector-icons'
import { firebase } from '../../../FireBase/FireBaseConfig.js'
import CardSlider from '../../components/CardSlider.js'


const HomeScreen = ({navigation}) => {
  const[foodData, setfoodData]=useState([])
  const[vegData,setvegData]=useState([])
  const[NonvegData,setNonvegData]=useState([])
  const[search,setSearch]=useState('')
  const foodref=firebase.firestore().collection('FoodData')

  useEffect (()=>{
    foodref.onSnapshot(snapshot =>{
      setfoodData(snapshot.docs.map(doc=>doc.data()))
    })

  },[])
  useEffect (()=>{
   setvegData(foodData.filter(item=>item.foodType=='veg'))
   setNonvegData(foodData.filter(item=>item.foodType=='non-veg'))

  },[foodData])
  //console.log(vegData)

  return (
    <ScrollView style={styles.container}>
        {/*<StatusBar />*/}
        <HomeHeaderNav navigation={navigation} />
        <View style={styles.searchBox}>
            <AntDesign name="search1" size={24} style={styles.Icon}></AntDesign>
            <TextInput style={styles.textSearch} placeholder='Search' onChangeText={(text)=>{setSearch(text)}} />

        </View>
        {search!='' && <View style={styles.searchResults}>
          <FlatList data={foodData} style={styles.searchList} renderItem={({item})=>{
            if(item.foodName.toLowerCase().includes(search.toLocaleLowerCase())){
              return (
                <View style={styles.searchDisplay}>
                  <AntDesign name="arrowright" size={24} color='black'></AntDesign>
                  <Text style={styles.searchName}>{item.foodName}</Text>
                </View>
                

              )
            }
          }}/>
          </View>}
        {/*
        search!='' && <View style={styles.searchResults}>
          <FlatList data={foodData} style={styles.searchList} renderItem={({item})=>{
            if(item.foodName.toLowerCase().includes(search.toLocaleLowerCase())){
              return (
                <View style={styles.searchDisplay}>
                  <AntDesign name="arrowright" size={24} color="black"></AntDesign>
                  <Text style={styles.textSearch}>{item.foodName}</Text>

                </View>

              ) 
            
            }
              
           }} />
          </View>
          */}
        <Categories />
        
        <OffSlider />
        <CardSlider title={"Today's Special"} data={foodData} navigation={navigation} />
        <CardSlider title={"Veg Hungry"} data={vegData} navigation={navigation}/>
        <CardSlider title={"Non veg Delicacy"} data={NonvegData} navigation={navigation} />
        
    </ScrollView>
  )
}
const styles=StyleSheet.create({
  container:{
    //flexDirection:'row',
    //backgroundColor:'#FF33AF',
    flex:1,
    //alignItems:'center',
    width:'100%',
    
  },
  searchBox:{
    flexDirection:'row',
    width:'90%',
    margin:20,
    alignItems:'center',
    elevation:10,
    borderRadius:30,
    padding:10,
    backgroundColor:'white'

  },
  textSearch:{
    fontSize:18,
    color:'#FF33AF',
    marginLeft:10

  },
  Icon:{
    color:'#FF33AF'
  },
  searchResults:{
    width:'100%',
    //height:'100%',
    marginHorizontal:10,
    backgroundColor:'white'

  },
  searchList:{
    width:'100%'
  },
  searchDisplay:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    padding:5
  },
  searchName:{
    fontSize:18,
    marginLeft:10,
    color:'black'
  }
})
export default HomeScreen
