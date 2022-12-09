import { FlatList, Image, StyleSheet, Text,  View } from 'react-native'
import restaurants from '../../../assets/data/restaurants.json'
import {Ionicons  } from '@expo/vector-icons'
import DishListItem from '../../components/DishListItem'
import { useRoute , useNavigation} from '@react-navigation/native'

const restuarant = restaurants[0]

const RestuarantDetailsScreen = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const id = route.params?.id
  console.log(id)
  return (
    <View style={styles.page}>
        <Image source={{uri : restuarant.image}} style={styles.image}/>
        <Ionicons name="arrow-back-circle" onPress={()=> navigation.goBack()} size={45} color='white' style={styles.iconContainer} />
        <View style={styles.container}>
            <Text style={styles.title}  >{restuarant.name}</Text>
            <Text  style={styles.subtitle} >$ {restuarant.deliveryFee} &#8226; {restuarant.minDeliveryTime}-{restuarant.maxDeliveryTime} minutes</Text>
        </View>
        <FlatList 
            // ListHeaderComponent={RestuarantDetailsHeader}
            data={restuarant.dishes}
            renderItem={({item})=> <DishListItem  dish={item}/>}
            keyExtractor={(item) => item.name}
        />
    </View>
  )
}

export default RestuarantDetailsScreen

const styles = StyleSheet.create({
    page:{
        flex:1,
        // width:"100%"
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
      container:{
        margin:10,
      },
})