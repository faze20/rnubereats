import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import BasketScreen from './src/screens/BasketScreen';
import DishDetailsScreen from './src/screens/DishDetailsScreen';
import OrderScreen from './src/screens/OrderScreen';
import OrderDetails from './src/screens/OrderDetails';
import HomeScreen from './src/screens/HomeSCreen';
import RestuarantDetailsScreen from './src/screens/RestuarantDetailsScreen/RestuarantDetailsScreen';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Hello welcome!</Text> */}
      {/* <DishDetailsScreen /> */}
      {/* <BasketScreen /> */}
      {/* <OrderScreen /> */}
      {/* <OrderDetails /> */}
      {/* <HomeScreen /> */}
      <RestuarantDetailsScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:18
  },
 
});
