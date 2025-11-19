import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('firebaseAuthToken'); 
  const { pathname } = request.nextUrl;

  // If user is not authenticated and tries to access dashboard, redirect to login
  if (!token && pathname.startsWith('/admin/dashboard')) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  // If user is authenticated and tries to access login, redirect to dashboard
  if (token && pathname.startsWith('/admin/login')) {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/login', '/admin/dashboard/:path*'],
};
