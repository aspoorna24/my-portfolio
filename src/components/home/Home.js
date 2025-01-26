import React from 'react'
import Profile from './Profile'
import Footer from './Footer'
import "./home.css"
function Home() {
  return (
    <div className='home-container'>
         <Profile />
         <Footer />
    </div>
  )
}

export default Home