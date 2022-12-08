import { View, Text , StyleSheet } from 'react-native'

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

export default BasketDishItems; 
const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",
        marginVertical: 20,
    },
    quantityContainer:{
      backgroundColor:'lightgray',
      paddingHorizontal: 5,
      paddingVertical:7,
      marginRight:13,
      borderRadius: 3,
    },
    
})