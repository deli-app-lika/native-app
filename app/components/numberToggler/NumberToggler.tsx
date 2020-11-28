// TODO come up with better name
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import { ICartItem } from '../../models/cartItem';
import Styles from './styles';

interface NumberTogglerProps {
  handleItemQty: (cItem: ICartItem, addQty: number) => void;
  cartItem: ICartItem;
}
interface ToggleButtonProps {
  isMinus: boolean;
  onPress: (isMinus: boolean) => void;
}

const ToggleButton = ({ isMinus, onPress }: ToggleButtonProps) => {
  const icon = () => {
    return <Text style={Styles.buttonText}>{isMinus ? '-' : '+'}</Text>;
  };
  return (
    <TouchableOpacity
      style={[Styles.touchable]}
      onPress={() => onPress(isMinus)}
    >
      {icon()}
    </TouchableOpacity>
  );
};

const NumberToggler: React.FC<NumberTogglerProps> = ({
  handleItemQty,
  cartItem
}) => {
  const [count, setCount] = useState(cartItem.purchaseQuantity || 1);
  const minCount = 0;
  const maxCount = cartItem.itemQuantity || 10;

  const onPress = (isMinus: boolean) => {
    let newCount = 0;
    if (isMinus) {
      if (count - 1 <= minCount) {
        newCount = minCount;
      } else {
        newCount = count - 1;
        handleItemQty(cartItem, -1);
      }
    } else if (count + 1 >= maxCount) {
      newCount = maxCount;
    } else {
      newCount = count + 1;
      handleItemQty(cartItem, 1);
    }
    setCount(newCount);
  };

  return (
    <View style={Styles.container}>
      <ToggleButton isMinus onPress={onPress} />
      <View style={Styles.count}>
        <Text style={Styles.countText}>{count}</Text>
      </View>
      <ToggleButton isMinus={false} onPress={onPress} />
    </View>
  );
};
export default NumberToggler;
