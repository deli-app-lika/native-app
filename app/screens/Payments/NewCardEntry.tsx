import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import cardEntryStyles from './cardEntryStyles';

interface NewCardEntryProps {}

const NewCardEntry: React.FC<NewCardEntryProps> = () => {
  const [cardState, setCardState] = useState({
    cardHolderName: '',
    cardNumber: '',
    cardExp: '',
    cardCCV: ''
  });

  return (
    <View style={cardEntryStyles.container}>
      <View style={cardEntryStyles.CardWrapper}>
        <View style={cardEntryStyles.CardBackground}>
          <FastImage
            style={cardEntryStyles.CardImage}
            source={{
              uri:
                'https://firebasestorage.googleapis.com/v0/b/lika-23ab9.appspot.com/o/static-native%2Fcardgb.png?alt=media&token=323b8144-9a0b-4e18-8097-5e229d2db596'
            }}
          />
          <View style={cardEntryStyles.CardNumberWrapper}>
            <Text style={cardEntryStyles.CardNumber}>
              {cardState.cardNumber}
            </Text>
          </View>

          <View style={cardEntryStyles.CardHolderDetails}>
            <Text style={cardEntryStyles.CardHolderTitle}>CARD HOLDER</Text>
            <Text style={cardEntryStyles.CardHoldName}>
              {cardState.cardHolderName}
            </Text>
          </View>
          <View style={cardEntryStyles.VisaLogo}>
            <FastImage
              style={cardEntryStyles.VisaImage}
              source={{
                uri:
                  'https://firebasestorage.googleapis.com/v0/b/lika-23ab9.appspot.com/o/static-native%2Fvisa.png?alt=media&token=c23ed378-a1ee-423d-aa23-a71515b9e489'
              }}
            />
          </View>
          <View style={cardEntryStyles.ExpirationNumberWrapper}>
            <Text style={cardEntryStyles.ExpirationNumberTitle}>
              EXPIRATION
            </Text>
            <Text style={cardEntryStyles.ExpirationNumber}>
              {cardState.cardExp}
            </Text>
          </View>
        </View>
      </View>
      <ScrollView
        style={{
          ...cardEntryStyles.formContainer
        }}
      >
        <View style={{ ...cardEntryStyles.inputContainer }}>
          <Text style={{ ...cardEntryStyles.inputLabel }}>CARD HOLDER</Text>
          <TextInput
            autoCapitalize="characters"
            mode="outlined"
            onChangeText={(text) =>
              setCardState((prev) => ({
                ...prev,
                cardHolderName: text
              }))
            }
            value={cardState.cardHolderName}
            style={{ ...cardEntryStyles.inputField }}
          />
        </View>
        <View style={{ ...cardEntryStyles.inputContainer }}>
          <Text style={{ ...cardEntryStyles.inputLabel }}>CARD NUMBER</Text>
          <TextInput
            mode="outlined"
            onChangeText={(text) =>
              setCardState((prev) => ({ ...prev, cardNumber: text }))
            }
            keyboardType="numeric"
            value={cardState.cardNumber}
            style={{ ...cardEntryStyles.inputField }}
          />
        </View>
        <View style={{ ...cardEntryStyles.inputContainer }}>
          <Text style={{ ...cardEntryStyles.inputLabel }}>EXPIRATION DATE</Text>
          <TextInput
            mode="outlined"
            onChangeText={(text) =>
              setCardState((prev) => ({ ...prev, cardExp: text }))
            }
            value={cardState.cardExp}
            style={{ ...cardEntryStyles.inputField }}
          />
        </View>
        <View style={{ ...cardEntryStyles.inputContainer }}>
          <Text style={{ ...cardEntryStyles.inputLabel }}>CCV</Text>
          <TextInput
            mode="outlined"
            onChangeText={(text) =>
              setCardState((prev) => ({ ...prev, cardCCV: text }))
            }
            value={cardState.cardCCV}
            style={{ ...cardEntryStyles.inputField }}
          />
        </View>
        <TouchableOpacity onPress={() => {}}>
          <View style={cardEntryStyles.submitButton}>
            <Text
              style={{
                ...cardEntryStyles.submitButtonText
              }}
            >
              Checkout!
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <View />
    </View>
  );
};
export default NewCardEntry;
