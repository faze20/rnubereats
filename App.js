import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import BasketScreen from './src/screens/BasketScreen';
import DishDetailsScreen from './src/screens/DishDetailsScreen';
import OrderScreen from './src/screens/OrderScreen';
import OrderDetails from './src/screens/OrderDetails';
import HomeScreen from './src/screens/HomeSCreen';
import RestuarantDetailsScreen from './src/screens/RestuarantDetailsScreen/RestuarantDetailsScreen';
import RootNavigator from './src/navigation';



export default function App() {
  return (
    <NavigationContainer>
    {/* <View style={styles.container}> */}
      <RootNavigator />
      {/* <Text>Hello welcome!</Text> */}
      {/* <DishDetailsScreen /> */}
      {/* <OrderScreen /> */}
      {/* <OrderDetails /> */}
      {/* <HomeScreen /> */}
      {/* <RestuarantDetailsScreen /> */}
      <StatusBar style="auto" />
    {/* </View> */}

    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical:18
//   },
 
// });
