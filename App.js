import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreens from './screens/HomeScreens';
import Page1Screens from './screens/Page1Screens';
import DietScreens from './screens/DietScreens';
import FoodScreens from './screens/FoodScreens';
import LifeScreens from './screens/LifeScreens';
import TimeScreens from './screens/TimeScreens';
import MealTimeScreens from './screens/MealTimeScreens';
import FoodTrchScreens from './screens/FoodTrchScreens';
import CountryScreens from './screens/CountryScreens';
import SeasonScreens from './screens/SeasonScreens';
import DaysScreens from './screens/DaysScreens';
import ChatScreens from './screens/ChatScreens';
import Page2Screens from './screens/Page2Screens';
import TakvimScreens from './screens/TakvimScreens';
import MalzemeScreens from './screens/MalzemeScreens';
import KayıtScreens from './screens/KayıtScreens';
import Chat2Screens from './screens/Chat2Screens';
import BütceScreens from './screens/BütceScreens';
import SüreScreens from './screens/SüreScreens';
import IhtiyacScreens from './screens/IhtıyacScreens';
import Chat3Screens from './screens/Chat3Screens';
import Page3Screens from './screens/Page3Screens';
import ProfileScreens from './screens/ProfileScreens';
import BilgiScreens from './screens/BilgiScreens';
import BaseltrScreens from './screens/BaseltrScreens';
import KiloScreens from './screens/KiloScreens';
import YaşamTarzıScreens from './screens/YaşamTarzıScreens';
import OzelDurumScreens from './screens/OzelDurumScreens';
import SağlıkdurumScreens from './screens/SağlıkdurumScreens';
import SporScreens from './screens/SporScreens';
import TemizlikScreens from './screens/TemizlikScreens';
import Chat4Screens from './screens/Chat4Screens';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ title: 'Beslenme Uygulaması' }}>
      <Stack.Screen name="Home" component={HomeScreens} />
      <Stack.Screen name="Page1" component={Page1Screens} />
      <Stack.Screen name="Diet" component={DietScreens} />
      <Stack.Screen name="Food" component={FoodScreens} />
      <Stack.Screen name="Life" component={LifeScreens} />
      <Stack.Screen name="Time" component={TimeScreens} />
      <Stack.Screen name="MealTime" component={MealTimeScreens} />
      <Stack.Screen name="FoodTrch" component={FoodTrchScreens} />
      <Stack.Screen name="Country" component={CountryScreens} />
      <Stack.Screen name="Season" component={SeasonScreens} />
      <Stack.Screen name="Days" component={DaysScreens}  />
      <Stack.Screen name="Chat" component={ChatScreens}  />
      <Stack.Screen name="Page2" component={Page2Screens}  />
      <Stack.Screen name="Takvim" component={TakvimScreens}  />
      <Stack.Screen name="MalzemeKontrol" component={MalzemeScreens}  />
      <Stack.Screen name="Kayıt" component={KayıtScreens}  />
      <Stack.Screen name="Chat2" component={Chat2Screens}  />
      <Stack.Screen name="Bütçe" component={BütceScreens}  />
      <Stack.Screen name="Süre" component={SüreScreens}  />
      <Stack.Screen name="İhtiyaç" component={IhtiyacScreens} />
      <Stack.Screen name="Chat3" component={Chat3Screens} />
      <Stack.Screen name="Page3" component={Page3Screens} />
      <Stack.Screen name="Profile" component={ProfileScreens} />
      <Stack.Screen name="Bilgi" component={BilgiScreens} />
      <Stack.Screen name="Baseltr" component={BaseltrScreens} />
      <Stack.Screen name="Kilo" component={KiloScreens} />
      <Stack.Screen name="YaşamTarzı" component={YaşamTarzıScreens} />
      <Stack.Screen name="ÖzelDurum" component={OzelDurumScreens} />
      <Stack.Screen name="SağlıkDurum" component={SağlıkdurumScreens} />
      <Stack.Screen name="Spor" component={SporScreens} />
      <Stack.Screen name="Detoks" component={TemizlikScreens} />
      <Stack.Screen name="Chat4" component={Chat4Screens} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
