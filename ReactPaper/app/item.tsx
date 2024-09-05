import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import ImageEx from '@/components/ImageEx';
import Grid from '@/components/Grid';
import ListItem from '@/components/List';

const props = [
  {title : 'Item 1' , description : 'Item 1 descrição'},
  {title : 'Item 2' , description : 'Item 2 descrição'},
  {title : 'Item 3' , description : 'Item 3 descrição'},
  {title : 'Item 4' , description : 'Item 4 descrição'},
]

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title}>Item</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ListItem props={props}></ListItem>
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '40%',
  },
  img: {
    width: '40%',
    display: 'flex'
  },
});
