import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';

const Searchbar = () => {

    const navigate = useNavigate(); 

    let [searchParams, setSearchParams] = useSearchParams();
    const [btn, setBtn] = useState('Buy')

    function handleSubmit(event) {
        event.preventDefault();
        let params = serializeFormQuery(event.target);
        params.type = btn;
        setSearchParams(params);

        const queryString = new URLSearchParams(params).toString();
        navigate(`/properties?${queryString}`);
    }

    const btnClicked = (e) => {
        e.preventDefault();
        if (e.target.className.includes('rent-btn')) {
            setBtn('Rent')
        } else {
            setBtn('Buy')
        }
    }

    return (
        <div className="left-search">
            <div className="buy-rent-btn">
                <button className={`buy-btn ${btn === 'Buy' ? 'btn-active' : ''}`} onClick={btnClicked}>Buy</button>
                <button className={`rent-btn ${btn === 'Rent' ? 'btn-active' : ''}`} onClick={btnClicked}>Rent</button>
            </div>
            <form className="search-bar" onSubmit={handleSubmit}>
                <input name="city" type="search" placeholder='City Location' />
                <input name='min' type="number" min="1000" max="1000000000" placeholder='Min Price.' />
                <input name='max' type="number" min="1000" max="1000000000" placeholder='Max Price.' />
                <button id='home-btn'><img src="/search.png" alt="" /></button>
            </form>
        </div>
    )
}

function serializeFormQuery(form){
    const formData = new FormData(form);
    const params = {};
    for (let [key, value] of formData.entries()) {
        params[key] = value;
    }
    return params;
}

export default Searchbar