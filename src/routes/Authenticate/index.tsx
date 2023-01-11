import { LoaderFunction } from 'react-router-dom'

export const path = '/authenticate'

export const loader: LoaderFunction = ({ request }) => {
  const url = new URL(request.url)
  const password = window.prompt('What is the password?')
  const formData = new FormData()
  formData.append('password', password || '')
  formData.append('location', url.searchParams.get('location') || '')
  fetch('/authenticate', {
    credentials: 'include',
    method: 'post',
    body: formData,
  })
}

// function Element() {
//   useEffect(() => {}, [])

//   return null
// }
