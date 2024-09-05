import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

import { Button, TextInput } from 'react-native-paper';
import ButtonEx from '@/components/ButtonEx';
import React from 'react';
import { router } from 'expo-router';
import InputEx from '@/components/InputEx';

export default function TabOneScreen() {
  const [text, setText] = React.useState("");
  const [pass, setPass] = React.useState("");

  const handleChangeText = ( e : any ) => {
    setText(e.target.value)
  }

  const handleChangePass = ( e : any ) => {
    setPass(e.target.value)
  }

  const handleNav = () => {
    router.navigate('/(tabs)/ex2')
  }

  const handlePass = () => {
    router.navigate('/(tabs)/ex3')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça login no Sistema</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <InputEx type={`text`}></InputEx>
        <span style={styles.input}></span>
        <InputEx type={`password`}></InputEx>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ButtonEx path='home' icon='' name='Login'></ButtonEx>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text onPress={handlePass} style={styles.text}>Esqueceu a senha?</Text>
      <Text onPress={handleNav} style={styles.text}>Registre uma conta</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
    margin: 10,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input : {
    margin: 10
  }
});
