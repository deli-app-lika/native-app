import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Colors, IconButton } from 'react-native-paper';
import styles from './styles';

interface ProductsProps {}

const Products: React.FC<ProductsProps> = () => {
  return (
    <View style={styles.conainer}>
      <ScrollView>
        <View style={styles.sectionView}>
          <View style={styles.titleView}>
            <Text style={styles.titleText}>Best Sellers</Text>
          </View>
          <View>
            <ScrollView horizontal style={{ backgroundColor: 'white' }}>
              <View style={styles.itemView}>
                <View style={styles.itemImageView}>
                  <FastImage
                    style={styles.itemImage}
                    // resizeMode="contain"
                    resizeMode="cover"
                    source={{
                      uri:
                        'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                      priority: FastImage.priority.normal
                    }}
                  />
                  <IconButton
                    style={styles.favIcon}
                    icon="heart-outline"
                    color={Colors.orange800}
                    size={25}
                    onPress={() => {
                      console.log('go to item');
                      // NavigationService.goBack();
                    }}
                  />
                </View>
                <View style={styles.itemPropertiesView}>
                  <View style={styles.itemNameView}>
                    <Text style={styles.itemName}>Item name Some longer</Text>
                  </View>
                  <View style={styles.itemDetailsView}>
                    <Text style={styles.itemPrice}>$20.00</Text>
                    <Text style={styles.itemSize}>750 ML</Text>
                  </View>
                </View>
              </View>

              {/* Test start */}
              <View style={styles.itemView}>
                <View style={styles.itemImageView}>
                  <FastImage
                    style={styles.itemImage}
                    // resizeMode="contain"
                    resizeMode="cover"
                    source={{
                      uri:
                        'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                      priority: FastImage.priority.normal
                    }}
                  />
                  <IconButton
                    style={styles.favIcon}
                    icon="heart-outline"
                    color={Colors.orange800}
                    size={25}
                    onPress={() => {
                      console.log('go to item');
                      // NavigationService.goBack();
                    }}
                  />
                </View>
                <View style={styles.itemPropertiesView}>
                  <View style={styles.itemNameView}>
                    <Text style={styles.itemName}>
                      deal Item name Some longer
                    </Text>
                  </View>
                  <View style={styles.itemDetailsView}>
                    <Text style={styles.itemPrice}>$20.00</Text>
                    <Text style={styles.itemSize}>750 ML</Text>
                  </View>
                </View>
              </View>

              <View style={styles.itemView}>
                <View style={styles.itemImageView}>
                  <FastImage
                    style={styles.itemImage}
                    // resizeMode="contain"
                    resizeMode="cover"
                    source={{
                      uri:
                        'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                      priority: FastImage.priority.normal
                    }}
                  />
                  <IconButton
                    style={styles.favIcon}
                    icon="heart-outline"
                    color={Colors.orange800}
                    size={25}
                    onPress={() => {
                      console.log('go to item');
                      // NavigationService.goBack();
                    }}
                  />
                </View>
                <View style={styles.itemPropertiesView}>
                  <View style={styles.itemNameView}>
                    <Text style={styles.itemName}>
                      deal Item name Some longer
                    </Text>
                  </View>
                  <View style={styles.itemDetailsView}>
                    <Text style={styles.itemPrice}>$20.00</Text>
                    <Text style={styles.itemSize}>750 ML</Text>
                  </View>
                </View>
              </View>
              <View style={styles.itemView}>
                <View style={styles.itemImageView}>
                  <FastImage
                    style={styles.itemImage}
                    // resizeMode="contain"
                    resizeMode="cover"
                    source={{
                      uri:
                        'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                      priority: FastImage.priority.normal
                    }}
                  />
                  <IconButton
                    style={styles.favIcon}
                    icon="heart-outline"
                    color={Colors.orange800}
                    size={25}
                    onPress={() => {
                      console.log('go to item');
                      // NavigationService.goBack();
                    }}
                  />
                </View>
                <View style={styles.itemPropertiesView}>
                  <View style={styles.itemNameView}>
                    <Text style={styles.itemName}>
                      deal Item name Some longer
                    </Text>
                  </View>
                  <View style={styles.itemDetailsView}>
                    <Text style={styles.itemPrice}>$20.00</Text>
                    <Text style={styles.itemSize}>750 ML</Text>
                  </View>
                </View>
              </View>
              <View style={styles.itemView}>
                <View style={styles.itemImageView}>
                  <FastImage
                    style={styles.itemImage}
                    // resizeMode="contain"
                    resizeMode="cover"
                    source={{
                      uri:
                        'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                      priority: FastImage.priority.normal
                    }}
                  />
                  <IconButton
                    style={styles.favIcon}
                    icon="heart-outline"
                    color={Colors.orange800}
                    size={25}
                    onPress={() => {
                      console.log('go to item');
                      // NavigationService.goBack();
                    }}
                  />
                </View>
                <View style={styles.itemPropertiesView}>
                  <View style={styles.itemNameView}>
                    <Text style={styles.itemName}>
                      deal Item name Some longer
                    </Text>
                  </View>
                  <View style={styles.itemDetailsView}>
                    <Text style={styles.itemPrice}>$20.00</Text>
                    <Text style={styles.itemSize}>750 ML</Text>
                  </View>
                </View>
              </View>
              <View style={styles.itemView}>
                <View style={styles.itemImageView}>
                  <FastImage
                    style={styles.itemImage}
                    // resizeMode="contain"
                    resizeMode="cover"
                    source={{
                      uri:
                        'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                      priority: FastImage.priority.normal
                    }}
                  />
                  <IconButton
                    style={styles.favIcon}
                    icon="heart-outline"
                    color={Colors.orange800}
                    size={25}
                    onPress={() => {
                      console.log('go to item');
                      // NavigationService.goBack();
                    }}
                  />
                </View>
                <View style={styles.itemPropertiesView}>
                  <View style={styles.itemNameView}>
                    <Text style={styles.itemName}>
                      deal Item name Some longer
                    </Text>
                  </View>
                  <View style={styles.itemDetailsView}>
                    <Text style={styles.itemPrice}>$20.00</Text>
                    <Text style={styles.itemSize}>750 ML</Text>
                  </View>
                </View>
              </View>
              <View style={styles.itemView}>
                <View style={styles.itemImageView}>
                  <FastImage
                    style={styles.itemImage}
                    // resizeMode="contain"
                    resizeMode="cover"
                    source={{
                      uri:
                        'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                      priority: FastImage.priority.normal
                    }}
                  />
                  <IconButton
                    style={styles.favIcon}
                    icon="heart-outline"
                    color={Colors.orange800}
                    size={25}
                    onPress={() => {
                      console.log('go to item');
                      // NavigationService.goBack();
                    }}
                  />
                </View>
                <View style={styles.itemPropertiesView}>
                  <View style={styles.itemNameView}>
                    <Text style={styles.itemName}>
                      deal Item name Some longer
                    </Text>
                  </View>
                  <View style={styles.itemDetailsView}>
                    <Text style={styles.itemPrice}>$20.00</Text>
                    <Text style={styles.itemSize}>750 ML</Text>
                  </View>
                </View>
              </View>
              <View style={styles.itemView}>
                <View style={styles.itemImageView}>
                  <FastImage
                    style={styles.itemImage}
                    // resizeMode="contain"
                    resizeMode="cover"
                    source={{
                      uri:
                        'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                      priority: FastImage.priority.normal
                    }}
                  />
                  <IconButton
                    style={styles.favIcon}
                    icon="heart-outline"
                    color={Colors.orange800}
                    size={25}
                    onPress={() => {
                      console.log('go to item');
                      // NavigationService.goBack();
                    }}
                  />
                </View>
                <View style={styles.itemPropertiesView}>
                  <View style={styles.itemNameView}>
                    <Text style={styles.itemName}>
                      deal Item name Some longer
                    </Text>
                  </View>
                  <View style={styles.itemDetailsView}>
                    <Text style={styles.itemPrice}>$20.00</Text>
                    <Text style={styles.itemSize}>750 ML</Text>
                  </View>
                </View>
              </View>

              {/* Test end */}
            </ScrollView>
          </View>
        </View>

        {/* Deals  */}

        <View style={styles.sectionView}>
          <View style={styles.titleView}>
            <Text style={styles.titleText}>Deals</Text>
          </View>
          <View>
            <ScrollView horizontal style={styles.scrollView}>
              <View style={styles.itemView}>
                <View style={styles.itemImageView}>
                  <FastImage
                    style={styles.itemImage}
                    // resizeMode="contain"
                    resizeMode="cover"
                    source={{
                      uri:
                        'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                      priority: FastImage.priority.normal
                    }}
                  />
                  <IconButton
                    style={styles.favIcon}
                    icon="heart-outline"
                    color={Colors.orange800}
                    size={25}
                    onPress={() => {
                      console.log('go to item');
                      // NavigationService.goBack();
                    }}
                  />
                </View>
                <View style={styles.itemPropertiesView}>
                  <View style={styles.itemNameView}>
                    <Text style={styles.itemName}>
                      deal Item name Some longer
                    </Text>
                  </View>
                  <View style={styles.itemDetailsView}>
                    <Text style={styles.itemPrice}>$20.00</Text>
                    <Text style={styles.itemSize}>750 ML</Text>
                  </View>
                </View>
              </View>

              {/* Test start */}

              <View style={styles.itemView}>
                <View style={styles.itemImageView}>
                  <FastImage
                    style={styles.itemImage}
                    // resizeMode="contain"
                    resizeMode="cover"
                    source={{
                      uri:
                        'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                      priority: FastImage.priority.normal
                    }}
                  />
                  <IconButton
                    style={styles.favIcon}
                    icon="heart-outline"
                    color={Colors.orange800}
                    size={25}
                    onPress={() => {
                      console.log('go to item');
                      // NavigationService.goBack();
                    }}
                  />
                </View>
                <View style={styles.itemPropertiesView}>
                  <View style={styles.itemNameView}>
                    <Text style={styles.itemName}>
                      deal Item name Some longer
                    </Text>
                  </View>
                  <View style={styles.itemDetailsView}>
                    <Text style={styles.itemPrice}>$20.00</Text>
                    <Text style={styles.itemSize}>750 ML</Text>
                  </View>
                </View>
              </View>

              <View style={styles.itemView}>
                <View style={styles.itemImageView}>
                  <FastImage
                    style={styles.itemImage}
                    // resizeMode="contain"
                    resizeMode="cover"
                    source={{
                      uri:
                        'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                      priority: FastImage.priority.normal
                    }}
                  />
                  <IconButton
                    style={styles.favIcon}
                    icon="heart-outline"
                    color={Colors.orange800}
                    size={25}
                    onPress={() => {
                      console.log('go to item');
                      // NavigationService.goBack();
                    }}
                  />
                </View>
                <View style={styles.itemPropertiesView}>
                  <View style={styles.itemNameView}>
                    <Text style={styles.itemName}>
                      deal Item name Some longer
                    </Text>
                  </View>
                  <View style={styles.itemDetailsView}>
                    <Text style={styles.itemPrice}>$20.00</Text>
                    <Text style={styles.itemSize}>750 ML</Text>
                  </View>
                </View>
              </View>
              <View style={styles.itemView}>
                <View style={styles.itemImageView}>
                  <FastImage
                    style={styles.itemImage}
                    // resizeMode="contain"
                    resizeMode="cover"
                    source={{
                      uri:
                        'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                      priority: FastImage.priority.normal
                    }}
                  />
                  <IconButton
                    style={styles.favIcon}
                    icon="heart-outline"
                    color={Colors.orange800}
                    size={25}
                    onPress={() => {
                      console.log('go to item');
                      // NavigationService.goBack();
                    }}
                  />
                </View>
                <View style={styles.itemPropertiesView}>
                  <View style={styles.itemNameView}>
                    <Text style={styles.itemName}>
                      deal Item name Some longer
                    </Text>
                  </View>
                  <View style={styles.itemDetailsView}>
                    <Text style={styles.itemPrice}>$20.00</Text>
                    <Text style={styles.itemSize}>750 ML</Text>
                  </View>
                </View>
              </View>
              <View style={styles.itemView}>
                <View style={styles.itemImageView}>
                  <FastImage
                    style={styles.itemImage}
                    // resizeMode="contain"
                    resizeMode="cover"
                    source={{
                      uri:
                        'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                      priority: FastImage.priority.normal
                    }}
                  />
                  <IconButton
                    style={styles.favIcon}
                    icon="heart-outline"
                    color={Colors.orange800}
                    size={25}
                    onPress={() => {
                      console.log('go to item');
                      // NavigationService.goBack();
                    }}
                  />
                </View>
                <View style={styles.itemPropertiesView}>
                  <View style={styles.itemNameView}>
                    <Text style={styles.itemName}>
                      deal Item name Some longer
                    </Text>
                  </View>
                  <View style={styles.itemDetailsView}>
                    <Text style={styles.itemPrice}>$20.00</Text>
                    <Text style={styles.itemSize}>750 ML</Text>
                  </View>
                </View>
              </View>
              <View style={styles.itemView}>
                <View style={styles.itemImageView}>
                  <FastImage
                    style={styles.itemImage}
                    // resizeMode="contain"
                    resizeMode="cover"
                    source={{
                      uri:
                        'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                      priority: FastImage.priority.normal
                    }}
                  />
                  <IconButton
                    style={styles.favIcon}
                    icon="heart-outline"
                    color={Colors.orange800}
                    size={25}
                    onPress={() => {
                      console.log('go to item');
                      // NavigationService.goBack();
                    }}
                  />
                </View>
                <View style={styles.itemPropertiesView}>
                  <View style={styles.itemNameView}>
                    <Text style={styles.itemName}>
                      deal Item name Some longer
                    </Text>
                  </View>
                  <View style={styles.itemDetailsView}>
                    <Text style={styles.itemPrice}>$20.00</Text>
                    <Text style={styles.itemSize}>750 ML</Text>
                  </View>
                </View>
              </View>
              <View style={styles.itemView}>
                <View style={styles.itemImageView}>
                  <FastImage
                    style={styles.itemImage}
                    // resizeMode="contain"
                    resizeMode="cover"
                    source={{
                      uri:
                        'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                      priority: FastImage.priority.normal
                    }}
                  />
                  <IconButton
                    style={styles.favIcon}
                    icon="heart-outline"
                    color={Colors.orange800}
                    size={25}
                    onPress={() => {
                      console.log('go to item');
                      // NavigationService.goBack();
                    }}
                  />
                </View>
                <View style={styles.itemPropertiesView}>
                  <View style={styles.itemNameView}>
                    <Text style={styles.itemName}>
                      deal Item name Some longer
                    </Text>
                  </View>
                  <View style={styles.itemDetailsView}>
                    <Text style={styles.itemPrice}>$20.00</Text>
                    <Text style={styles.itemSize}>750 ML</Text>
                  </View>
                </View>
              </View>
              <View style={styles.itemView}>
                <View style={styles.itemImageView}>
                  <FastImage
                    style={styles.itemImage}
                    // resizeMode="contain"
                    resizeMode="cover"
                    source={{
                      uri:
                        'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                      priority: FastImage.priority.normal
                    }}
                  />
                  <IconButton
                    style={styles.favIcon}
                    icon="heart-outline"
                    color={Colors.orange800}
                    size={25}
                    onPress={() => {
                      console.log('go to item');
                      // NavigationService.goBack();
                    }}
                  />
                </View>
                <View style={styles.itemPropertiesView}>
                  <View style={styles.itemNameView}>
                    <Text style={styles.itemName}>
                      deal Item name Some longer
                    </Text>
                  </View>
                  <View style={styles.itemDetailsView}>
                    <Text style={styles.itemPrice}>$20.00</Text>
                    <Text style={styles.itemSize}>750 ML</Text>
                  </View>
                </View>
              </View>

              {/* Test end */}
            </ScrollView>
          </View>
        </View>
        {/* end Deals */}

        {/* Highest rated */}

        <View style={styles.sectionView}>
          <View style={styles.titleView}>
            <Text style={styles.titleText}>Highest Rated</Text>
          </View>
          <View>
            <ScrollView horizontal style={{ backgroundColor: 'white' }}>
              <View style={styles.itemView}>
                <View style={styles.itemImageView}>
                  <FastImage
                    style={styles.itemImage}
                    // resizeMode="contain"
                    resizeMode="cover"
                    source={{
                      uri:
                        'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                      priority: FastImage.priority.normal
                    }}
                  />
                </View>
                <View style={styles.itemPropertiesView}>
                  <View style={styles.itemNameView}>
                    <Text style={styles.itemName}>
                      Highest Rated Item name Some longer
                    </Text>
                  </View>
                  <View style={styles.itemDetailsView}>
                    <Text style={styles.itemPrice}>$20.00</Text>
                    <Text style={styles.itemSize}>750 ML</Text>
                  </View>
                </View>
              </View>

              {/* Test start */}

              <View style={styles.itemView}>
                <View style={styles.itemImageView}>
                  <FastImage
                    style={styles.itemImage}
                    // resizeMode="contain"
                    resizeMode="cover"
                    source={{
                      uri:
                        'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                      priority: FastImage.priority.normal
                    }}
                  />
                  <IconButton
                    style={styles.favIcon}
                    icon="heart-outline"
                    color={Colors.orange800}
                    size={25}
                    onPress={() => {
                      console.log('go to item');
                      // NavigationService.goBack();
                    }}
                  />
                </View>
                <View style={styles.itemPropertiesView}>
                  <View style={styles.itemNameView}>
                    <Text style={styles.itemName}>
                      deal Item name Some longer
                    </Text>
                  </View>
                  <View style={styles.itemDetailsView}>
                    <Text style={styles.itemPrice}>$20.00</Text>
                    <Text style={styles.itemSize}>750 ML</Text>
                  </View>
                </View>
              </View>

              <View style={styles.itemView}>
                <View style={styles.itemImageView}>
                  <FastImage
                    style={styles.itemImage}
                    // resizeMode="contain"
                    resizeMode="cover"
                    source={{
                      uri:
                        'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                      priority: FastImage.priority.normal
                    }}
                  />
                  <IconButton
                    style={styles.favIcon}
                    icon="heart-outline"
                    color={Colors.orange800}
                    size={25}
                    onPress={() => {
                      console.log('go to item');
                      // NavigationService.goBack();
                    }}
                  />
                </View>
                <View style={styles.itemPropertiesView}>
                  <View style={styles.itemNameView}>
                    <Text style={styles.itemName}>
                      deal Item name Some longer
                    </Text>
                  </View>
                  <View style={styles.itemDetailsView}>
                    <Text style={styles.itemPrice}>$20.00</Text>
                    <Text style={styles.itemSize}>750 ML</Text>
                  </View>
                </View>
              </View>
              <View style={styles.itemView}>
                <View style={styles.itemImageView}>
                  <FastImage
                    style={styles.itemImage}
                    // resizeMode="contain"
                    resizeMode="cover"
                    source={{
                      uri:
                        'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                      priority: FastImage.priority.normal
                    }}
                  />
                  <IconButton
                    style={styles.favIcon}
                    icon="heart-outline"
                    color={Colors.orange800}
                    size={25}
                    onPress={() => {
                      console.log('go to item');
                      // NavigationService.goBack();
                    }}
                  />
                </View>
                <View style={styles.itemPropertiesView}>
                  <View style={styles.itemNameView}>
                    <Text style={styles.itemName}>
                      deal Item name Some longer
                    </Text>
                  </View>
                  <View style={styles.itemDetailsView}>
                    <Text style={styles.itemPrice}>$20.00</Text>
                    <Text style={styles.itemSize}>750 ML</Text>
                  </View>
                </View>
              </View>
              <View style={styles.itemView}>
                <View style={styles.itemImageView}>
                  <FastImage
                    style={styles.itemImage}
                    // resizeMode="contain"
                    resizeMode="cover"
                    source={{
                      uri:
                        'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                      priority: FastImage.priority.normal
                    }}
                  />
                  <IconButton
                    style={styles.favIcon}
                    icon="heart-outline"
                    color={Colors.orange800}
                    size={25}
                    onPress={() => {
                      console.log('go to item');
                      // NavigationService.goBack();
                    }}
                  />
                </View>
                <View style={styles.itemPropertiesView}>
                  <View style={styles.itemNameView}>
                    <Text style={styles.itemName}>
                      deal Item name Some longer
                    </Text>
                  </View>
                  <View style={styles.itemDetailsView}>
                    <Text style={styles.itemPrice}>$20.00</Text>
                    <Text style={styles.itemSize}>750 ML</Text>
                  </View>
                </View>
              </View>
              <View style={styles.itemView}>
                <View style={styles.itemImageView}>
                  <FastImage
                    style={styles.itemImage}
                    // resizeMode="contain"
                    resizeMode="cover"
                    source={{
                      uri:
                        'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                      priority: FastImage.priority.normal
                    }}
                  />
                  <IconButton
                    style={styles.favIcon}
                    icon="heart-outline"
                    color={Colors.orange800}
                    size={25}
                    onPress={() => {
                      console.log('go to item');
                      // NavigationService.goBack();
                    }}
                  />
                </View>
                <View style={styles.itemPropertiesView}>
                  <View style={styles.itemNameView}>
                    <Text style={styles.itemName}>
                      deal Item name Some longer
                    </Text>
                  </View>
                  <View style={styles.itemDetailsView}>
                    <Text style={styles.itemPrice}>$20.00</Text>
                    <Text style={styles.itemSize}>750 ML</Text>
                  </View>
                </View>
              </View>
              <View style={styles.itemView}>
                <View style={styles.itemImageView}>
                  <FastImage
                    style={styles.itemImage}
                    // resizeMode="contain"
                    resizeMode="cover"
                    source={{
                      uri:
                        'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                      priority: FastImage.priority.normal
                    }}
                  />
                  <IconButton
                    style={styles.favIcon}
                    icon="heart-outline"
                    color={Colors.orange800}
                    size={25}
                    onPress={() => {
                      console.log('go to item');
                      // NavigationService.goBack();
                    }}
                  />
                </View>
                <View style={styles.itemPropertiesView}>
                  <View style={styles.itemNameView}>
                    <Text style={styles.itemName}>
                      deal Item name Some longer
                    </Text>
                  </View>
                  <View style={styles.itemDetailsView}>
                    <Text style={styles.itemPrice}>$20.00</Text>
                    <Text style={styles.itemSize}>750 ML</Text>
                  </View>
                </View>
              </View>
              <View style={styles.itemView}>
                <View style={styles.itemImageView}>
                  <FastImage
                    style={styles.itemImage}
                    // resizeMode="contain"
                    resizeMode="cover"
                    source={{
                      uri:
                        'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                      priority: FastImage.priority.normal
                    }}
                  />
                  <IconButton
                    style={styles.favIcon}
                    icon="heart-outline"
                    color={Colors.orange800}
                    size={25}
                    onPress={() => {
                      console.log('go to item');
                      // NavigationService.goBack();
                    }}
                  />
                </View>
                <View style={styles.itemPropertiesView}>
                  <View style={styles.itemNameView}>
                    <Text style={styles.itemName}>
                      deal Item name Some longer
                    </Text>
                  </View>
                  <View style={styles.itemDetailsView}>
                    <Text style={styles.itemPrice}>$20.00</Text>
                    <Text style={styles.itemSize}>750 ML</Text>
                  </View>
                </View>
              </View>

              {/* Test end */}
            </ScrollView>
          </View>
        </View>

        {/* end hightes rated */}
      </ScrollView>
    </View>
  );
};

export default Products;
