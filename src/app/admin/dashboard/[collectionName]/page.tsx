'use client';
import { useParams } from 'next/navigation';
import { useCollectionData } from '@/hooks/use-firestore';
import { SubmissionsTable } from '@/components/admin/SubmissionsTable';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function SubmissionsPage() {
  const params = useParams();
  const collectionName = Array.isArray(params.collectionName)
    ? params.collectionName[0]
    : params.collectionName;
    
  const { data, isLoading, error } = useCollectionData(collectionName);

  const formatTitle = (name: string) => {
    return name
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase());
  };

  if (isLoading) {
    return (
        <div className="container mx-auto px-4 py-8">
            <Skeleton className="h-8 w-1/4 mb-4" />
            <Skeleton className="h-[400px] w-full" />
        </div>
    )
  }

  if (error) {
    return (
        <div className="container mx-auto px-4 py-8">
            <Alert variant="destructive">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                    Failed to load submissions: {error.message}
                </AlertDescription>
            </Alert>
        </div>
    )
  }

  return (
    <div className="min-h-screen bg-muted/40">
        <header className="bg-background border-b sticky top-0 z-30">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <h1 className="text-xl font-bold font-headline">{formatTitle(collectionName)} Submissions</h1>
                <Button asChild variant="outline">
                    <Link href="/admin/dashboard">Back to Dashboard</Link>
                </Button>
            </div>
        </header>
        <main className="container mx-auto px-4 py-8">
            <SubmissionsTable data={data || []} />
        </main>
    </div>
  );
}
