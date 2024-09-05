import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

import { TextInput } from 'react-native-paper';
import InputEx from '@/components/InputEx';
import React from 'react';
import { router } from 'expo-router';
import ButtonEx from '@/components/ButtonEx';
import Radio from '@/components/radio';

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
    router.navigate('/(tabs)/')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registre no Sistema</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <InputEx type={`text`}></InputEx>
        <span style={styles.input}></span>
        <InputEx type={`password`}></InputEx>
        <Radio></Radio>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ButtonEx path='home' icon='' name='Registre'></ButtonEx>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text onPress={handleNav} style={styles.text}>Já possui conta?</Text>
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
