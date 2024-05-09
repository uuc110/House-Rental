import React from 'react'
import './propertysearch.css'
import Map from '../map/Map'
import ImageSlider from '../imageslider/ImageSlider'

const SingleProperty = () => {

    const images = ['https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/276625/pexels-photo-276625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2']


    return (
        <div>
            <div className="property-search">
                <div className="property-side">
                    <div className="images">
                        <ImageSlider images={images}/>
                    </div>

                    <div className="property-detail">
                        <div className="property-detail-top">
                            <div className="property-top-left">
                                <h2>{`Title`}</h2>
                                <div className="location">
                                    <img src="/pin.png" alt="" />
                                    <span>{`Address`}</span>
                                </div>
                                <div className="price">
                                    <span>${1000}</span>
                                </div>
                            </div>
                            <div className="property-top-right">
                                <img src="/favicon.png" alt="" />
                                <h3>John Doe</h3>
                            </div>
                        </div>
                        <div className="property-detail-bottom">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, et. Totam reprehenderit voluptate perferendis dolorem voluptatum est tempora vero voluptatem nisi distinctio id enim adipisci nulla temporibus, reiciendis accusantium cupiditate, omnis unde ipsam quam. Architecto, praesentium, eum quis adipisci aliquid qui cumque quos maxime necessitatibus voluptatum, optio earum nobis. Cupiditate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sed rem amet ab dolorem beatae eum eos voluptas? Eius est officia sunt, modi similique tempora tenetur totam saepe fuga! Nam est doloribus autem cupiditate accusamus, excepturi a porro impedit recusandae illum! Sint repellendus quisquam cum alias delectus? Odit, in officia.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="map-side">
                    <div className="notes">
                        <label htmlFor="notes">Take Notes...</label>
                        <textarea name="notes" id="notes" cols="40" rows="15"></textarea>
                    </div>
                    <div className="chat-save">
                        <button><img src="/save.png" alt="" /> Save property</button>
                        <button><img src="/chat.png" alt="" /> Send a message</button>
                    </div>
                    <div className="map">
                        {/* <Map /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProperty