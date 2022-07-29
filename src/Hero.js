import React from 'react'
import { useGlobalContext } from './context'
import phoneImg from './images/phone.svg'

const Hero = () => {
  const {closeSubmenu} = useGlobalContext()

  return (
    <section className='hero'>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Payment infrastructure for the internet</h1>
          <p>Millions of companies of all sizes from startups to forture 500s use stripe's software amd APIs to accept payments,send payouts and manage their business online</p>
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
