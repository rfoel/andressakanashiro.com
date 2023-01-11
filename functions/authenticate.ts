import type { KVNamespace, PagesFunction } from '@cloudflare/workers-types'
interface Env {
  KV: KVNamespace
}

export const onRequestPost: PagesFunction<Env> = async ({ env, request }) => {
  const formData = await request.formData()
  const password = formData.get('password')

  if (typeof password === 'string' && password) {
    const value = await env.KV.get(password)
    if (value) {
      const token = crypto.randomUUID()
      await env.KV.put(token, 'token')
      return new Response(JSON.stringify({ authenticated: true }), {
        headers: {
          'Content-Type': 'application/json',
          'Set-Cookie': `__token=${token}; secure; HttpOnly; SameSite=Strict`,
        },
      })
    }
  }

  return new Response(JSON.stringify({ authenticated: false }), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
