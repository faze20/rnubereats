import { FlatList, Image, StyleSheet, Text,  View } from 'react-native'
import restaurants from '../../../assets/data/restaurants.json'
import {Ionicons  } from '@expo/vector-icons'
import DishListItem from '../../components/DishListItem'

const restuarant = restaurants[0]

const RestuarantDetailsHeader = ()=>{
    <View style={styles.page}>
        <Image source={{uri : restuarant.image}} style={styles.image}/>
        <View style={styles.container}>
            <Text style={styles.title}  >{restuarant.name}</Text>
            <Text  style={styles.subtitle} >$ {restuarant.deliveryFee} &#8226; {restuarant.minDeliveryTime}-{restuarant.maxDeliveryTime} minutes</Text>
        </View>
    </View>

}
export default RestuarantDetailsHeader ;

const styles = StyleSheet.create({
    page:{
        flex:1,
        width:"100%",
        backgroundColor: "red"
    },
    image:{
        width: "100%",
        aspectRatio:5/3,
      },
      iconContainer:{
        position:'absolute',
        left:10,
        top:40,
      },
      title:{
        fontSize:15,
        fontWeight: "500",
        marginVertical: 5
      },
      subtitle:{
        color:'grey',
        fontSize:15,
      },
    //   container:{
    //     margin:10,
    //   },
  
})