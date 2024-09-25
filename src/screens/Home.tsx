import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {PRODUCTS_LIST} from '../constant';
import ProductItems from '../components/ProductItems';
import Seperator from '../components/Seperator';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS_LIST}
        renderItem={({item}) => (
          <Pressable
            onPress={() =>
              navigation.push('Details', {
                product: item,
              })
            }>
            <ProductItems product={item} />
          </Pressable>
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Seperator}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
