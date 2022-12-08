import { FlatList } from 'react-native';
import restaurants from '../../assets/data/restaurants.json'
import RestuarantItem from '../components/RestuarantItem'

 export default function HomeScreen() {
  return (
     <FlatList 
        data={restaurants}
        renderItem={({item}) => <RestuarantItem restuarant={item} />}
        showsVerticalScrollIndicator={false}
     />
  );
}

