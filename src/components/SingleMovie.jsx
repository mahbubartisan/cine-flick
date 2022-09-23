import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { API_URL } from '../context';
import axios from 'axios';

const SingleMovie = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState('');

  const getData = async (url) => {
    setIsLoading(true);
    try {
      const res = await axios.get(url);
      const data = res.data;

      if (data.Response === 'True') {
        setIsLoading(false);
        setMovie(data);
      } else {
      }
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      getData(`${API_URL}&i=${id}`);
    }, 800);
    return () => {
      clearTimeout(timeOut);
    };
  }, [id]);

  if (isLoading) {
    return (
      <div className='flex justify-center items-center mt-3'>
        <h1 className='font-inter font-medium'>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <div className='mx-auto mt-32 h-80 flex flex-col rounded-lg border shadow-md md:flex-row md:max-w-xl bg-gray-100 font-inter'>
        <img
          className='object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
          src={movie.Poster}
          alt=''
        />

        <div className='flex flex-col space-x-7 space-y-2 mt-9'>
          <h5 className='ml-7 text-2xl font-bold tracking-tight text-gray-900'>
            {movie.Title}
          </h5>
          <p className=' text-gray-700 '>{movie.Released}</p>
          <p className=' text-gray-700 '>{movie.Genre}</p>
          <p className=' text-gray-700 '> {movie.imdbRating} / 10 </p>
          <p className='text-gray-700 '> {movie.Country} </p>
          <NavLink
            to='/'
            className='rounded-md bg-indigo-50 text-center px-6 py-2 w-fit shadow-lg ring-1 ring-blue-200 hover:bg-indigo-300'>
            Go back
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SingleMovie;
