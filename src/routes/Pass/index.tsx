import { useEffect } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

export const path = '/pass'

const Element = () => {
  const location = useLocation()
  const searchParams = useSearchParams()
  console.log({ location, searchParams })
  useEffect(() => {
    const password = window.prompt('What is the password?')
    const formData = new FormData()
    formData.append('password', password || '')
    formData.append('location', '/')
    fetch('/authenticate', {
      credentials: 'include',
      method: 'post',
      body: formData,
    })
  }, [])

  return null
}

export const element = <Element />
