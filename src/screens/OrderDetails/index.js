import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import BasketDishItems from '../../components/BasketListItem'
import orders from '../../../assets/data/orders.json'
import restuarants from '../../../assets/data/restaurants.json'

const order = orders[0]

const OrderDetailsHeader = () => {
  return (
    <View>
        <View style={styles.page}>
            <Image  source={{ uri: order.Restaurant.image }} style={styles.image}/>
        </View>
        <View style={styles.container}>
            <Text style={styles.title}>{order.Restaurant.name}</Text>
            <Text style={styles.subtitle}>{order.status} &#8226; 2 days ago</Text>
            <Text style={styles.menuTitle}>Your Orders</Text>
        </View>
      <Text>index</Text>
    </View>
  )
};
 const OrderDetails = ()=>{
  return(
    <FlatList 
    ListHeaderComponent={OrderDetailsHeader}
    data={restuarants[0].dishes}
    renderItem={({item})=> <BasketDishItems  basketDish={item}/>}
    />
  )
 }

export default OrderDetails;

const styles = StyleSheet.create({
  image:{
    width: "100%",
    height:30,
  }
})