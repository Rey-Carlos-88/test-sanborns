import React from 'react'
import  logo1  from '../Assets/icon/logo-sochi.png' 
import  logo2  from '../Assets/icon/logo-claro-sports.png' 

export const Header = () => {
  return (
    <>
      <div className='content-header'>
        <div className='imagen-1'>
          <img src={logo1} />
        </div>
        <div className='imagen-2'>
          <img src={logo2} />
        </div>
      </div>
    </>
    
  )
}

