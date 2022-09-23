import React, { useContext } from 'react';
import  Search  from '../components/Search';
import Movies from '../components/Movies';


const Home = () => {
 
  return (
    <>
      <Search />
      <Movies />
    </>
   
  );
};

export default Home;
