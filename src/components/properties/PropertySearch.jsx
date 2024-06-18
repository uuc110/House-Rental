import React, { useEffect, useState } from 'react'
import './propertysearch.css'
import PropertyList from '../profile/PropertyList'
import Map from '../map/Map'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'
import AdvanceSearchBar from './AdvanceSearchBar'

const PropertySearch = () => {
    const [posts, setPosts] = useState([]);

    const [searchParams] = useSearchParams();

    const params = {
        city: searchParams.get('city'),
        min: searchParams.get('min'),
        max: searchParams.get('max'),
        type: searchParams.get('type'),
        property: searchParams.get('property'),
        bed: searchParams.get('bed')
    }
    // console.log(params);

    async function getPosts() {
        try {
            const allPosts = await axios.get("http://localhost:4500/post/properties/all", { params });
            setPosts(allPosts.data.allPosts);
            // console.log(allPosts.data.allPosts);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts();
    }, [searchParams])

    return (
        <div>
            <div className="property-search">
                <div className="search-side">
                    <div className="search-bar">
                        <h2>Search results for <span className='city-name'>{params && params.city ? params.city : 'you'}</span></h2>
                        <AdvanceSearchBar />
                    </div>
                    <div className="property-list">
                        {posts.map((data) => {
                            return <PropertyList data={data} key={data.id} />
                        })}
                    </div>
                </div>
                <div className="map-side">
                    <div className="map">
                        <Map listData={posts} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertySearch