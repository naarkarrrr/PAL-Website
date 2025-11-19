import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get('firebase-auth-token');
  const { pathname } = request.nextUrl;

  // If the user is trying to access the admin dashboard without an auth token,
  // redirect them to the login page.
  if (pathname.startsWith('/admin/dashboard') && !authToken) {
    const loginUrl = new URL('/admin/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  // If the user is logged in and tries to access the login page,
  // redirect them to the dashboard.
  if (pathname === '/admin/login' && authToken) {
    const dashboardUrl = new URL('/admin/dashboard', request.url);
    return NextResponse.redirect(dashboardUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/login', '/admin/dashboard/:path*'],
};
