import React from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import {veg,nonveg} from '../global/Style.js'

const CardSlider = ({title,data,navigation}) => {
  const openProductpage = (item)=>{
    navigation.navigate('ProductPage',item)
     
  }
  return (
   <View style={styles.container}> 
       <Text style={styles.cardStyle}>{title}</Text>
       <FlatList horizontal style={styles.cardsout} data={data} renderItem={({item})=>(
        <TouchableOpacity key={item.index} onPress={()=> openProductpage(item)}>
          <View style={styles.cardDisplay}>
            <View style={styles.s1}>
              <Image source={{uri: item.foodImageUrl}} style={styles.cardImage}></Image>

            </View>
            <View style={styles.s2}>
              <Text style={styles.txt1}>{item.foodName}</Text>
              <View style={styles.s2in}>
                <Text style={styles.txt2}>Rs {item.foodPrice}</Text>
                {item.foodType=='veg' ? <Text style={veg}></Text> : <Text style={nonveg}></Text> }

              </View>

            </View>
            <View style={styles.s3}>
             <Text style={styles.buybtn}>Buy</Text> 

            </View>

          </View>
        
        </TouchableOpacity>
       )}></FlatList>

   </View>
  )
}
const styles=StyleSheet.create({
    container:{

    },
    cardStyle:{
      width:'90%',
      fontSize:30,
      fontWeight:'200',
      borderRadius:10,
      marginHorizontal:10

    },
    cardsout :{
      width:'100%'
    },
    cardDisplay:{
      width:300,
      height:300,
      margin:10,
      borderRadius:10,
      borderWidth:1,
      borderColor:'#e8e8e8',
      backgroundColor:'white'
    },
    cardImage :{
      width:'100%',
      height:200,
      borderRadius:10
    },
    s2:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    txt1:{
      fontSize:18,
      color:'black',
      marginHorizontal:5,
      width:150
    },
    txt2:{
      fontSize:20,
      color: 'grey',
      marginRight:10
    },
    s2in:{
      flexDirection:'row',
      alignItems:'center',
      marginHorizontal:10
    },
    s3:{
      alignItems:'center',
      position:'absolute',
      width:'100%',
      bottom:1

    },
    buybtn :{
      backgroundColor:'#FF33AF',
      color:'white',
      paddingHorizontal:10,
      paddingVertical:5,
      fontSize:20,
      borderRadius:10,
      width:'90%',
      textAlign:'center'
    }

})
export default CardSlider

