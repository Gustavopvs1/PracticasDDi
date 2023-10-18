import AsyncStorage from '@react-native-async-storage/async-storage';
import { includes, inclute, pull } from 'lodash'
import { ENV } from '../utils/constants'

export const getFavoriteApi = async () => {
    try {
        const response = await AsyncStorage.getItem(ENV.STORAGE.FAVORITE);
        return JSON.parse(response || []);
    } catch (error) {
        console.log(error);
    }
}

export const addFavoriteApi = async (id) => {
    console.log('Api',id);
    try {
        const favorites = await getFavoriteApi();;
        favorites.push(id);
        await AsyncStorage.setItem(ENV.STORAGE.FAVORITE, JSON.stringify(favorites));
    } catch (error) {
        console.log(error);
    }
}

export const isFavoriteApi = async (id) => {
    console.log('Api',id);
    try {
        const favorites = await getFavoriteApi();;
        return includes(favorites, id);
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const removeFavoriteApi = async (id) => {
    console.log('Api',id);
    try {
        const favorites = await getFavoriteApi();;
        const newFavorites = pull(favorites, id);
        await AsyncStorage.setItem(ENV.STORAGE.FAVORITE, JSON.stringify(newFavorites));
    } catch (error) {
        console.log(error);
    }
}