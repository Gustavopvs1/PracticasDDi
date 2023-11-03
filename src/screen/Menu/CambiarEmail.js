import { View, Text } from 'react-native'
import React from 'react'
import { useAuth } from '../../Hooks/UseAuth';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import { userController } from '../../api/users';
import { Button, TextInput } from 'react-native-paper';
import { globalStyles } from '../../../styles';
import Toast from 'react-native-root-toast';
import * as Yup from 'yup'
import { styles } from './CambiarEmail.styles';

export default function CambiarEmail() {
  const { user, upDateUser } = useAuth();
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: {
      email: user.email
    },
    validationSchema: Yup.object({
      email: Yup.string().email(true).required(true)
    }),
    validateOnChange: false,
    onSubmit: async (formData) => {
      try {
        await userController.actualizaUser(user.id, formData)
        upDateUser('email', formData.email)
        navigation.goBack();
        Toast.show('Datos actualizados con exito.', {
          position: Toast.positions.CENTER
        })
      } catch (error) {
        // console.log(error)
        Toast.show('Datos incorrectos.', {
          position: Toast.positions.CENTER
        })
      }
    }
  });

  return (
    <View style={styles.container}>
    
      <View style={styles.form}>
      <TextInput
        label="Correo Electrónico"
        style={globalStyles.form.input}
        autoCapitalize='none'
        onChangeText={(text) => formik.setFieldValue('email', text)}
        value={formik.values.email}
        error={formik.errors.email}
      />
      <Button
        mode="contained"
        style={globalStyles.form.buttonSubmit}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      >
        Guardar
      </Button>
      </View>
    </View>
  )
}