import { Formik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  Button,
  Colors,
  Dialog,
  IconButton,
  Paragraph,
  Portal,
  Provider,
  Text,
  TextInput
} from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { IUser } from '../../../models/user';
import NavigationService from '../../../navigation/NavigationService';
import { AppState } from '../../../store/configureStore';
import { SignUpSchema } from '../../../utils/validations';
import authManager from '../../../services/auth/authManager';
import styles from '../styles';
import { setUserData } from '../../../actions/authActions';

interface RegisterScreenProps {}

const RegisterScreen: React.FC<RegisterScreenProps> = () => {
  const user = useSelector((state: AppState) => state.default as IUser);
  const dispatch = useDispatch();
  const [isError, setIsError] = React.useState(false);
  const showModal = () => setIsError(true);
  const hideModal = () => setIsError(false);
  return (
    <Provider>
      <Portal>
        <Dialog visible={isError} onDismiss={hideModal}>
          <Dialog.Title>Error!!</Dialog.Title>
          <Dialog.Content>
            <Paragraph>OOPS!!! SOmething went wrong please try again</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideModal}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <View style={styles.container}>
        <View style={styles.topHeader}>
          <IconButton
            icon="close"
            style={styles.topIcon}
            color={Colors.pink300}
            size={25}
            onPress={() => {
              NavigationService.goBack();
            }}
          />
          <Text style={styles.Title}>Register</Text>
          <IconButton
            style={styles.topIcon}
            icon="login"
            // icon="heart"
            color={Colors.pink300}
            size={25}
            onPress={() => console.log('add to favs')}
          />
        </View>
        <KeyboardAwareScrollView
          style={styles.InputsWrapper}
          keyboardShouldPersistTaps="always"
        >
          <Formik
            initialValues={{ email: '', password: '', confirmPassword: '' }}
            validationSchema={SignUpSchema}
            onSubmit={async (values) => {
              if (values.password === values.confirmPassword) {
                try {
                  const createdUser = await authManager.createAccountWithEmailAndPassword(
                    values.email,
                    values.password,
                    user
                  );
                  if (createdUser.uid) {
                    dispatch(setUserData(createdUser));
                    console.log('current user', user);
                    console.log('created user', createdUser);
                    NavigationService.navigate('Home');
                  }
                } catch (error) {
                  // TODO: show more descriptive errors
                  showModal();
                  console.log(error);
                }
              }
            }}
          >
            {(formikProps) => {
              const submitDisabled =
                !formikProps.dirty ||
                !formikProps.isValid ||
                formikProps.isSubmitting;
              return (
                <>
                  {formikProps.errors.email && (
                    <Text style={styles.ErrorText}>
                      {formikProps.errors.email}
                    </Text>
                  )}
                  <TextInput
                    mode="outlined"
                    style={styles.InputContainer}
                    placeholder="Email"
                    onChangeText={formikProps.handleChange('email')}
                    value={formikProps.values.email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                  />
                  {formikProps.errors.password && (
                    <Text style={styles.ErrorText}>
                      {formikProps.errors.password}
                    </Text>
                  )}
                  <TextInput
                    mode="outlined"
                    style={styles.InputContainer}
                    secureTextEntry
                    placeholder="Password"
                    onChangeText={formikProps.handleChange('password')}
                    value={formikProps.values.password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                  />
                  {formikProps.errors.confirmPassword && (
                    <Text style={styles.ErrorText}>
                      {formikProps.errors.confirmPassword}
                    </Text>
                  )}
                  <TextInput
                    mode="outlined"
                    style={styles.InputContainer}
                    secureTextEntry
                    placeholder="Confirm Password"
                    onChangeText={formikProps.handleChange('confirmPassword')}
                    value={formikProps.values.confirmPassword}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                  />
                  <Button
                    disabled={submitDisabled}
                    icon="login"
                    mode="contained"
                    style={{
                      ...styles.LoginContainer,
                      backgroundColor: !submitDisabled
                        ? Colors.orange900
                        : Colors.grey500
                    }}
                    onPress={formikProps.handleSubmit}
                  >
                    Register
                  </Button>
                  <Text style={styles.OrTextStyle}>OR</Text>
                  <Button
                    icon="facebook"
                    mode="contained"
                    style={{
                      ...styles.LoginContainer,
                      backgroundColor: Colors.orange900
                    }}
                    onPress={async () => {
                      try {
                        const loggedInUser = await authManager.continueWithFacebook(
                          user
                        );
                        // @ts-ignore
                        if (loggedInUser.uid) {
                          // @ts-ignore
                          dispatch(setUserData(loggedInUser));
                          NavigationService.navigate('Home');
                        }
                      } catch (error) {
                        showModal();
                        console.log(error);
                      }
                    }}
                  >
                    Continue with Facebook
                  </Button>
                  <Button
                    icon="google-plus"
                    mode="contained"
                    style={{
                      ...styles.LoginContainer,
                      backgroundColor: Colors.orange900
                    }}
                    onPress={async () => {
                      try {
                        const loggedInUser = await authManager.continueWithGoogle(
                          user
                        );
                        // @ts-ignore
                        if (loggedInUser.uid) {
                          // @ts-ignore
                          dispatch(setUserData(loggedInUser));
                          NavigationService.navigate('Home');
                        }
                      } catch (error) {
                        showModal();
                        console.log(error);
                      }
                    }}
                  >
                    Continue with Google
                  </Button>
                  <Button
                    mode="text"
                    style={styles.Forgot}
                    labelStyle={styles.LabelStyle}
                    onPress={() => {
                      NavigationService.navigate('Login');
                    }}
                  >
                    HAVE AN ACCOUNT ALREADY? lOGIN
                  </Button>
                </>
              );
            }}
          </Formik>
        </KeyboardAwareScrollView>
      </View>
    </Provider>
  );
};
export default RegisterScreen;
