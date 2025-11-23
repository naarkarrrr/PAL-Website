
'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, FileText, Users, Handshake, Heart, ShieldAlert, LogOut, Gift } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const formCollections = [
  { name: 'membership_applications', title: 'Membership Applications', icon: Users },
  { name: 'advocate_applications', title: 'Advocate Applications', icon: ShieldAlert },
  { name: 'collaboration_proposals', title: 'Collaboration Proposals', icon: Handshake },
  { name: 'sponsor_inquiries', title: 'Sponsor Inquiries', icon: Heart },
  { name: 'ambulance_requests', title: 'Ambulance Requests', icon: FileText },
  { name: 'contact_messages', title: 'Contact Messages', icon: FileText },
  { name: 'donations', title: 'Donations', icon: Gift },
  { name: 'volunteers', title: 'Volunteers', icon: Users },
];

export default function AdminDashboardPage() {
  const { signOut } = useAuth();
  return (
    <div className="min-h-screen bg-muted/40">
        <header className="bg-background border-b sticky top-0 z-30">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <h1 className="text-xl font-bold font-headline">Admin Dashboard</h1>
                 <Button variant="ghost" onClick={signOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                </Button>
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
                  <Link href={`/admin/submissions/${collection.name}`}>
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
