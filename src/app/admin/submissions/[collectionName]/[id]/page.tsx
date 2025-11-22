
'use client';
import { useParams } from 'next/navigation';
import { useDoc } from '@/hooks/use-firestore';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal, Download, CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { format } from 'date-fns';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@/firebase';
import { useToast } from '@/hooks/use-toast';

export default function SubmissionDetailPage() {
  const params = useParams();
  const { toast } = useToast();
  const collectionName = Array.isArray(params.collectionName) ? params.collectionName[0] : params.collectionName;
  const docId = Array.isArray(params.id) ? params.id[0] : params.id;

  const { data: submission, isLoading, error } = useDoc(`${collectionName}/${docId}`);

  const formatTitle = (name: string) => {
    if (!name) return "Submission Details";
    return name.replace(/_/g, ' ').replace(/^./, (str) => str.toUpperCase());
  };

  const formatKey = (key: string) => {
    return key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
  };

  const handleMarkAsReviewed = async () => {
    if (!submission) return;
    const docRef = doc(db, collectionName, docId);
    try {
      await updateDoc(docRef, {
        isReviewed: true,
      });
      toast({
        title: "Success",
        description: "Submission marked as reviewed.",
      });
    } catch (err) {
      toast({
        variant: 'destructive',
        title: "Error",
        description: "Could not update the submission.",
      });
      console.error(err);
    }
  };

  const handleDownloadPdf = () => {
    // In a real app, this would trigger a server-side function
    // to generate a PDF from the submission data.
    toast({
      title: "PDF Download",
      description: "PDF generation is not yet implemented.",
    });
  };

  const formatValue = (value: any): string => {
    if (!value) return 'N/A';
    if (value.toDate && typeof value.toDate === 'function') { // Firebase Timestamp
      return format(value.toDate(), 'PPP p');
    }
    if (value instanceof Date) {
        return format(value, 'PPP p');
    }
    if (Array.isArray(value)) {
        return value.join(', ');
    }
    if (typeof value === 'object') {
        return JSON.stringify(value, null, 2);
    }
    return String(value);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-8 w-1/4 mb-4" />
        <Card><Skeleton className="h-96 w-full" /></Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Alert variant="destructive">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Failed to load submission: {error.message}
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  if (!submission) {
    return (
        <div className="container mx-auto px-4 py-8 text-center">
            <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>Not Found</AlertTitle>
                <AlertDescription>
                    The requested submission could not be found.
                </AlertDescription>
            </Alert>
            <Button asChild variant="link" className="mt-4">
                <Link href={`/admin/submissions/${collectionName}`}>Back to List</Link>
            </Button>
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/40">
        <header className="bg-background border-b sticky top-0 z-30">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Button asChild variant="outline">
                    <Link href={`/admin/submissions/${collectionName}`}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to List
                    </Link>
                </Button>
                <h1 className="text-xl font-bold font-headline">{formatTitle(collectionName)}</h1>
                 <div className="flex items-center gap-2">
                    <Button variant="outline" onClick={handleDownloadPdf}><Download className="mr-2 h-4 w-4"/> Download as PDF</Button>
                    <Button onClick={handleMarkAsReviewed} disabled={submission.isReviewed}>
                        <CheckCircle className="mr-2 h-4 w-4"/>
                        {submission.isReviewed ? 'Reviewed' : 'Mark as Reviewed'}
                    </Button>
                </div>
            </div>
        </header>

        <main className="container mx-auto px-4 py-8">
            <Card>
                <CardHeader>
                    <CardTitle>Submission Details</CardTitle>
                </CardHeader>
                <CardContent>
                    <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        {Object.entries(submission).map(([key, value]) => (
                            <div key={key} className="border-b pb-2">
                                <dt className="text-sm font-medium text-muted-foreground">{formatKey(key)}</dt>
                                <dd className="mt-1 text-foreground whitespace-pre-wrap">{formatValue(value)}</dd>
                            </div>
                        ))}
                    </dl>
                </CardContent>
            </Card>
        </main>
    </div>
  );
}
