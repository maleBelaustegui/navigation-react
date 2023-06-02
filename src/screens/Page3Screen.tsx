import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button} from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{};

export const Page3Screen = ({navigation}: Props) => {
  return (
    <View style= { styles.globalMargin}>
      <Text> Page 3 </Text>
     {/*  <Button title="Page 3" onPress={() => navigation.navigate('Page3') } />*/}
      <Button title="Go home"  onPress={() => navigation.popToTop() } />

    </View>
  );
};
