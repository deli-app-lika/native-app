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
      <View style={{ margin: 15 }}>
        <View style={styles.itemList}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text
              style={{
                color: Colors.orange800,
                fontSize: 25,
                fontWeight: 'bold'
              }}
            >
              Your Shopping Cart
            </Text>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 15,
                color: Colors.orange800,
                fontWeight: 'bold'
              }}
            >
              (2 Items)
            </Text>
          </View>
          <ScrollView>
            <View style={styles.ingredient}>
              <FastImage
                style={{ width: 25, height: 50 }}
                source={{
                  uri:
                    'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                  priority: FastImage.priority.normal
                }}
                // resizeMode={FastImage.resizeMode.contain}
              />
              <Text style={styles.ingredientText}>LICOR IMPORTADO</Text>
              <NumberToggler />
              <Text style={styles.ingredientPrice}>$50.00</Text>
            </View>
            <View style={styles.ingredient}>
              <FastImage
                style={{ width: 25, height: 50 }}
                source={{
                  uri:
                    'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                  priority: FastImage.priority.normal
                }}
                // resizeMode={FastImage.resizeMode.contain}
              />
              <Text style={styles.ingredientText}>LICOR IMPORTADO</Text>
              <Text style={styles.ingredientPrice}>$50.00</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
export default Cart;
