import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import { Avatar, Button } from 'react-native-paper'; // Importa Button
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation
import { styles } from './CharacterDetail.styles';
import { Table } from 'react-native-table-component';
import TableDetail from '../TableDetail/TableDetail';
import Favoritos from '../Favoritos/favoritos';

export default function CharacterDetail(props) {
    const {
        route: { params },
    } = props;

    const navigation = useNavigation(); // Inicializa el hook de navegación

    return (
        <ImageBackground source={require('../../assets/detallefondo.jpg')} style={styles.backgroundimage}>
            <Button
  icon="arrow-left"
  onPress={() => navigation.goBack()}
  style={styles.backButton}
  size={styles.backButtonIcon}
  labelStyle={styles.backButtonTouchArea}
/>
            <Avatar.Image size={290} source={{ uri: params.image }} style={styles.image} />
            <View style={styles.containerfav}>
                <Text style={styles.title}>{params.name}</Text>
                <Favoritos id={params.id} />
            </View>
            <TableDetail params={params} />
        </ImageBackground>
    );
}
