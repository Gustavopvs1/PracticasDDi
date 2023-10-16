import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../../screen/HomeScreen';
import SettingsScreen from '../../../screen/SettingsScreen';
import FavoritesScreen from '../../../screen/FavoritesScreen';
import CharacterDetail from '../../CharacterDetail/CharacterDetail';
import AccountScreen from '../../../screen/AccountScreen';
import Pepenillorick from '../../../assets/Pepenillorick.png';
import { View, Image } from 'react-native'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome'
import { styles } from './TabNavigation.styles';
import AuthScreen from '../../../screen/Auth/AuthScreen';
import RickandMortyApi from '../../../api/rm';
import StackNavigation from '../StackNavigation/StackNavigation';


const TabNavigations = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
      tabBarIcon: (routeStatus) => setIcon(route, routeStatus)
      })}
      >
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{title: 'Cuenta'}}
      />

        <Tab.Screen 
        name="StackNavigation" 
        component={StackNavigation} 
        options={{title: ''}}/>

      <Tab.Screen 
        name="Favorites" 
        component={FavoritesScreen}
        options={{title: 'Favoritos'}} />

    </Tab.Navigator>
  
    

  )
    
}
const setIcon = (route, routeStatus) => {
    let iconName = '';
    let color = '#89FF99';

    if (routeStatus.focused) {
      color = '#09C623';
    }
    if (route.name === 'StackNavigation') {
      return <Image source={Pepenillorick} style={{width: 60, height: 70, marginBottom:10 }} />;
    } 
    if (route.name === 'Favorites') {
      iconName = 'heart';
    }
    if (route.name === 'Account') {
      iconName = 'user';
    }
  
    return <AwesomeIcon name={iconName} color={color} style={styles.icon}/>
}


export default TabNavigations