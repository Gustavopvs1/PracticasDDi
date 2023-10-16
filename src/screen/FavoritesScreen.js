import React from 'react'
import  { View, Text } from 'react-native'
import { getFavoriteApi } from '../api/favoritos'
import { Button } from 'react-native-paper'
import {globalStyles} from '../../styles'
import { styles } from '../components/CharacterDetail/CharacterDetail.styles'

export default function FavoriteScreen() {
  const checkFavorite = async () => {
    const response = await getFavoriteApi()
    console.log(response);
  }
  return (
    <View>
      <Button
        mode="contained"
        style={globalStyles.form.buttonText}
        onPress={checkFavorite}
        >
          Agregar a favoritos
      </Button>
    </View>
  )
}