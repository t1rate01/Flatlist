import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import {DATA} from './Data';
import Row from './components/Row';
import Constants from 'expo-constants';

export default function App() {
  
  /*function renderItem({item}) {
    return (
      <Text>{item.lastname}</Text>
    )
  }*/

  const renderItem = ({item}) => (
    <Text>{item}</Text>
  )



  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      style={styles.list}
      data= {DATA}
      renderItem={({item}) => <Row person={item} />}
      >
      </FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
  },
  list: {
    padding: 20,
  },
});
