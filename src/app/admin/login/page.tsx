'use client';

import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PawPrint } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LoginPage() {
  const { user, signIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/admin/dashboard');
    }
  }, [user, router]);

  const handleSignIn = async () => {
    try {
      await signIn();
    } catch (error) {
      console.error('Sign-in failed', error);
      // You could show a toast notification here
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted/40">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <PawPrint className="mx-auto h-12 w-12 text-primary mb-4" />
          <CardTitle className="text-2xl font-bold font-headline">Admin Panel</CardTitle>
          <CardDescription>Sign in to manage the PAL Foundation dashboard.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={handleSignIn} className="w-full">
            Sign In
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
