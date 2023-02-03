import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA0Z1axsF4ZAmGR3FExNKh3_HOSVkuvsqw',
  authDomain: 'comet-co-db.firebaseapp.com',
  projectId: 'comet-co-db',
  storageBucket: 'comet-co-db.appspot.com',
  messagingSenderId: '43773240311',
  appId: '1:43773240311:web:968e2878f71c1c4fc0c4f2',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({});

export const auth = getAuth();

export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, provider);
};
