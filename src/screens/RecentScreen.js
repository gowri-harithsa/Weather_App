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
import {RecentLists} from '../components/FlatListComponent';

export const Recent = ({navigation}) => {
  const [clearAll, setClear] = React.useState(false);

  const handleBackRecent = () => {
    navigation.navigate('Home');
  };
  const handleClear = () => {
    Alert.alert('', 'Are you sure want to clear all the recent searches?', [
      {
        text: 'NO',
        onPress: () => console.log('No Pressed'),
      },
      {
        text: 'YES',
        onPress: () => setClear(!clearAll),
      },
    ]);
  };

  return (
    <ImageBackground
      source={require('../assets/images/backgroundImage.png')}
      resizeMode="cover"
      style={styles.image}>
      <View style={styles.headerFav}>
        <View style={styles.leftHeader}>
          <Pressable onPress={handleBackRecent}>
            <Image
              source={require('../assets/images/icon_back_black.png')}
              style={styles.backBtn}
            />
          </Pressable>
          <Text style={styles.textFav}>Recent Search</Text>
        </View>
        <Pressable>
          <Image
            source={require('../assets/images/search.png')}
            style={styles.search}
          />
        </Pressable>
      </View>
      {!clearAll ? (
        <>
          <View style={styles.subHeader}>
            <Text style={styles.text}>You recently searched for</Text>
            <Pressable onPress={handleClear}>
              <Text style={styles.textRemove}>Clear All</Text>
            </Pressable>
          </View>
          <View style={styles.flatView}>
            <RecentLists />
          </View>
        </>
      ) : (
        <FavOrRecent text="No Recent Search" />
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatView: {
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
  textFav: {
    color: '#Z9ZF33',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 30,
  },
  search: {
    tintColor: 'black',
  },
  subHeader: {
    flexDirection: 'row',
    marginVertical: 15,
    paddingStart: 15,
    justifyContent: 'space-between',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '500',
  },
  textRemove: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '500',
    marginRight: '9%',
  },
});
