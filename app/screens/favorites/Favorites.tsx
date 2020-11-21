import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Colors, IconButton } from 'react-native-paper';
import styles from './styles';

interface FavoritesProps {}

const Favorites: React.FC<FavoritesProps> = () => {
  return (
    <View style={styles.conainer}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Favorites</Text>
      </View>
      <ScrollView>
        <View style={styles.itemView}>
          <View style={styles.itemImageView}>
            <FastImage
              style={styles.itemImage}
              source={{
                uri:
                  'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                priority: FastImage.priority.normal
              }}
            />
          </View>
          <View style={styles.itemDetails}>
            <View style={styles.itemDetailsTop}>
              <View style={styles.itemDetailsIcon}>
                <IconButton
                  icon="heart"
                  color={Colors.orange800}
                  size={25}
                  onPress={() => {
                    console.log('go fav');
                    // NavigationService.goBack();
                  }}
                />
              </View>
              <Text style={styles.itemDetailsName}>Item/Cocktail name</Text>
            </View>
            <View style={styles.itemDetailsBottom}>
              <Text style={styles.itemDetailsCategory}>category</Text>
            </View>
          </View>
        </View>
        {/* temp start */}
        {/* temp end */}
      </ScrollView>
    </View>
  );
};
export default Favorites;
