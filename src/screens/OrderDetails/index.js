import { Image, StyleSheet, Text, View } from 'react-native'
import orders from '../../../assets/data/orders'

const index = () => {
    const order = orders[0]
  return (
    <View>
        {/* <View>
            <Image  source={{ uri: order.Restuarant.image }} style={styles.image}/>
        </View>
        <View>
            <Text>{order.Restuarant.name}</Text>
        </View> */}
      <Text>index</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})