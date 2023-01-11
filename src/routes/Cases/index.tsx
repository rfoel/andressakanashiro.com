import Cookies from 'js-cookie'
import { useEffect } from 'react'
import {
  ActionFunction,
  LoaderFunction,
  Outlet,
  redirect,
  useFetcher,
  useLoaderData,
  useLocation,
} from 'react-router-dom'

import Footer from '../../components/Footer'
import Header from '../../components/Header'

import * as GeekieStudyPlan from './GeekieStudyPlan'
import * as LoftNeighborhoodPage from './LoftNeighborhoodPage'
import * as PicPayEcommerceCheckout from './PicPayEcommerceCheckout'
import * as PicPayLoggedPayment from './PicPayLoggedPayment'

export const path = '/'

export const loader: LoaderFunction = async () => {
  const token = Cookies.get('__token') || ''
  const body = new FormData()
  body.append('token', token)
  return fetch('/validate', { method: 'post' })
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const password = formData.get('password')

  if (typeof password !== 'string') {
    return redirect('/')
  }

  formData.append('location', request.url)
  return fetch('/authenticate', { method: 'post', body: formData })
}

function Element() {
  const loaderData = useLoaderData() as { authenticated?: boolean }
  const fetcher = useFetcher()

  useEffect(() => {
    if (!loaderData?.authenticated) {
      const password = window.prompt('What is the password?')
      const formData = new FormData()
      formData.append('password', password || '')
      fetcher.submit(formData, { method: 'post' })
    }
  }, [fetcher, loaderData?.authenticated])

  if (!loaderData?.authenticated) return null

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export const children = [
  LoftNeighborhoodPage,
  GeekieStudyPlan,
  PicPayLoggedPayment,
  PicPayEcommerceCheckout,
]

export const element = <Element />
