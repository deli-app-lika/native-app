// TODO come up with better name
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import Styles from './styles';

interface NumberTogglerProps {}
interface ToggleButtonProps {
  isMinus: boolean;
  onPress: (isMinus: boolean) => void;
}

const ToggleButton = ({ isMinus, onPress }: ToggleButtonProps) => {
  const icon = () => {
    // const { minusIcon, plusIcon, buttonTextStyle, minus, plus } = this.props;

    return (
      <Text
        style={[
          Styles.buttonText,
          {
            color: '#333'
          }
        ]}
      >
        {isMinus ? '-' : '+'}
      </Text>
    );
  };
  return (
    <TouchableOpacity
      style={[
        Styles.touchable,
        {
          opacity: 1,
          borderColor: '#333',
          borderWidth: 2
        }
      ]}
      onPress={() => onPress(isMinus)}
    >
      {icon()}
    </TouchableOpacity>
  );
};

const NumberToggler: React.FC<NumberTogglerProps> = () => {
  // TODO update to take count value as props
  const [count, setCount] = useState(1);
  const minCount = 0;
  // TODO Should max count be a prop value that is the total inventory number for this item?
  const maxCount = 10;

  const onPress = (isMinus: boolean) => {
    let newCount = 0;
    if (isMinus) {
      newCount = count - 1 <= minCount ? minCount : count - 1;
    } else {
      newCount = count + 1 >= maxCount ? maxCount : count - 1;
    }
    setCount(newCount);
  };

  return (
    <View style={Styles.container}>
      <ToggleButton isMinus onPress={onPress} />

      <View style={Styles.count}>
        <Text style={[Styles.countText, { color: '#333' }]}>{count}</Text>
      </View>

      <ToggleButton isMinus={false} onPress={onPress} />
    </View>
  );
};
export default NumberToggler;
