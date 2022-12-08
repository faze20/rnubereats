import { View, Text , StyleSheet, FlatList } from 'react-native'
import BasketDishItems from '../components/BasketListItem'
import restuarants from'../../assets/data/restaurants'


const BasketScreen = () => {
  const restuarant = restuarants[0]

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restuarant.name}</Text>
      <Text>Your Items</Text>
     
      <FlatList 
      data={restuarant.dishes} 
      renderItem={({ item }) => <BasketDishItems basketDish={item} />}
      />

      <View style={styles.seperator} /> 

        <View style={styles.button}>
          <Text style={styles.buttonText}>Create Order</Text>
        </View>
    </View>
  )
}

export default BasketScreen ;

const styles = StyleSheet.create({
    page:{
        flex:1,
        width: "100%",
        paddingVertical:40,
        padding:10,
    },
    name:{
        fontSize:30,
        fontWeight:"600",
        marginVertical:10,
    },
    description:{
        color:"gray",
    },
    seperator:{
        height:1,
        backgroundColor:"lightgray",
        marginVertical:10,
    },
    quantity:{
        fontWeight:"bold",
        marginHorizontal:20,
    },
    button:{
      backgroundColor:"black",
      marginTop:"auto",
      padding: 20,
      alignItems:"center",
    },
    buttonText:{
      color:"white",
      fontWeight:"600",
      fontSize: 13,
    },
})