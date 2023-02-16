import { JWT } from 'next-auth/jwt'
declare module 'next-auth/jwt' {
    export interface JWT {
        accessToken?: string
        refreshToekn?: string
        username?: string
        accessTokenExpires?: number
        error?: string,
    }
}

