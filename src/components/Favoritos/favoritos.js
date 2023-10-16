import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { IconButton } from "react-native-paper";
import { addFavoriteApi, isFavoriteApi, removeFavoriteApi } from "../../api/favoritos";

export default function Favoritos(props){
    const { id } = props
    const [isFavorite, setIsFavorite] = useState(undefined)
    console.log(isFavorite);

    const [reloadFavorite, setReloadFavorite] = useState(false)
    useEffect(() => {
        (async () => {
            const response = await isFavoriteApi(id)
            if (response) setIsFavorite(true)
            else setIsFavorite(false)
        } )()
    }, [id, reloadFavorite])

    const addFavoritos = async () => {
        try {
            await addFavoriteApi(id)
            onReloadFavorite()  
        } catch (error) {
            console.log(error);
        }

    }
    
    const removeFavorite = async() => {
        try {
            await removeFavoriteApi(id)
            onReloadFavorite()
        } catch (error) {
            console.log(error);
        }
    }

    const onReloadFavorite = () => {
        setReloadFavorite((prev) => !prev)
    }

    const iconColor = isFavorite ? "red" : "white";
    return (
        <IconButton
            icon="heart"
            iconColor={iconColor}
            size={50}
            onPress={isFavorite ? removeFavorite : addFavoritos}
        />
    )
}