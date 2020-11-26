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
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleSignin } from '@react-native-community/google-signin';
import NavigationService from '../../../navigation/NavigationService';
import styles from '../styles';
import { LoginSchema } from '../../../utils/validations';
import { AppState } from '../../../store/configureStore';
import { IUser } from '../../../models/user';
import authManager from '../../../services/auth/authManager';
import { setUserData } from '../../../actions/authActions';

interface LoginScreenProps {}

GoogleSignin.configure({
  webClientId:
    '778808264448-po1f7ku96gtber8aoh8b3ucohb5euusf.apps.googleusercontent.com'
});

const LoginScreen: React.FC<LoginScreenProps> = () => {
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
            <Paragraph>Incorrect credentials please try again</Paragraph>
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
          <Text style={styles.Title}>Login</Text>
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
            initialValues={{ email: '', password: '' }}
            validationSchema={LoginSchema}
            onSubmit={async (values) => {
              try {
                const loggedInUser = await authManager.loginWithEmailAndPassword(
                  values.email,
                  values.password,
                  user
                );
                // @ts-ignore
                if (loggedInUser.uid) {
                  // @ts-ignore
                  dispatch(setUserData(loggedInUser));
                  console.log(loggedInUser);
                  NavigationService.goBack();
                }
              } catch (error) {
                showModal();
                console.log(error);
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
                    Login
                  </Button>
                  <Button
                    mode="text"
                    style={styles.Forgot}
                    labelStyle={styles.LabelStyle}
                    // onPress={onForgot}
                  >
                    Forgot Password
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
                      NavigationService.navigate('Register');
                    }}
                  >
                    NO ACCOUNT? SING UP
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

export default LoginScreen;
