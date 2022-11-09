import * as React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Pressable,
  Alert,
} from 'react-native';
import {FavouriteLists} from '../components/FlatListComponent';
import {FavOrRecent} from '../components/InitialFavouriteRecent';
import {useSelector} from 'react-redux';

export const Favourite = ({navigation}) => {
  const list = useSelector(state => state.favouritesListDetail.favList);

  const [favourite, , setFavourite] = React.useState(false);
  const [removeAll, setRemoveAll] = React.useState(false);

  const handleBackFav = () => {
    navigation.navigate('Home');
  };

  const removeFavourites = () => {
    Alert.alert('', 'Are you sure want to remove all the favourites?', [
      {
        text: 'NO',
        onPress: () => console.log('No Pressed'),
      },
      {
        text: 'YES',
        onPress: () => setRemoveAll(!removeAll),
      },
    ]);
  };
  // console.log(list);

  return (
    // <View style={styles.container}>
    <ImageBackground
      source={require('../assets/images/backgroundImage.png')}
      resizeMode="cover"
      style={styles.image}>
      <View style={styles.headerFav}>
        <View style={styles.leftHeader}>
          <Pressable onPress={handleBackFav}>
            <Image
              source={require('../assets/images/icon_back_black.png')}
              style={styles.backBtn}
            />
          </Pressable>
          <Text style={styles.textFav}>Favourite</Text>
        </View>
        <Pressable>
          <Image
            source={require('../assets/images/search.png')}
            style={styles.search}
          />
        </Pressable>
      </View>
      {!removeAll ? (
        <>
          <View style={styles.subHeader}>
            <Text style={styles.subHeaderText}>
              {list.length} City added as favourite
            </Text>
            <Pressable onPress={removeFavourites}>
              <Text style={styles.textRemove}>Remove All</Text>
            </Pressable>
          </View>
          <View style={styles.flatView}>
            <FavouriteLists />
          </View>
        </>
      ) : (
        <FavOrRecent text="No Favourites added" />
      )}

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
    height: 56,
    width: '100%',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'rgba(105,105,105,0.2)',
    borderBottomWidth: 1,
    marginTop: 40,
    paddingEnd: 40,
  },
  leftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    flex: 1,
  },
  backBtn: {
    height: 16,
    width: 16,
    marginLeft: 16,
  },
  search: {
    tintColor: 'black',
  },
  textFav: {
    color: '#Z9ZF33',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 30,
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
  subHeaderText: {
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
    marginRight: '9%',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 18,
    marginVertical: 25,
  },
  flatView: {
    flex: 1
  },
});
