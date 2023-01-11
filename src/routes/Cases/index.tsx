import { json, LoaderFunction, Outlet, redirect } from 'react-router-dom'

import Footer from '../../components/Footer'
import Header from '../../components/Header'

import * as GeekieStudyPlan from './GeekieStudyPlan'
import * as LoftNeighborhoodPage from './LoftNeighborhoodPage'
import * as PicPayEcommerceCheckout from './PicPayEcommerceCheckout'
import * as PicPayLoggedPayment from './PicPayLoggedPayment'

export const path = '/'

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)
  const { authenticated } = await fetch('/validate').then((response) =>
    response.json(),
  )

  if (authenticated) return json({})

  return redirect(`/pass?location=${url.pathname}`)
}

function Element() {
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
