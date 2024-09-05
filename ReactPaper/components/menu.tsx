import React from 'react';

import { StyleSheet , ScrollView } from 'react-native';

import { View } from '@/components/Themed';

import { Card, Button, Text, List, Menu, Provider } from 'react-native-paper';


export default function MenuComponent( ) {

    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);
  
    const closeMenu = () => setVisible(false);

    return (
        <View style={styles.container}>
            <View
            style={{
            paddingTop: 50,
            flexDirection: 'row',
            justifyContent: 'center',
            }}>
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={<Button onPress={openMenu}>Show menu</Button>}>
                <Menu.Item onPress={() => {}} title="Opção 1" />
                <Menu.Item onPress={() => {}} title="Opção 2" />
                <Menu.Item onPress={() => {}} title="Opção 3" />
                </Menu>
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
