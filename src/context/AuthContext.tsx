'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { auth } from "@/firebase";
import { useRouter, usePathname } from 'next/navigation';
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
  const router = useRouter();
  const pathname = usePathname();

  // Track auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Redirect if logged in but on login page
  useEffect(() => {
    if (!loading && user && pathname.startsWith('/admin/login')) {
      router.replace('/admin/dashboard');
    }
  }, [user, loading, pathname, router]);

  // Handle Sign-in
  const signIn = async ({ email, password }: LoginCredentials) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace("/admin/dashboard");
    } catch (error) {
      console.error("Login Failed:", error);
      throw error;
    }
  };

  // Handle Sign-out
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
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
