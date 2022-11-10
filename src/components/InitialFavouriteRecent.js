import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export const FavOrRecent = props => {
  return (
    <View style={styles.imageTextView}>
      <Image
        source={require('../assets/images/icon_nothing.png')}
        style={styles.iconNothing}
      />
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageTextView: {
    alignItems: 'center',
    marginTop: 185,
    flexDirection: 'column',
  },
  iconNothing: {
    height: 84,
    width: 159,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 18,
    marginVertical: 25,
    fontFamily: 'Roboto-Regular',
  },
});
