import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // The 'firebase-auth-token' cookie is not a reliable way to check auth status with Firebase v9.
  // Auth state is managed on the client. We will use a client-side guard in AuthContext.
  // This middleware is now simplified or could be removed if all auth logic is client-side.
  
  const { pathname } = request.nextUrl;

  // If a user tries to go to a /admin page other than login, the client-side
  // AuthContext will handle redirecting them if they aren't logged in.
  // This middleware primarily exists to prevent flicker.

  // Let the client-side handle the logic.
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/login', '/admin/dashboard/:path*'],
};
