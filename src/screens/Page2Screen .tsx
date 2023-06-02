import {StackScreenProps} from '@react-navigation/stack';
import React, { useEffect } from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Page2Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'Page 2',
      headerBackTitle: '',
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text> Page 2</Text>
      <Button title="Go to Page 3" onPress={() => navigation.navigate('Page3')} />
    </View>
  );
};
