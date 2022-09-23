import React from 'react';
import { useGlobalContext } from '../context';

const Search = () => {
  const { query, setQuery, isError } = useGlobalContext();
  return (
    <div className='flex justify-center items-center mt-10 font-inter'>
      <form action='#' onSubmit={(e) => e.preventDefault()}>
        <h1 className='text-xl text-center py-3'>
          Search Your Favourite Movie
        </h1>
        <input
          type='search'
          className='rounded-full py-1 border border-blue-400 px-3 w-64 outline-none focus:ring-1 focus:ring-indigo-400'
          placeholder='Enter movie name'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <h1 className='text-red-600 text-center mt-3'>
          {isError.show && isError.msg}
        </h1>
      </form>
    </div>
  );
};

export default Search;
