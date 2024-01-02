import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { baseURL } from '@/api/util/instance'

export async function POST(req: NextRequest) {
  try {
    const requestHeaders = new Headers(req.headers)
    console.log('cookie', cookies().getAll())

    if (cookies().has('auth-token')) {
      requestHeaders.set('Authorization', `Bearer ${cookies().get('auth-token')?.value}`)
    }
    console.log('Authorization', requestHeaders)
    // console.log('리퀘헤더', requestHeaders)
    // console.log('---------------------------------')
    // console.log('req.header!!', req.headers)
    // console.log('쿠키', cookies().getAll())

    console.log('route post')

    const itemId = await req.json()
    console.log(itemId.itemId, '!!!')
    // const body = await req.json()
    // console.log(requestHeaders)
    const res = await fetch(`${baseURL}/items/yeswish?itemId=${itemId.itemId}`, {
      method: 'POST',
      headers: requestHeaders,
      // headers: commonHeader,
      body: JSON.stringify(itemId),
    })
    const resoense = await res.json()
    console.log(resoense, 'ㅎㅎㅎ')
    return NextResponse.json(resoense)

    // return res
  } catch (error) {
    console.log('ㅔㅇㅔ러', error)
    return NextResponse.json({ msg: 'error' })
  }
}

export const GET = async () => {
  return NextResponse.json({ message: 'Hello, Next.js Version 13!' }, { status: 200 })
}