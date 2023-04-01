import { NextResponse } from 'next/server'
import * as jose from 'jose'
import { REFRESH_TOKEN_SECRET } from './env'

export default async function middleware(request: any) {
  const authToken = request.cookies.get('refreshToken')

  const { pathname } = request.nextUrl
  
  if (pathname.includes('/auth/login')) {
    try {
      const { payload: DATA } = await jose.jwtVerify(
        authToken.value,
        new TextEncoder().encode(REFRESH_TOKEN_SECRET)
      )

      if (DATA) return NextResponse.redirect(new URL('/dashboard', request.url))

      return NextResponse.next()
    } catch (error) {
      console.log(error)
    }
  }

  if (pathname.includes('/dashboard')) {
    if (!authToken) return NextResponse.redirect(new URL('/auth/login', request.url))

    try {
      const { payload: DATA } = await jose.jwtVerify(
        authToken.value,
        new TextEncoder().encode(REFRESH_TOKEN_SECRET)
      )

      if (!DATA) return NextResponse.redirect(new URL('/auth/login', request.url))

      return NextResponse.next()
    } catch (error) {
      console.log(error)
    }
  }
  return NextResponse.next()
}
