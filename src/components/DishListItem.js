import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DishListItem = ({dish}) => {
  return (
    <View style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.name}>{dish.name}</Text>
            <Text style={styles.description} numberOfLines={2}>{dish.description}</Text>
            <Text style={styles.imageprice}>${dish.price}</Text>
        </View>
        {dish.image && <Image source={{ uri: dish.image}} style={styles.image}/> }
    </View>
  )
}

export default DishListItem

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginVertical: 10,
        borderBottomColor:"lightgray",
        borderBottomWidth: 1,
        paddingVertical: 10,
        marginHorizontal: 20,
        width:"100%"
    },
    content:{
        flex:1,
    },
    name:{
        fontWeight: "600",
        fontSize: 16,
        letterSpacing: 0.5
    },
    description:{
        color: 'gray',
        marginVertical: 5
    },
    price:{
        fontSize:16,
    },
    image:{
        height: 100,
        aspectRatio: 1,
    }
})