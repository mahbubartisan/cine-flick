import axios from 'axios';
import React, { useContext, createContext, useEffect, useState } from 'react';

export const API_URL = `https://www.omdbapi.com/?apikey=3f0b4420`;
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: 'false', msg: '' });
  const [query, setQuery] = useState('titanic');
  const getData = async (url) => {
    setIsLoading(true);
    try {
      const res = await axios.get(url);
      const data = res.data;

      if (data.Response === 'True') {
        setIsLoading(false);
        setIsError({
          show: false,
          msg: '',
        });
        setMovie(data.Search);
      } else {
        setIsError({
          show: true,
          msg: data.Error,
        });
      }
      //console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      getData(`${API_URL}&s=${query}`);
    }, 800);
    return () => {
      clearTimeout(timeOut);
    };
  }, [query]);

  return (
    <AppContext.Provider value={{ isLoading, movie, isError, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
