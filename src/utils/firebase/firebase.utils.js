import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA0Z1axsF4ZAmGR3FExNKh3_HOSVkuvsqw',
  authDomain: 'comet-co-db.firebaseapp.com',
  projectId: 'comet-co-db',
  storageBucket: 'comet-co-db.appspot.com',
  messagingSenderId: '43773240311',
  appId: '1:43773240311:web:968e2878f71c1c4fc0c4f2',
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({});

export const auth = getAuth();

export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, googleProvider);
};

export const signInWithGoogleRedirect = () => {
  return signInWithRedirect(auth, googleProvider);
};

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
