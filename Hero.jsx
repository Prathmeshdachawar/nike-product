import React from 'react'

const HeroSection = () => {
  return (
    <main className='hero container'>
        <div className='hero-content'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES</p>
        
         <div className='hero-button'>
            <button className='primary-btn'>Shop Now</button>
            <button className='secondary-btn'>Category</button>
         </div>
         <div className='shopping'>
            <p>Also Available on </p>
            <div className='brand-icons'>
                <img src="public\flipkart.png" alt="" />
                <img src="public\amazon.png" alt="" />
            </div>
         </div>
         </div>

          <div className='hero-image'>
            <img src="/public/shoe_image.png" alt="" />
        </div>
    </main>
  )
}

export default HeroSection