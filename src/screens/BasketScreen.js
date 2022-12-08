import { View, Text , StyleSheet, FlatList } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import restuarants from'../../assets/data/restaurants'
import { useState } from 'react'


const BasketDishItems = ({basketDish}) =>{
  return(
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>1</Text>
      </View>
      <Text style={{fontWeight: "600"}}>{basketDish.name}</Text>
      <Text style={{marginLeft:"auto"}}>${basketDish.price}</Text>
    </View>
  )
};

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
    row:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",
        marginVertical: 20,
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
    quantityContainer:{
      backgroundColor:'lightgray',
      paddingHorizontal: 5,
      paddingVertical:7,
      marginRight:13,
      borderRadius: 3,
    },
    
})