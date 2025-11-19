
'use client';

import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Terminal, Loader2 } from 'lucide-react';

export function LoginForm() {
  const { login } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm();

  async function onSubmit() {
    setIsLoading(true);
    setError(null);
    try {
      await login();
      // Redirect is handled by the AuthProvider
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
        setIsLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      {error && (
        <Alert variant="destructive">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Login Failed</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Sign In as Guest
          </Button>
        </form>
    </div>
  );
}
