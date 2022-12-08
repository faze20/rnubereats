import { FlatList, Image, StyleSheet, Text,  View } from 'react-native'
import restaurants from '../../../assets/data/restaurants.json'
import {Ionicons  } from '@expo/vector-icons'
import DishListItem from '../../components/DishListItem'
import RestuarantDetailsHeader from './RestuarantDetailsHeader'

const restuarant = restaurants[0]



const RestuarantDetailsScreen = () => {
  return (
    <View style={styles.page}>
        <FlatList 
            ListHeaderComponent={RestuarantDetailsHeader}
            data={restuarant.dishes}
            renderItem={({item})=> <DishListItem  dish={item}/>}
        />
        <Ionicons name="arrow-back-circle" size={45} color='white' style={styles.iconContainer} />


    </View>
  )
}

export default RestuarantDetailsScreen

const styles = StyleSheet.create({
    page:{
        flex:1,
        width:"100%"
    },
    // image:{
    //     width: "100%",
    //     aspectRatio:5/3,
    //   },
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
      // container:{
      //   margin:10,
      // },
  
})