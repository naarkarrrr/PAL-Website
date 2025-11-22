
'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { initializeFirebase } from '@/firebase';
import { useRouter } from 'next/navigation';
import type { LoginCredentials } from '@/lib/types';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (credentials: LoginCredentials) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { auth } = initializeFirebase();
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      if (user) {
        // If user is detected, ensure they are on the dashboard
        if (window.location.pathname.startsWith('/admin/login')) {
           router.push('/admin/dashboard');
        }
      }
    });

    return () => unsubscribe();
  }, [auth, router]);

  const signIn = async ({ email, password }: LoginCredentials) => {
    await signInWithEmailAndPassword(auth, email, password);
    // Directly navigate to dashboard on successful sign-in
    router.push('/admin/dashboard');
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push('/admin/login');
    } catch (error) {
      console.error('Sign-out failed', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut: handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
