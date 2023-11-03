import React from 'react'
import  { View, Text, SafeAreaView, FlatList, StyleSheet, ImageBackground } from 'react-native'
import Card from '../components/Card'
import { ActivityIndicator } from 'react-native-paper'
import { styles } from './HomeScreen.styles'

export default function HomeScreen(props){
  const {characters, loadMoreData, nextUrl} = props
  
  const loadMore = () => {
    if (nextUrl) {
      loadMoreData()
    }
  }

  return(
    <ImageBackground
    source={require('../assets/detallefondo.jpg')}
    style={styles.backGroundImage}
    >
        <FlatList
        data={characters}
        showsVerticalScrollIndicator={false}
        keyExtractor={(characters) => String(characters.id)}
        renderItem={({item}) => <Card characters={item}/>}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          nextUrl && <ActivityIndicator style={styles.spiner} size="large" color="#79B543"/>
        }
        />
    </ImageBackground>
  )
}
