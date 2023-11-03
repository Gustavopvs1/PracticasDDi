import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    backgroundimage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerfav: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
    },
    image: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 400,
        marginBottom: 5,
    },
    backButton: {
        position: 'absolute',
        top: 10, // Ajusta la posición vertical
        left: 10, // Ajusta la posición horizontal
        zIndex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0)', // Fondo semitransparente
        padding: 20, // Espacio adicional para el área de toque
        borderRadius: 20, // Borde redondeado
    },
    backButtonIcon: {
        fontSize: 24, // Tamaño del icono
        color: 'white', // Color del icono
    },
    backButtonTouchArea: {
        padding: 5 // Área de toque más grande para facilitar el clic
    },
    title: {
        color: '#CB6F27',
        fontSize: 35,
        textAlign: 'center',
        fontWeight:'bold'
    }
})