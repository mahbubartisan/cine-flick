import React from 'react';
import { useGlobalContext } from '../context';
import { NavLink } from 'react-router-dom';

const Movies = () => {
  const { movie, isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <div className='flex justify-center items-center mt-3'>
        <h1 className='font-inter font-medium'>Loading...</h1>
      </div>
    );
  }

  return (
    <div className='container mx-auto mt-10 font-inter font-medium'>
      <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-7'>
        {movie.map((movie) => {
          const { Poster, Title, Year, imdbID } = movie;
          const movieTitle = Title.substring(0, 20);
          return (
            <NavLink to={`movie/${imdbID}`} key={imdbID}>
              <div className='flex flex-col justify-center items-center shadow-md hover:shadow-lg h-64 rounded-md bg-white'>
                <h1
                  className='text-center text-base py-2 hover:text-blue-600'
                  title={Title}>
                  {movieTitle.length >= 20 ? `${movieTitle}...` : movieTitle}
                </h1>
                <img
                  src={Poster}
                  alt={imdbID}
                  className='w-28 h-36 p-3 rounded-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125  duration-300'
                />
                {/* <h1 className='text-center text-base hover:text-blue-600'>
                  Release Year: {Year}
                </h1> */}
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
