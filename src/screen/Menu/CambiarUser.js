import { View, Text } from 'react-native'
import React from 'react'
import { useAuth } from '../../Hooks/UseAuth';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import { userController } from '../../api/users';
import { Button, TextInput } from 'react-native-paper';
import Toast from 'react-native-root-toast';
import { globalStyles } from '../../../styles';
import * as Yup from 'yup'
import { styles } from './CambiarUser.styles';

export default function CambiarUser() {
  const { user, upDateUser } = useAuth();
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: {
      username: user.username
    },
    validationSchema: Yup.object({
      username: Yup.string().required(true)
    }),
    validateOnChange: false,
    onSubmit: async (formData) => {
        try {
            await userController.actualizaUser(user.id, formData)
            upDateUser('username', formData.username)
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
                label="Nombre de usuario"
                style={globalStyles.form.input}
                autoCapitalize='none'
                onChangeText={(text) => formik.setFieldValue('username', text)}
                value={formik.values.username}
                error={formik.errors.username}
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