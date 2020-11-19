import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Colors, IconButton } from 'react-native-paper';

interface FavoritesProps {}

const Favorites: React.FC<FavoritesProps> = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}
      >
        <Text
          style={{ color: Colors.orange800, fontSize: 25, fontWeight: 'bold' }}
        >
          Favorites
        </Text>
      </View>

      <ScrollView>
        {/* TODO move inline styles into syles.ts file */}
        <View
          style={{
            height: 100,
            width: '100%',
            paddingRight: 20,
            paddingLeft: 20,
            marginTop: 10,
            marginBottom: 10,
            // backgroundColor: 'yellow',
            flexDirection: 'row'
          }}
        >
          <View
            style={{
              flex: 2,

              justifyContent: 'center'
            }}
          >
            <FastImage
              style={{
                marginRight: 10,
                height: 100,
                width: 100,
                alignSelf: 'flex-start'
              }}
              source={{
                uri:
                  'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                priority: FastImage.priority.normal
              }}
            />
          </View>

          <View
            style={{
              flex: 3,
              justifyContent: 'center',
              flexDirection: 'column'
            }}
          >
            <View
              style={{
                flex: 2,
                alignItems: 'flex-start',
                justifyContent: 'flex-end'
                // backgroundColor: 'pink'
              }}
            >
              <View
                style={{
                  flexDirection: 'column',
                  // backgroundColor: 'black',
                  right: 0,
                  top: 0,
                  justifyContent: 'flex-start',
                  alignSelf: 'flex-end',
                  // alignItems: 'flex-start',
                  position: 'absolute'
                }}
              >
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
              <Text style={{ fontSize: 20, color: Colors.orange800 }}>
                Item/Cocktail name
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                alignItems: 'flex-start',
                justifyContent: 'flex-start'
              }}
            >
              <Text style={{ fontSize: 15, color: Colors.orange800 }}>
                category
              </Text>
            </View>
          </View>
        </View>
        {/* temp start */}

        <View
          style={{
            height: 100,
            width: '100%',
            paddingRight: 20,
            paddingLeft: 20,
            marginTop: 10,
            marginBottom: 10,
            // backgroundColor: 'yellow',
            flexDirection: 'row'
          }}
        >
          <View
            style={{
              flex: 2,

              justifyContent: 'center'
            }}
          >
            <FastImage
              style={{
                marginRight: 10,
                height: 100,
                width: 100,
                alignSelf: 'flex-start'
              }}
              source={{
                uri:
                  'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                priority: FastImage.priority.normal
              }}
            />
          </View>

          <View
            style={{
              flex: 3,
              justifyContent: 'center',
              flexDirection: 'column'
            }}
          >
            <View
              style={{
                flex: 2,
                alignItems: 'flex-start',
                justifyContent: 'flex-end'
                // backgroundColor: 'pink'
              }}
            >
              <View
                style={{
                  flexDirection: 'column',
                  // backgroundColor: 'black',
                  right: 0,
                  top: 0,
                  justifyContent: 'flex-start',
                  alignSelf: 'flex-end',
                  // alignItems: 'flex-start',
                  position: 'absolute'
                }}
              >
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
              <Text style={{ fontSize: 20, color: Colors.orange800 }}>
                Item/Cocktail name
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                alignItems: 'flex-start',
                justifyContent: 'flex-start'
              }}
            >
              <Text style={{ fontSize: 15, color: Colors.orange800 }}>
                category
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            height: 100,
            width: '100%',
            paddingRight: 20,
            paddingLeft: 20,
            marginTop: 10,
            marginBottom: 10,
            // backgroundColor: 'yellow',
            flexDirection: 'row'
          }}
        >
          <View
            style={{
              flex: 2,

              justifyContent: 'center'
            }}
          >
            <FastImage
              style={{
                marginRight: 10,
                height: 100,
                width: 100,
                alignSelf: 'flex-start'
              }}
              source={{
                uri:
                  'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                priority: FastImage.priority.normal
              }}
            />
          </View>

          <View
            style={{
              flex: 3,
              justifyContent: 'center',
              flexDirection: 'column'
            }}
          >
            <View
              style={{
                flex: 2,
                alignItems: 'flex-start',
                justifyContent: 'flex-end'
                // backgroundColor: 'pink'
              }}
            >
              <View
                style={{
                  flexDirection: 'column',
                  // backgroundColor: 'black',
                  right: 0,
                  top: 0,
                  justifyContent: 'flex-start',
                  alignSelf: 'flex-end',
                  // alignItems: 'flex-start',
                  position: 'absolute'
                }}
              >
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
              <Text style={{ fontSize: 20, color: Colors.orange800 }}>
                Item/Cocktail name
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                alignItems: 'flex-start',
                justifyContent: 'flex-start'
              }}
            >
              <Text style={{ fontSize: 15, color: Colors.orange800 }}>
                category
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            height: 100,
            width: '100%',
            paddingRight: 20,
            paddingLeft: 20,
            marginTop: 10,
            marginBottom: 10,
            // backgroundColor: 'yellow',
            flexDirection: 'row'
          }}
        >
          <View
            style={{
              flex: 2,

              justifyContent: 'center'
            }}
          >
            <FastImage
              style={{
                marginRight: 10,
                height: 100,
                width: 100,
                alignSelf: 'flex-start'
              }}
              source={{
                uri:
                  'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                priority: FastImage.priority.normal
              }}
            />
          </View>

          <View
            style={{
              flex: 3,
              justifyContent: 'center',
              flexDirection: 'column'
            }}
          >
            <View
              style={{
                flex: 2,
                alignItems: 'flex-start',
                justifyContent: 'flex-end'
                // backgroundColor: 'pink'
              }}
            >
              <View
                style={{
                  flexDirection: 'column',
                  // backgroundColor: 'black',
                  right: 0,
                  top: 0,
                  justifyContent: 'flex-start',
                  alignSelf: 'flex-end',
                  // alignItems: 'flex-start',
                  position: 'absolute'
                }}
              >
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
              <Text style={{ fontSize: 20, color: Colors.orange800 }}>
                Item/Cocktail name
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                alignItems: 'flex-start',
                justifyContent: 'flex-start'
              }}
            >
              <Text style={{ fontSize: 15, color: Colors.orange800 }}>
                category
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            height: 100,
            width: '100%',
            paddingRight: 20,
            paddingLeft: 20,
            marginTop: 10,
            marginBottom: 10,
            // backgroundColor: 'yellow',
            flexDirection: 'row'
          }}
        >
          <View
            style={{
              flex: 2,

              justifyContent: 'center'
            }}
          >
            <FastImage
              style={{
                marginRight: 10,
                height: 100,
                width: 100,
                alignSelf: 'flex-start'
              }}
              source={{
                uri:
                  'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                priority: FastImage.priority.normal
              }}
            />
          </View>

          <View
            style={{
              flex: 3,
              justifyContent: 'center',
              flexDirection: 'column'
            }}
          >
            <View
              style={{
                flex: 2,
                alignItems: 'flex-start',
                justifyContent: 'flex-end'
                // backgroundColor: 'pink'
              }}
            >
              <View
                style={{
                  flexDirection: 'column',
                  // backgroundColor: 'black',
                  right: 0,
                  top: 0,
                  justifyContent: 'flex-start',
                  alignSelf: 'flex-end',
                  // alignItems: 'flex-start',
                  position: 'absolute'
                }}
              >
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
              <Text style={{ fontSize: 20, color: Colors.orange800 }}>
                Item/Cocktail name
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                alignItems: 'flex-start',
                justifyContent: 'flex-start'
              }}
            >
              <Text style={{ fontSize: 15, color: Colors.orange800 }}>
                category
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            height: 100,
            width: '100%',
            paddingRight: 20,
            paddingLeft: 20,
            marginTop: 10,
            marginBottom: 10,
            // backgroundColor: 'yellow',
            flexDirection: 'row'
          }}
        >
          <View
            style={{
              flex: 2,

              justifyContent: 'center'
            }}
          >
            <FastImage
              style={{
                marginRight: 10,
                height: 100,
                width: 100,
                alignSelf: 'flex-start'
              }}
              source={{
                uri:
                  'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                priority: FastImage.priority.normal
              }}
            />
          </View>

          <View
            style={{
              flex: 3,
              justifyContent: 'center',
              flexDirection: 'column'
            }}
          >
            <View
              style={{
                flex: 2,
                alignItems: 'flex-start',
                justifyContent: 'flex-end'
                // backgroundColor: 'pink'
              }}
            >
              <View
                style={{
                  flexDirection: 'column',
                  // backgroundColor: 'black',
                  right: 0,
                  top: 0,
                  justifyContent: 'flex-start',
                  alignSelf: 'flex-end',
                  // alignItems: 'flex-start',
                  position: 'absolute'
                }}
              >
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
              <Text style={{ fontSize: 20, color: Colors.orange800 }}>
                Item/Cocktail name
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                alignItems: 'flex-start',
                justifyContent: 'flex-start'
              }}
            >
              <Text style={{ fontSize: 15, color: Colors.orange800 }}>
                category
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            height: 100,
            width: '100%',
            paddingRight: 20,
            paddingLeft: 20,
            marginTop: 10,
            marginBottom: 10,
            // backgroundColor: 'yellow',
            flexDirection: 'row'
          }}
        >
          <View
            style={{
              flex: 2,

              justifyContent: 'center'
            }}
          >
            <FastImage
              style={{
                marginRight: 10,
                height: 100,
                width: 100,
                alignSelf: 'flex-start'
              }}
              source={{
                uri:
                  'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                priority: FastImage.priority.normal
              }}
            />
          </View>

          <View
            style={{
              flex: 3,
              justifyContent: 'center',
              flexDirection: 'column'
            }}
          >
            <View
              style={{
                flex: 2,
                alignItems: 'flex-start',
                justifyContent: 'flex-end'
                // backgroundColor: 'pink'
              }}
            >
              <View
                style={{
                  flexDirection: 'column',
                  // backgroundColor: 'black',
                  right: 0,
                  top: 0,
                  justifyContent: 'flex-start',
                  alignSelf: 'flex-end',
                  // alignItems: 'flex-start',
                  position: 'absolute'
                }}
              >
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
              <Text style={{ fontSize: 20, color: Colors.orange800 }}>
                Item/Cocktail name
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                alignItems: 'flex-start',
                justifyContent: 'flex-start'
              }}
            >
              <Text style={{ fontSize: 15, color: Colors.orange800 }}>
                category
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            height: 100,
            width: '100%',
            paddingRight: 20,
            paddingLeft: 20,
            marginTop: 10,
            marginBottom: 10,
            // backgroundColor: 'yellow',
            flexDirection: 'row'
          }}
        >
          <View
            style={{
              flex: 2,

              justifyContent: 'center'
            }}
          >
            <FastImage
              style={{
                marginRight: 10,
                height: 100,
                width: 100,
                alignSelf: 'flex-start'
              }}
              source={{
                uri:
                  'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                priority: FastImage.priority.normal
              }}
            />
          </View>

          <View
            style={{
              flex: 3,
              justifyContent: 'center',
              flexDirection: 'column'
            }}
          >
            <View
              style={{
                flex: 2,
                alignItems: 'flex-start',
                justifyContent: 'flex-end'
                // backgroundColor: 'pink'
              }}
            >
              <View
                style={{
                  flexDirection: 'column',
                  // backgroundColor: 'black',
                  right: 0,
                  top: 0,
                  justifyContent: 'flex-start',
                  alignSelf: 'flex-end',
                  // alignItems: 'flex-start',
                  position: 'absolute'
                }}
              >
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
              <Text style={{ fontSize: 20, color: Colors.orange800 }}>
                Item/Cocktail name
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                alignItems: 'flex-start',
                justifyContent: 'flex-start'
              }}
            >
              <Text style={{ fontSize: 15, color: Colors.orange800 }}>
                category
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            height: 100,
            width: '100%',
            paddingRight: 20,
            paddingLeft: 20,
            marginTop: 10,
            marginBottom: 10,
            // backgroundColor: 'yellow',
            flexDirection: 'row'
          }}
        >
          <View
            style={{
              flex: 2,

              justifyContent: 'center'
            }}
          >
            <FastImage
              style={{
                marginRight: 10,
                height: 100,
                width: 100,
                alignSelf: 'flex-start'
              }}
              source={{
                uri:
                  'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                priority: FastImage.priority.normal
              }}
            />
          </View>

          <View
            style={{
              flex: 3,
              justifyContent: 'center',
              flexDirection: 'column'
            }}
          >
            <View
              style={{
                flex: 2,
                alignItems: 'flex-start',
                justifyContent: 'flex-end'
                // backgroundColor: 'pink'
              }}
            >
              <View
                style={{
                  flexDirection: 'column',
                  // backgroundColor: 'black',
                  right: 0,
                  top: 0,
                  justifyContent: 'flex-start',
                  alignSelf: 'flex-end',
                  // alignItems: 'flex-start',
                  position: 'absolute'
                }}
              >
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
              <Text style={{ fontSize: 20, color: Colors.orange800 }}>
                Item/Cocktail name
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                alignItems: 'flex-start',
                justifyContent: 'flex-start'
              }}
            >
              <Text style={{ fontSize: 15, color: Colors.orange800 }}>
                category
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            height: 100,
            width: '100%',
            paddingRight: 20,
            paddingLeft: 20,
            marginTop: 10,
            marginBottom: 10,
            // backgroundColor: 'yellow',
            flexDirection: 'row'
          }}
        >
          <View
            style={{
              flex: 2,

              justifyContent: 'center'
            }}
          >
            <FastImage
              style={{
                marginRight: 10,
                height: 100,
                width: 100,
                alignSelf: 'flex-start'
              }}
              source={{
                uri:
                  'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                priority: FastImage.priority.normal
              }}
            />
          </View>

          <View
            style={{
              flex: 3,
              justifyContent: 'center',
              flexDirection: 'column'
            }}
          >
            <View
              style={{
                flex: 2,
                alignItems: 'flex-start',
                justifyContent: 'flex-end'
                // backgroundColor: 'pink'
              }}
            >
              <View
                style={{
                  flexDirection: 'column',
                  // backgroundColor: 'black',
                  right: 0,
                  top: 0,
                  justifyContent: 'flex-start',
                  alignSelf: 'flex-end',
                  // alignItems: 'flex-start',
                  position: 'absolute'
                }}
              >
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
              <Text style={{ fontSize: 20, color: Colors.orange800 }}>
                Item/Cocktail name
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                alignItems: 'flex-start',
                justifyContent: 'flex-start'
              }}
            >
              <Text style={{ fontSize: 15, color: Colors.orange800 }}>
                category
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            height: 100,
            width: '100%',
            paddingRight: 20,
            paddingLeft: 20,
            marginTop: 10,
            marginBottom: 10,
            // backgroundColor: 'yellow',
            flexDirection: 'row'
          }}
        >
          <View
            style={{
              flex: 2,

              justifyContent: 'center'
            }}
          >
            <FastImage
              style={{
                marginRight: 10,
                height: 100,
                width: 100,
                alignSelf: 'flex-start'
              }}
              source={{
                uri:
                  'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
                priority: FastImage.priority.normal
              }}
            />
          </View>

          <View
            style={{
              flex: 3,
              justifyContent: 'center',
              flexDirection: 'column'
            }}
          >
            <View
              style={{
                flex: 2,
                alignItems: 'flex-start',
                justifyContent: 'flex-end'
                // backgroundColor: 'pink'
              }}
            >
              <View
                style={{
                  flexDirection: 'column',
                  // backgroundColor: 'black',
                  right: 0,
                  top: 0,
                  justifyContent: 'flex-start',
                  alignSelf: 'flex-end',
                  // alignItems: 'flex-start',
                  position: 'absolute'
                }}
              >
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
              <Text style={{ fontSize: 20, color: Colors.orange800 }}>
                Item/Cocktail name
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                alignItems: 'flex-start',
                justifyContent: 'flex-start'
              }}
            >
              <Text style={{ fontSize: 15, color: Colors.orange800 }}>
                category
              </Text>
            </View>
          </View>
        </View>

        {/* temp end */}
      </ScrollView>
    </View>
  );
};
export default Favorites;
