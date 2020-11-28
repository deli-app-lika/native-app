import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Button, Colors, IconButton, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { updateItemQtyCart } from '../../actions/authActions';
import NumberToggler from '../../components/numberToggler/NumberToggler';
import { ICartItem } from '../../models/cartItem';
import { ICart } from '../../models/user';
import NavigationService from '../../navigation/NavigationService';
import { AppState } from '../../store/configureStore';
import styles from './styles';

// interface AccountProps {}

const Cart = ({ route }: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { params } = route;
  const dispatch = useDispatch();
  // const [initializing, setInitializing] = useState(true);
  const cart = useSelector(
    (state: AppState) =>
      state.default.cart as {
        cart: ICartItem[];
        cost: ICart;
      }
  );
  const userLoggedIn = useSelector(
    (state: AppState) => state.default.isLoggedIn as boolean
  );
  console.log('cost', cart.cost);
  const handleItemQty = (cItem: ICartItem, addQty: number) => {
    dispatch(updateItemQtyCart({ cartItem: cItem, addQty }));
  };

  const renderCartItems = () => {
    return cart.cart.map((cartItem: ICartItem) => {
      return (
        <View style={styles.item} key={cartItem.itemId}>
          <View style={styles.itemNameImage}>
            <FastImage
              style={styles.itemImage}
              source={{
                uri: cartItem.image,
                priority: FastImage.priority.normal
              }}
            />
            <Text style={styles.itemText}>{cartItem.ingredient}</Text>
          </View>
          <View style={styles.numberToggler}>
            <NumberToggler handleItemQty={handleItemQty} cartItem={cartItem} />
          </View>
          <View style={styles.itemPriceView}>
            <Text style={styles.itemPrice}>
              ${/* @ts-ignore */}
              {Number(cartItem.price * cartItem.purchaseQuantity).toFixed(2)}
            </Text>
          </View>
        </View>
      );
    });
  };

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
            <Text style={styles.cartSubTitle}>({cart.cart.length} Items)</Text>
          </View>
          {cart.cart.length > 0 ? (
            <ScrollView>{renderCartItems()}</ScrollView>
          ) : (
            <Text>No items in cart</Text>
          )}
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
              <Text style={styles.summaryPriceItemValue}>
                ${Number(cart.cost.subTotal).toFixed(2)}
              </Text>
            </View>
            <View style={styles.summaryPriceLine}>
              <Text style={styles.summaryPriceItemTitle}>Estimated Tax:</Text>
              <Text style={styles.summaryPriceItemValue}>
                ${Number(cart.cost.estimatedTax).toFixed(2)}
              </Text>
            </View>
            <View style={styles.summaryPriceLine}>
              <Text style={styles.summaryPriceItemTitle}>Delivery Fee:</Text>
              {/* TODO get this value from shop? */}
              <Text style={styles.summaryPriceItemValue}>
                ${Number(cart.cost.deliveryFee).toFixed(2)}
              </Text>
            </View>
            <View style={styles.summaryPriceLine}>
              <Text style={styles.summaryPriceTotal}>Estimated Total:</Text>
              <Text style={styles.summaryPriceTotalValue}>
                ${Number(cart.cost.estimatedTotal).toFixed(2)}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={[styles.sectionContainer, { flex: 1, justifyContent: 'center' }]}
      >
        {userLoggedIn ? (
          <View style={styles.accountView}>
            <Button
              mode="contained"
              color={Colors.orange800}
              onPress={() => {
                console.log('press create account');
              }}
            >
              <Text style={{ color: 'white' }}>Create Account</Text>
            </Button>
            <Text style={{ marginTop: 10 }}>Already have an account?</Text>
            <TouchableOpacity onPress={() => console.log('press sign in')}>
              <Text style={styles.accountSignin}>Sign In</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.accountView}>
            <Button
              mode="contained"
              color={Colors.orange800}
              onPress={() => {
                console.log('Checkout');
              }}
            >
              <Text style={{ color: 'white' }}>Checkout</Text>
            </Button>
          </View>
        )}
      </View>
    </View>
  );
};
export default Cart;
