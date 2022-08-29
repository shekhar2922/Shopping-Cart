import React from 'react'
import Home from './Home'
import { Provider } from 'react-redux'
import store from "./CartRedux/store"

function CartApp() {
  return (
    <Provider store = {store}>
      <Home />
    </Provider>
  )
}

export default CartApp
