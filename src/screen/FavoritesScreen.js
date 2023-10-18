import { View, Text } from "react-native";
import React, { useCallback, useState } from "react";
import { Button } from "react-native-paper";
import { globalStyles } from "../../styles";
import { getFavoriteApi } from "../api/favoritos";
import HomeScreen from "./HomeScreen";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import { ENV } from "../utils/constants";

export default function FavoritesScreen() {

  const [personajes, setPersonaje] = useState([]);
  const [characters, setCharacters] = useState([]);

  useFocusEffect(
    useCallback
    (() => {
      (
        async () => {
          const favoriteResponse = await getFavoriteApi();
          console.log('Lista de Favoritos',favoriteResponse);
          setPersonaje(favoriteResponse);

          try {
            const response = await axios.get(ENV.API_URL_RM);
            setCharacters(response.data.results);
          } catch (error) {
            console.log(error);
          }
        })();
    }, [])
  );

  return (
    <HomeScreen characters={characters.filter((character) => personajes.includes(character.id))} />
  );
}