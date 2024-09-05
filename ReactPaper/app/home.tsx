import { Pressable, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Grid from '@/components/Grid';
import ButtonEx from '@/components/ButtonEx';
import { FontAwesome } from '@expo/vector-icons';
import ProgressBarComponent from '@/components/progressBar';
import Radio from '@/components/radio';
import { Menu, ProgressBar } from 'react-native-paper';
import Snack from '@/components/snackbar';
import MenuComponent from '@/components/menu';

const HomePage = ({}) =>  {

  return (
    <>
    <MenuComponent></MenuComponent>
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ProgressBarComponent></ProgressBarComponent>
      <Snack></Snack>
      <ButtonEx path='dashboard' icon='' name='Dashboard'></ButtonEx>
    </View>
    </>
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

export default HomePage


/*

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

*/
