import { useEffect } from 'react'
import {
  json,
  LoaderFunction,
  Outlet,
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

export const loader: LoaderFunction = () => {
  return fetch('/validate', { method: 'post' })
}

function Element() {
  const loaderData = useLoaderData() as { authenticated?: boolean }
  const location = useLocation()

  useEffect(() => {
    if (!loaderData?.authenticated) {
      const password = window.prompt('What is the password?')
      const formData = new FormData()
      formData.append('password', password || '')
      formData.append('location', location.pathname)
      fetch('/authenticate', {
        credentials: 'include',
        method: 'post',
        body: formData,
      })
    }
  }, [loaderData?.authenticated, location.pathname])

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
