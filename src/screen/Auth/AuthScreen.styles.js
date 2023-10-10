import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Centra el contenido horizontalmente
    marginHorizontal: 20,
  },
  image: {
    alignSelf: 'center',
    marginBottom: 20,
    width: 250,
    height: 250,
  },
  imageBackground: {
    ...StyleSheet.absoluteFillObject,
    width: windowWidth,
    resizeMode: 'cover',
    justifyContent: 'center',
    marginLeft: -20, // Ajusta el marginLeft para centrar la imagen en la pantalla
  },
});
