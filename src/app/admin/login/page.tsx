
import { LoginForm } from '@/components/auth/LoginForm';
import { Logo } from '@/components/shared/Logo';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
            <div className="flex justify-center mb-4">
                <Logo />
            </div>
          <h1 className="text-3xl font-bold font-headline">Admin Panel</h1>
          <p className="text-muted-foreground">Sign in to continue</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
