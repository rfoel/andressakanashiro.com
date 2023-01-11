import { LoaderFunction, redirect } from 'react-router-dom'

export const path = '/pass'

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)

  const password = window.prompt('What is the password?')
  const formData = new FormData()
  formData.append('password', password || '')
  formData.append('location', url.searchParams.get('location') || '/')

  const { authenticated } = await fetch('/authenticate', {
    method: 'post',
    body: formData,
  }).then((response) => response.json())

  if (authenticated) {
    return redirect(url.searchParams.get('location') || '/')
  }

  if (password) {
    return redirect(`/pass?${url.searchParams.toString()}`)
  }

  return redirect('/')
}
