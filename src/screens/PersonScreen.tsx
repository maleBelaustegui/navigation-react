import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';
import {RootStackParams} from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'> {}

export const PersonScreen = ({route, navigation}: Props) => {
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.nombre,
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <View >
        <Text style={styles.descripcion}> {params.nombre}'s profile </Text>
        <Text style={styles.text}>Id: {params.id}</Text>
        <Text style={styles.text}>Nombre y Apellido: {params.nombre}</Text>
      </View>
      <Button title="Go Back"  onPress={() => navigation.popToTop() } />
    </View>
  );
};
