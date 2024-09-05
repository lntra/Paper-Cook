import React from 'react';

import { StyleSheet , ScrollView } from 'react-native';

import { View } from 'react-native';

import { ProgressBar, MD3Colors } from 'react-native-paper';


export default function ProgressBarComponent( ) {
  return (
    <View style={styles.container}>
        <ProgressBar progress={0.6} color="#6200ee" style={styles.progressBar}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  separator: {
    margin: 5,
    width: "47%",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  progressBar: {
    width: '80%',
    height: 10, 
    marginVertical: 10,
  },
});
