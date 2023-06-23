import { auth, googleAuthProvider } from '../firebase/firebase';
googleAuthProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);