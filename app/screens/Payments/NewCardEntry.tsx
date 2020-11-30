import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import stripe from 'tipsi-stripe';
import { Text, TextInput } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import cardEntryStyles from './cardEntryStyles';

interface NewCardEntryProps {}

stripe.setOptions({
  publishableKey:
    'pk_test_51HsfxdFOGGE0KkkiBf76kJx35CjBu8uRXkmRvM71rIGu2D01zTbSU14K5J1OySuYXmZFtD2Ghn4ycn3hhQObAiQj004cvbd1KC'
});

const NewCardEntry: React.FC<NewCardEntryProps> = () => {
  const [cardState, setCardState] = useState({
    cardHolderName: '',
    cardNumber: '',
    cardExp: '',
    cardCCV: ''
  });

  const [stripeToken, setStripeToken] = useState('');

  const getToken = async () => {
    console.log('getting token');
    const token = await stripe.paymentRequestWithCardForm({
      // Only iOS support this options

      smsAutofillDisabled: true,

      requiredBillingAddressFields: 'full',

      prefilledInformation: {
        billingAddress: {
          name: 'Sayali Sonawane',

          line1: 'Canary Place',

          line2: '3',

          city: 'Macon',

          state: 'Georgia',

          country: 'Estonia',

          postalCode: '31217',

          email: 'sayali.sonawane@mindbowser.com'
        }
      }
    });
    setStripeToken(token);
  };

  const firebaseUrl =
    'https://us-central1-lika-23ab9.cloudfunctions.net/completePaymentWithStripe';

  const doPayment = async () => {
    console.log('charging');
    fetch(firebaseUrl, {
      method: 'POST',

      headers: {
        Accept: 'application/json',

        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amount: 100,

        currency: 'usd',

        stripeToken
      })
    })
      .then((response) => response)
      .then((responseJson) => {
        console.log('responseJson', responseJson);
      })
      .catch((error) => {
        console.log('Failed', error);
      });
  };

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
        <TouchableOpacity
          onPress={async () => {
            console.log('click pay');
            await getToken();
            await doPayment();
          }}
        >
          <View style={cardEntryStyles.submitButton}>
            <Text
              style={{
                ...cardEntryStyles.submitButtonText
              }}
            >
              Add Card
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <View />
    </View>
  );
};
export default NewCardEntry;
