import React from 'react'
import {View, Text, ScrollView, TouchableOpacity, StyleSheet, Image, Button} from 'react-native'
import {navbtn, navbtnin, navbtnout, nonveg, veg} from '../../global/Style'
import { AntDesign } from '@expo/vector-icons'
const ProductPage = ({navigation,route}) => {
  const data=route.params
  if(route.params==undefined)
  {
    navigation.navigate('Home')
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
          <View style={navbtn}>
            <AntDesign name="back" size={24} color="black" style={navbtnin}  ></AntDesign>

          </View>

        </TouchableOpacity>
        <View style={styles.container1}>
          <View style={styles.s1}>
            <Image source={{ uri: data.foodImageUrl}} style={styles.cardimagin} ></Image>

          </View>
          <View  style={styles.s2}>
            <View style={styles.s2In}>
              <Text style={styles.head1}>{data.foodName}</Text>
              <Text style={styles.head2}>Rs {data.foodPrice}/-</Text>

            </View>
            <View style={styles.s3}>
              <Text style={styles.head3}>About Food</Text>
              <Text style={styles.head4}>{data.foodDescription}</Text>
              <View style={styles.s3In}>
                {data.foodType=="veg"? <Text style={veg}></Text> : <Text style={nonveg}></Text>}
                <Text style={styles.head5}>{data.foodType}</Text>
              </View>

            </View>
            <View style={styles.btnStyle}>
              <Button style={styles.btn} color= '#FF33AF'title='Add to Cart'></Button>
              <Button style={styles.btn} color= '#FF33AF'title='Buy Now'></Button>
            </View>

          </View>
          
        </View>
      </View>
    </ScrollView>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    width:'100%'
  },
  container1:{
    flex:1,
    backgroundColor:'white',
    width:'100%'
  },
  s1:{
    width:'100%',
    height:300,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center'
  },
  cardimagin:{
    width:'100%',
    height:'100%'

  },
  s2:{
    
    width:'100%',
    paddding:20

  },
  s2In:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:10
  },
  head1:{
    fontSize:30,
    fontWeight:'300',
    color: '#FF33AF',
    width:220,
    marginRight:10


  },
  head2:{
    fontSize:30,
    fontWeight:'200',
    color:'black'
  },
  s3:{
    backgroundColor:'#FF33AF',
    padding:20,
    borderRadius:20
  },
  head3:{
    fontSize:30,
    fontWeight:'200',
    color: 'white'
  },
  head4:{
    marginVertical:10,
    fontSize:20,
    fontWeight:'400',
    color:'white'

  },
  s3In:{
    backgroundColor:'white',
    padding:10,
    borderRadius:10,
    width:130,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  head5:{
    color:'black',
    fontSize:20,
    fontWeight:'200',
    marginLeft:10


  },
  btnStyle:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:20,
    width:'100%',
    
   
    
    
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

})
export default ProductPage
