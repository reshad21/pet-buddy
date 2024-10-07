import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const AuthRoutes = ["/login", "/register", "/forget-password"];

type Role = keyof typeof roleBaseRoutes;

const roleBaseRoutes = {
    user: [/^\/profile/],
    admin: [/^\/admin/],
}
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    console.log(pathname);
    const user = {
        name: "reshad",
        token: "adf deos",
        role: "user",
    }

    // const user = undefined;
    if (!user) {
        if (AuthRoutes.includes(pathname)) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }

    if (user?.role && roleBaseRoutes[user?.role as Role]) {
        const routes = roleBaseRoutes[user?.role as Role];
        // console.log(routes);
        if (routes.some((route) => pathname.match(route))) {
            return NextResponse.next();
        }
    }

    return NextResponse.redirect(new URL('/', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/profile", "/admin", "/login", "/register"]
}