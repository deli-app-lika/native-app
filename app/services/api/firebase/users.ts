import firestore from '@react-native-firebase/firestore';
// Add anonymous user to the user table in firestore
export const addAnonymousUser = (user: any) => {
  return firestore().collection('Users').doc(user.user.uid).set({
    uid: user.user.uid,
    isAnonymous: user.user.isAnonymous,
  });
};
