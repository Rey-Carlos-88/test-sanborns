import React, { useEffect, useState } from 'react';

import background from '../Assets/Img/background-all.jpg'
import team from '../Assets/Img/team-latam.png'
import travel from '../Assets/Img/travel-meets-fashion.png'
import velocidad from '../Assets/Img/velocidad-riesgo.png'
import experiencia from '../Assets/Img/experiencia.png'


export const Body = () => {

    const [countDown, setCountDown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    const onCalculateTime = () => {
        const endDate = new Date('2023-12-31T00:00:00.000Z');
        //console.log('endate => ',endDate)
        const now = new Date();
        //console.log('now now => ',now)
        const diff = endDate.getTime() - now.getTime()
        //console.log('difference => ',diff)

        if (diff > 0 ) {
            const intervalId = setInterval(() => {
                const now = new Date();
                const diff = endDate.getTime() - now.getTime();

                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);

                setCountDown({days, hours, minutes, seconds})

            }, 1000)
            return () => clearInterval(intervalId)

        } else {
            setCountDown({days: 0, hours: 0, minutes: 0, seconds:0})
        }
    }


    useEffect(() => {
        onCalculateTime();
    },[])

  return (
    <>
        <div className='content-body'>
            <h1>FALTAN</h1>
            <div className='content-contador'>
                <div className='time'>
                    {countDown.days}
                    <p>DIAS</p>
                </div>
                <div className='time'>
                    {countDown.hours}
                    <p>HRS</p>
                </div>

                <div className='time'>
                    {countDown.minutes}
                    <p>MIN.</p>
                </div>

                <div className='time'>
                    {countDown.seconds}
                    <p>SEG</p>
                </div>
            </div>

            <div className='view-video'>
                <img src={background} />
            </div>

            <div className='content-video'>
                <div className='text-video'>
                    <p>CLARO SPORTS EN SOCHI 2014</p>
                </div>
                <div className='images-video'>
                    <div className='igamen-and-text'>
                        <img src={team} />
                        <p>TEAM LATAM</p>
                    </div>
                    
                    <div className='igamen-and-text'>
                        <img src={travel} />
                        <p>TRAVEL MEETS FASHION</p>
                    </div>

                    <div className='igamen-and-text'>
                        <img src={velocidad} />
                        <p>VELOCIDAD Y RIESGO</p>
                    </div>

                    <div className='igamen-and-text'>
                        <img src={experiencia} />
                        <p>EXPERIENCIA MULTIMEDIA</p>
                    </div>

                </div>

            </div>
        </div>
    </>
  )
}

