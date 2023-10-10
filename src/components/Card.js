import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function Card(props) {
  const { characters } = props;

  const goToPersonaje = () => {
    console.log(`Conoce más del personaje: ${characters.name}`);
  };

  return (
    <TouchableOpacity onPress={goToPersonaje}>
      <View style={styles.card}>
        <View style={styles.content}>
          <View style={styles.infoContainer}>
            <Text style={styles.name}>Nombre: {characters.name}</Text>
            <Text style={styles.info}>Género: {characters.gender}</Text>
            <Text style={styles.info}>Especie: {characters.species}</Text>
            <Text style={styles.info}>Estado: {characters.status}</Text>
          </View>
          <Image style={styles.imagen} source={{ uri: characters.image }} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row", // Cambiamos a fila para que la imagen esté a la derecha
    justifyContent: "space-between", // Espacio entre la información y la imagen
    alignItems: "center", // Alineación vertical centrada
    padding: 16,
    backgroundColor: "#24DA3D",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 16,
  },
  content: {
    flexDirection: "row", // Filas para la información y la imagen
    alignItems: "center", // Alineación vertical centrada
  },
  infoContainer: {
    flex: 1, // Toma todo el espacio disponible
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  info: {
    fontSize: 16,
  },
  imagen: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
