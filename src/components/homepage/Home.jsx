import React from 'react'
import './home.css'
import Searchbar from './Searchbar'

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="left-home">
          <div className="left-text"><h1>Urban Haven Awaits: Urban Homes.</h1>
            <p>Urban Homes is your gateway to luxurious living in India. Discover exclusive upcoming and under-construction real estate projects tailored to your lifestyle. From premium apartments to lavish villas, explore the epitome of elegance and sophistication. Your dream home awaits at Urban Homes—where luxury meets convenience.</p></div>
            <Searchbar/>
          <div className="left-features">
            <span className='bold'>16+</span>
            <span className='bold'>200</span>
            <span className='bold'>2000+</span>
            <span>Years of Experience</span>
            <span>Awards Gained</span>
            <span>Property Ready</span>
          </div>
        </div>
        <div className="right-home">
          <img src="./bg.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home