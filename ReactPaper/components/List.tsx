import React from 'react';

import { StyleSheet , ScrollView } from 'react-native';

import { View } from '@/components/Themed';

import { Card, Button, Text, List } from 'react-native-paper';

type ListItem = {
    title: string;
    description: string;
};

interface GridProps {
    props : ListItem[];
}

export default function ListItem( { props } : GridProps ) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        {props.map((element, index) => (
            <div style={styles.separator} key={index}>
                <List.Item
                title={element.title}
                description={element.description}
                left={props => <List.Icon {...props} icon="check" />}
                />
          </div>
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
