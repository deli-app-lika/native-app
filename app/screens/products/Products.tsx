import React from 'react';
import { Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';

interface ProductsProps {}

const Products: React.FC<ProductsProps> = () => {
  return (
    <View style={styles.conainer}>
      <View
        style={{
          // backgroundColor: 'yellow',
          height: '100%'
        }}
      >
        <View style={styles.titleView}>
          <Text style={styles.titleText}>Best Sellers</Text>
        </View>
        <View
          style={{
            height: '40%',
            width: '30%',
            backgroundColor: 'lightgrey',
            margin: 10,
            flexDirection: 'column'
          }}
        >
          <View
            style={{
              flex: 2,
              // backgroundColor: 'purple',
              marginBottom: 10
            }}
          >
            <FastImage
              style={{
                flex: 2,
                height: undefined,
                width: undefined
              }}
              // resizeMode="contain"
              resizeMode="cover"
              source={{
                uri:
                  'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                priority: FastImage.priority.normal
              }}
            />
          </View>
          <View
            style={{
              flex: 1
              // backgroundColor: 'green'
            }}
          >
            <View
              style={{
                flex: 2
                // backgroundColor: 'pink'
              }}
            >
              <Text
                style={{
                  color: 'black'
                }}
              >
                Item name Some longer
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                // backgroundColor: 'orange',
                flexDirection: 'row'
              }}
            >
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  marginRight: 5
                }}
              >
                $20.00
              </Text>

              <Text
                style={{
                  color: 'black'
                }}
              >
                750 ML
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Products;
