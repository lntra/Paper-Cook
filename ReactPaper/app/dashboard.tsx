import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import ImageEx from '@/components/ImageEx';
import ButtonEx from '@/components/ButtonEx';
import Grid from '@/components/Grid';

const props = [
  {title : 'Item 1'},
  {title : 'Item 2'},
  {title : 'Item 3'},
  {title : 'Item 4'},
]

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ButtonEx path='item' icon='' name='Novo Item'></ButtonEx>
      <Grid props={props}>
      </Grid>
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
