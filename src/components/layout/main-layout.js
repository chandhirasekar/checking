import React from 'react'
import FooterPage from '../footer/footer-page'
import HeaderPage from '../header/header'

const MainLayout = ({children}) => {
  return (
    <>
    <HeaderPage/>
    {children}
    <FooterPage/>
    </>
  )
}

export default MainLayout