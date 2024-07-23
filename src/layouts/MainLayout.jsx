import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import Navbar from '../components/Navbar'
import CSSNAV from "../components/CSSNAV"
import Footer from '../components/Footer'
const MainLayout = () => {
  return (
    <>
        <CSSNAV/>
        <Footer/>
        {/* <Navbar/> */}
        {/* <h1>Hello</h1> */}
        <Outlet/>
        <ToastContainer/>
    </>
  )
}

export default MainLayout
