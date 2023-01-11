import type { KVNamespace, PagesFunction } from '@cloudflare/workers-types'
interface Env {
  KV: KVNamespace
}

export const onRequestPost: PagesFunction<Env> = async ({ env, request }) => {
  const formData = await request.formData()
  const password = formData.get('password')
  const location = formData.get('location')

  if (typeof password === 'string' && password) {
    const value = await env.KV.get(password)
    if (value) {
      const token = crypto.randomUUID()
      await env.KV.put(token, 'token')
      return new Response(
        JSON.stringify({
          authenticated: true,
          cookies: request.headers.get('cookie'),
        }),
        {
          headers: {
            'Content-Type': 'application/json',
            'Set-Cookie': `__token=${token}; secure; HttpOnly; SameSite=Strict`,
          },
        },
      )
    }
  }

  return new Response(null, { status: 302, headers: { Location: location } })
}
