import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import styles from './styles';

interface AccountProps {}

const Account: React.FC<AccountProps> = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phone, setPhone] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Account Details</Text>
      <TextInput
        style={styles.TextBox}
        mode="outlined"
        label="Full Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.TextBox}
        mode="outlined"
        label="Email Address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.TextBox}
        mode="outlined"
        label="Birthday"
        value={birthday}
        onChangeText={(text) => setBirthday(text)}
      />
      <TextInput
        style={styles.TextBox}
        mode="outlined"
        label="Phone"
        value={phone}
        onChangeText={(text) => setPhone(text)}
      />
      <View style={styles.Password}>
        <Text style={styles.PwdTitle}>Password</Text>
      </View>
      <TextInput
        disabled
        style={styles.PasswordTextInput}
        mode="outlined"
        // label="Phone"
        value="********"
        onChangeText={(text) => setPhone(text)}
      />
    </View>
  );
};
export default Account;
