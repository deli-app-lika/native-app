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
        {/* TODO move x and heart icons into same view as image and position them on top of view */}
        <IconButton
          icon="close"
          style={styles.topIcon}
          color={Colors.pink300}
          size={25}
          onPress={() => {
            NavigationService.goBack();
          }}
        />
        <IconButton
          style={styles.topIcon}
          icon="heart-outline"
          // icon="heart"
          color={Colors.pink300}
          size={25}
          onPress={() => console.log('add to favs')}
        />
      </View>
      <View style={styles.imageView}>
        <FastImage
          style={[styles.itemImage, { width, height: height * 0.45 }]}
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
          style={styles.addToCart}
          onPress={() => console.log('Pressed')}
        />
      </View>
      <View
        style={[
          styles.itemDetailsView,
          {
            width,
            height: height * 0.55
          }
        ]}
      >
        <Text style={styles.itemName}>{item.itemName}</Text>
        <Text style={styles.itemProperties}>
          {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
        </Text>
        <View style={[styles.itemGroupProperties, { width }]}>
          <Text style={styles.itemProperties}>
            {item.size}
            {item.unit}
          </Text>
          <Text style={styles.itemProperties}>{item.price}</Text>
        </View>
      </View>
    </View>
  );
};

export default Item;
