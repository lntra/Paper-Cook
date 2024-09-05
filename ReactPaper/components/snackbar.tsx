import React from 'react';

import { StyleSheet , ScrollView } from 'react-native';

import { View } from '@/components/Themed';

import { Card, Button, Text, List } from 'react-native-paper';

import { Snackbar } from 'react-native-paper';


export default function Snack() {

    const [visible, setVisible] = React.useState(false);

    const onToggleSnackBar = () => setVisible(!visible);
  
    const onDismissSnackBar = () => setVisible(false);

    return (
        <View style={styles.container}>
        <Button onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button>
            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                style={{width: 150}}
                action={{
                label: 'Undo',
                onPress: () => {
                },
                }}>
                Hey there! I'm a Snackbar.
            </Snackbar>
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
