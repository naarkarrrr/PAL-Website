'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PawPrint } from 'lucide-react';
import Link from 'next/link';

export default function AdminRootPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-muted/40">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <PawPrint className="mx-auto h-12 w-12 text-primary mb-4" />
          <CardTitle className="text-2xl font-bold font-headline">Admin Panel</CardTitle>
          <CardDescription>Please sign in to access the dashboard.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild className="w-full">
            <Link href="/admin/login">
              Proceed to Sign In
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
