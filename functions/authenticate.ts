import type { KVNamespace, PagesFunction } from '@cloudflare/workers-types'
interface Env {
  KV: KVNamespace
}

export const onRequestPost: PagesFunction<Env> = async ({ env, request }) => {
  const formData = await request.formData()
  const key = formData.get('key')
  const location = formData.get('location')

  if (typeof key === 'string') {
    const value = await env.KV.get(key)
    if (value && location)
      return new Response(null, { status: 301, headers: { location } })
  }

  return new Response(null, { status: 400 })
}
