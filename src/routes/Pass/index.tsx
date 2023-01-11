import { useSearchParams } from 'react-router-dom'

export const path = '/pass'

const Element = () => {
  const [searchParams] = useSearchParams()

  const password = window.prompt('What is the password?')
  const formData = new FormData()
  formData.append('password', password || '')
  formData.append('location', searchParams.get('location') || '/')
  fetch('/authenticate', {
    credentials: 'include',
    method: 'post',
    body: formData,
  })

  return null
}

export const element = <Element />
