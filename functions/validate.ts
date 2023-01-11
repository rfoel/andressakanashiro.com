import type { KVNamespace, PagesFunction } from '@cloudflare/workers-types'

interface Env {
  KV: KVNamespace
}

export const onRequestPost: PagesFunction<Env> = async ({ env, request }) => {
  const formData = await request.formData()
  const token = formData.get('token')

  if (typeof token === 'string') {
    const value = await env.KV.get(token)
    if (value) {
      return new Response(JSON.stringify({ authenticated: true }), {
        headers: { 'Content-Type': 'application/json' },
      })
    }
  }

  return new Response(JSON.stringify({ authenticated: true }), {
    status: 403,
    headers: { 'Content-Type': 'application/json' },
  })
}
