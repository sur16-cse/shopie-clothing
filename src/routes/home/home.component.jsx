import React from 'react'
import {BallTriangle } from  'react-loader-spinner'
import {useState,useEffect} from 'react';
import Directory from '../../components/directory/directory.component'
import {Outlet} from 'react-router-dom'
const Home = () => {
  const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false)
        },5000)
    },[])
  return (
    <>
    {
      loading?
      <div  className="loading-spin" >
      <BallTriangle color="darkmagenta" height={150} width={150} />
      </div>
      :
    <>
    <Directory/>
    <Outlet/>
    </>
    }
    </>
  )
}

export default Home
