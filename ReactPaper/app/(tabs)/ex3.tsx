import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Grid from '@/components/Grid';

export default function TabTwoScreen() {

  const props = [
    {title : 'Item 1'},
    {title : 'Item 2'},
    {title : 'Item 3'},
    {title : 'Item 4'},
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ex3</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
      <Grid props={props}></Grid>
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
    width: '80%',
  },
});
