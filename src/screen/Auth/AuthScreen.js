import React, { useEffect, useState} from 'react'
import  { View, Text, StyleSheet, KeyboardAvoidingView, Platform, Image, ImageBackground} from 'react-native'

import Login from '../../components/Auth/Login/Login';
import Register from '../../components/Auth/Register/Register';
import { styles } from './AuthScreen.styles';
import RM from '../../assets/rm.png';




const AuthScreen = () => {
  const [isLogin, setIsLogin] = useState(true);

  const cambioAuth = () => {
    setIsLogin(!isLogin);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/fondo.png')}
        style={styles.imageBackground} // Estilo modificado aquí
      >
      <Image style={styles.image} source={RM} />
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}>
        {isLogin ? <Login cambioAuth={cambioAuth} /> : <Register cambioAuth={cambioAuth} />}
      </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}

export default AuthScreen
