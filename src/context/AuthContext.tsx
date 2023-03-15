import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
} from 'firebase/auth';
import { auth } from '../components/firebase';

export type ContextProps = {
  currentUser: any;
  setCurrentUser: any;
  loginWithGoogle: () => void;
  logout: () => void;
};

// const initialState : ContextProps = {
//   currentUser: false,
//   setCurrentUser: null,
//   loginWithGoogle: () => void
// }

const AuthContext = createContext<ContextProps | null>(null);

export const AuthProvider = ({ children }: { children: ReactElement }) => {
  const [currentUser, setCurrentUser] = useState<any>();
  const [loading, setLoading] = useState(true)

  //   sign-in with google
  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  // sign out
  const logout = () => signOut(auth);

  const providerValue: ContextProps = {
    currentUser,
    setCurrentUser,
    loginWithGoogle,
    logout,
  };

  // set current user
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false)
    });

    return unsubcribe;
  }, []);

  return (
    <AuthContext.Provider value={providerValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
