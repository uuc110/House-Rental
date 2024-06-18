import React, { useState } from 'react'
import '../properties/propertysearch.css'
import './imageslider.css'

const ImageSlider = ({ images }) => {
    // console.log(images);

    const [imgIndex, setImgIndex] = useState(null);

    const changeImg = function (dir) {
        if (dir === 'prev') {
            if (imgIndex === 0) {
                setImgIndex(images.length - 1);
                // console.log(imgIndex);
            } else {
                setImgIndex(imgIndex - 1);
                // console.log(imgIndex);
            }
        } else {
            if (imgIndex === images.length - 1) {
                setImgIndex(0);
            } else {
                setImgIndex(imgIndex + 1);
                // console.log(imgIndex);
            }
        }
    }

    if (imgIndex !== null) {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                setImgIndex(null);
            }
        })
    }

    if(!images || images.length === 0){
        return <div></div>
    }

    return (
        <div className='img-slider'>
            {imgIndex !== null &&
                <div className="slider">
                    <div className="arrow" >
                        <img src="/arrow.png" alt="" onClick={() => { changeImg('prev') }} />
                    </div>

                    <div className="full-img">
                        <img src={images[imgIndex]} alt="" />
                        {/* <img src="https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /> */}
                    </div>

                    <div className="arrow" >
                        <img src="/arrow.png" alt="" className='right-arrow' onClick={() => { changeImg('next') }} />
                    </div>

                    <div className="close-slider" onClick={() => { setImgIndex(null) }}>
                        X
                    </div>
                </div>
            }
            <div className="big-img">
                <img src={images[0]} alt="" onClick={() => { setImgIndex(0); console.log(imgIndex); }} />
            </div>
            <div className="small-imgs">
                {images.slice(1, images.length-1).map((img, index) => {
                    return <img className='small-imgs-img'
                        src={img}
                        alt=""
                        key={index}
                        onClick={() => { setImgIndex(index + 1); console.log(imgIndex); }}
                    />
                })}
            </div>
        </div>
    )
}

export default ImageSlider