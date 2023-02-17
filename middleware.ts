import { getToken } from "next-auth/jwt"
import { NextMiddleware, NextRequest, NextResponse } from "next/server"

const middleware: NextMiddleware = async (req: NextRequest) => {
    const token = await getToken({ req, secret: process.env.JWT_SECRET })
    const { nextUrl: { pathname } } = req

    // allow request to pass if any
    // 1) token in presented
    // 2) its a request for next-auth session and provider fetching
    if (token || pathname.includes('/api/auth')) {
        console.log('heerere')
        return NextResponse.next()
    }

    // redirect to login page if all
    // 1) token is not presented
    // 2) AND request non-login page
    if (!token && pathname !== '/login') {
        const url = req.nextUrl.clone()
        url.pathname = '/login'

        return NextResponse.redirect(url)
    }
}

export const config = {
    matcher: "/",
};

export default middleware