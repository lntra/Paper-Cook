import React, { useState } from 'react';

import { StyleSheet , ScrollView } from 'react-native';

import { RadioButton } from 'react-native-paper';

import { View } from '@/components/Themed';

import { Card, Button, Text, List } from 'react-native-paper';

export default function Radio( ) {

    const [checked, setChecked] = useState('first');

    return (
        <View>
            <View style={styles.container}>
                <RadioButton
                    value="first"
                    status={ checked === 'first' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('first')}
                />
                <Text>Receber Novidades</Text>
            </View>
            <View style={styles.container}>
                <RadioButton
                    value="second"
                    status={ checked === 'second' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('second')}
                />
                <Text>Receber Promoções e Novidades</Text>
            </View>
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
});
