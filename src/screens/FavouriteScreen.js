import * as React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import {FavouriteLists} from '../components/FlatListComponent';
import {useSelector} from 'react-redux';

export const Favourite = ({navigation}) => {
  const handleBackFav = () => {
    navigation.navigate('Home');
  };
  const list = useSelector(state => state.favouritesListDetail.favList);
  console.log(list);

  return (
    // <View style={styles.container}>
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
        <View style={styles.subHeader}>
          <Text style={styles.text}>6 City added as favourite</Text>
          <Pressable>
            <Text style={styles.textRemove}>Remove All</Text>
          </Pressable>
        </View>
        {/* <View style={styles.flatView}> */}
          <FavouriteLists />
        {/* </View> */}
      </ImageBackground>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    fontSize: 13,
  },
  subHeader: {
    flexDirection: 'row',
    marginVertical: 15,
    paddingStart: 15,
    justifyContent: 'space-between',
  },
  textRemove: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '500',
    marginRight: '5%',
  },
  // flatView: {
  //   flex: 1,
  // },
});
