import type { KVNamespace, PagesFunction } from '@cloudflare/workers-types'

interface Env {
  KV: KVNamespace
}

export const onRequestGet: PagesFunction<Env> = async ({ env, request }) => {
  const url = new URL(request.url)
  const cookies = request.headers.get('cookie')
  const token = cookies
    ?.split(';')
    ?.find((cookie) => cookie.includes('__token'))
    ?.split('=')?.[1]

  if (typeof token === 'string' && token.length) {
    const value = await env.KV.get(token)
    if (value) {
      return new Response(null, {
        headers: {
          'Content-Type': 'application/json',
          Location: url.searchParams.get('location'),
        },
      })
    }
  }

  return new Response(null, {
    status: 301,
    headers: {
      'Content-Type': 'application/json',
      Location: `/authenticate?location=${url.pathname}`,
    },
  })
}
