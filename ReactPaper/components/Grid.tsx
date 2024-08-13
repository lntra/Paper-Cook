import React from 'react';

import { StyleSheet , ScrollView } from 'react-native';

import { View } from '@/components/Themed';

import { Card, Button, Text } from 'react-native-paper';

type GridItem = {
    title : string
};

interface GridProps {
    props : GridItem[];
}

export default function Grid( { props } : GridProps ) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        {props.map((element, index) => (
            <Card style={styles.separator} key={index}>
                <Card.Title title={`${element.title}`}/>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
                </Card.Actions>
          </Card>
        ))}
    </ScrollView>
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
