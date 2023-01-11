import Cookies from 'js-cookie'
import { useEffect } from 'react'
import {
  ActionFunction,
  json,
  LoaderFunction,
  Outlet,
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
  const token = Cookies.get('__token')

  if (typeof token !== 'string') {
    return json({ authenticated: false })
  }

  const body = new FormData()
  body.append('token', token)

  return fetch('/validate', { method: 'post' })
}

function Element() {
  const loaderData = useLoaderData() as { authenticated?: boolean }
  const fetcher = useFetcher()
  const location = useLocation()

  useEffect(() => {
    if (!loaderData?.authenticated) {
      const password = window.prompt('What is the password?')
      const formData = new FormData()
      formData.append('password', password || '')
      formData.append('location', location.pathname)
      fetcher.submit(formData, { action: '/authenticate', method: 'post' })
    }
  }, [fetcher, loaderData?.authenticated, location.pathname])

  if (!loaderData?.authenticated || fetcher.state !== 'idle') return null

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
