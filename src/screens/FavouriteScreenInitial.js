import * as React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';

export const FavouriteInitial = ({navigation}) => {

  const handleBackFav = () => {
    navigation.navigate('Home')
  }
  return (
    <ImageBackground
      source={require('../assets/images/backgroundImage.png')}
      resizeMode="cover"
      style={styles.image}>
      <View style={styles.headerFav}>
        <Pressable onPress={handleBackFav}>
          <Image
            source={require('../assets/images/icon_back_black.png')}
            style={styles.backBtn}
          />
        </Pressable>

        <Text style={styles.textFav}>Favourite</Text>
      </View>
      <View style={styles.imageTextView}>
        <Image source={require('../assets/images/icon_nothing.png')} style={styles.iconNothing}/>
        <Text style={styles.text}>No Favourites added</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  headerFav: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 20,
    marginTop: 40,
  },
  image: {
    flex: 1,
  },
  backBtn: {
    height: 16,
    width: 16,
  },
  textFav: {
    color: '#Z9ZF33',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 40,
  },
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
  },
});
