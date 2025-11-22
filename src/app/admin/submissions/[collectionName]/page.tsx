
'use client';
import { useParams, useRouter } from 'next/navigation';
import { useRealtimeCollection } from '@/hooks/use-firestore';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { format } from 'date-fns';

type Submission = {
  id: string;
  createdAt?: { seconds: number; nanoseconds: number };
  [key: string]: any;
};

export default function SubmissionsListPage() {
  const params = useParams();
  const router = useRouter();
  const collectionName = Array.isArray(params.collectionName)
    ? params.collectionName[0]
    : params.collectionName;
    
  const { data, isLoading, error } = useRealtimeCollection(collectionName);

  const formatTitle = (name: string) => {
    return name
      .replace(/_/g, ' ')
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase());
  };

  const handleRowClick = (id: string) => {
    router.push(`/admin/submissions/${collectionName}/${id}`);
  };

  const formatValue = (value: any): string => {
    if (!value) return 'N/A';
    if (value.toDate && typeof value.toDate === 'function') { // Firebase Timestamp
      return format(value.toDate(), 'PPp');
    }
    if (value instanceof Date) {
        return format(value, 'PPp');
    }
    if (Array.isArray(value)) {
        return value.join(', ');
    }
     if (typeof value === 'object') {
        return JSON.stringify(value, null, 2);
    }
    return String(value);
  };
  
  const headers = ['Name', 'Email', 'Phone', 'Submitted On'];
  const fieldMapping: {[key: string]: string} = {
    'Name': 'fullName' || 'reporterName' || 'name' || 'companyName',
    'Email': 'email',
    'Phone': 'phone' || 'phoneNumber',
    'Submitted On': 'createdAt',
  }


  if (isLoading) {
    return (
        <div className="container mx-auto px-4 py-8">
            <Skeleton className="h-8 w-1/2 mb-4" />
            <Skeleton className="h-10 w-32 mb-8" />
            <Card>
              <Skeleton className="h-[400px] w-full" />
            </Card>
        </div>
    )
  }

  if (error) {
    return (
        <div className="container mx-auto px-4 py-8">
            <Alert variant="destructive">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Error Loading Data</AlertTitle>
                <AlertDescription>
                    Failed to load submissions for "{formatTitle(collectionName)}". This could be due to a network issue or missing Firestore security rules.
                    <p className='mt-2'>Details: {error.message}</p>
                </AlertDescription>
            </Alert>
        </div>
    )
  }

  return (
    <div className="min-h-screen bg-muted/40">
        <header className="bg-background border-b sticky top-0 z-30">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <h1 className="text-xl font-bold font-headline">{formatTitle(collectionName)}</h1>
                <Button asChild variant="outline">
                    <Link href="/admin/dashboard">Back to Dashboard</Link>
                </Button>
            </div>
        </header>
        <main className="container mx-auto px-4 py-8">
            <Card>
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Submitted On</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {(data as Submission[])?.map((item) => (
                        <TableRow key={item.id} onClick={() => handleRowClick(item.id)} className="cursor-pointer">
                            <TableCell>{item.fullName || item.name || item.reporterName || item.companyName || 'N/A'}</TableCell>
                            <TableCell>{item.email || 'N/A'}</TableCell>
                            <TableCell>{item.phone || item.phoneNumber || 'N/A'}</TableCell>
                            <TableCell>{formatValue(item.createdAt)}</TableCell>
                            <TableCell className="text-right">
                                <Button variant="ghost" size="sm">
                                    View <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                {(!data || data.length === 0) && (
                    <div className="text-center p-8">
                        <p className="text-muted-foreground">No submissions found for this category yet.</p>
                    </div>
                )}
            </Card>
        </main>
    </div>
  );
}
