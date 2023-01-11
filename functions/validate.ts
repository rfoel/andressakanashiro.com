import type { KVNamespace, PagesFunction } from '@cloudflare/workers-types'

interface Env {
  KV: KVNamespace
}

export const onRequestPost: PagesFunction<Env> = async ({ env, request }) => {
  const cookies = request.headers.get('cookie')
  const token = cookies
    ?.split(';')
    ?.find((cookie) => cookie.includes('__token'))
    ?.split('=')?.[1]

  if (typeof token === 'string' && token.length) {
    const value = await env.KV.get(token)
    if (value) {
      return new Response(JSON.stringify({ authenticated: true }), {
        headers: { 'Content-Type': 'application/json' },
      })
    }
  }

  return new Response(JSON.stringify({ authenticated: false }), {
    status: 403,
    headers: { 'Content-Type': 'application/json' },
  })
}
