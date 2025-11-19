'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, FileText, Users, Handshake, Heart, ShieldAlert } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const formCollections = [
  { name: 'membershipApplications', title: 'Membership Applications', icon: Users },
  { name: 'advocates', title: 'Advocate Applications', icon: ShieldAlert },
  { name: 'collaborations', title: 'Collaboration Proposals', icon: Handshake },
  { name: 'sponsors', title: 'Sponsor Inquiries', icon: Heart },
  { name: 'ambulanceRequests', title: 'Ambulance Requests', icon: FileText },
  { name: 'contacts', title: 'Contact Form', icon: FileText },
];

export default function AdminDashboardPage() {
    const { logout } = useAuth();
  return (
    <div className="min-h-screen bg-muted/40">
        <header className="bg-background border-b sticky top-0 z-30">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <h1 className="text-xl font-bold font-headline">Admin Dashboard</h1>
                <Button variant="outline" onClick={logout}>Logout</Button>
            </div>
        </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {formCollections.map((collection) => (
            <Card key={collection.name} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-medium">{collection.title}</CardTitle>
                <collection.icon className="h-6 w-6 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="px-0">
                  <Link href={`/admin/dashboard/${collection.name}`}>
                    View Submissions <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
