import { View, Text , StyleSheet } from 'react-native'
import { AntDesign} from '@expo/vector-icons'

// import restuarants from'../../assets/data/restaurants'
import restuarants from '../../assets/data/restaurants.json'

const dish = restuarants[0].dishes[0]
console.log(dish)

const DishDetailsScreen = () => {
  return (
    <View style={styles.page}>
      <Text   style={styles.name}>{dish.name}</Text>
      <Text  style={styles.description}>{dish.description}</Text>
      <View style={styles.seperator}>
        <View  style={styles.row}>
            <AntDesign  name="minuscircleo" size={60} color={"black"}/>
            <Text  style={styles.quantity}>1</Text>
            <AntDesign  name="pluscircleo" size={60} color={"black"}/>
        </View>
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
        marginVertical:10
,    },
    row:{
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"center",
        marginTop:'50'
    },
    quantity:{
        fontSize:25,
        fontWeight:"bold",
        marginHorizontal:20,
    }
})