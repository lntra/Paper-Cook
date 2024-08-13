import React from 'react';

import { StyleSheet , ScrollView } from 'react-native';

import { View } from '@/components/Themed';

import { Card, Button, Text } from 'react-native-paper';


interface GridProps {
    url : string;
}

export default function ImageEx( { url } : GridProps ) {
  return (
    <Card style={styles.separator}>
        <Card.Cover source={{ uri: `${url}` }} />
    </Card>
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
