import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';
//import {PersonScreen} from './PersonScreen';

interface Props extends StackScreenProps<any, any> {}

export const Page1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text> Home</Text>
      <Button
        title="Go to Page 2"
        onPress={() => navigation.navigate('Page2')}
      />

      <Text> Navegar con argumentos </Text>

      <View style={styles.tarjetas}>
        <TouchableOpacity
          style={{
            ...styles.botones,
            backgroundColor: '#75a480',
          }}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 1,
              nombre: 'Male',
            })
          }>
          <Text style={styles.botonesTxt}>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.botones,
            backgroundColor: '#f07f83',
          }}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 2,
              nombre: 'Mery',
            })
          }>
          <Text style={styles.botonesTxt}>Mery</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.botones,
            backgroundColor: '#9eaf83',
          }}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 3,
              nombre: 'Matu',
            })
          }>
          <Text style={styles.botonesTxt}>Matu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
