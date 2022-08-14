import React from 'react'
import { useGlobalContext } from './context'
import phoneImg from './images/phone.svg'

const Hero = () => {
  const { closeSubmenu } = useGlobalContext()

  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Payment infrastructure for the internet</h1>
          <p>Manage your payments completly online with 100% security</p>
          <button className='btn'>Start now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className='phone-img'></img>
        </article>
      </div>
    </section>
  )
}

export default Hero
