import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignContent: 'center',
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
        marginTop: 90,
        marginBottom: 20,
    },
    title: {
        color: '#798547',
        fontSize: 35,
        textAlign: 'center',
        fontWeight:'bold'
    }
})