'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, User, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter, usePathname } from 'next/navigation';
import { initializeFirebase } from '@/firebase';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, pass: string) => Promise<any>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const { auth } = initializeFirebase();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      
      const isAdminRoute = pathname.startsWith('/admin/dashboard');

      if (user && pathname.startsWith('/admin/login')) {
        router.push('/admin/dashboard');
      } else if (!user && isAdminRoute) {
        router.push('/admin/login');
      }
    });

    return () => unsubscribe();
  }, [auth, pathname, router]);

  const login = async (email: string, pass: string) => {
    try {
        return await signInWithEmailAndPassword(auth, email, pass);
    } catch (error: any) {
        // If the user does not exist, create a new one.
        if (error.code === 'auth/user-not-found') {
            try {
                return await createUserWithEmailAndPassword(auth, email, pass);
            } catch (createError) {
                 throw createError;
            }
        }
        throw error;
    }
  };

  const logout = async () => {
    await signOut(auth);
    router.push('/admin/login');
  };

  const value = { user, loading, login, logout };

  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
