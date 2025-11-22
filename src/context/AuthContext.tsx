'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { auth } from "@/firebase";
import { useRouter, usePathname } from 'next/navigation';
import type { LoginCredentials } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

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
  const { toast } = useToast();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // If loading is finished
    if (!loading) {
      const isAuthRoute = pathname.startsWith('/admin/login');
      const isAdminRoute = pathname.startsWith('/admin/dashboard');

      // If user is not logged in and tries to access admin dashboard
      if (!user && isAdminRoute) {
        router.replace('/admin/login');
      }
      
      // If user is logged in and on the login page
      if (user && isAuthRoute) {
        router.replace('/admin/dashboard');
      }
    }
  }, [user, loading, pathname, router]);

  const signIn = async ({ email, password }: LoginCredentials) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // The useEffect above will handle the redirect to the dashboard.
    } catch (error: any) {
      console.error("Login Failed:", error);
      // Re-throw the error to be caught by the calling component (LoginForm)
      throw error;
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // The useEffect will handle redirecting to login page.
    } catch (error) {
      console.error('Sign-out failed', error);
      toast({
        variant: 'destructive',
        title: 'Sign-out Failed',
        description: 'An unexpected error occurred during sign-out.',
      });
    }
  };

  const value = { user, loading, signIn, signOut: handleSignOut };

  return (
    <AuthContext.Provider value={value}>
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
