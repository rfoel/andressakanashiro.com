import { useEffect } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

export const path = '/authenticate'

const Element = () => {
  const searchParams = useSearchParams()
  const location = useLocation()
  console.log({ searchParams })
  console.log({ location })

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
