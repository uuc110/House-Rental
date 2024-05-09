import React from 'react'
import './home.css'

const Home = () => {

  const btnClicked = (e) => {
    const buyBtn = document.querySelector('.buy-btn')
    const rentBtn = document.querySelector('.rent-btn')

    if (e.target === buyBtn) {
      buyBtn.style.backgroundColor = 'black'
      buyBtn.style.color = 'white'
      rentBtn.style.backgroundColor = 'white'
      rentBtn.style.color = 'black'
    } else {
      rentBtn.style.backgroundColor = 'black'
      rentBtn.style.color = 'white'
      buyBtn.style.backgroundColor = 'white'
      buyBtn.style.color = 'black'
    }
  }

  return (
    <div>
      <div className="home">
        <div className="left-home">
          <div className="left-text"><h1>Urban Haven Awaits: Urban Homes.</h1>
            <p>Urban Homes is your gateway to luxurious living in India. Discover exclusive upcoming and under-construction real estate projects tailored to your lifestyle. From premium apartments to lavish villas, explore the epitome of elegance and sophistication. Your dream home awaits at Urban Homes—where luxury meets convenience.</p></div>
          <div className="left-search">
            <div className="buy-rent-btn">
              <button className='buy-btn' onClick={btnClicked}>Buy</button>
              <button className='rent-btn' onClick={btnClicked}>Rent</button>
            </div>
            <form className="search-bar">
              <input type="search" placeholder='City Location' />
              <input type="number" min="1000" max="1000000000" placeholder='Min Price.' />
              <input type="number" min="1000" max="1000000000" placeholder='Max Price.' />
              <button id='home-btn'><img src="/search.png" alt="" /></button>
            </form>
          </div>
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