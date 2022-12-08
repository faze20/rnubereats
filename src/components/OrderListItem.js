import { Image, StyleSheet, Text, View } from 'react-native'

const OrderListItem = ({order}) => {
  return (
    <View style={{ flexDirection: 'row', margin: 10 , alignItems:'center'}}>
      <Image 
        source={{uri : order.Restaurant.image}}
        style={{ width:75 , height:75 , marginRight: 15}}
      />
      <View>
        <Text style={styles.heading}> 
            {order.Restaurant.name}
        </Text>
        <Text style={{marginVertical: 5}}>3 Items $30.45</Text>
        <Text>2 days ago &#8226; 
            {order.status}
        </Text>
      </View>
    </View>
  )
}

export default OrderListItem

const styles = StyleSheet.create({
    heading:{
        fontWeight:"600",
        fontSize:16
    }
})