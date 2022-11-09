import * as React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Pressable,
  Alert,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

export const SearchComponent = ({setSearch, search}) => {
  const [close, setClose] = React.useState('');
  const [text, setText] = React.useState();
  const handleBackFav = () => {
    setSearch(!search);
  };
  const handleClose = value => {
    setText(value);
    setClose(require('../assets/images/icon_clear.png'));
  };
  const handleRemove = () => {
    setText();
    setClose('');
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeView}>
      <View style={styles.headerFav}>
        <View style={styles.leftHeader}>
        <Pressable onPress={handleBackFav}>
          <Image
            source={require('../assets/images/icon_back_black.png')}
            style={styles.backBtn}
          />
        </Pressable>
        <TextInput
          style={styles.textSearch}
          placeholder="Search for city"
          value={text}
          onChangeText={value => handleClose(value)}
        />
        </View>
        {text ? (
          <TouchableOpacity onPress={handleRemove}>
            <Image source={close} style={styles.search} />
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerFav: {
    height: 56,
    width: '100%',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'rgba(105,105,105,0.2)',
    borderBottomWidth: 1,
  },
  leftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backBtn: {
    height: 16,
    width: 16,
    marginLeft: 16,
  },
  textSearch: {
    color: 'rgba(1,1,1,0.2)',
    fontSize: 14,
    marginLeft: 18,
  },
  search: {
    tintColor: 'black',
    height: 14,
    width: 14,
    marginRight: 1,
  },
});
