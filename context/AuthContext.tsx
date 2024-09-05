import { useContext, createContext, type PropsWithChildren } from 'react';
import { useStorageState } from '~/hooks/useStorageState';

const AuthContext = createContext<{
  signIn: (refreshToken: string) => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}>({
  signIn: (refreshToken: string) => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('refreshToken');
  
  return (
    <AuthContext.Provider
      value={{
        signIn: (refreshToken: string) => {
          setSession(refreshToken);
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
