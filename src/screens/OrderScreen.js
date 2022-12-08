import { FlatList, StyleSheet, Text, View } from 'react-native'
import orders from '../../assets/data/orders'
import OrderListItem from '../components/OrderListItem'


const OrderScreen = () => {
  return (
    <View style={{ flex:1, width:"100%", paddingTop:30 }}>
      <FlatList 
       data={orders}
       renderItem={({item})=> <OrderListItem  order={item}/>}
      />
    </View> 
  )
}

export default OrderScreen

const styles = StyleSheet.create({})