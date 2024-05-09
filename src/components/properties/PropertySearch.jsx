import React from 'react'
import './propertysearch.css'
import PropertyList from '../profile/PropertyList'
import Map from '../map/Map'
import { listData } from '../../lib/dummyData'

const PropertySearch = () => {
    return (
        <div>
            <div className="property-search">
                <div className="search-side">
                    <div className="search-bar">
                        <h2>Search results for <span className='city-name'>Pune</span></h2>
                        <form>
                            <div className="form-top">
                                <label htmlFor="location">Location</label>
                                <input type="search" id='location' name='location' placeholder='City Location' />
                            </div>
                            <div className="form-bottom">
                                <div className="form-bottom-label-input">
                                    <div className="label-input"><label htmlFor="type">Type</label>
                                        <select className='form-bottom-inputs' name="type" id="property">
                                            <option value="any">Any</option>
                                            <option value="buy">Buy</option>
                                            <option value="rent">Rent</option>
                                        </select></div>
                                    <div className="label-input">
                                        <label htmlFor="property">Property</label>
                                        <select className='form-bottom-inputs' name="property" id="property">
                                            <option value="any">Any</option>
                                            <option value="apartment">Apartment</option>
                                            <option value="house">House</option>
                                            <option value="villa">Villa</option>
                                        </select>
                                    </div>
                                    <div className="label-input">
                                        <label htmlFor="min">Min Price</label>
                                        <input className='form-bottom-inputs' id='min' type="number" min="1000" max="1000000000" placeholder='Min Price.' />
                                    </div>
                                    <div className="label-input">
                                        <label htmlFor="max">Max Price</label>
                                        <input className='form-bottom-inputs' id='max' type="number" min="1000" max="1000000000" placeholder='Max Price.' />
                                    </div>
                                    <div className="label-input">
                                        <label htmlFor="bed">Bedroom</label>
                                        <input className='form-bottom-inputs' id='bed' type="number" min="1" max="6" placeholder='Room' />
                                    </div>
                                </div>
                                <button><img src="./search.png" alt="" /></button>
                            </div>
                        </form>
                    </div>
                    <div className="property-list">
                        {listData.map((data) => {
                            return <PropertyList data={data} key={data.id} />
                        })}
                    </div>
                </div>
                <div className="map-side">
                    <div className="map">
                        <Map listData={listData}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertySearch