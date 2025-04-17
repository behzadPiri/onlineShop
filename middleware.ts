import type {NextRequest} from 'next/server'
import {NextResponse} from 'next/server'


export const middleware=(request: NextRequest)=> {
    const token = request.cookies.get("token")?.value
    if (token) {
        return NextResponse.next()
    }
    return NextResponse.redirect(new URL('/login', request.url))
}


export const config = {
    matcher: '/dashboard/:path*',
}
