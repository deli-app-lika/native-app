import React from 'react';
import { ScrollView, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Colors, IconButton, Text } from 'react-native-paper';
import NumberToggler from '../../components/numberToggler/NumberToggler';
import NavigationService from '../../navigation/NavigationService';
import styles from './styles';

// interface AccountProps {}

const Cart = ({ route }: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { params } = route;
  // if cart recives a param of type cocktail
  // const [initializing, setInitializing] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.topHeader}>
        <IconButton
          icon="close"
          color={Colors.pink300}
          size={25}
          onPress={() => {
            NavigationService.goBack();
          }}
        />
      </View>
      <View style={styles.sectionContainer}>
        <View style={styles.itemList}>
          <View style={styles.cartTitle}>
            <Text style={styles.cartMainTitle}>Your Shopping Cart</Text>
            <Text style={styles.cartSubTitle}>(2 Items)</Text>
          </View>
          <ScrollView>
            <View style={styles.item}>
              <View style={styles.itemNameImage}>
                <FastImage
                  style={styles.itemImage}
                  source={{
                    uri:
                      'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                    priority: FastImage.priority.normal
                  }}
                />
                <Text style={styles.itemText}>LICOR IMPORTADO</Text>
              </View>
              <View style={styles.numberToggler}>
                <NumberToggler />
              </View>
              <View style={styles.itemPriceView}>
                <Text style={styles.itemPrice}>$50.00</Text>
              </View>
            </View>
            <View style={styles.item}>
              <View style={styles.itemNameImage}>
                <FastImage
                  style={styles.itemImage}
                  source={{
                    uri:
                      'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                    priority: FastImage.priority.normal
                  }}
                />
                <Text style={styles.itemText}>LICOR IMPORTADO</Text>
              </View>
              <View style={styles.numberToggler}>
                <NumberToggler />
              </View>
              <View style={styles.itemPriceView}>
                <Text style={styles.itemPrice}>$50.00</Text>
              </View>
            </View>
            <View style={styles.item}>
              <View style={styles.itemNameImage}>
                <FastImage
                  style={styles.itemImage}
                  source={{
                    uri:
                      'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                    priority: FastImage.priority.normal
                  }}
                />
                <Text style={styles.itemText}>
                  LICOR IMPORTADO 1234567 kajlfdsj aldkjfadl f
                </Text>
              </View>
              <View style={styles.numberToggler}>
                <NumberToggler />
              </View>
              <View style={styles.itemPriceView}>
                <Text style={styles.itemPrice}>$50.00</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      <View
        style={[styles.sectionContainer, { backgroundColor: Colors.grey100 }]}
      >
        <View style={styles.summaryItems}>
          <View style={styles.cartTitle}>
            <Text style={styles.cartMainTitle}>Order Summary</Text>
          </View>
          <View style={styles.summaryPriceView}>
            <View style={styles.summaryPriceLine}>
              <Text style={styles.summaryPriceItemTitle}>Subtotal:</Text>
              <Text style={styles.summaryPriceItemValue}>$87.96</Text>
            </View>
            <View style={styles.summaryPriceLine}>
              <Text style={styles.summaryPriceItemTitle}>Estimated Tax:</Text>
              <Text style={styles.summaryPriceItemValue}>$8.02</Text>
            </View>
            <View style={styles.summaryPriceLine}>
              <Text style={styles.summaryPriceTotal}>Estimated Tax:</Text>
              <Text style={styles.summaryPriceTotalValue}>$8.02</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Cart;
