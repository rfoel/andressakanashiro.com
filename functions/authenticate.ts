export const onRequest = async (context) => {
  // const value = await context.env.AK_PASS.get('senha')
  return new Response('hello')
}
