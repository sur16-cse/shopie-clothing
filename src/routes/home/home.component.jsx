import React from 'react'
import Directory from '../../components/directory/directory.component'
import {Outlet} from 'react-router-dom'
const Home = () => {
  return (
    <>
    <Directory/>
    <Outlet/>
    </>
  )
}

export default Home
