import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import { Avatar } from 'react-native-paper';
import { styles } from './CharacterDetail.styles';
import { Table } from 'react-native-table-component';
import TableDetail from '../TableDetail/TableDetail';
import Favoritos from '../Favoritos/favoritos';

export default function CharacterDetail(props) {
    const {
        navigation,
        route: { params },
    } = props;
    console.log(params.id, params.name);

    return (
        <ImageBackground source={require('../../assets/detallefondo.jpg')}>
            <View style={styles.container}>
                <Avatar.Image
                    size={250}
                    source={{ uri: params.image }}
                    style={styles.image}
                />
                <View style={styles.containerfav}>
                <Text style={styles.title}>{params.name}</Text>
                <Favoritos id={params.id}/>
                </View>
                <TableDetail params={params}/>
            </View>
        </ImageBackground>
    );
}