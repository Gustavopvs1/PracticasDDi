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
    title: {
        color: '#CB6F27',
        fontSize: 35,
        textAlign: 'center',
        fontWeight:'bold'
    }
})