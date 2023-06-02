import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },

  tarjetas: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  botones: {
    width: 100,
    height: 100,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  botonesTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  descripcion: {
    fontSize: 30,
    marginBottom: 10,
  },
  text: {
    fontSize: 25,
    margin: 10,
  },
});
