import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BasketScreen from './src/screens/BasketScreen';
import DishDetailsScreen from './src/screens/DishDetailsScreen';
import OrderScreen from './src/screens/OrderScreen';
import OrderDetails from './src/screens/OrderDetails';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <DishDetailsScreen /> */}
      {/* <BasketScreen /> */}
      {/* <OrderScreen /> */}
      <OrderDetails />
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
  },
});
