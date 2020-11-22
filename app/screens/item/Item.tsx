import React from 'react';
import { Dimensions, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Colors, IconButton, Text } from 'react-native-paper';
import NavigationService from '../../navigation/NavigationService';
import styles from './styles';

// TODO set up props
interface ItemProps {}
// @ts-ignore
const Item: React.FC<ItemProps> = ({ route }) => {
  const item = route.params;
  const { height } = Dimensions.get('window');
  const { width } = Dimensions.get('window');
  return (
    <View style={styles.container}>
      <View style={styles.topHeader}>
        <IconButton
          icon="close"
          style={{ marginTop: 0, paddingTop: 0 }}
          color={Colors.pink300}
          size={25}
          onPress={() => {
            NavigationService.goBack();
          }}
        />
        <IconButton
          style={{ marginTop: 0, paddingTop: 0 }}
          icon="heart-outline"
          color={Colors.pink300}
          size={25}
          onPress={() => console.log('Pressed')}
        />
      </View>
      <View
        style={{
          marginTop: 0,
          paddingTop: 0

          // height: '45%',
          // backgroundColor: 'green'
          // marginTop: 5
        }}
      >
        <FastImage
          style={{
            width,
            height: height * 0.45,
            marginTop: 0,
            paddingTop: 0

            // backgroundColor: 'yellow'
          }}
          source={{
            uri: item.image,
            priority: FastImage.priority.normal
          }}
          resizeMode="contain"
        />
        <IconButton
          icon="cart-plus"
          color={Colors.white}
          size={40}
          style={{
            position: 'absolute',
            // left: 0,
            right: 0,
            bottom: 0,
            // margin: 20,
            // padding: 15,
            // bottom: 0
            backgroundColor: Colors.orange800
          }}
          onPress={() => console.log('Pressed')}
        />
      </View>
      <View
        style={{
          backgroundColor: 'pink',
          width,
          height: height * 0.55,
          alignItems: 'flex-start',
          flexDirection: 'column'
        }}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
          {item.itemName}
        </Text>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
          {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
        </Text>
        <View style={{ width, flexDirection: 'row' }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
            {item.size}
            {item.unit}
          </Text>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{item.price}</Text>
        </View>
      </View>
    </View>
  );
};

export default Item;
