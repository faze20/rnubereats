import { View, Text , StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import restuarants from'../../assets/data/restaurants'
import { useState } from 'react'


const DishDetailsScreen = () => {
  const [quantityValue , setQuantityValue] = useState(1)
  const dish = restuarants[0].dishes[0]
  const onMinus =()=>{
    if(quantityValue >1){
      setQuantityValue(quantityValue-1)
    }
  }
  const getTotal = ()=>{
    return (dish.price * quantityValue).toFixed(2);
  }
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <View style={styles.seperator}> 
      </View>
        <View style={styles.row}>
            <AntDesign name="minuscircleo" size={60} color={"black"} onPress={onMinus}/>
            <Text style={styles.quantity}>{quantityValue}</Text>
            <AntDesign name="pluscircleo" size={60} color={"black"} onPress={()=> setQuantityValue(quantityValue+1)}/>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Add {quantityValue} Items to Basket ${getTotal()}</Text>
        </View>
    </View>
  )
}

export default DishDetailsScreen ;

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
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"center",
        marginTop: 50,
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