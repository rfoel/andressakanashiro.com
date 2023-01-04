import { Outlet } from 'react-router-dom'

import * as LoftNeighborhoodPage from './LoftNeighborhoodPage'
import * as GeekieStudyPlan from './GeekieStudyPlan'
import * as PicPayLoggedPayment from './PicPayLoggedPayment'
import * as PicPayEcommerceCheckout from './PicPayEcommerceCheckout'

import Footer from '../../components/Footer'
import Header from '../../components/Header'

export const path = '/'

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
