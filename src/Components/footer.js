import React from 'react'
import  logo1  from '../Assets/icon/logo-sochi.png'
import movil from '../Assets/icon/mobli-icon.png'
import twitter from '../Assets/icon/twitter.png'
import facebook from '../Assets/icon/facebook.png'
import youTube from '../Assets/icon/youtube.png'

export const Footer = () => {
  return (
    <>
        <div className='content-footer'>
            <div className='aviso'>
                <p>Aviso de privacidad / Contacto</p>
            </div>
            <div className='logo'>
                <img src={logo1} />
            </div>
            <div className='redes-sociales'>
                <img src={movil} />
                <img src={twitter} />
                <img src={facebook} />
                <img src={youTube} />

            </div>
        </div>
    </>
  )
}
