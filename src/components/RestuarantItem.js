import { Image, StyleSheet, Text, View , Pressable} from 'react-native';
import {useNavigation } from '@react-navigation/native'

const RestuarantItem = ({restuarant})=>{
  const navigation = useNavigation()

  const onPress = ()=>{
    navigation.navigate('Restuarant' , {id: restuarant.id})
  }
    return(
      <Pressable onPress={onPress} style={styles.restuarantContainer} >
        <Image  source={{uri : restuarant.image}}  style={styles.image} />
        <View style={styles.row}>
            <View>
                <Text  style={styles.title}  >{restuarant.name}</Text>
                <Text  style={styles.subtitle} >$ {restuarant.deliveryFee} &#8226; {restuarant.minDeliveryTime}-{restuarant.maxDeliveryTime} minutes</Text>
            </View>
            <View style={styles.rating}>
                <Text>{restuarant.deliveryFee}  </Text>
            </View>
        </View>
     </Pressable>
    )       
  }

  export default RestuarantItem;

  const styles = StyleSheet.create({
    restuarantContainer:{
      width:"100%",
      marginVertical: 10
    },
    image:{
      width: "100%",
      aspectRatio:5/3,
      marginBottom: 5,
    },
    title:{
      fontSize:15,
      fontWeight: "500",
      marginVertical: 5
    },
    subtitle:{
      color:'grey',
    },
    row:{
        flexDirection: 'row',
        alignItems:'center',
    },
    rating:{
        marginLeft:"auto",
        width:30,
        height:30,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"lightgray",
        borderRadius:20,
    },
  });