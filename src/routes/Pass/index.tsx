import { LoaderFunction } from 'react-router-dom'

export const path = '/pass'

export const loader: LoaderFunction = ({ request }) => {
  const url = new URL(request.url)

  const password = window.prompt('What is the password?')
  const formData = new FormData()
  formData.append('password', password || '')
  formData.append('location', url.searchParams.get('location') || '/')

  return fetch('/authenticate', {
    credentials: 'include',
    method: 'post',
    body: formData,
  })
}

// const Element = () => {
//   const [searchParams] = useSearchParams()

//   const password = window.prompt('What is the password?')
//   const formData = new FormData()
//   formData.append('password', password || '')
//   formData.append('location', searchParams.get('location') || '/')
//   fetch('/authenticate', {
//     credentials: 'include',
//     method: 'post',
//     body: formData,
//   })

//   return null
// }

// export const element = <Element />
