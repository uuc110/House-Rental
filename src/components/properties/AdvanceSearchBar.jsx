import React, { useState } from 'react'
import './propertysearch.css'
import { useNavigate, useSearchParams } from 'react-router-dom';

const AdvanceSearchBar = () => {
    
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();     

    function handleSubmit(e) {
        e.preventDefault();
        const params = {};
        const formData = new FormData(e.target);
        for (let [key, value] of formData.entries()) {
            params[key] = value;
        }

        params.min = e.target[3].value;
        params.max = e.target[4].value;
        params.bed = e.target[5].value;
        console.log(params);
        setSearchParams(params);

        const queryString = new URLSearchParams(params).toString();
        navigate(`/properties?${queryString}`);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-top">
                    <label htmlFor="location">Location</label>
                    <input type="search" id='location' name='city' placeholder='City Location' />
                </div>
                <div className="form-bottom">
                    <div className="form-bottom-label-input">
                        <div className="label-input"><label htmlFor="type">Type</label>
                            <select className='form-bottom-inputs' name="type" id="property">
                                <option value="any">Any</option>
                                <option value="Buy">Buy</option>
                                <option value="Rent">Rent</option>
                            </select></div>
                        <div className="label-input">
                            <label htmlFor="property">Property</label>
                            <select className='form-bottom-inputs' name="property" id="property">
                                <option value="any">Any</option>
                                <option value="Apartment">Apartment</option>
                                <option value="House">House</option>
                                <option value="Villa">Villa</option>
                            </select>
                        </div>
                        <div className="label-input">
                            <label htmlFor="min">Min Price</label>
                            <input className='form-bottom-inputs' id='min' type="number" min="1000" max="10000000000" placeholder='Min Price.' />
                        </div>
                        <div className="label-input">
                            <label htmlFor="max">Max Price</label>
                            <input className='form-bottom-inputs' id='max' type="number" min="1000" max="10000000000" placeholder='Max Price.' />
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
    )
}

export default AdvanceSearchBar