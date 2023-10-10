import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import { AuthContext } from '../context/AuthContext';
import { globalStyles } from '../../styles';
import { useAuth } from '../Hooks/UseAuth';

export default function AccountScreen() {
  const { logout, user } = useAuth();
  console.log('Datos del usuario:', user);
  return (
      <View style={styles.container}>
          <View style={styles.header}>
              <Avatar.Image
                  size={270}
                  source={require('../assets/picardia.png')}
              ></Avatar.Image>
          </View>
          <ScrollView>
              <View style={styles.mainContainer}>
                  <Text style={styles.username}>Nombre: {user.username}</Text>
                  <Text style={styles.email}>Correo: {user.email} </Text>
                  <Button mode='contained' onPress={logout}>
                      Cerrar sesión
                  </Button>
              </View>
          </ScrollView>
          <View style={styles.footer}></View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  header: {
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
  },
  mainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  username: {
      fontSize: 35,
      fontWeight: 'bold',
      marginBottom: 20,
  },
  email: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
  },
  footer: {
      justifyContent: 'center',
      alignItems: 'center',
  },
});