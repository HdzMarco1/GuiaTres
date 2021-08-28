import {AppRegistry} from 'react-native';
import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import {Card} from 'react-native-elements';

const DATA = [
  {
    id: '1',
    title: 'Pupusas',
    description: 'Son las principales en el salvador como platillo tipico y pueden estar rellenadas de diferentes ingredientes',
    src: require('./src/img/Pupusas.jpg'),
  },
  {
    id: '2',
    title: 'Atol de Elote',
    description: 'es un atol tipico en el salvador que esta hecho a base de leche y elote',
    src: require('./src/img/AtolDeElote.jpg'),
  },
  {
    id: '3',
    title: 'Sopa de Gallina India',
    description: 'Sopa tradicional y preferida por los salvadoreños',
    src: require('./src/img/SopaDeGallina.jpg'),
  },
  {
    id: '4',
    title: 'Empanadas',
    description: 'Empanadas, las empanadas son muy buenas en la gastronomia salvadoreña y estan rellenas de lecho o frijol',
    src: require('./src/img/Empanadas.jpg'),
  },
  {
    id: '5',
    title: 'Elotes Locos',
    description: 'Los elottes locos son infaltables en las ferias de el salvador es basicamente maiz salcochado con diferentes salsas',
    src: require('./src/img/elotesLocos.jpg'),
  },
];

const Item = ({title, img, description}) => (
  <Card style={styles.item}>
    <View style={{flexDirection: 'row'}}>
      <View>
        <Image style={styles.img} source={img} />
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{description}</Text>
      </View>
    </View>
  </Card>
);

const App = () => {
  const renderItem = ({item}) => (
    <Item title={item.title} img={item.src} description={item.description} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#80FA9D'
  },
  item: {
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 20,
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft: 5,
  },
  title: {
    fontSize: 30,
    marginLeft: 10,
    width: 250,
    textAlign: 'center',
    backgroundColor: '#8EF9E3'
  },
  desc: {
    marginLeft: 10,
    textAlign: 'justify',
    width: 200,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

AppRegistry.registerComponent('comidas', () => App);
