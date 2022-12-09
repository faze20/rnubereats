import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
// import DishDetailsScreen from './src/screens/DishDetailsScreen';
// import OrderScreen from './src/screens/OrderScreen';
// import OrderDetails from './src/screens/OrderDetails';
// import HomeScreen from './src/screens/HomeSCreen';
// import RestuarantDetailsScreen from '../screens/RestuarantDetailsScreen/RestuarantDetailsScreen';

import HomeScreen from '../screens/HomeSCreen';
import BasketScreen from '../screens/BasketScreen';
import RestuarantDetailsScreen from '../screens/RestuarantDetailsScreen/RestuarantDetailsScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import OrderScreen from '../screens/OrderScreen';
import OrderDetails from '../screens/OrderDetails';
import DishDetailsScreen from '../screens/DishDetailsScreen';

const Tab = createMaterialBottomTabNavigator();

const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

const RootNavigator = ()=>{
    return(
        <Stack.Navigator >
            <Stack.Screen  name='HomeTabs' component={HomeTabs} options={{headerShown:false}}/>
            {/* <Stack.Screen  name='Restuarant' component={RestuarantDetailsScreen} /> */}
        </Stack.Navigator>
    )
}

const HomeTabs = ()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name='HomeTab' component={HomeStackNavigator} options={{tabBarIcon: ({color})=> <Foundation name="home" size={24} color={color} />}}/>
            <Tab.Screen name='Orders' component={OrderScreen} options={{tabBarIcon: ({color})=> <Ionicons name="list-outline" size={24} color={color} />}}/>
            <Tab.Screen name='Basket' component={BasketScreen} options={{tabBarIcon: ({color})=> <FontAwesome5 name="user" size={24} color={color} />}}/>
        </Tab.Navigator>
    )
};

const HomeStackNavigator = ()=>{
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen  name='Home' component={HomeScreen}  />
            <HomeStack.Screen  name='Restuarant' component={RestuarantDetailsScreen}  />
            <HomeStack.Screen name='orderitem' component={OrderDetails} />
            <HomeStack.Screen name='dish' component={DishDetailsScreen}  />
        </HomeStack.Navigator>
    )
}

export default RootNavigator;