import { View, Text } from 'react-native'
import React from 'react'
import { TextInput, Button } from 'react-native-paper';
import { styles } from './Login.styles';
import { globalStyles } from '../../../../styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { authApi } from '../../../api/Auth';
import Toast from 'react-native-root-toast';
import { useAuth } from '../../../Hooks/UseAuth';




export default function Login(props) {
 const {cambioAuth} = props;
 const {login} = useAuth();


  const useAuthData = useAuth();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
     
    },
    validationSchema: Yup.object({
      email: Yup.string().email(true).required(true),
      password: Yup.string().required(true),
    }),
    validateOnChange: false,
    onSubmit: async (formData) => {
      const { email, password } = formData;
      try {
        const response = await authApi.Login(email,password);
        login(response.jwt);
        Toast.show("Bienvenido, guap@", {
          position: Toast.positions.CENTER,
        });
        
      }catch(error){
          
          Toast.show("Usuario o contraseña incorrectos", {
            position: Toast.positions.CENTER,
          });
      }
    }

  });
  
  return (
    <View>
        <TextInput 
            label="Correo electronico"
            style={globalStyles.form.input}
            autoCapitalize='none'
            onChangeText={(text) => formik.setFieldValue("email",text)}
            value={formik.values.email}
            error={formik.errors.email}
        />
         <TextInput 
            label="Contraseña"
            style={globalStyles.form.input}
            secureTextEntry
            onChangeText={(text) => formik.setFieldValue("password",text)}
            value={formik.values.password}
            error={formik.errors.password}
        />
        <Button mode="contained"      style={globalStyles.form.buttonText} onPress={formik.handleSubmit}loading={formik.isSubmitting}> Iniciar sesión </Button>
        <Button mode="text" style={globalStyles.form.buttonSubmit} onPress={cambioAuth} > Crear cuenta </Button>
        
    </View>
  )
}