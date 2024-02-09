import React from 'react'
import Nav from './nav'
import Route from './rout'
import {BrowserRouter} from 'react-router-dom';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Route />
      </BrowserRouter>
    </>
  )
}

export default App
