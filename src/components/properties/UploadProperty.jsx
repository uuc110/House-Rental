import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './upload.css';
// import CloudinaryUploadWidget from '../profile/CloudinaryUploadWidget';
import { AuthContext } from '../../context/AuthContext';

// using tailwind here in the Upload Property page

const UploadProperty = () => {
  const { user } = useContext(AuthContext);
  const [detail, setDetail] = useState('');
  const [images, setImages] = useState([]);
  const avatar = user.avatar;

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);
    await axios.post(`http://localhost:4500/post/${user.id}`, {
      ...inputs, detail, images, avatar
    }).then((res) => {
      navigate('/profile');
    }).catch((err) => {
      console.log(err.response.data);
    })
  };

  const handleImgSubmit = (e) => {
    e.preventDefault();
    let links = e.target[0].value;
    links = links.trim();
    const splitLinks = links.split(',');
    setImages(splitLinks);
  }

  return (
    <div className='parent upload-property'>
      <div className='left-fill'>
        <form className='max-w-md mx-auto' onSubmit={handleSubmit}>
          <div className='grid md:grid-cols-2 md:gap-4'>
            <div className='relative z-0 w-full mb-2 group'>
              <input
                type='text'
                name='title'
                id='title'
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' '
                required
              />
              <label
                htmlFor='title'
                className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Title
              </label>
            </div>
            <div className='relative z-0 w-full mb-2 group'>
              <input
                type='number'
                name='price'
                id='price'
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' '
                required
                min={1000}
              />
              <label
                htmlFor='price'
                className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Price
              </label>
            </div>
          </div>
          <div className='relative z-0 w-full mb-4 group'>
            <input
              type='text'
              name='address'
              id='address'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              required
            />
            <label
              htmlFor='address'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Address
            </label>
          </div>
          <div>
            <label
              htmlFor='details'
              className='block mb-1 text-sm font-medium text-gray-900 dark:text-white'
            >
              Description
            </label>
            <textarea
              id='details'
              rows='4'
              className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-yellow-300 focus:ring-yellow-500 focus:border-blue-500 dark:bg-gray-700 dark:border-yellow-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              onChange={(e) => {
                setDetail(e.target.value);
              }}
            ></textarea>
          </div>
          <div className='grid md:grid-cols-3 md:gap-2'>
            <div className='relative z-0 w-full mb-2 group'>
              <input
                type='text'
                name='city'
                id='city'
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' '
                required
              />
              <label
                htmlFor='city'
                className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                City
              </label>
            </div>
            <div className='relative z-0 w-full mb-2 group'>
              <input
                type='number'
                name='bed'
                id='bed'
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' '
                required
                min={0}
                max={10}
              />
              <label
                htmlFor='bed'
                className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Bedrooms
              </label>
            </div>
            <div className='relative z-0 w-full mb-2 group'>
              <input
                type='number'
                name='bath'
                id='bath'
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' '
                required
                min={1}
                max={10}
              />
              <label
                htmlFor='bath'
                className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Bathrooms
              </label>
            </div>
            <div className='relative z-0 w-full mb-2 group'>
              <input
                type='text'
                name='latitude'
                id='latitude'
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' '
                required
              />
              <label
                htmlFor='latitude'
                className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Latitude
              </label>
            </div>
            <div className='relative z-0 w-full mb-2 group'>
              <input
                type='text'
                name='longitude'
                id='longitude'
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' '
                required
              />
              <label
                htmlFor='longitude'
                className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Longitude
              </label>
            </div>
          </div>
          <div className='relative z-0 w-full mb-2 group'>
            <label
              htmlFor='type'
              className='block mb-1 text-sm font-medium text-gray-900 dark:text-white'
            >
              Type
            </label>
            <select
              name='type'
              id='type'
              className='border border-yellow-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-yellow-700 dark:border-yellow-600 bg-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500'
              required
            >
              <option>Buy</option>
              <option>Rent</option>
            </select>

            <label
              htmlFor='property'
              className='block mb-1 text-sm font-medium text-gray-900 dark:text-white'
            >
              Property
            </label>
            <select
              name='property'
              id='property'
              className='border border-yellow-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-yellow-700 dark:border-yellow-600 bg-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500'
              required
            >
              <option>Apartment</option>
              <option>House</option>
              <option>Villa</option>
            </select>
          </div>
          <button
            type='submit'
            id='button'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mt-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Submit
          </button>
        </form>
      </div>

      <div className='right-fill'>
        <div className='right-top'>
          {images.map((img, key) => {
            // console.log(img);
            return <img src={img} alt="apartment images" key={key} />
          })}
        </div>

        <form className="max-w-sm mx-auto" onSubmit={handleImgSubmit}>
          <label
            htmlFor='images'
            className='block mb-1 text-sm font-medium text-gray-900 dark:text-white'>
            Image Links:
          </label>
          <textarea
            id='images'
            rows='4'
            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-yellow-300 focus:ring-yellow-500 focus:border-blue-500 dark:bg-gray-700 dark:border-yellow-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          ></textarea>
          <span className='text-sm img-span'>Use commas if adding multiple links</span>
          <button
            type='submit'
            id='button'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mt-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Submit
          </button>
        </form>

        {/* <CloudinaryUploadWidget uwConfig={{
          cloudName: "adarshkds",
          uploadPreset: "estate",
          folder: "posts",
          multiple: true,
        }}/> */}
      </div>
    </div>
  );
};

export default UploadProperty;
